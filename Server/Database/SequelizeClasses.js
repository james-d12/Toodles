const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './Server/Database/Todo.sqlite',
    logging: false
});

/**
 * Represents a User in the Todo App.
 * @property {DataTypes.STRING} username - The username of the user.
 * @property {DataTypes.STRING} password - The password of the user.
 * @property {DataTypes.STRING} image - The avatar of the user.
 */
class User extends Model {}
/**
 * Represents a Task in the Todo App.
 * @property {DataTypes.STRING} name - The name of the task.
 * @property {DataTypes.TEXT} description - The description of the task.
 * @property {DataTypes.INTEGER} Cid - The Column that the task is apart of.
 * @property {DataTypes.INTEGER} Uid - The User assigned to the task.
 */
class Task extends Model {}
/**
 * Represents a Column in the Todo App.
 * @property {DataTypes.STRING} name - The name of the column.
 * @property {DataTypes.INTEGER} Pid - The Project that it is apart of.
 */
class Column extends Model {}
/**
 * Represents a Project in the Todo App.
 * @property {DataTypes.STRING} name - The name of the project.
 * @property {DataTypes.TEXT} description - The description of the project.
 * @property {DataTypes.STRING} image - The image of the project.
 */
class Project extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

Task.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

Column.init({
    name: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});


User.hasMany(Task, {as: "tasks", foreignKey: 'Uid'})
Task.belongsTo(User, {foreignKey: 'Uid'})
//Task.hasOne(User, {as: "user", foreignKey: 'Tid'})
//User.belongsTo(Task, {foreignKey: 'Tid'})

Column.hasMany(Task, {as: 'tasks', foreignKey: 'Cid'});
Task.belongsTo(Column, {foreignKey: 'Cid'});

/* Add this if we get time to add collaborators */
//Project.hasMany(User, {foreignKey: 'Pid'})
//Users.belongsTo(Projects, {foreignKey: 'Pid'})

Project.hasMany(Column, {as: 'columns', foreignKey: 'Pid'});
Column.belongsTo(Project, {foreignKey: 'Pid'})

module.exports = { sequelize, DataTypes, Model, User, Task, Column, Project };
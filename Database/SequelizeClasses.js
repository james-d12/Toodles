const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './Todo.sqlite'
});

class User extends Model {}
class Task extends Model {}
class Column extends Model {}
class Project extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    image: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

Task.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
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
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});


User.hasMany(Task, {as: "user", foreignKey: 'Uid'})
Task.belongsTo(User, {foreignKey: 'Uid'})

Column.hasMany(Task, {as: 'tasks', foreignKey: 'Cid'});
Task.belongsTo(Column, {foreignKey: 'Cid'});

/* Add this if we get time to add collaborators */
//Project.hasMany(User, {foreignKey: 'Pid'})
//Users.belongsTo(Projects, {foreignKey: 'Pid'})

Project.hasMany(Column, {as: 'columns', foreignKey: 'Pid'});
Column.belongsTo(Project, {foreignKey: 'Pid'})


module.exports = { sequelize, DataTypes, User, Task, Column, Project };
const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './todo.sqlite'
});

class User extends Model {}
class Task extends Model {}
class Column extends Model {}
class Project extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
});

Task.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
}, {
    sequelize,
    timestamps: false
});

Column.init({
    name: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
});

Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
});


User.hasOne(Task, {as: 'user', foreignKey: 'user_id'});
Task.belongsTo(User, {foreignKey: 'user_id'})

Column.hasMany(Task, {as: 'tasks', foreignKey: 'column_id'});
Task.belongsTo(Column, {foreignKey: 'column_id'});

Project.hasMany(Column, {as: 'columns', foreignKey: 'project_id'});
Column.belongsTo(Project, {foreignKey: 'project_id'})

module.exports = { sequelize, DataTypes, Model, User, Task, Column, Project }
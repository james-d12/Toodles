/**
 * Insert JsDoc Material
 */

const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Projects} = require('./Projects')
//const {Users} = require('./Users') import not being used
const {Columns} = require('./Columns')

/**
 * Defines Tasks
 */
class Tasks extends Model {}

Tasks.init({
    name: DataTypes.STRING,
    description: DataTypes.INTEGER,
    image: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

/*
 * Insert JsDoc material
 */


Tasks.belongsTo(Projects, {foreignKey: 'Pid'})
Tasks.belongsTo(Columns, {foreignKey: 'Cid'})


module.exports = {
    Tasks
};






/**
 * Insert JsDoc Material
 */

const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Projects} = require('./Projects')
//const {Users} = require('./Users') import not being used
const {Tasks} = require('./Tasks')

/**
 * Defines columns
 */
class Columns extends Model {}

Columns.init({
    name: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

/**
 * Insert JsDoc material
 */
Columns.hasMany(Tasks, {foreignKey: 'Cid'})
Columns.hasMany(Users, {foreignKey: 'Cid'})


Columns.belongsTo(Projects, { foreignKey: 'Pid'})


module.exports = {
    Columns
};






/**
 * Insert JsDoc Material
 */

const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Projects} = require('./Projects')
const {Tasks} = require('./Tasks')
//const {Columns} = require('./Columns') //import not being used

/**
 * Defines Tasks
 */
class Users extends Model {}

Users.init({
    userName: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

/**
 * Insert JsDoc material
 */


Users.belongsToMany(Projects, {foreignKey: 'Pid'})


module.exports = {
    Users
};







/**
 * Insert JsDoc Material
 */

const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Columns} = require('./Columns');
const {Users} = require('./Users');
const {Tasks} = require('./Tasks');

/**
 * Projects Database
 */
class Projects extends Model {

}

Projects.init({
    name: DataTypes.STRING,
    description: DataTypes.INTEGER,
    img: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

/**
 * Insert JsDoc material
 */

Projects.hasMany(Columns, {foreignKey: 'Pid'})
Projects.hasMany(Tasks, {foreignKey: 'Pid'})
Projects.hasMany(Users, {foreignKey: 'Pid'})

//Columns.belongsTo(Projects, {as: 'owner', foreignKey: 'Pid'})
//Users.belongsTo(Projects, {as: 'members', foreignKey: 'Pid'})
Columns.belongsTo(Projects, { foreignKey: 'Pid'})
Users.belongsTo(Projects, {foreignKey: 'Pid'})


module.exports = {
    Projects
};


(async () => {
    await sequelize.sync({ force: true }); // recreate db
    const r = await Projects.create({ name: 'Ronalds', description:'Shopping', img: 'http://some.image.url' })

    console.log("Inserted restaurant name is:" + r.name);
})();






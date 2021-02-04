const {Sequelize, DataTypes, Model} = require ('sequelize');

const sequelize = new Sequelize('database', 'userName', 'password',{
    dialect: 'sqlite',
    storage: './toodle.sqlite'
});

class Projects extends Model {}
class Columns extends Model {}
class Tasks extends Model {}
class Users extends Model {}

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

Columns.init({
    name: DataTypes.STRING,
}, 
{
    sequelize,
    timestamps: false,
    primaryKey: true
});

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



//Projects.hasMany(Columns, {foreignKey: 'Pid'})
//Projects.hasMany(Tasks, {foreignKey: 'Pid'})
//Projects.hasMany(Users, {foreignKey: 'Pid'})

//Columns.belongsTo(Projects, {as: 'owner', foreignKey: 'Pid'})
//Users.belongsTo(Projects, {as: 'members', foreignKey: 'Pid'})
//Columns.belongsTo(Projects, { foreignKey: 'Pid'})
//Users.belongsTo(Projects, {foreignKey: 'Pid'})

/**
 * Insert JsDoc material
 */
//Columns.hasMany(Tasks, {foreignKey: 'Cid'})
//Columns.hasMany(Users, {foreignKey: 'Cid'})


//Columns.belongsTo(Projects, { foreignKey: 'Pid'})

//Tasks.belongsTo(Projects, {foreignKey: 'Pid'})
//Tasks.belongsTo(Columns, {foreignKey: 'Cid'})

//Users.belongsTo(Projects, {foreignKey: 'Pid'})




(async () => {
    await sequelize.sync({ force: true }); // recreate db
    const r = await Projects.create({ name: 'Ronalds', description:'Shopping', img: 'http://some.image.url' })

    console.log("Inserted restaurant name is:" + r.name);
})();





















module.exports = {sequelize, DataTypes, Model};
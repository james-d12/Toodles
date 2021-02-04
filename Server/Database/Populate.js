const classes = require('./SequelizeClasses');

async function create(){
    await classes.sequelize.sync({ force: true });
    
    await classes.User.create({username: "james123", password:"1234", image: "https://www.w3schools.com/howto/img_avatar2.png"})
    await classes.Project.create({name: "Choirs", description: "Keeps track of choirs", image: ""})
    await classes.Column.create({name: "todo", Pid: 1})
    await classes.Column.create({name: "inprogress", Pid: 1})
    await classes.Column.create({name: "done", Pid: 1})

    await classes.Task.create({
        name: "Do stuff",
        description: "stuiff",
        image: "",
        Cid: 1,
        Uid: 1
    })

    const projs = await classes.Project.findAll()
}

create()

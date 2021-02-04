const models = require("./models")


async function create(){
    await models.User.create({username: "james123", password:"1234", image: "https://www.w3schools.com/howto/img_avatar2.png"})
    await models.Project.create({name: "Choirs", description: "Keeps track of choirs", image: ""})
    await models.Column.create({name: "todo", project_id: 1})
    await models.Column.create({name: "inprogress", project_id: 1})
    await models.Column.create({name: "done", project_id: 1})

    await models.Task.create({
        name: "Do Laundry", 
        description: "Complete the dirty laundry by putting it in the washing machine",
        user_id: 0
    })
}


create()
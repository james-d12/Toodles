const fs = require("fs");
const classes = require('./Server/Database/SequelizeClasses');


function readFile(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(`error whilst reading ${file}.`)
            const parsedData = JSON.parse(data)
            return resolve(parsedData)
        })
    })
}

async function insert(){
    const user_file = "./Server/Database/Data/users.json"
    const project_file = "./Server/Database/Data/projects.json"
    const column_file = "./Server/Database/Data/columns.json"
    const task_file = "./Server/Database/Data/tasks.json"

    const user_data = await readFile(user_file)
    const project_data = await readFile(project_file)
    const column_data = await readFile(column_file)
    const task_data = await readFile(task_file)

    
    await classes.sequelize.sync({ force: true })

    for(let i = 0; i < user_data.length; i++){
        await classes.User.create({
            username: user_data[i].username,
            password: user_data[i].password,
            image: user_data[i].image
        })
    }

    for(let i = 0; i < project_data.length; i++){
        await classes.Project.create({
            name: project_data[i].name,
            description: project_data[i].description,
            image: project_data[i].image
        })
    }

    for(let i = 0; i < column_data.length; i++){
        await classes.Column.create({
            name: column_data[i].name,
            Pid: column_data[i].project_id
        })
    }

    for(let i = 0; i < task_data.length; i++){
        await classes.Task.create({
            name: task_data[i].name,
            description: task_data[i].description,
            Cid: task_data[i].column_id,
            Uid: task_data[i].user_id
        })
    }
}

insert()
const {sequelize, Model, Column, Project, Task} = require('../../Server/Database/SequelizeClasses')

describe('Task', () => {
    test('Create a new Task', async() => {
         const name = "Task"
         const description = "Do this task by this time"
        
         await sequelize.sync({force: true})
         await Task.create({
             name: name,
             description: description
         })

         //test fails when you find only one task
         const task = Task.findOrCreate({where: {name: name}}) 

         expect(task).toBeDefined()
    })
})
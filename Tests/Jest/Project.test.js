const {sequelize, Project} = require('../../Server/Database/SequelizeClasses')

describe('Project', () => {
    test('Create a new project', async() => {
         const name = "Design Project"
         const description = "Design a good project"
         const image = "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/shutterstock_534491617-600.jpg"
        
         await sequelize.sync({force: true})
         await Project.create({
             name: name,
             description: description,
             image: image
         })

         const project = Project.findOne({where: {name: name}})

         expect(project).toBeDefined()
    })
})
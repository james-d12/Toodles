const { sequelize, Project } = require('../../Server/Database/SequelizeClasses')

describe('Project', () => {
    test('Create A Project With Data', async() => {
        const name = "Home Chores"
        const description = "Keeps tabs of chores that need to be done."
        const image = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/women-are-doing-housework-preparing-food-royalty-free-illustration-1573648745.jpg?crop=0.774xw:0.493xh;0.226xw,0.274xh&resize=480:*"

        await sequelize.sync({ force: true })
        await Project.create({
            name: username,
            password: password,
            image: image
        })

        const project = Project.findOne({where: { name: name }})

        expect(project).toBeDefined()
    })
    
})

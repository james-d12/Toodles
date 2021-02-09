const { sequelize, User } = require('../../Server/Database/SequelizeClasses')

describe('User', () => {
    test('Create A User With Data', async() => {
        const username = "juser"
        const password = "1234"
        const image = "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/shutterstock_534491617-600.jpg"

        await sequelize.sync({ force: true })
        await User.create({
            username: username,
            password: password,
            image: image
        })

        const user = User.findOne({where: { username: username }})

        expect(user).toBeDefined()
    })
    
})

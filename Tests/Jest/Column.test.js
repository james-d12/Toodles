const {sequelize,Column} = require('../../Server/Database/SequelizeClasses')

describe('Column', () => {
    test('Create a new Column', async() => {
         const name = "Column"
         
         await sequelize.sync({force: true})
         await Column.create({
             name: name,
             
         })

         const column = Column.findOne({where: {name: name}})

         expect(column).toBeDefined()
    })

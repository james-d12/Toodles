
//const { Col } = require("sequelize/types/lib/utils")

const { Project, Column, Task, User } = require("../Database/SequelizeClasses")

const homepage = 'Home'
const boardsPage = 'Landing'
const boardPage = 'Tasks'

/**
 * Renders the homepage of the app.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.homePage = async(req, res) => {
    res.render(homepage)
}

/**
 * Renders project board's landing page, displaying all current projects.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardsPage = async(req, res) => {
    const projects = await Project.findAll({
        include: [{model: Column, as: 'columns'}],
        nest: true
    })
    res.render(boardsPage, {projects})
}

/**
 * Renders a specific project board.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardPage = async(req, res) => {
    const project = await Project.findByPk(req.params.id)
    const columns = await project.getColumns({

        include: [
            {model: Task, as: 'tasks' }
        ],
        nest: true 
    })

    for(let i = 0; i < columns.length; i++){
        const column = columns[i]
        for(let j = 0; j < column.tasks.length; j++){
            const task = column.tasks[j]
            const user = await User.findByPk(task.Uid)
            
            //include: [
            //    {model: User, as: 'user'}
            //]
        }

    }

    res.render(boardPage, {project, columns})
}

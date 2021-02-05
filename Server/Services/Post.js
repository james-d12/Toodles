const { Project, Column, Task } = require("../Database/SequelizeClasses")

/**
 * Create a new project.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardPageNew = async(req, res) => {
    const { name, description, image } = req.body 

    await Project.create({
        name: name, 
        description: description, 
        image: image
    })

    res.render('Landing')
}

/**
 * Create a new task.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.taskNew = async(req, res) => {
    const { name, description, image, user, column } = req.body 

    await Task.create({
        name: name,
        description: description,
        image: image,
        user: user,
        column: column
    })

    resl.render('Landing')
}
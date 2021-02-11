const { validationResult } = require("express-validator")
const { Project, Column, Task } = require("../Database/SequelizeClasses")

/**
 * Create a new project.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardPageNew = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array})
    }

    const { name, description, image } = req.body 

    await Project.create({
        name: name, 
        description: description, 
        image: image
    })

    res.redirect(`/boards`)
}

/**
 * Create a new task.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.taskNew = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array})
    }

    const { name, description, user, column } = req.body 

    await Task.create({
        name: name,
        description: description,
        Cid: column,
        Uid: user
    })

    res.redirect(`/boards/${req.params.id}`)
}
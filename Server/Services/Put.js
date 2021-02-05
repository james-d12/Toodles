const { Project, Column, Task } = require("../Database/SequelizeClasses")

/**
 * Edit a board page from a PUT request.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardPageEdit = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array})
    }

    const { name, description, image } = req.body 

    const project = await Project.findByPk(req.params.id)
    await project.update({
        name: name, 
        description: description, 
        image: image 
    })
    
    res.redirect(`/boards/${req.params.id}`)
}

/**
 * Edit a task from a PUT request.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.taskEdit = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array})
    }

    const task = await Task.findByPk(req.params.tid)
    console.log("[INFO]: Editing Task: ", task)
}
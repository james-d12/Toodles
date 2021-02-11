const { Project, Column, Task } = require("../Database/SequelizeClasses")

/**
 * Deletes a specific project board.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardPageDelete = async(req, res) => {
    const project = await Project.findByPk(req.params.id)

    if(project != null){
        project.destroy()
        res.redirect(`/boards`)
    } else{
        res.status(400).send("Could Not Find Project.")
    }
}
    
/**
 * Deletes a specific task from a column.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.taskDelete = async(req, res) => {
    const task = await Task.findByPk(req.params.tid)
    
    if(task != null){
        task.destroy()
    } else{
        res.status(400).send("Could Not Find Task.")
    }
    res.redirect(`/boards/${req.params.pid}`)
}
const { Project, Column, Task } = require("../Database/SequelizeClasses")

/**
 * Deletes a specific project board.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardPageDelete = async(req, res) => {
    const project = Project.findByPk(req.params.id)

    if(project != null){
        console.log("Destrolying Project")
        project.then(project => {
        project.destroy()

            res.redirect(`/boards`)
        }) 
    } else{
        res.status(400).send("Could Not Find Null Project")
    }

    /*
    Project.findByPk(req.params.id).then(project => {
        project.destroy()
        res.redirect(`/boards`)
    })
    */
}
    

/**
 * Deletes a specific task from a column.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.taskDelete = async(req, res) => {

    const task = Task.findByPk(req.params.id)

    if(task != null){
        console.log("Destrolying Task")
        task.then(task => {
        task.destroy()

            res.redirect(`/boards`)
        }) 
        
    } else{
        res.status(400).send("Could Not Find Null Task")
    }
}
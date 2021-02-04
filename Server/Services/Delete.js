const { Project, Column, Task } = require("../Database/SequelizeClasses")

/**
 * Deletes a specific project board.
 * @param {Request} req - The request that the caller has sent to the server.
 * @param {Response} res - The reponse the server will give.
 */
exports.boardPageDelete = async(req, res) => {
    Project.findByPk(req.params.id).then(project => {
        project.destroy()
        res.redirect(`/boards/${req.params.id}`)
    })
}
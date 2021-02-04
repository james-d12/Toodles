const { Project, Column, Task } = require("../Database/SequelizeClasses")

/**
 * Takes a PUT request to edit a project board's details in the database. 
 */
exports.boardPageEdit = async(req, res) => {
    const { name, description, image } = req.body 

    const project = await Project.findByPk(req.params.id)
    await project.update({
        name: name, 
        description: description, 
        image: image 
    })
    
    res.redirect(`/boards/${req.params.id}`)
}
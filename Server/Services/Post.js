const { Project, Column, Task } = require("../Database/SequelizeClasses")

exports.boardPageNew = async(req, res) => {
    const { name, description, image } = req.body 

    await Project.create({
        name: name, 
        description: description, 
        image: image
    })

    res.render('Landing')
}
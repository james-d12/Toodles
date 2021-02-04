const { Project, Column, Task } = require("../Database/SequelizeClasses")

exports.homePage = async(req, res) => {
    res.render('home')
}

exports.boardsPage = async(req, res) => {
    const projects = await Project.findAll()
    res.render('Landing', {projects})
}

exports.boardPageNew = async(req, res) => {
    res.render('Landing')
}

exports.boardPage = async(req, res) => {
    res.render('home')
}

exports.boardPageEdit = async(req, res) => {
    res.render('home')
}
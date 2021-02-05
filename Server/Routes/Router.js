const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');

const Get = require('../Services/Get')
const Post = require('../Services/Post')
const Put = require('../Services/Put')
const Delete = require('../Services/Delete')

router.get('/', Get.homePage)
router.get('/boards', Get.boardsPage)
router.get('/boards/:id', Get.boardPage)

router.post(
    '/boards/new', 
    check('name').isLength({min: 3, max: 40}).isString().trim().escape(),
    check('description').isLength({min: 3, max: 300}).isString().trim().escape(),
    check('image').isURL().not().isEmpty().trim().escape(),
    Post.boardPageNew
)

router.post(
    '/boards/:id/task/new',
    Post.taskNew
)

router.put(
    '/boards/:id/edit',
    check('name').isLength({min: 3, max: 40}).isString().trim().escape(),
    check('description').isLength({min: 3, max: 300}).isString().trim().escape(),
    check('image').isURL().not().isEmpty().trim().escape(),
    Put.boardPageEdit
)

router.put(
    '/boards/:pid/task/:tid/edit',
    check('name').isLength({min: 3, max: 40}).isString().trim().escape(),
    check('description').isLength({min: 3, max: 300}).isString().trim().escape(),
    check('image').isURL().not().isEmpty().trim().escape(),
    check('user').isNumeric().not().isEmpty().trim().escape(),
    check('column').isNumeric().not().isEmpty().trim().escape(),
    Put.taskEdit
)

router.delete('/boards/:id/delete', Delete.boardPageDelete)

module.exports = router
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

router.post('/boards/new', Post.boardPageNew)
router.put('/boards/:id/edit', Put.boardPageEdit)

router.delete('/boards/:id/delete', Delete.boardPageDelete)

module.exports = router
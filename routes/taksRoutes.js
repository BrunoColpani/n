const express = require('express')
const router = express.Router()

const TaksController = require('../controllers/TaksController')

router.get('/', TaksController.showTaks)
router.get('/add', TaksController.createTask)
router.get('/edit/:id', TaksController.updateTask)
router.post('/edit', TaksController.updateTaskPost)
router.post('/add', TaksController.createTaskSave)
router.post('/remove', TaksController.removeTask)
router.post('/updatestatus', TaksController.toggleTaskSatus)
module.exports = router
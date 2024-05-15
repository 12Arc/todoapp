const {Router} = require('express')

const controller = require('./controller')
const router = Router()

router.get("/",controller.getTasks)
router.post("/add", controller.addTasks )
router

module.exports = router;
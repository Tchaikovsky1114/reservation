var express = require('express');
var router = express.Router();
const userController = require('../controller/user')
/* GET users listing. */

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router;

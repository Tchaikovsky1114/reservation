var express = require('express');
var router = express.Router();
const db = require('../psql');
/* GET users listing. */

router.get('/', db.getUsers)
router.get('/:id', db.getUserById)
router.post('/', db.createUser)
router.put('/:id', db.updateUser)
router.delete('/:id', db.deleteUser)

module.exports = router;

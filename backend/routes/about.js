const express = require('express');

const router = express.Router()
const branchController = require('../controllers/branch')



router.get('/branches', branchController.getAllBranch);

router.post('/branches', branchController.postBranch);



module.exports = router
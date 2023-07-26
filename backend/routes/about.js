const express = require('express');
const router = express.Router()
const branchesController = require('../controller/branch')



router.get('/branches', branchesController.getAllBranch);

router.get('/branches/:id', branchesController.getBranch);

router.post('/branches', branchesController.postBranch);



module.exports = router
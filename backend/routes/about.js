const express = require('express');

const router = express.Router()
const branchController = require('../controller/branch')



router.get('/branches', branchController.getAllBranch);

router.get('/branches/:id', branchController.getBranch);

router.post('/branches', branchController.postBranch);



module.exports = router
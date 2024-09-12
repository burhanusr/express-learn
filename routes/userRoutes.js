const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.param('userId', userController.checkId);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router.route('/:userId').get(userController.getUser);

module.exports = router;

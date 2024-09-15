const express = require('express');
const userController = require('./../../app/v1/controllers/userController');

const router = express.Router();

router.param('userId', userController.checkId);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

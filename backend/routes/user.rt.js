const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.ct')

// Home page route.
router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;

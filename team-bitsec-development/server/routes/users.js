const express = require('express');
const { register, login, dashboard } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register',register);
router.post('/login', login)
router.get('/dashboard', authMiddleware, dashboard)

module.exports = router;

const {Router} = require('express');
const {index, signupGet, signupPost, signinGet, signinPost, profile, logout} = require('../controllers/index');
const {isAuthenticated} = require('../lib/auth');

const router = Router();

router.get('/', index);
router.get('/signup', signupGet);
router.post('/signup', signupPost);
router.get('/signin', signinGet);
router.post('/signin', signinPost);
router.get('/logout', logout);
router.get('/profile', isAuthenticated, profile);

module.exports = router;
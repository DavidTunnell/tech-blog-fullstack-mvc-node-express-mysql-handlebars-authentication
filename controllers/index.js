const router = require('express').Router();

const apiRoutes = require('./api');
const indexRoutes = require('./index-routes');
const testRoutes = require('./test-routes');
const loginRoutes = require('./login-routes');
const postRoutes = require('./post-routes');
const signupRoutes = require('./signup-routes');
const logoutRoutes = require('./logout-routes');

router.use('/', indexRoutes);
router.use('/test', testRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/signup', signupRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;
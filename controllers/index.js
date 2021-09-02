const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const testRoutes = require('./test-routes');

router.use('/', homeRoutes);
router.use('/test', testRoutes);
router.use('/api', apiRoutes);

module.exports = router;
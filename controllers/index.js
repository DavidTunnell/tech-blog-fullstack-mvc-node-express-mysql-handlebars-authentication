const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const testRoutes = require('./test-routes');

router.use('/', homeRoutes);
router.use('/test', testRoutes);
router.use('/api', apiRoutes);

// router.get('/', async(req, res) => {
//     // find all categories and associated products
//     try {
//         const testData = await Test.findAll();
//         res.status(200).json(testData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
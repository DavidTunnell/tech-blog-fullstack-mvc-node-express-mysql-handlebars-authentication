const router = require('express').Router();

router.get('/', async(req, res) => {
    res.render('edit');
});

module.exports = router;
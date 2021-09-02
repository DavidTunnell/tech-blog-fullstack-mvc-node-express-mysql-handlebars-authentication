const router = require('express').Router();
const path = require('path');

router.get('/', async(req, res) => {
    //renders ./views/layouts/all.handlebars
    res.render('all');
});

module.exports = router;
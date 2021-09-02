const router = require('express').Router();
const path = require('path');

router.get('/', async(req, res) => {
    //renders ./views/layouts/home.handlebars
    res.render('home');
});

module.exports = router;
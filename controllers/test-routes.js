const router = require('express').Router();
const path = require('path');
const Test = require('../models/Test');

//dont do this, use API
//this is direct from DB to rendering server side, API is better and then consumed on client
router.get('/:id', async(req, res) => {
    try {
        const testData = await Test.findByPk(req.params.id);
        if (!testData) {
            res.status(404).json({ message: 'No test with this id!' });
            return;
        }
        const test = testData.get({ plain: true });
        res.render('test', test);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
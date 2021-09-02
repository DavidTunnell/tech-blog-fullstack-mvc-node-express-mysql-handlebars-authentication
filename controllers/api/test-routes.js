const router = require('express').Router();
const { Test } = require('../../models');

router.get('/', async(req, res) => {
    // find all categories and associated products
    try {
        const testData = await Test.findAll();
        res.status(200).json(testData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
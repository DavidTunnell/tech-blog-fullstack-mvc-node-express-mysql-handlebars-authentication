const router = require("express").Router();
const { Test } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const testData = await Test.findAll();
        res.status(200).json(testData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

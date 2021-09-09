const router = require("express").Router();
const path = require("path");
const Test = require("../models/Test");

router.get("/", async (req, res) => {
    const testData = await Test.findAll().catch((err) => {
        res.json(err);
    });
    const tests = testData.map((test) => test.get({ plain: true }));

    req.session.save(() => {
        // We set up a session variable to count the number of times we visit the homepage
        if (req.session.countVisit) {
            // If the 'countVisit' session variable already exists, increment it by 1
            req.session.countVisit++;
        } else {
            // If the 'countVisit' session variable doesn't exist, set it to 1
            req.session.countVisit = 1;
        }
        res.render("test", { tests, myTest: req.session.countVisit });
    });
});

//dont do this, use API
//this is direct from DB to rendering server side, API is better and then consumed on client
router.get("/:id", async (req, res) => {
    try {
        const testData = await Test.findByPk(req.params.id);
        if (!testData) {
            res.status(404).json({ message: "No test with this id!" });
            return;
        }
        const test = testData.get({ plain: true });
        res.render("test", test);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

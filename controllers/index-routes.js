const router = require("express").Router();
const path = require("path");

router.get("/", async (req, res) => {
    //renders ./views/layouts/home.handlebars
    res.render("index", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;

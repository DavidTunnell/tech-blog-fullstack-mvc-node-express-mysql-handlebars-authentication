const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    res.render("post", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;

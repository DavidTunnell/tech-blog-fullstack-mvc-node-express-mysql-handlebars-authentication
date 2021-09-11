const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("logout", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;

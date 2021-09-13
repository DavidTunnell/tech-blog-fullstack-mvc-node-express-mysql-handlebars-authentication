const router = require("express").Router();

//render handlebars view on page load
router.get("/", async (req, res) => {
    res.render("logout", {
        loggedIn: false,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;

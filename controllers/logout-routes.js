const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("logout", { loggedIn: req.session.loggedIn });
});

module.exports = router;

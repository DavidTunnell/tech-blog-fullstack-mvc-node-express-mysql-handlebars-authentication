const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("post", { loggedIn: req.session.loggedIn });
});

module.exports = router;

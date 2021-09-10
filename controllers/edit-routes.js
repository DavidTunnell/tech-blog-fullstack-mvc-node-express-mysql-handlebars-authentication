const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("edit", { loggedIn: req.session.loggedIn });
});

module.exports = router;

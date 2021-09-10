const router = require("express").Router();
const path = require("path");

router.get("/", async (req, res) => {
    //renders ./views/layouts/home.handlebars
    console.log(req.session);
    res.render("index", { loggedIn: req.session.loggedIn });
});

module.exports = router;

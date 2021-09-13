const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/", async (req, res) => {
//     if (!req.session.loggedIn) {
//         res.redirect("/login");
//     } else {
//         res.render("edit", {
//             loggedIn: req.session.loggedIn,
//             loggedInUserData: req.session.loggedInUserData,
//         });
//     }
// });

router.get("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        if (post) {
            res.render("edit", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                postData: post,
            });
        } else {
            res.redirect("/dashboard");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

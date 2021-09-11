const router = require("express").Router();
const { Post } = require("../models");

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

router.get("/:id", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        try {
            const postData = await Post.findByPk(req.params.id);
            console.log(postData.dataValues);

            if (postData) {
                res.render("edit", {
                    loggedIn: req.session.loggedIn,
                    loggedInUserData: req.session.loggedInUserData,
                    postData: postData.dataValues,
                });
            } else {
                res.redirect("/dashboard");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
});

module.exports = router;

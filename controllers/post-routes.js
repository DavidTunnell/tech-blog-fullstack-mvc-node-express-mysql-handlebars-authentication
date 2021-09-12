const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

// router.get("/", async (req, res) => {
//     res.render("post", {
//         loggedIn: req.session.loggedIn,
//         loggedInUserData: req.session.loggedInUserData,
//     });
// });

router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ["id", "username"],
                        },
                    ],
                },
                {
                    model: User,
                    attributes: ["id", "username"],
                },
            ],
        });
        console.log(postData.dataValues);
        if (postData) {
            res.render("post", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                postData: postData.dataValues,
            });
        } else {
            res.redirect("/");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

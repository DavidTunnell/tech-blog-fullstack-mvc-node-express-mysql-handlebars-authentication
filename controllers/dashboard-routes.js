const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

//on /dashboard/ page load
router.get("/", withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ["id", "username"],
                },
            ],
            order: [["createdAt", "DESC"]],
        });
        //this simplifies the returned object so it's easier to work with
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("dashboard", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            posts: posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

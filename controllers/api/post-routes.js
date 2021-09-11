const router = require("express").Router();
const { Post } = require("../../models");

router.post("/", async (req, res) => {
    console.log("called");
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author_id: req.body.author_id,
        });
        console.log(dbPostData);
        return res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

module.exports = router;

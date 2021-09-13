// import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
    foreignKey: "author_id",
});

User.hasMany(Post, {
    foreignKey: "author_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "author_id",
});

User.hasMany(Comment, {
    foreignKey: "author_id",
    onDelete: "CASCADE",
});

module.exports = {
    User,
    Post,
    Comment,
};

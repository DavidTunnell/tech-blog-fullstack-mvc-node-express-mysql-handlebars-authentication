//middleware function to confirm user is logged in before allowing them to view a page or redirecting to the login page if not
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        next();
    }
};

module.exports = withAuth;

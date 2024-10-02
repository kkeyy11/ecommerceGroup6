// src/middleware/middleware.js
function restrictLandingPageAccess(req, res, next) {
    // Check if the user is not logged in
    if (!req.session.user) {
        // Redirect to home page if accessed without being logged in
        return res.redirect('/');
    }
    next(); // Proceed if the user is logged in
}

module.exports = { restrictLandingPageAccess };

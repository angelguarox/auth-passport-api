const passport = require('passport');

const ctrl = {};

ctrl.index = (req, res, next) => {
	res.render('index');
};

ctrl.signupGet = (req, res, next) => {
	res.render('signup');
};

ctrl.signupPost = passport.authenticate('local-signup', {
	successRedirect: '/profile',
	failureRedirect: '/signup',
	passReqToCallback: true
});

ctrl.signinGet = (req, res, next) => {
	res.render('signin');
};
ctrl.signinPost = passport.authenticate('local-signin', {
	successRedirect: '/profile',
	failureRedirect: '/signin',
	passReqToCallback: true
});

ctrl.logout = (req, res, next) => {
	req.logout();
	res.redirect('/');
};

ctrl.profile = (req, res, next) => {
	res.render('profile');
};

module.exports = ctrl;
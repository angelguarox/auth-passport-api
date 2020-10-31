const lib = {};

lib.isAuthenticated = (req, res, next) => {
	if(req.isAuthenticated()){
		return next();
	}
	else {
		res.redirect('/');
	}
};

module.exports = lib;
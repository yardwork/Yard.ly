exports.createSession = function(req, res, newUser) {
    req.session.user = newUser
    // console.log('req.session.user is now: ', req.session.user);
    // res.redirect('/');
}

// exports.comparePassword = function(candidatePassword, savedPassword, cb) {
//   bcrypt.compare(candidatePassword, savedPassword)
//     .then((isMatch) => {
//
//     })

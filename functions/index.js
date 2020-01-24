const functions = require('firebase-functions');

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate(user => {
  console.log('user created: ', user.email, user.uid);
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
  console.log('user deleted: ', user.email, user.uid);
});
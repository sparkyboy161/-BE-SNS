const functions = require("firebase-functions");
const app = require("express")();
const ScreamRouter = require('./routes/scream.route');
const AuthRouter = require('./routes/auth.route');
const UserRouter = require('./routes/user.route');
const firebase = require('firebase');

const config = require('./utils/config');

firebase.initializeApp(config);

app.use('/screams', ScreamRouter);
app.use('/auth', AuthRouter);
app.use('/user', UserRouter);

exports.api = functions.region('asia-southeast2').https.onRequest(app);

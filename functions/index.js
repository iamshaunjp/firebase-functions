const functions = require('firebase-functions');
const express = require('express');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require("firebase-admin");
app.get('/', function (req, res) {
    res.send('Hello World')
  })


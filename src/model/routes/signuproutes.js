// const express = require("express")
// const signuprouter = express.Router();
// const { usercred } = require('./src/models/signupmodel')

// app.post('/login', function (req, res) {
//     console.log(req.body);
//     var username = req.body.username
//     var email = req.body.email
//     var password = req.body.password

//     console.log(username);
//     usercred.findOne({ usernam, email })
//         .then(users => {
//             console.log(users);
//             if (users.username || users.email == email) {
//                 if (users.password == password) {
//                     return res.json('success')
//                 }
//             } else {
//                 res.status(401).send('Enter valid email and password')

//             }

//         })

// })

// signuprouter.post("/signup", function (req, res) {

//     console.log(req.body);
//     var user = {
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     }
//     var newuser = new usercred(user);
//     console.log(newuser);
//     newuser.save();
//     res.send();
// })


// module.exports = signuprouter
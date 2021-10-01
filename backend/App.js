
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))

const port = process.env.PORT || 5002
// const posts = [
//     {
//         username: 'alireza',
//         title: 'post1'
//     },
//     {
//         username: 'Naghi',
//         title: 'post2'
//     },
// ]

// app.post('/api/posts', verifyToken, (req, res) => {  
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//       if(err) {
//         res.sendStatus(403);
//       } else {
//         res.json({
//           message: 'Post created...',
//           authData
//         });
//       }
//     });
//   })

  // app.post('/api/login', (req, res) => {
  //   // Mock user
  //   const user = {
  //     id: 1, 
  //     username: 'brad',
  //     email: 'brad@gmail.com'
  //   }
  
  //   jwt.sign({user}, 'secretkey', (err, token) => {
  //     res.json({
  //       token
  //     });
  //   });
  // });
  
//   // Verify Token
// function verifyToken(req, res, next) {
//     // Get auth header value
//     const bearerHeader = req.headers['authorization'];
//     // Check if bearer is undefined
//     if(typeof bearerHeader !== 'undefined') {
//       // Split at the space
//       const bearer = bearerHeader.split(' ');
//       // Get token from array
//       const bearerToken = bearer[1];
//       // Set the token
//       req.token = bearerToken;
//       // Next middleware
//       next();
//     } else {
//       // Forbidden
//       res.sendStatus(403);
//     }
  
//   }
  

// Mysql

const sqll = require('./database')

// const {User} = require('./models/User')

// app.post("/insert", (req, res) => {
//     User.create({
//         korsName: "POORMEHR3000",
//         age: 59
//     }).catch((err) => {
//         if(err) {
//             console.log(err)
//         }
//     })

//     res.send("insert")
// })


const userRouts = require('./routes/user.rt')

app.use('/users', userRouts)

app.use("/", (req, res) => {
	res.send(
		"<h3 style='text-align: center; margin-top: 50px'>Hello, I'm Alireza Mohammadi?</h3>"
	);
});


sqll.sync().then((req) => {
    app.listen(port, () => console.log(`listen on port ${port}`))
})
// Listen on environment port or 5000
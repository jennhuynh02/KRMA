const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys_dev').mongoURI; // remember to fix for Heroku
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const passport = require('passport');
const path = require('path');

// for Heroku:
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   })
// }

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  app.use("/api/users", users);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;
// sets the port to 5000, but heroku requires process.env.PORT

app.listen(port, () => console.log(`Server is running on port ${port}`));

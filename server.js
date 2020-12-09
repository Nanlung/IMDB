const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}));

// Database
const db = require('./config/db.config');

// Test Db connection
  db.authenticate()
  .then(() => console.log('Database Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));


app.get('/', (req,res) => {
  res.json({message: "Welcome to IMDB"});
});

// Actors Route
app.use('/actors', require('./routes/actor.routes'));

// Port connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
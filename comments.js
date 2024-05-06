// Create web server
// npm install express
// npm install body-parser
// npm install ejs

// import express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use ejs as view engine
app.set('view engine', 'ejs');

// Use bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Create a comments array
const comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Mary', comment: 'How are you?' },
  { name: 'Joe', comment: 'Goodbye!' }
];

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('comments', { comments: comments });
});

// Define a route for the form
app.get('/new', (req, res) => {
  res.render('new');
});

// Define a route for the form submission
app.post('/new', (req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;
  comments.push({ name: name, comment: comment });
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
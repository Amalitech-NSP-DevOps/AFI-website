const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the directory for EJS views (templates)
app.set('views', path.join(__dirname, 'views'));

// Serve static files such as CSS, images, JS
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Home Page (index.ejs)
app.get('/', (req, res) => {
  res.render('index'); // This will render views/index.ejs
});

// About Page (about.ejs)
app.get('/about', (req, res) => {
  res.render('about'); // This will render views/about.ejs
});

// Contact Page (contact.ejs)
app.get('/contact', (req, res) => {
  res.render('contact'); // This will render views/contact.ejs
});

// Projects Page (project.ejs)
app.get('/projects', (req, res) => {
  res.render('projects'); // This will render views/project.ejs
});

// Donate Page (donate.ejs)
app.get('/donate', (req, res) => {
  res.render('donate'); // This will render views/donate.ejs
});

// 404 Page not found handler (optional)
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define Multiple Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/confirm', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'confirm.html'));
});

// Form Submission Endpoint -> redirects to confirmation page with query data
app.post('/api/book-vacation', (req, res) => {
  const { destination, departureDate, travelers } = req.body;
  res.redirect(`/confirm?destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(departureDate)}&travelers=${encodeURIComponent(travelers)}`);
});

app.listen(PORT, () => {
  console.log(`Server running smoothly at http://localhost:${PORT}`);
});
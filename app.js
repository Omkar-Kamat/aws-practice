import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/me', (req, res) => {
  res.json({ message: 'Home route' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/about', (req, res) => {
  res.json({ name: 'Simple Express App', runtime: 'ES Modules' });
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
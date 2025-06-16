import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    res.render('index');
});

app.get('/naturkunskap', (req, res) => {
    res.render('naturkunskap');
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    res.render('index');
});

app.get('/naturkunskap', (req, res) => {
    res.render('naturkunskap');
});

app.get('/biologi', (req, res) => {
    res.render('biologi');
});

app.get('/kemi', (req, res) => {
    res.render('kemi');
});

app.get('/naturvetenskapligspecialisering', (req, res) => {
    res.render('naturvetenskapligspecialisering');
});

app.get('/kemi2', (req, res) => {
    res.render('kemi2');
});

app.get('/biologi1', (req, res) => {
    res.render('biologi1');
});

app.get('/biologi2', (req, res) => {
    res.render('biologi2');
});

app.get('/naturkunskap1a1', (req, res) => {
    res.render('naturkunskap1a1');
});

app.get('/naturkunskap2', (req, res) => {
    res.render('naturkunskap2');
});

app.get('/naturkunskap1b', (req, res) => {
    res.render('naturkunskap1b');
});

app.get('/kemi1', (req, res) => {
    res.render('kemi1');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
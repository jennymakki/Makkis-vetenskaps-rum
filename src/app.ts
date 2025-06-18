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
    res.render('index', { title: 'Makkis vetenskapsrum' });
});

app.get('/naturkunskap', (req, res) => {
    res.render('naturkunskap', { title: 'Naturkunskap - Makkis vetenskapsrum' });
});

app.get('/biologi', (req, res) => {
    res.render('biologi', {title: 'Biologi - Makkis vetenskapsrum' });
});

app.get('/kemi', (req, res) => {
    res.render('kemi', { title: 'Kemi - Makkis vetenskapsrum' });
});

app.get('/naturvetenskapligspecialisering', (req, res) => {
    res.render('naturvetenskapligspecialisering', { title: 'Naturvetenskaplig Specialisering - Makkis vetenskapsrum' });
});

app.get('/kemi2', (req, res) => {
    res.render('kemi2', { title: 'Kemi 2 - Makkis vetenskapsrum' });
});

app.get('/biologi1', (req, res) => {
    res.render('biologi1', { title: 'Biologi 1 - Makkis vetenskapsrum' });
});

app.get('/biologi2', (req, res) => {
    res.render('biologi2', { title: 'Biologi 2 - Makkis vetenskapsrum' });
});

app.get('/naturkunskap1a1', (req, res) => {
    res.render('naturkunskap1a1', { title: 'Naturkunskap 1a1 - Makkis vetenskapsrum' });
});

app.get('/naturkunskap2', (req, res) => {
    res.render('naturkunskap2' , { title: 'Naturkunskap 2 - Makkis vetenskapsrum' });
});

app.get('/naturkunskap1b', (req, res) => {
    res.render('naturkunskap1b', { title: 'Naturkunskap 1b - Makkis vetenskapsrum' });
});

app.get('/kemi1', (req, res) => {
    res.render('kemi1' , { title: 'Kemi 1 - Makkis vetenskapsrum' });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
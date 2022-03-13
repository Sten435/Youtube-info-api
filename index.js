import express from 'express';
const app = express();
import path, { join } from 'path';
import { fileURLToPath } from 'url';

import Home from './routes/home/index.js';
import Url from './routes/url/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(join(__dirname, 'documentation')));

app.get('/', async (req, res) => Home(req, res, __dirname));

app.get('/:id', async (req, res) => Url(req, res, __dirname));

app.listen(process.env.PORT || 3000);

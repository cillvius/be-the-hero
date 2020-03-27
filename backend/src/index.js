const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const json = express.json();

const app = express();
app.use(cors());
app.use(json);
app.use(routes);

app.listen(3333);

const express = require('express');
const morgan = require('morgan');
const app = express();

const config = require('./config/config');
const routes = require('./routes');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(morgan(process.env.MORGAN_FORMAT ?? 'tiny'));

app.use((req, res, next) => {
  if (!req.headers.authorization && process.env.CURSOR_TOKEN) {
    req.headers.authorization = `Bearer ${process.env.CURSOR_TOKEN}`;
  }
  next();
});

app.use("/", routes)

app.listen(config.port, () => {
    console.log(`The server listens port: ${config.port}`);
});

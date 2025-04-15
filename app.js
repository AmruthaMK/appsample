const express = require('express');
const app = express();
const port = 8088;

app.get('/', (req, res) => res.send('Hello World! This is from St.Philo's'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

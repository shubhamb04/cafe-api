const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', async (req, res) => {

    res.send(await readFile('./home.html', 'utf8'))
})

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
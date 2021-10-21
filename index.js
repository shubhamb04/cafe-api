const express = require('express');
const app = express();

app.use(express.json());

app.get('/coffee',(req, res) => {

    res.status(200).send({
        name: "cappuccino",
        price: "$5.50"
    })
})

app.post('/coffee/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    if (!name || !price) {
        res.status(418).send({message: "Please enter all the details!"})
    }

    res.send({
        coffee: `${name} is ${price}!`
    })
})

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
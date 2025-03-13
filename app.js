const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, tx) => {
    time = new Date().getTime();
    response = {"message": "My name is Colin Jamison", "timestamp": time, "lorem": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."};
    tx.type('json');
    tx.send(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

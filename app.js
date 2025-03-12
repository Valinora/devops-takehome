const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, tx) => {
    time = new Date().getTime();
    response = {"message": "My name is Colin Jamison", "timestamp": time};
    tx.type('json');
    tx.send(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
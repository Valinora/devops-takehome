const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, tx) => {
    time = new Date().getTime();
    // Convert from millisecond precision to second precision
    time = Math.floor(time / 1000);
    response = {"message": "My name is Colin Jamison", "timestamp": time};
    tx.type('json');
    tx.send(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
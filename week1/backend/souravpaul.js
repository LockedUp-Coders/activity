const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let date = new Date();
//Root
app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/user/:username', (req, res) => {
    res.send('Hello ' + req.params.username);
});

app.get('/date', (req, res) => {
    res.json({
        day: date.getDate(),
        month: monthNames[date.getMonth()],
        year: date.getFullYear()
    });
});

app.listen(port);
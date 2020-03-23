var express = require('express');
var app = express();
const randomStrings = [
    "It's not fully shipped until it's fast.",
    "Practicality beats purity.",
    "Avoid administrative distraction.",
    "Mind your words, they are important.",
    "Non-blocking is better than blocking.",
    "Design for failure.",
    "Half measures are as bad as nothing at all.",
    "Favor focus over features.",
    "Approachable is better than simple.",
    "Encourage flow.",
    "Anything added dilutes everything else.",
    "Speak like a human.",
    "Responsive is better than fast.",
    "Keep it logically awesome."
];
const MIN = 0;
const MAX = randomStrings.length - 1;

const pickARandomString = () => {
    return randomStrings[Math.floor(Math.random()*MAX + MIN)];
}

app.get('/', (req, res) => {
    res.send('pong...server is running. Hit the /zen api');
});

app.get('/zen', (req, res) => {
    //res.set('Content-Type', 'text/plain');
    res.type('text');
    res.send(pickARandomString());
});

app.listen(3000, () => {
    console.log('server started at 3000');
});
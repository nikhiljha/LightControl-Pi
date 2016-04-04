var express = require('express');
var rcswitch = require('rcswitch-gpiomem');
var app = express();

app.use(express.static(__dirname + '/static'))
app.get('/light1', function (req, res) {
        rcswitch.enableTransmit(23); // BCM pin to transmit on
        rcswitch.setPulseLength(390); // Pulse length
        rcswitch.send(12345, 24); // Code in decimal form, bitlength
        res.redirect('/');
})
app.get('/light2', function (req, res) {
        rcswitch.enableTransmit(23);
        rcswitch.setPulseLength(390);
        rcswitch.send(12345, 24);
        res.redirect('/');
})
app.get('/light3', function (req, res) {
        rcswitch.enableTransmit(23);
        rcswitch.setPulseLength(390);
        rcswitch.send(12345, 24);
        res.redirect('/');
})

app.listen(8080);

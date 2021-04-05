const axios = require('axios');
const twilio = require('twilio')
const twilioAuthToken = '1933e3b1943ac997f2d044662cf7f849';
const twiliosID = 'AC2b113b14bfe53ce67103f21820d623a0';
const account = new twilio(twiliosID, twilioAuthToken)
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send("hola,  main");
})
app.get('/sms', (req, res) => {
    res.send("hola,  sms");
})
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('The Robots are coming! Head for the hills!');
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
})


// account.messages.create({ body: 'Hello from Node.js', from: '+15202243594', to: '+573187157030' },).then(response => {
//     console.log(response.sid);
// }).catch(err => {
//     console.log(err)
// })
app.listen(2000, () => {
    console.log('server running on port 2000')
})
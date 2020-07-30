var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mqttHandler = require('./mqtt-config');
var request = require('request');
var Handler = require("./handler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var topic = "";
var handler = new Handler();
var mqttClient = new mqttHandler();
mqttClient.connect();

// Routes
app.post("/api/payment/requireUrl", function(req, res) {

  console.log(req.body)

    topic = req.body.storeId;
    console.log(topic)
    mqttClient.sendMessage(topic, req.body.status.toString());
    
    var d = new Date();
    var requestId = d.getTime();
  
    var str = "amount="+req.body.amount+"&message="+req.body.message+"&momoTransId="+req.body.momoTransId+"&partnerRefId="+req.body.partnerRefId+"&status="+req.body.status;
    var signature = handler.toSignature(str);
  
    console.log(str);
    var data = {
     "status": req.body.status,
     "message": req.body.message,
     "amount": req.body.amount,
     "partnerRefId": req.body.partnerRefId,
     "momoTransId": req.body.momoTransId,
     "signature": signature
    }
    console.log(data)
    // response status t  o server momo
    
    res.status(200).send(data);

    // capture
    var str2 = "partnerCode="+req.body.partnerCode+"&partnerRefId="+req.body.partnerRefId+"&requestType=capture\
&requestId="+requestId+"&momoTransId="+req.body.momoTransId;
console.log(str2)
    var signature2 = handler.toSignature(str2);
    var options = {
      uri: 'https://test-payment.momo.vn/pay/confirm',
      method: 'POST',
      json: {
        "partnerCode": req.body.partnerCode,
        "partnerRefId": req.body.partnerRefId,
        "requestType": "capture",
        "requestId": requestId.toString(),
        "momoTransId": req.body.momoTransId,
        "signature": signature2
      }
    };
    console.log(options)
    request(options, function (error, response, body) {
      //console.log(response)
      //console.log(error)
      console.log(body)
      //mqttClient.sendMessage(topic, req.body.status.toString());
    });
    
   
});

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
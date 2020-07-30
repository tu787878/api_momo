var mqtt = require('mqtt')
var settings = {
    mqttServerUrl : "test.mosquitto.org", 
    port : 8883 ,
    topic : "myTopic/test2"
    }
    var client  = mqtt.connect('mqtt://103.221.221.17:1883');

client.on('connect', function () {
    client.subscribe(settings.topic)
    console.log("Subscribed topic " + settings.topic);
})

client.on('message', function (topic, message) {
    console.log(message.toString());
})
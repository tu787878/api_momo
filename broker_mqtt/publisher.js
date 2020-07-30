var mqtt = require('mqtt');
var settings = {
    mqttServerUrl : "test.mosquitto.org", 
    port : 8081 ,
    topic : "myTopic/test1"
    }
var client  = mqtt.connect('mqtt://103.221.221.17:1884');
client.on('connect', function () {
    setInterval(function() {
    var message = "Hello mqtt";
    client.publish(settings.topic, message);
    client.publish("myTopic/test2", "Hello mqtt 2");
    console.log('Sent ' + message + " to " + settings.topic);
    }, 1000);
});
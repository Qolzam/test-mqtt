var mqtt    = require('mqtt');
var client  = mqtt.connect('ws://test-mqtt2.herokuapp.com');

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
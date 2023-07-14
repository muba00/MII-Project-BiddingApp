const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", function () {
    // subscribe to topic bidding
    client.subscribe("bidding", function (err) {
        if (!err) {
            // publish message to topic bidding when connected
            let msg = {
                message: "Bidding app is connected & listening at topic bidding",
                timestamp: new Date().getTime(),
            };
            // client.publish("bidding", JSON.stringify(msg));
            console.log(msg.message);
        }
    });
});

client.on("message", function (topic, message) {
    // convert message from Buffer to string
    const messageStr = message.toString();

    // convert to JSON
    const messageJSON = JSON.parse(messageStr);

    // console log the message
    console.log(messageJSON);
});
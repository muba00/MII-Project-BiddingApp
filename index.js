const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", function () {
    client.subscribe("bidding", function (err) {
        if (!err) {
            client.publish("bidding", "Bidding app is connected & listening at topic bidding");
        }
    });
});

client.on("message", function (topic, message) {
    // message is Buffer

    // convert to string
    const messageStr = message.toString();

    // console log the message
    console.log({ message: messageStr });
});
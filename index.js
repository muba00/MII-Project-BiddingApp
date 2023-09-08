import {
    notUnderstood,
    refuse,
    proposal
} from "./messages.js";

import mqtt from "mqtt";

const mqtt_url = "mqtt://localhost:1883";
const digital_factory_aas = "http://localhost:4001/aasServer/shells/https%3A%2F%2Fexample.com%2Fids%2Faas%2F0245_9172_5012_5621/aas";

const client = mqtt.connect(mqtt_url);

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

    // if message is a callForProposal
    if (messageJSON.hasOwnProperty("frame")) {
        const frame = messageJSON.frame;

        // Check if the "frame" object has the "type" property
        if (frame.hasOwnProperty("type")) {
            // Check if the "type" property is equal to "callForProposal"
            if (frame.type === "callForProposal") {
                console.log("Received callForProposal");
                handleCallForProposal(messageJSON);
            }
        }
    }
});


function handleCallForProposal(callForProposalMessage) {
    // notUnderstood
    client.publish("bidding", notUnderstood(callForProposalMessage));
}
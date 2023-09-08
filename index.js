import {
    notUnderstood,
    refuse,
    proposal
} from "./messages.js";

import mqtt from "mqtt";

const mqtt_url = "mqtt://localhost:1883";
const digital_factory_aas_url = "http://localhost:4001/aasServer/shells/https%3A%2F%2Fexample.com%2Fids%2Faas%2F0245_9172_5012_5621/aas";
const storing_submodel_state_url = digital_factory_aas_url + "/submodels/Capabilities/submodel/submodelElements/StoringState";

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
    // console.log(messageJSON);

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
    if (!callForProposalMessage?.frame?.interactionElements) {
        console.log("No interaction elements found in callForProposal!");
        // notUnderstood
        console.log("Sending NotUnderstood...");
        client.publish("bidding", notUnderstood(callForProposalMessage));
        console.log("NotUnderstood sent");
    }
    else {
        // check the state of StoringSubmodel
        const storingState = getStoringState();
        console.log("StoringSubmodel state: " + storingState);
        if (storingState) {
            // StoringSubmodel is true / available
            console.log("StoringSubmodel is available, sending proposal...");
            client.publish("bidding", proposal(callForProposalMessage));
            console.log("Proposal sent");
        }
        else {
            // StoringSubmodel is false / not available
            console.log("StoringSubmodel is not available");
            client.publish("bidding", refuse(callForProposalMessage));
            console.log("Refuse sent");
        }
    }
}


async function getStoringState() {
    async function getStoringState() {
        try {
            const response = await fetch(storing_submodel_state_url);
            const data = await response.json();

            if (data?.value === "true") {
                // StoringSubmodel is true / available
                return 1;
            } else {
                // StoringSubmodel is false / not available
                return 2;
            }
        } catch (error) {
            console.log(error);
            return 3;
        }
    }
}
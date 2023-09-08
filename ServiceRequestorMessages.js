
/**
 * Below messages are intended to be sent to the MQTT broker,
 * by the ServiceRequestor.
 */



// Sample message for the call for proposal
const callForProposal = {
    "frame": {
        "semanticProtocol": {
            "keys": [
                {
                    "type": "GlobalReference",
                    "local": "local",
                    "value": "http://www.vdi.de/gma720/vdi2193_2/bidding",
                    "idType": false
                }
            ]
        },
        "type": "callForProposal",
        "messageId": "callForProposal_1847",
        "sender": {
            "identification": {
                "id": "https://ovgu.de/aas/product",
                "idType": "URI"
            },
            "role": {
                "name": "ServiceRequester"
            }
        },
        "replyBy": "MQTT",
        "replyTo": "MQTT",
        "conversationId": "ProductionOrder_111",
        "interactionElements": [
            {
                "idShort": "StoringSubmodel",
                "identification": {
                    "idType": "IRI",
                    "id": "https://example.com/ids/sm/2021_0272_5012_5930"
                }
            }
        ]
    }
};


// Sample message for acceptProposal
const acceptProposal = {
    "frame": {
        "semanticProtocol": {
            "keys": [
                {
                    "type": "GlobalReference",
                    "local": "local",
                    "value": "http://www.vdi.de/gma720/vdi2193_2/bidding"
                    ,
                    "idType": false
                }
            ]
        },
        "type": "acceptProposal",
        "messageId": "acceptProposal_1855"
        ,
        "sender": {
            "identification": {
                "id": "https://ovgu.de/aas/product"
                ,
                "idType": "URI"
            },
            "role": {
                "name": "ServiceRequester"
            }
        },
        "replyBy": "MQTT"
        ,
        "replyTo": "MQTT"
        ,
        "conversationId": "ProductionOrder_111"
        ,
        "receiver": {
            "identification": {
                "id": "https://ovgu.de/aas/boringprovider1"
                ,
                "idType": "URI"
            },
            "role": {
                "name": "ServiceProvider"
            }
        }
    }
};
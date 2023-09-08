
export const notUnderstood = (callForProposalMessage) => {
    let json = {
        "frame": {
            "semanticProtocol": {
                "keys": [{
                    "type": "GlobalReference",
                    "local": "local",
                    "value": "http://www.vdi.de/gma720/vdi2193_2/bidding"
                    ,
                    "idType": false
                }]
            },
            "type": "notUnderstood",
            "messageId": "notUnderstood_913",
            "sender": {
                "identification": {
                    "id": "https://ovgu.de/aas/transportprovider"
                    ,
                    "idType": "URI"
                },
                "role": {
                    "name": "ServiceProvider"
                }
            },
            "replyBy": "MQTT",
            "replyTo": "MQTT",
            "conversationId": "ProductionOrder_111",
            "receiver": {
                "identification": {
                    "id": "https://ovgu.de/aas/product"
                    ,
                    "idType": "URI"
                },
                "role": {
                    "name": "ServiceRequester"
                }
            }
        },
        "interactionElements": []
    }

    return JSON.stringify(json);
}

export const refuse = () => {
    let json = {
        "frame": {
            "semanticProtocol": {
                "keys": [{
                    "type": "GlobalReference",
                    "local": "local",
                    "value": "http://www.vdi.de/gma720/vdi2193_2/bidding"
                    ,
                    "idType": false
                }]
            },
            "type": "refuse",
            "messageId": "refuse_913",
            "sender": {
                "identification": {
                    "id": "https://ovgu.de/aas/transportprovider"
                    ,
                    "idType": "URI"
                },
                "role": {
                    "name": "ServiceProvider"
                }
            },
            "replyBy": "MQTT",
            "replyTo": "MQTT",
            "conversationId": "ProductionOrder_111",
            "receiver": {
                "identification": {
                    "id": "https://ovgu.de/aas/product"
                    ,
                    "idType": "URI"
                },
                "role": {
                    "name": "ServiceRequester"
                }
            }
        },
        "interactionElements": []
    }

    return JSON.stringify(json);
}


export const proposal = () => {
    let json = {
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
            "type": "proposal",
            "messageId": "proposal_1117"
            ,
            "sender": {
                "identification": {
                    "id": "https://ovgu.de/aas/boringprovider1"
                    ,
                    "idType": "URI"
                }, "role": {
                    "name": "ServiceProvider"
                }
            },
            "replyBy": "MQTT",
            "replyTo": "MQTT",
            "conversationId": "ProductionOrder_111"
            ,
            "receiver": {
                "identification": {
                    "id": "https://ovgu.de/aas/product"
                    ,
                    "idType": "URI"
                },
                "role": {
                    "name": "ServiceRequester"
                }
            }
        },
        "interactionElements": [
            {
                "semanticId": {
                    "keys": [
                        {
                            "type": "GlobalReference",
                            "local": false,
                            "value": "0173-1#01-AKG243#015",
                            "index": 0,
                            "idType": "IRDI"
                        }
                    ]
                },
                "hasDataSpecification": [],
                "identification": {
                    "idType": "IRI",
                    "id": "www.company.com/ids/sm/9155_8012_0102_7883"
                },
                "idShort": "Boring",
                "modelType": {
                    "name": "Submodel"
                },
                "kind": "Instance",
                "submodelElements": [
                    {
                        "ordered": false,
                        "allowDuplicates": false,
                        "semanticId": {
                            "keys": []
                        },
                        "constraints": [],
                        "hasDataSpecification": [],
                        "idShort": "TechnicalProperties",
                        "modelType": {
                            "name": "SubmodelElementCollection"
                        },
                        "value": [
                            {
                                "ordered": false, "allowDuplicates": false,
                                "semanticId": {
                                    "keys": []
                                },
                                "constraints": [],
                                "hasDataSpecification": [],
                                "idShort": "WorkpieceProperties",
                                "modelType": {
                                    "name": "SubmodelElementCollection"
                                },
                                "value": [
                                    {
                                        "value": "S235JR",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#02-AAM562#002",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "MaterialOfWorkpiece",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    },
                                    {
                                        "ordered": false,
                                        "allowDuplicates": false,
                                        "semanticId": {
                                            "keys": []
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "Dimensions",
                                        "modelType": {
                                            "name": "SubmodelElementCollection"
                                        },
                                        "value": [
                                            {
                                                "value": "60",
                                                "semanticId": {
                                                    "keys": [
                                                        {
                                                            "type": "GlobalReference", "local": false,
                                                            "value": "0173-1#02-AAI631#007",
                                                            "index": 0,
                                                            "idType": "IRDI"
                                                        }
                                                    ]
                                                },
                                                "constraints": [],
                                                "hasDataSpecification": [],
                                                "idShort": "Height",
                                                "modelType": {
                                                    "name": "Property"
                                                },
                                                "valueType": {
                                                    "dataObjectType": {
                                                        "name": ""
                                                    }
                                                },
                                                "kind": "Instance"
                                            },
                                            {
                                                "value": "80",
                                                "semanticId": {
                                                    "keys": [
                                                        {
                                                            "type": "GlobalReference",
                                                            "local": false,
                                                            "value": "0173-1#02-AAI466#007",
                                                            "index": 0,
                                                            "idType": "IRDI"
                                                        }
                                                    ]
                                                },
                                                "constraints": [],
                                                "hasDataSpecification": [],
                                                "idShort": "Width",
                                                "modelType": {
                                                    "name": "Property"
                                                },
                                                "valueType": {
                                                    "dataObjectType": {
                                                        "name": ""
                                                    }
                                                },
                                                "kind": "Instance"
                                            },
                                            {
                                                "value": "80",
                                                "semanticId": {
                                                    "keys": [
                                                        {
                                                            "type": "GlobalReference",
                                                            "local": false,
                                                            "value": "0173-1#02-AAE432#007",
                                                            "index": 0,
                                                            "idType": "IRDI"
                                                        }
                                                    ]
                                                },
                                                "constraints": [],
                                                "hasDataSpecification": [],
                                                "idShort": "Depth",
                                                "modelType": {
                                                    "name": "Property"
                                                },
                                                "valueType": {
                                                    "dataObjectType": {
                                                        "name": ""
                                                    }
                                                },
                                                "kind": "Instance"
                                            }
                                        ],
                                        "kind": "Instance"
                                    },
                                    {
                                        "value": "DIN EN 10027:2016-10",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#02-AAQ184#001",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "ReferencedStandartOfMaterialShortName",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    },
                                    {
                                        "value": "235",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#02-AAI990#001",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "TensileStrengthOfMaterial",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    },
                                    {
                                        "value": "HB 70",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#07-ABC885#001",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "Hardness",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    },
                                    {
                                        "value": "23.4",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#02-BAB576#001",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "WeightOfWorkpiece",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    }
                                ],
                                "kind": "Instance"
                            },
                            {
                                "ordered": false,
                                "allowDuplicates": false,
                                "semanticId": {
                                    "keys": []
                                },
                                "constraints": [],
                                "hasDataSpecification": [],
                                "idShort": "FunctionalProperties",
                                "modelType": {
                                    "name": "SubmodelElementCollection"
                                },
                                "value": [
                                    {
                                        "value": "15",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#02-AAA026#007",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "drillingDiameter",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    },
                                    {
                                        "value": "50",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#02-AAJ214#003",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "drillingDepth",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    },
                                    {
                                        "value": "8",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": "0173-1#02-AAO933#001",
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "ISOToleranceClass",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    },
                                    {
                                        "value": "6.3",
                                        "semanticId": {
                                            "keys": [
                                                {
                                                    "type": "GlobalReference",
                                                    "local": false,
                                                    "value": ""
                                                    ,
                                                    "index": 0,
                                                    "idType": "IRDI"
                                                }
                                            ]
                                        },
                                        "constraints": [],
                                        "hasDataSpecification": [],
                                        "idShort": "RoughnessAverageOfBore",
                                        "modelType": {
                                            "name": "Property"
                                        },
                                        "valueType": {
                                            "dataObjectType": {
                                                "name": ""
                                            }
                                        },
                                        "kind": "Instance"
                                    }
                                ],
                                "kind": "Instance"
                            },
                            {
                                "ordered": false,
                                "allowDuplicates": false,
                                "semanticId": {
                                    "keys": []
                                },
                                "constraints": [],
                                "hasDataSpecification": [],
                                "idShort": "EnvironmentalProperties",
                                "modelType": {
                                    "name": "SubmodelElementCollection"
                                },
                                "value": [],
                                "kind": "Instance"
                            }
                        ],
                        "kind": "Instance"
                    },
                    {
                        "ordered": false,
                        "allowDuplicates": false,
                        "semanticId": {
                            "keys": []
                        },
                        "constraints": [],
                        "hasDataSpecification": [],
                        "idShort": "CommercialProperties",
                        "modelType": {
                            "name": "SubmodelElementCollection"
                        },
                        "value": [
                            {
                                "value": "DEU, Magdeburg, Universitätsplatz 2, OvGU-Demonstrator, Pos 3",
                                "semanticId": {
                                    "keys": [
                                        {
                                            "type": "GlobalReference",
                                            "local": false,
                                            "value": "0173-1#02-BAF163#002",
                                            "index": 0,
                                            "idType": "IRDI"
                                        }
                                    ]
                                },
                                "constraints": [],
                                "hasDataSpecification": [],
                                "idShort": "VenueOfProvision",
                                "modelType": {
                                    "name": "Property"
                                },
                                "valueType": {
                                    "dataObjectType": {
                                        "name": ""
                                    }
                                },
                                "kind": "Instance"
                            },
                            {
                                "value": "14d",
                                "semanticId": {
                                    "keys": [
                                        {
                                            "type": "GlobalReference",
                                            "local": false,
                                            "value": "0173-1#02-AAO738#001",
                                            "index": 0,
                                            "idType": "IRDI"
                                        }
                                    ]
                                },
                                "constraints": [],
                                "hasDataSpecification": [],
                                "idShort": "deliveryTime",
                                "modelType": {
                                    "name": "Property"
                                },
                                "valueType": {
                                    "dataObjectType": {
                                        "name": ""
                                    }
                                },
                                "kind": "Instance"
                            },
                            {
                                "value": "10",
                                "semanticId": {
                                    "keys": []
                                },
                                "idShort": "listprice",
                                "modelType": {
                                    "name": "Property"
                                },
                                "valueType": {
                                    "dataObjectType": {
                                        "name": ""
                                    }
                                },
                                "kind": "Instance"
                            },
                            {
                                "value": "20",
                                "semanticId": {
                                    "keys": [
                                        {
                                            "type": "GlobalReference",
                                            "local": false,
                                            "value": ""
                                            ,
                                            "index": 0,
                                            "idType": "IRDI"
                                        }
                                    ]
                                },
                                "constraints": [],
                                "hasDataSpecification": [],
                                "idShort": "DistanceToPreferredVenueOfProvision",
                                "modelType": {
                                    "name": "Property"
                                },
                                "valueType": {
                                    "dataObjectType": {
                                        "name": ""
                                    }
                                },
                                "kind": "Instance"
                            }
                        ],
                        "kind": "Instance"
                    }
                ]
            }
        ]
    }

    return JSON.stringify(json);
}
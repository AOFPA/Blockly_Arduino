function main() {
    var toolbox = {
        "kind": "categoryToolbox",
        "contents": [{
                "kind": "category",
                "name": "Control",
                "contents": [{
                    "kind": "block",
                    "type": "controls_if"
                }, ]
            },
            {
                "kind": "category",
                "name": "Logic",
                "contents": [{
                        "kind": "block",
                        "type": "logic_compare"
                    },
                    {
                        "kind": "block",
                        "type": "logic_operation"
                    },
                    {
                        "kind": "block",
                        "type": "logic_boolean"
                    }
                ]
            },
            {
                "kind": "category",
                "name": "arduino",
                "contents": [{
                        "kind": "block",
                        "type": "output"
                    },
                    {
                        "kind": "block",
                        "type": "main"
                    }
                ]
            },
        ]
    }

    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolbox

    });

    // var xmlText = '<xml xmlns="https://developers.google.com/blockly/xml">' +
    //     '<block type="math_number"></block></xml>';
    // Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xmlText), workspace);
}
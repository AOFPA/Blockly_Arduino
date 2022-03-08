Blockly.defineBlocksWithJsonArray([{
    "type": "output",
    "message0": "%1 LED ต่อขาที่ %2 กระพริบทุก ๆ  %3 วินาที",
    "args0": [{
            "type": "field_image",
            "src": "https://cf.shopee.co.th/file/211307a8d8e137784a1ba3b13056d51a",
            "width": 150,
            "height": 150,
            "alt": "*",
            "flipRtl": false
        },
        {
            "type": "field_number",
            "name": "pin",
            "value": 0,
            "min": 0,
            "max": 13
        },
        {
            "type": "field_number",
            "name": "delay",
            "value": 0,
            "min": 0
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}]);

// Blockly.JavaScript['output'] = function(block) {
//     var number_pin = block.getFieldValue('pin');
//     var number_delay = block.getFieldValue('delay');
//     // TODO: Assemble JavaScript into code variable.
//     alert('hello')
//     var code = 'hello world;';
//     return code;
// };
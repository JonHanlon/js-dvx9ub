// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const results = $('#results');

appDiv.innerHTML = `<h1>JS Starter</h1>`;

import { xlCoords } from './sirens.js'
import { getJSAttr } from './sirens.js'
import { getRangeValue } from './sirens.js'
import { lowercaseKeys } from './sirens.js'

//module.exports.getRangeValue = getRangeValue;
//module.exports.getJSAttr = getJSAttr;
//module.exports.xlCoords = xlCoords;

var q2 = {}; q2.a1 = 44;

var id = 'R19C34'
var fred = [{ "Address": "Z31", "MaxLength": 28, "Color": "Red", "Size": "Large" }, { "Address": "AH19", "MaxLength": 12, "Color": "Blue", "Size": "Med" }, { "Address": "ZZ22", "Age": 27, "Color": "Yellow", "Size": "Med" }];
fred = lowercaseKeys(fred);

var maxLen = getJSAttr(fred, id, 'maxlength')

q2 = xlCoords('z31');

results.text('Howdy ' + q2.alt + ' ' + maxLen )

var data = [{"name":"Lenovo Thinkpad 41A4298","website":"google"},
{"name":"Lenovo Thinkpad 41A2222","website":"google"},
{"name":"Lenovo Thinkpad 41Awww33","website":"yahoo"},
{"name":"Lenovo Thinkpad 41A424448","website":"google"},
{"name":"Lenovo Thinkpad 41A429rr8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ff8","website":"ebay"},
{"name":"Lenovo Thinkpad 41A429ss8","website":"rediff"},
{"name":"Lenovo Thinkpad 41A429sg8","website":"yahoo"}]

var data_filter = fred.filter( element => element.address.toLowerCase() === "Z31".toLowerCase() )
console.log(data_filter[0].color)





console.info(lowercaseKeys(fred))
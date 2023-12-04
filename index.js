const information = require('./information');
const cowsay = require('cowsay');

const message = `Salut, je suis ${information.name} du campus de ${information.campus}!`;
console.log(cowsay.say({ text: message, e: "oO", T: "U " }));

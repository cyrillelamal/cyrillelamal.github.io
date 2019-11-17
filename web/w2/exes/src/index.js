const moment = require('moment');
const faker = require('faker');


let pre = document.createElement("pre");

pre.textContent = `${moment().format("dd/mm/YYYY hh:mm:ss")}\n`;

pre.textContent += `${faker.internet.email()}`;

document.body.appendChild(pre);

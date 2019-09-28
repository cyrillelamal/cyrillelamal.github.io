const moment = require('moment');
const faker = require('faker');


let pre = document.createElement("pre");

pre.textContent = `${moment("dd:mm:YYYY")}\n`;

pre.textContent += `${faker.internet.email()}`;

document.body.appendChild(pre);

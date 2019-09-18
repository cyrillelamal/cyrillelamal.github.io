const LibXML = require('node-libxml');
let libxml = new LibXML();
const dtd = '1.dtd';
let xml = libxml.loadXml('1.xml');
libxml.loadDtds([dtd]);
let valid = libxml.validateAgainstDtds();
if (valid === dtd) console.log('good'); else console.log(libxml.validationDtdErrors);
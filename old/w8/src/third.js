const fetch = require('node-fetch');


const buildURL = (lastName, obj, rawURL='http://3336.kodaktor.ru/ivanov?result') => {
    const url = rawURL.replace('ivanov', lastName)
                + '='
                + encodeURIComponent(JSON.stringify(obj));
    return url;
}

const request3336 = async (lastName, obj, url=null) => {
    if (url === null) url = buildURL(lastName, obj);
    const txt = await fetch(url).then(res => res.text())
    return txt;
}

module.exports.request3336 =request3336;

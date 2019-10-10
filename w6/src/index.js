const pause = require('goss_pause');

console.time('g');
pause(5000) || console.timeEnd('g');

setTimeout(() => console.log('I\'ve slept'), 5000);

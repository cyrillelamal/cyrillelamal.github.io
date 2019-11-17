(function outer() {
    return () => {console.log('Меня вызвали!'); };
})()();

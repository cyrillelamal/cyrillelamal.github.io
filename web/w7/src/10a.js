const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ];


nums = letters.map(letter => {
    return letter.charCodeAt(0);
});
console.log(nums);

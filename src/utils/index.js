function chunk(array, size) {
    const temp = [];
    for (let i = 0; i < array.length; i += size) {
        temp.push(array.slice(i, i + size));
    }
    return temp;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSymbol(start, end) {
    return String.fromCharCode(getRandomRange(start, end));
}

export { chunk, shuffle, getRandomRange, getRandomSymbol };

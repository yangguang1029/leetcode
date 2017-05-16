const num = 6;

function guess(n) {
    if (n > num) {
        return 1;
    } else if (n < num) {
        return -1;
    }
    return 0;
}

function guessNum(n) {
    let low = 1;
    let high = n;
    while (low < high) {
        if (guess(low) === 0) return low;
        if (guess(high) === 0) return high;
        let mid = Math.floor((low + high) / 2);
        let result = guess(mid);
        if (result === 1) {
            high = mid;
        } else if (result === -1) {
            low = mid;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(guessNum(10))
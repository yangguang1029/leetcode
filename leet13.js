/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i = 0;
    let re = 0;
    let next;
    while (i < s.length) {
        let c = s[i];
        switch (c) {
            case "M":
                re += 1000;
                break;
            case "C":
                next = s[i + 1];
                if (next === "D") {
                    re += 400;
                    i += 1;
                } else if (next === "M") {
                    re += 900;
                    i += 1;
                } else {
                    re += 100;
                }
                break;
            case "D":
                re += 500;
                break;
            case "X":
                next = s[i + 1];
                if (next === "L") {
                    re += 40;
                    i += 1;
                } else if (next === "C") {
                    re += 90;
                    i += 1;
                } else {
                    re += 10;
                }
                break;
            case "L":
                re += 50;
                break;
            case "V":
                re += 5;
                break;
            case "I":
                next = s[i + 1];
                if (next === "V") {
                    re += 4;
                    i += 1;
                } else if (next === "X") {
                    re += 9;
                    i += 1;
                } else {
                    re += 1;
                }
                break;
            default:
                break;
        }
        i += 1;
    }
    return re;
};
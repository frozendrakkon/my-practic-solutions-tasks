const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
function roman2arabic(num) {
    // превратить строку в массив
    // пробежать по массиву и проссумировать
    // вернуть sum
    // У тебя есть массив [и, и, и] тебе надо его превратить в [1, 1, 1]

    const arr = num.split(""); // ["III"]

    arr.forEach(function(romanValue) {
        // ["I", "I" "I"]
        romanValue = romans["I"]; // ["1", "1", "1"]
        console.log(romanValue);
    });
}

console.log(roman2arabic("III") == 3);

// console.log(roman2arabic("V") === 5);

// console.log(roman2arabic("IX") === 9);

// console.log(roman2arabic("MXM") === 1990);

// console.log(roman2arabic("MXMIV") === 1994)

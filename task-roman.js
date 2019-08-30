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
    let sum = 0;
    const arrayNumArabic = [];
    const arr = num.split(""); //сделали массив

    arr.forEach(function(romanNum) {
        const arabicNum = romans[romanNum];
        arrayNumArabic.push(arabicNum);
    });

    const reverseArr = arrayNumArabic.slice().reverse();

    reverseArr.forEach(function(currentArabicNum, index) {
        const nextArabicNum = reverseArr[index + 1] || false;

        // если есть следующее число,
        if (nextArabicNum && currentArabicNum < nextArabicNum) {
            sum = sum - currentArabicNum;
        } else {
            sum = sum + currentArabicNum;
        }
    });

    p = document.getElementById("sum");
    p.innerHTML += sum;

    console.log(sum);
    return sum;
}
console.log(roman2arabic("MCMXCIII"));

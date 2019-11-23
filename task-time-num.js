function DoNextNum(num) {
    for (let i = num; i <= 10; i++) {
        setTimeout(() => console.log(i), (i - num) * 1000);
    }
}
DoNextNum(0);

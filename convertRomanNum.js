const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
    };
    
    const convertRomanNum = ((ArrabicNum) => {
    const arrayArrabicNum = ArrabicNum.split(""); // сделали массив арабских цифр
    let sum = 0
    
    const convertArabic = arrayArrabicNum.map((cur) => {
    return romans[cur]; // конвертировали арабские цифры в классические
    })
    console.log("convertArabic", convertArabic);
    
    convertArabic.forEach((curElement, index, array) => {
      const nextElement = array[index + 1] || false;
    
      if (curElement < nextElement) {
        sum = sum - curElement
      } else {
        sum = sum + curElement
      }
    })
    return sum
    })
    console.log(convertRomanNum("MMCDL"))
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
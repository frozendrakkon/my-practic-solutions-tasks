const fizzBuzz = ((end) => {
  
  for (let i = 1; i <= end; i++) {
     if(i % 5 === 0 && i % 3 === 0) {
      console.log ("fizzBuzz")
    } else if(i % 5 === 0) {
      console.log ("Buzz")
    } else if(i % 3 === 0) {
      console.log("Fizz")
    } else console.log(i)
  }
})
fizzBuzz(15)
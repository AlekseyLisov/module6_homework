function test_prime(n) {

    if (n===1)  {
      return `${n} не простое число`;
    }

    else if (n > 1000) {
      return `Данные неверны`;
    }
    
    else if (n === 2)  {
      return `${n} простое число`;
    } else   {
      for(var x = 2; x < n; x++)  {
        if(n % x === 0) {
          return `${n} не простое число`;
        }
      }
      return `${n} простое число`;  
    }
}
  
console.log(test_prime(51));
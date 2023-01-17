function EvenOddNumbers() {
    let arr = [0, 1, 2, 3, 4, 5, 6];
    
    let even = arr.filter(elem => elem % 2 === 0);
    let zero = arr.filter(elem => elem === 0);
    console.log(`${even.length} - четных, из них равных нулю - ${zero.length}`);
    
    let odd = arr.filter(elem => elem % 2 !== 0);
    console.log(`${odd.length} - нечетных`);
}
    
EvenOddNumbers();


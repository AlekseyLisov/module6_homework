let a = 10;
let b = 11;
function number(a){
    function sum(b) {
        return a + b;
    }
    return sum(b);
}
console.log(number(a));
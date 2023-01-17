const pow = (x, n) => {
    if (Number.isInteger(x) === true && Number.isInteger(n) === true && x > 0 && n > 0) {
    let result = Math.pow(x, n);
    console.log(result);
}
    else {
        console.log(`Одно из чисел не целое`)
}
}
pow(6, 2);
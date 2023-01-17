function play(a, b){
    let poz = a;
    const intervalid = setInterval(function(){
    console.log(poz);
    poz++;
    if(poz === b + 1) {
        clearInterval(intervalid);
    }
}, 1000);
}
play(5, 15)
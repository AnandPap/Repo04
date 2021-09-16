function main(){
    // only change code below this line
    var firstNum=6, secondNum=25, thirdNum=5.2;
    firstNum *= 9;
    thirdNum *= 10;
    secondNum /= 5;
    // only change code above this line
    return {
        firstNum,
        secondNum,
        thirdNum
    };
}

console.log(main());
module.exports = main;
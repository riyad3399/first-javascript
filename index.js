// // problem 1 

function mindGame(inputNumber){
    if(typeof minus == number){
        return 'valid number'
    }
    let multiple = inputNumber * 3;
    let sum = multiple + 10;
    let divide = sum / 2;
    let minus = divide - 5;
    return minus;
}
const result = mindGame(50);
console.log(result);


// // problem 2

function evenOdd(string){
    const stringLength = string.length;
    if(stringLength % 2 == 0){
         return 'even';
    }
    else{
        return 'odd';
    }
}
// const number = evenOdd('Batch7')
// let string = 'Batch7';
// console.log(number);


// // problem 3

function isLGSeven(inputNum){
   let totalMinus = inputNum - 7;
   if(totalMinus < 7){
    return totalMinus;
   }
   else if(totalMinus > 7){
     let doubleInput = inputNum + inputNum;
     return doubleInput;
   }

}
// const output = isLGSeven(15);
// console.log(output);


// problem 4

function findingBadData(numbers) {
  let negativeCount = 0;
  let positiveCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeCount ++;
    } else{
        positiveCount;
    }
  }
  return negativeCount;
}
// let result = findingBadData([ -4, -9, -5, -33, -55]);
// console.log(result);



// problem 5

function gemsToDiamond(firstFriend, secondFriend, thirdFriend){
    const oneGems = 21;
    const twoGems = 32;
    const threeGems = 43;

    let totalDiamond = firstFriend * oneGems + secondFriend * twoGems + thirdFriend * threeGems;
    if(totalDiamond > 2000){
        let remainingDiamond =  totalDiamond - 2000;
        return remainingDiamond;
    } 
    else if(totalDiamond < 2000){
        return totalDiamond;
    } 
}
// let total = gemsToDiamond(20, 200, 50);
// console.log(total);






/* 
 -----> problem 1 <-----

Description: This is a calculation function, this function do into, plus, divided, Minus with any number. 
*/

function mindGame(inputNumber){
    let multiple = inputNumber * 3;
    let sum = multiple + 10;
    let divide = sum / 2;
    let minus = divide - 5;
    return minus;
}
// const result = mindGame(5);
// console.log(result);


/* 
 ------> problem 2 <------

Description: This is a calculation function, this function calculate any string word length is even length or odd length .
*/

function evenOdd(string){
    const stringLength = string.length;
    if(stringLength % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
// const number = evenOdd('chatgpt')
// let string = 'Batch7';
// console.log(number);


/* 
 -----> problem 3 <------

Description: This is a calculation function, if the parameter number is positive number than result is double of the input.
*/

function isLGSeven(inputNum){
   let totalMinus = inputNum - 7;
   if(totalMinus < 7){
    return totalMinus;
   }
   else {
     let doubleInput = inputNum + inputNum;
     return doubleInput;
   }
}
// const output = isLGSeven(-15);
// console.log(output);


/*
 -----> problem 4 <-----

 Description: This is a function of negative or positive number checker.
 */

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
// let result = findingBadData([-4, -9, -5, -33, -55]);
// console.log(result);



/*
 -----> problem 5 <-----

Description: This is a function of one kind of international money converter.
 */

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
// let total = gemsToDiamond(100, 5, 1);
// console.log(total);






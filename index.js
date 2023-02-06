// problem 1 

function mindGame(inputNumber){
    let multiple = inputNumber * 3;
    let sum = multiple + 10;
    let divide = sum / 2;
    let minus = divide - 5;
    return minus;
}
const result = mindGame(50);
console.log(result);


// problem 2

function evenOdd(string){
    const stringLength = string.length;
    if(stringLength % 2 == 0){
         return 'even';
    }
    else{
        return 'odd';
    }
}
const number = evenOdd('Batch7')
let string = 'Batch7';
console.log(number);


// problem 3

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
const output = isLGSeven(15);
console.log(output);


// problem 4

// let numbers = [1, 2, 5, 8, -10, -3];
// const positiveNum = [];
// const negativeNum = [];

// function findingBadData(items){
//     if(items % 2 < 0){
//         negativeNum.push(items);
//         return items;
//     }
//     else if(items % 2 >= 0){
//         positiveNum.push(items);
//         return items;
//     }
// }
// const allNumbers = findingBadData(numbers);
// console.log(allNumbers);


// problem 5


function gemsToDiamond(firstFriend, secondFriend, thirdFriend){
    const oneGems = 21;
    const twoGems = 32;
    const threeGems = 43;

    let totalDiamond = firstFriend * oneGems + secondFriend * twoGems + thirdFriend * threeGems;
    let remainingDiamond =  totalDiamond - 2000;
    return remainingDiamond;
}
let total = gemsToDiamond(100, 5, 1);
console.log(total);






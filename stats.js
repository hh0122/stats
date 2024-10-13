const getUserInput = () => {
  let input = prompt("Please enter numbers separated by commas:");
  let stringArray = input.split(',');
  let numberArray = [];

  for (let i = 0; i < stringArray.length; i++) {
      numberArray.push(Number(stringArray[i]));
  }

  return numberArray;
};

//function to get the length of the array
const getLength = (numbers) => {
  let count = 0;
  for (let i=0;i< numbers.length; i++){
    count++;
  }
  return count;
}
//function to get total of the array
const getSum = (numbers) => {
  let sum = 0;
  for (let i = 0;i< numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}
//function to get mean of the array
const getMean = (numbers) => {
  return getSum(numbers) / getLength(numbers);
}

//function to get min of the array
const getMin = (numbers) => {
  let min = numbers[0];
  for (let i = 1; i< numbers.length; i++) {
    if (numbers[i] < min){
      min = numbers[i]
    }
  }
  return min;
}

//function to get max of the array
const getMax =(numbers) => {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++){
    if (numbers[i]> max){
      max = numbers[i]
    }
  }
  return max;
}

//function to get range of the array
const getRange = (numbers) =>{
  return getMax(numbers) - getMin(numbers);
}

//function to get the array with all even number
  const getEven = (numbers) =>{
    let even = [];
    for (let i = 0; i< numbers.length; i++){
      if (numbers[i] % 2 === 0){
        even.push(numbers[i]);
      }
    }
    return even;
  }

  //function to get the array with all odd numbers

  const getOdd = (numbers) =>{
    let odd = [];
    for (let i = 0; i< numbers.length; i++){
      if (numbers[i] % 2 === 1 ){
        odd.push(numbers[i]);
      }
    }
    return odd;
  }

  const main = () =>{
    const numbers = getUserInput();

    console.log(`Array of Numbers:`, numbers);
    console.log(`Length of Array:`, getLength(numbers));
    console.log(`Sum of the Arrays:`, getSum(numbers));
    console.log(`Mean of the Arrays:`, getMean(numbers));
    console.log(`Min of the Arrays:`, getMin(numbers));
    console.log(`Max of the Arrays:`, getMax(numbers));
    console.log(`Range of the Arrays:`, getRange(numbers));
    console.log(`Array with all Even Numbers:`, getEven(numbers));
    console.log(`Array with all Odd Numbers:`, getOdd(numbers));
  };

  main();
function ArrayMethods() {
  /*********************** Map, For, ForEach, For Of,For In, While, Do While  **********************************/
  const arr = new Array(10000000).fill(Math.random());

  console.time("for");
  for (let i = 0; i < arr.length; i++) {}
  console.timeEnd("for");

  console.time("forEach");
  arr.forEach(() => "");
  console.timeEnd("forEach");

  console.time("map");
  arr.map(() => "");
  console.timeEnd("map");

  console.time("for of");
  for (let i of arr) {
  }
  console.timeEnd("for of");

  console.time("for in");
  for (let i in arr) {
  }
  console.timeEnd("for in");

  console.time("while");
  let i = 0;
  while (i < arr.length) {
    i++;
  }
  console.timeEnd("while");

  console.time("do while");
  let j = 0;
  do {
    j++;
  } while (i < arr.length);
  console.timeEnd("do while");

  /*********************** Map, For, ForEach, For Of,For In, While, Do While  **********************************/

  const arr2 = [1, 2, 3, 4, 5];
  console.time("map");
  const doubledArr1 = arr2.map((item) => item * 2);
  console.log(doubledArr1); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("map");

  console.time("for");
  const doubledArr2 = [];
  for (let i = 0; i < arr2.length; i++) {
    doubledArr2.push(arr2[i] * 2);
  }
  console.log(doubledArr2); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("for");

  console.time("forEach");
  const doubledArr3: number[] = [];
  arr2.forEach((item) => {
    doubledArr3.push(item * 2);
  });
  console.log(doubledArr3); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("forEach");

  console.time("for of");
  const doubledArr4 = [];
  for (const item of arr2) {
    doubledArr4.push(item * 2);
  }
  console.log(doubledArr4); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("for of");

  console.time("for in");
  const doubledArr5 = [];
  for (const index in arr2) {
    doubledArr5.push(arr2[index] * 2);
  }
  console.log(doubledArr5); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("for in");

  console.time("while");
  const doubledArr6 = [];
  let x = 0;
  while (x < arr2.length) {
    doubledArr6.push(arr2[x] * 2);
    x++;
  }
  console.log(doubledArr6); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("while");

  console.time("do while");
  const doubledArr7 = [];
  let y = 0;
  do {
    doubledArr7.push(arr2[y] * 2);
    y++;
  } while (y < arr2.length);
  console.log(doubledArr7); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("do while");
  /*********************** Filter **********************************/
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.time("filter");
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("filter");

  console.time("for");
  const evenNumbers2 = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers2.push(numbers[i]);
    }
  }
  console.log(evenNumbers2); // Output: [2, 4, 6, 8, 10]
  console.timeEnd("for");

  /*********************** Reduce **********************************/

  console.time("reduce");
  const sumWithReducer = numbers.reduce((total, num) => total + num, 0);
  console.log(sumWithReducer); // Output: 55
  console.timeEnd("reduce");

  console.time("for");
  let sumWithForLoop = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumWithForLoop += numbers[i];
  }
  console.log(sumWithForLoop); // Output: 55
  console.timeEnd("for");

  /*********************** Splice, Slice, For *********************************/
  const numbers2 = [1, 2, 3, 4, 5];
  // Remove 2 elements from the 2nd index
  console.time("splice");
  const removedElements = numbers2.splice(2, 2);

  console.log(numbers2); // Output: [1, 2, 5]
  console.log(removedElements); // Output: [3, 4]
  console.timeEnd("splice");

  const numbers3 = [1, 2, 3, 4, 5];
  // Remove 2 elements from the 2nd index
  console.time("slice");
  const slicedElements = numbers3.slice(2, 4);
  console.log(slicedElements); // Output: [3, 4]
  console.log(numbers3); // Original array not changed:[1, 2, 3, 4, 5]
  console.timeEnd("slice");

  // Remove 2 elements from the 2nd index
  console.time("for");
  const startIndex = 2;
  const endIndex = 4;
  const slicedElements2 = [];
  for (let i = startIndex; i < endIndex; i++) {
    slicedElements2.push(numbers3[i]);
  }
  console.log(slicedElements2); // Output: [3, 4]
  console.log(numbers3); //   Original array not changed: [1, 2, 3, 4, 5]
  console.timeEnd("for");

  return <></>;
}

export default ArrayMethods;

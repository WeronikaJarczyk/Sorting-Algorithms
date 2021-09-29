// bubble sort - iterates over an array and swaps elements, if there is no more swaps - finishes execution O(n^2)

function bubbleSort(array) {
  let count = -1;
  while (count !== 0) {
    count = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // const temp = array[i];
        // array[i] = array[i + 1];
        // array[i + 1] = temp;
        // we can replace that code with:
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        count++;
      }
    }
  }
  return array;
}

const sortedArr = bubbleSort([5, 2, 4, 1, 3, 10, 7, 12, 0]);
console.log(sortedArr);
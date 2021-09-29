// The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
// O(n^2) takes the most time when array is sorted in reverse 

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
}

const sortedArr = insertionSort([5, 2, 4, 1, 20, 11, 9, 10, 0]);
console.log(sortedArr);
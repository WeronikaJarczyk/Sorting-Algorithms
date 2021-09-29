// QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. Then it sorts subarrays until length of 1
// Best and average scenario: O(n log(n)) worst: O(n^2) 

function quickSort(array) {

  if (array.length <= 1)
    return array;

  let pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] <= pivot) {
      leftArr.push(array[j]);
    } else {
      rightArr.push(array[j]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const sortedArr = quickSort([5, 2, 4, 1, 20, 11, 9, 10, 0]);
console.log(sortedArr);
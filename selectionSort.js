// Selection Sort - selects minimum vaule and swaps with the first element, then with second.... O(n^2)

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {

    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

const sortedArr = selectionSort([5, 2, 4, 1, 20, 11, 9, 10, 0]);
console.log(sortedArr);
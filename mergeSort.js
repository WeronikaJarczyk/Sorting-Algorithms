function merge(leftArr, rightArr) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      output.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      output.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

function mergeSort(array) {
  if (array.length <= 1)
    return array;

  const middle = Math.floor(array.length / 2);

  const leftArr = array.slice(0, middle);
  const rightArr = array.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));

}

const sortedArr = mergeSort([5, 2, 4, 1, 20, 11, 9, 10, 2]);
console.log(sortedArr);
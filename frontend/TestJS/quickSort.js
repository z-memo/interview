const quickSort = arr => {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([2, 3, 1, 5, 6, 454, 8879]));

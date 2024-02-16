function maxSumAndMinSum(arr) {
  arr.sort((a, b) => a - b);

  let maxSum =
    arr[arr.length - 1] +
    arr[arr.length - 2] +
    arr[arr.length - 3] +
    arr[arr.length - 4];

  let minSum = arr[0] + arr[1] + arr[2] + arr[3];

  return { maxSum, minSum };
}

const arr = [1, 2, 3, 4, 5];
const { maxSum, minSum } = maxSumAndMinSum(arr);
console.log("Max:", maxSum);
console.log("Min:", minSum);

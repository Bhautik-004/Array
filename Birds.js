const leastfrequent = (arr = []) => {
  let n = arr.length;
  arr.sort();
  let min_count = n + 1,
    res = -1;
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else {
      if (curr_count < min_count) {
        min_count = curr_count;
        res = arr[i - 1];
      }

      curr_count = 1;
    }
  }

  // If last element is least frequent
  if (curr_count < min_count) {
    min_count = curr_count;
    res = arr[n - 1];
  }

  return res;
};

const mostfrequent = (arr = []) => {
  let n = arr.length;
  arr.sort();
  let res = -1;
  let max_count = 0;
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else {
      if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[i - 1];
      }

      curr_count = 1;
    }
  }

  // If last element is least frequent
  if (curr_count > max_count) {
    max_count = curr_count;
    res = arr[n - 1];
  }

  return res;
};

console.log(leastfrequent([2, 3, 3, 3, 4, 4, 5, 4, 3, 1, 4]));
console.log(mostfrequent([2, 3, 3, 3, 4, 4, 5, 4, 3, 1, 4]));

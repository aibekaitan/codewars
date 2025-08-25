function isSortedAndHow(array) {
  // Check if the array is sorted in ascending order
  if (array.every((x, i) => i === 0 || x >= array[i - 1])) {
    return "yes, ascending";
  }
  
  // Check if the array is sorted in descending order
  if (array.every((x, i) => i === 0 || x <= array[i - 1])) {
    return "yes, descending";
  }

  // If neither is true, it's not sorted
  return "no";
}
export default function setFromArray(arr) {
  // Create a new Set object
  const set = new Set();

  // Iterate through the array and add each element to the Set
  for (const element of arr) {
    set.add(element);
  }

  // Return the Set
  return set;
}
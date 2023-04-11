export default function hasValuesFromArray(set, array){
  // Iterate through the array and check if each element exists in the Set
  for (const element of arr) {
    if (!set.has(element)) {
      return false; // Return false if any element is not found in the Set
    }
  }

  // Return true if all elements are found in the Set
  return true;
}
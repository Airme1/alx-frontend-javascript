export default function appendToEachArrayValue(array, appendString) {
  let value = [];
  for (let idx of array) {
    value.push(appendString + idx);
  }

  return value;
}

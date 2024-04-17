export default function getStudentIdsSum(students) {
  const initVal = 0;
  if (Array.isArray(students)) {
    return students.reduce((acc, curVal) => acc + curVal.id, initVal);
  }
  return [];
}

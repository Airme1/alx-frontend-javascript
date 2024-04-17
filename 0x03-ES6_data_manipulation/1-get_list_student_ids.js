export default function getListStudentIds(objArray) {
  if (Array.isArray(objArray)) {
    objArray.map((item) => item.id);
  } else {
    return [];
  }
}

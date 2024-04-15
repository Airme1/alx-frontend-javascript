import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  let container = [];
  Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    for (const item of values) {
      if (item.status === "fulfilled") {
        container.push({ status: item.status, value: item.value });
      } else {
        container.push({ status: item.status, value: `${item.reason}` });
      }
    }
  });
}

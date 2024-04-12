export default function getResponseFromAPI() {
  return new Promise((myResolve, myReject) => {
    if (true) {
      myResolve("good");
    } else {
      myReject("bad");
    }
  });
}

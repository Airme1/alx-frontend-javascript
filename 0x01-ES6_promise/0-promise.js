export default function getResponseFromAPI() {
  return new Promise((myResolve, myReject) => {
    myResolve("good");
    myReject("bad");
  });
}

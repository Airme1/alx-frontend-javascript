export default function handleResponseFromAPI(promise) {
  let myPromise = new Promise((myResolve, myReject) => {
    if (promise) {
      myResolve({ status: 200, body: "success" });
    } else {
      myReject({});
    }
  });

  myPromise
    .then((success) => console.log("Got a response from the API"))
    .catch((error) => console.log("Got a response from the API"));
}

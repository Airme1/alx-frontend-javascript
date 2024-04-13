export default function handleResponseFromAPI(promise) {
  let myPromise = new Promise((myResolve, myReject) => {
    if (promise) {
      myResolve({ status: 200, body: "success" });
      console.log("Got a response from the API");
    } else {
      myReject({});
    }
  });
}

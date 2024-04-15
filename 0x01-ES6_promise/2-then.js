export default function handleResponseFromAPI(promise) {
  return new Promise((myResolve, myReject) => {
    if (promise) {
      myResolve({ status: 200, body: "success" });
    } else {
      myReject({});
    }
  }).then(
    (success) => console.log("Got a response from the API"),
    (error) => console.log("Got a response from the API")
  );
}

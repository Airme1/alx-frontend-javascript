function getResponseFromAPI() {
  let myPromise = new Promise((myResolve, myReject) => {
    if(true){
        myResolve(true);
    }
    else{
        myReject(false);
    }
  });

  myPromise.then(
    (response) => console.log(response);
  ).catch(
    (error) => console.log(error)
);
}

getResponseFromAPI();
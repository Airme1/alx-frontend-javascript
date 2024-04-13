export default function signUpUser(firstName, lastName) {
  return new Promise((myResolve, myReject) => {
    myResolve({ firstName: `${firstName}`, lastName: `${lastName}` });
  });
}

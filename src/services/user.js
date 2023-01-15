import Axios from "axios";
let API = process.env.REACT_APP_API;

const userSignup = () => Axios.post(`${API}/user-login`);
const userSignin = () => {};

const userOperations = () => {
  return { userSignin, userSignup };
};

export default userOperations;

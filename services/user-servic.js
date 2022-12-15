import axios from "axios";

const BACKEND_URL = "http://192.168.1.124:8080/api/users/";
export async function signup(user) {
  return await axios
    .post(BACKEND_URL, user)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function loginUser(loginDetail) {
  return await axios
    .post("http://192.168.1.124:8080/api/v1/auth/login", loginDetail)
    .then((response) => response.data);
}
export async function allUser() {
  return await axios.get(BACKEND_URL).then((response) => response.data);
}

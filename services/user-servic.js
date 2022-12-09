import { myAxios } from "./helper";
import axios from "axios";

const BACKEND_URL = "http://192.168.1.124:8080/api/users/";
export async function signup(user) {
  return await axios
    .post(BACKEND_URL, user)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function login() {
  return await axios.get(BACKEND_URL).then((res) => res.data);
}
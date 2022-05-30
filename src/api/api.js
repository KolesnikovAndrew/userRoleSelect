import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-js.alef.dev/",
  timeout: 1000,
});

export function getRoles() {
  return instance
    .get("roles")
    .then((response) => response.data.data)
    .catch(function (error) {
      console.log(error);
    });
}
export function getUsers(pageNumber, usersCount) {
  return instance
    .get("users?page=" + pageNumber + "&count=" + usersCount)
    .then((response) => response.data.data)
    .catch(function (error) {
      console.log(error);
    });
}
export function getUser(id) {
  return instance
    .get("user/" + id)
    .then((response) => response.data.data)
    .catch(function (error) {
      console.log(error);
    });
}
export function setRole(id, role) {
  return instance
    .post("user/" + id + "/role/" + role)
    .then((response) => response.data.data)
    .catch(function (error) {
      console.log(error);
    });
}
export function removeRole(id, role) {
  return instance
    .delete("user/" + id + "/role/" + role)
    .then((response) => response.data.data)
    .catch(function (error) {
      console.log(error);
    });
}

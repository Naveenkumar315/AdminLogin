import axios from "axios";

// axios.defaults.headers["Content-Type"] = "application/json"; // Set Content-Type header in common object
// axios.defaults.headers["Accept"] = "application/json";
const token = sessionStorage.getItem("token");
if (token) {
  axios.defaults.headers["Authorization"] = `${token}`;
}

export default axios.create({
  baseURL: "http://" + window.location.hostname + ":1000/api",
  // ... rest of your Axios configuration ...
  // The interceptor can remain unchanged
});

import axios from "axios";

// configuration object
export default axios.create({
  baseURL: "http://" + window.location.hostname + ":1000/api",
});

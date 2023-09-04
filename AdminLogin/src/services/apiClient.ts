import axios from "axios";

// configuration object
export default axios.create({
  baseURL: "http://localhost:1000/api",
});

import apiClient from "./apiClient";

class AppService {
  signupUser(data:any) {
    return apiClient.post("/signUser", data);
  }
  loginUser(data:object){
    return apiClient.get("/login", data)
  }
}

export default new AppService();

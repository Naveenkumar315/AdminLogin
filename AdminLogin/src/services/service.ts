import apiClient from "./apiClient";

class AppService {
  signupUser(data:any) {
    return apiClient.post("/signUser",data);
  }
}

export default new AppService();

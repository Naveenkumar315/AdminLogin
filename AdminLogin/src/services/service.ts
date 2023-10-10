import apiClient from "./apiClient";

class AppService {
  signupUser(data:any) {
    return apiClient.post("/signUser", data);
  }
  loginUser(data:any){
    return apiClient.post("/login", data)
  }
  getuserlist(){
    return apiClient.post("/getuserlist")
  }
}

export default new AppService();

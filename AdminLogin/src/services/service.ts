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
  sessionLogout(data:any){
    return apiClient.post("/sessionLogout", data)
  }
}

export default new AppService();

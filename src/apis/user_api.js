import axios from "axios";

const UserBaseUrl = "https://randomuser.me/api/";

class UserApi {
  getHundredUsers() {
    return axios.get(UserBaseUrl + "?results=100");
  }
}

export default UserApi;

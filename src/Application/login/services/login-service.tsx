import axios from 'axios';
import qs from "qs";

interface UserParams {
  userIdentifier: string,
  credential: string,
  identityType: string
}

function getParams(user: UserParams) {
  const params = qs.stringify({
    userIdentifier: user.userIdentifier,
    credential: user.credential,
    identityType: user.identityType,
  });
  return params;
}

export default {
  login(user: UserParams) {
    const params = getParams(user);
    return axios
      .post(`login`, params,
        //   {
        //   auth: {
        //     username: "platform.admin",
        //     password: "c54e4f53d65c42ffb49069beae332e07"
        //   }
        // }
      )
      .then(response => {
        console.log("数据");
      });
  },
  logout() {
    console.log("退出");
  }
};

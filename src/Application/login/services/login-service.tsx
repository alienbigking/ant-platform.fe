import axios from 'axios';
import qs from "qs";

function getParams(user: object) {
  var params = qs.stringify({
    grant_type: "password",
  });
  return params;
}

export default {
  login(user: object) {
    const params = getParams(user);
    // return axios
    //   .post(`oauth/token`, params, {
    //     auth: {
    //       username: "platform.admin",
    //       password: "c54e4f53d65c42ffb49069beae332e07"
    //     }
    //   })
    //   .then(response => {
    //     console.log("数据");
    //   });
    return Promise.resolve({
      username: "新数据",
      password: "123456",
      mode: "account_password"
    })
  },
  logout() {
    console.log("退出");
  }
};

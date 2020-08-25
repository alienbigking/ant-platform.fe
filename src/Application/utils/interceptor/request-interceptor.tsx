// import tokenStorage from "../auth/token-storage";
import qs from "qs";

class RequestInterceptor {
  config(axios: any) {
    axios.interceptors.request.use(
      (config:any)   => {
        config.baseURL = `${(window as any).AUTH_BASE_URL}`;
        // console.log("请求url",config.baseURL);
        // config.withCredentials = true;
        // const token = tokenStorage.getToken();
        config.paramsSerializer = function (params:object) {
          return qs.stringify(params, {
            arrayFormat: "brackets"
          });
        };
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token.access_token}`;
        // }
        return Promise.resolve(config);
      },
      (error:any) => {
        return Promise.reject(error);
      }
    );
  }
}

export default RequestInterceptor;

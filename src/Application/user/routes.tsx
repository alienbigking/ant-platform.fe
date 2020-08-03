import * as components from "./components";

export default [
  {
    name: "用户列表",
    path: "/user/list",
    exact: true,
    component: components.UserList,
    routes: [],
    meta: {
      requiresAuth: false,
    }
  }
];

import * as components from "./components";

export default [
  {
    name: "用户列表",
    path: "/user/list",
    component: components.UserList,
    meta: {
      requiresAuth: false,
    }
  }
];

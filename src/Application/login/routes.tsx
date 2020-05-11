import * as components from "./components";

export default [
  {
    name: "登录",
    path: "/login",
    exact: true,
    component: components.StyleLogin,
    meta: {
      requiresAuth: false,
    }
  },
];

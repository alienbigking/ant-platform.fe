import * as components from "./components";

export default [
  {
    name: "登录",
    path: "/login",
    exact: true,
    component: components.LoginBody,
    meta: {
      requiresAuth: false,
    }
  },
  // {
  //   path: "/child/:id",
  //   component: Child,
  //   routes: [
  //     {
  //       path: "/child/:id/grand-child",
  //       component: GrandChild
  //     }
  //   ]
  // }
];

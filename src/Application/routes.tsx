import {routes as login} from "./login";
import {routes as user} from "./user";

import StyleMain from "./main";

export default [
  {
    name: "root",
    component: StyleMain,
    path: "/",
    exact: true,
    routes: [
      ...user
    ]
  },
  ...login,
]
;

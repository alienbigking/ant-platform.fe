import {Redirect} from "react-router-dom";

import {routes as login} from "./login";

import main from "./main";

export default [
  {
    path: "/",
    exact: true,
    component: main,
    routes: [
      {
        path: "/",
        exact: true,
        // redirect: '/dashboard'
      },
    ]
  },
  ...login,
]
;

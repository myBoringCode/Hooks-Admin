import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 超级表格模块
const x6Router: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: "X6示例"
    },
    children: [
      {
        path: "/x6/react",
        element: lazyLoad(React.lazy(() => import("@/views/x6/react/index"))),
        meta: {
          requiresAuth: false,
          title: "使用 X6",
          key: "x6react"
        }
      },
      {
        path: "/x6/basic",
        element: lazyLoad(React.lazy(() => import("@/views/x6/basic/index"))),
        meta: {
          requiresAuth: false,
          title: "使用 X6",
          key: "x6base"
        }
      }
    ]
  }
];

export default x6Router;

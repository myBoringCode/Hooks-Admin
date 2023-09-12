import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 超级表格模块
const todoListRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: "TodoList示例"
    },
    children: [
      {
        path: "/todolist/index",
        element: lazyLoad(React.lazy(() => import("@/views/todoList/index"))),
        meta: {
          requiresAuth: false,
          title: "TodoList示例",
          key: "todoList"
        }
      }
    ]
  }
];

export default todoListRouter;

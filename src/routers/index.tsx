import { Navigate, useRoutes, RouteObject as DOMRouteObject } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/login/index";

// * 导入所有router
const metaRouters = import.meta.glob("./modules/*.tsx", { eager: true });

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});
console.log("routerArray", routerArray);

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter as DOMRouteObject[]);
  return routes;
};

export default Router;

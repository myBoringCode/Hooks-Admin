import { createContext } from "react";
import { Todo } from "./interface";
const myContext = createContext<Todo[]>([]);
export default myContext;

import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Forgot from "./Forgot";
import Login1 from "./Login1";
const Routes =createBrowserRouter([
      {path: "/",element: <Home />},
      {path: "/Sign up", element:<Login/>},
      {path:"/Forgot",element:<Forgot/>},
      {path:"/Login",element:<Login1/>}
])
export default Routes
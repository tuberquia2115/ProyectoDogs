import App from "../../views/App/App";
import AuthLayout from './Auth/Auth';

const pathStart = "/";

 const appRoutes = [
     {
         path: pathStart + "Dogs",
         component: App
     },
     {
         path: pathStart + "auth",
         component: AuthLayout
     }
 ]
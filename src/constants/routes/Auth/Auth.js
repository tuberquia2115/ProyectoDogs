import Login from "../../views/Auth/Login/Login";
import AuthLayout from '../Auth/'


const pathStart = "/Auth/";

const appRoutesAuth = [
    {
        name: "Login",
        path: `${pathStart}login`,
        component: Login
    },
    {
        name: "Registro",
        path: `${pathStart}registro`
    },
    {redirect: true, to: `${pathStart}login`}
]

export default appRoutesAuth;
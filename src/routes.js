import LoginForm from "./components/login";
import RegisterForm from "./components/register";

const routes = [
    {
        path: '/login',
        component: LoginForm,
        exact: true
    },
    {
        path: '/register',
        component: RegisterForm,
        exact: true
    }
]

export default routes;
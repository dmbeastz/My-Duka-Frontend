import { Login } from './pages/Login/login';



const routes = [
    {
        path: "/signin",
        Element: Login,
        isAuthenticated: false,
        layout: "None",
        role: null,
        Sidebar: null,
    },
];



export default routes;
import AdminPanelLayout from "./_layouts/AdminPanelLayout/AdminPanelLayout";
import HomeLayout from "./_layouts/HomeLayout/HomeLayout";
import Register from "./_layouts/Register/Register";

export const _routes = [
    {
        path: "/",
        element: <HomeLayout />,
        exact: true
    },
    {
        path: "/register",
        element: <Register />,
    }, {
        path: "/admin",
        element: <AdminPanelLayout />
    }
]
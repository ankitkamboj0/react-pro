import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "components/Header";
import Home from "components/Home";
import About from "components/About";
import Contact from "components/Contact";
import ErrorPage from "components/ErrorPage";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import CardDetail from "./src/components/CardDetail";

const AppLayout = ()=>{
    return (
        <>
            <Header />
            <div className="p20">
                <Outlet />
            </div>
        </>
    )
}
const appRouter = createBrowserRouter([{
    path:"/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children:[{
        path:"/",
        element: <Home />,
    },{
        path:"/about",
        element: <About />,
    },{
        path:"/contact",
        element: <Contact />,
    },{
        path:"/card-detail/:id",
        element:<CardDetail/>
    }]
}])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

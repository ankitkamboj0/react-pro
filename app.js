import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import Header from "components/Header";
import Home from "components/Home";
import About from "components/About";
import ErrorPage from "components/ErrorPage";
import "./index.scss";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "components/Shimmer";
const Contact = lazy(()=>import("components/Contact"))
const CardDetail = lazy(()=> import("components/CardDetail"))

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
        element: <Suspense><Contact /></Suspense>,
    },{
        path:"/card-detail/:id",
        element:(<Suspense fallback={<Shimmer/>}>
            <CardDetail/>
        </Suspense>)
    }]
}])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

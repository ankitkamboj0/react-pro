import React, { Suspense, lazy, useState } from "react";
import { Provider } from "react-redux";
import ReactDOM  from "react-dom/client";
import Header from "components/Header";
import Home from "components/Home";
import About from "components/About";
import ErrorPage from "components/ErrorPage";
import "./index.scss";
import { createHashRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "components/Shimmer";
const Contact = lazy(()=>import("components/Contact"))
const CardDetail = lazy(()=> import("components/CardDetail"))
import  UserContext  from "utils/userContext";
import store from "store/store"
const AppLayout = ()=>{
    const [user,setUser] = useState({
        name:"test user"
    })
    return (
        <Provider store={store}>
            <UserContext.Provider value={{
                    user:user,
                    setUser:setUser
                }}>
                <Header />
                <div className="p20">
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createHashRouter([{
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

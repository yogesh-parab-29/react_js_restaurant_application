import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About"
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantPage from "./components/RestaurantPage";

const title = <h1>Title check rerfvedr dtbdbvgd</h1>

const HeaderComponent = () => {
    return (<>
        {title}
    </>)
}


// const Header = () =>{
//     return (<h1>This is Header
//         {title}
//     </h1>)
// }
const Body = () => {
    return (<h1>This is Body</h1>)
}
const Footer = () => {
    return (<h1>This is Footer</h1>)
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />);

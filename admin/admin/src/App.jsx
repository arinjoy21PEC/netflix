import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, RouteObject } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

const Layout = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Login />;
  }

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/newUser",
        element: <NewUser />,
      },
      {
        path: "/movies",
        element: <ProductList />
      },
      {
        path: "/movies/find/:productId",
        element: <Product />
      },
      {
        path: "/newProduct",
        element: <NewProduct />
      },
      {
        path: "/lists",
        element: <ListList />,
      },
      {
        path: "/list/:listId",
        element: <List />,
      },
      {
        path: "/newlist",
        element: <NewList />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

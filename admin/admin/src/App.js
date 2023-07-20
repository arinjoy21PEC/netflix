import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import Login from "./pages/Login/Login";

import "./App.css";

const Layout = () => {
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/users",
        element: <UserList />
      },
      {
        path: "/user/:userId",
        element: <User />
      },
      {
        path: "/newUser",
        element: <NewUser />
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
        element: <ListList />
      },
      {
        path: "/list/:listId",
        element: <List />
      },
      {
        path: "/newlist",
        element: <NewList />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

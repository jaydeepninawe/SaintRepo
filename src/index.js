import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Elibrary from "./component/Elibrary.jsx";
import Home from "./component/Home.jsx";
import Join from "./component/Join.jsx";
import About from "./component/About.jsx";






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
       <Route path='' element={<Home></Home>}></Route>
       <Route path='/join' element={<Join></Join>}></Route>
       <Route path='/elibrary' element={<Elibrary></Elibrary>}></Route>
       <Route path='/about' element={<About></About>}></Route>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Customer from "../pages/Customer";
import Item from "../pages/Item";
import NoMatch from "../pages/404Page";

function App() {
  return (
    // Routes nest inside one another. Nested route paths build upon 
    //  parent route paths, and nested route elements render inside
    //    parent route elements. See the note about <Outlet> below. 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="customer" element={<Customer />} />
        <Route path="item" element={<Item />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

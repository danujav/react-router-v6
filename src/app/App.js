import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "../pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

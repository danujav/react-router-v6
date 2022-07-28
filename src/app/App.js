import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
// import SimpleAppBarLayout from "../pages/Layout/SimpleAppBarLayout";
// import ResponsiveAppBar from "../pages/Layout/AppBar";
import MiniDrawer from "../pages/Layout/Drawer";

// Sub Outlets (Outlet mean sub children of Layout)
import Home from "../pages/Home";
import Customer from "../pages/Customer";
import Item from "../pages/Item";
import NoMatch from "../pages/404Page";
import Setting from "../pages/Setting";

function App() {
  return (
    // Routes nest inside one another. Nested route paths build upon 
    //  parent route paths, and nested route elements render inside
    //    parent route elements. See the note about <Outlet> below. 
    <Routes>
      <Route path="/" element={<MiniDrawer />}>
        <Route index element={<Home />} />
        <Route path="customer" element={<Customer />} />
        <Route path="item" element={<Item />} />
        <Route path="setting" element={<Setting />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

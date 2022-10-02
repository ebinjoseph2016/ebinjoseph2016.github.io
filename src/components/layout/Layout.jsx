import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../pages/home/HomeScreen";
import ListScreen from "../../pages/list/ListScreen";
import NotFound from "../../pages/notFound/NotFound";
import "./Layout.scss";

export default function Layout() {
  return (
    <div className="dashboardBase">
      <Routes>
        <Route path="/">
          <Route index element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="list" element={<ListScreen />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

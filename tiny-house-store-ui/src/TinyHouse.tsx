import React from "react";
import MainPage from "./main-page/MainPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function TinyHouse() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </HashRouter>
  );
}

export default TinyHouse;

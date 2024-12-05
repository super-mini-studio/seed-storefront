import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import TinyHouse from "./TinyHouse";

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <TinyHouse />
  </React.StrictMode>
);

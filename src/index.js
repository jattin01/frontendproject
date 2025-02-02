import React from "react";
import ReactDOM from "react-dom/client";
import ApplicationTable from "./ApplicationTable";
import "antd/dist/reset.css"; // Import Ant Design styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationTable />
  </React.StrictMode>
);

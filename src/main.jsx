import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";
import { Tooltip } from 'react-tooltip'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Tooltip id="my-tooltip"
     className="!bg-blue-500 !text-white !rounded-md !px-4"
     />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";
import { Tooltip } from "react-tooltip";
import AuthProvider from "./provider/AuthProvider.jsx";
import UtilitiesProvider from "./provider/UtilitiesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UtilitiesProvider>
        <RouterProvider router={router}></RouterProvider>
        <Tooltip
          id="my-tooltip"
          className="!bg-blue-600 !text-white !rounded-md !px-4"
        />
      </UtilitiesProvider>
    </AuthProvider>
  </StrictMode>
);

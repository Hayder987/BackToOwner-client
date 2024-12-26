import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";
import { Tooltip } from "react-tooltip";
import AuthProvider from "./provider/AuthProvider.jsx";
import UtilitiesProvider from "./provider/UtilitiesProvider.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <UtilitiesProvider>
          <RouterProvider router={router}></RouterProvider>
          <Tooltip
            id="my-tooltip"
            className="!bg-blue-600 !text-white !z-50 !rounded-md !px-4"
          />
        </UtilitiesProvider>
      </AuthProvider>
    </I18nextProvider>
  </StrictMode>
);

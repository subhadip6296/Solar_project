import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </Router>
);

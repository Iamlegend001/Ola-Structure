import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);

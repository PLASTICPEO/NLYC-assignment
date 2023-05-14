import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <App />
  </Router>
);

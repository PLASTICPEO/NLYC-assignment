import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/default";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import PortfolioDetails from "./pages/portfolioDetails";

function App() {
  return (
    <Routes>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route
        path="/"
        element={
          <DefaultLayout withContact isWhite>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/portfolio"
        element={
          <DefaultLayout>
            <Portfolio />
          </DefaultLayout>
        }
      />
      <Route
        path="/portfolio/:slug"
        element={
          <DefaultLayout>
            <PortfolioDetails />
          </DefaultLayout>
        }
      />
      <Route
        path="/services"
        element={
          <DefaultLayout withContact>
            <Services />
          </DefaultLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        }
      />
      <Route
        path="/about"
        element={
          <DefaultLayout withContact>
            <About />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;

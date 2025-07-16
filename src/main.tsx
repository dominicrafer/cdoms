import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./assets/styles/main.css";
import Layout from "./components/layout";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </HashRouter>
    </Layout>
  </StrictMode>
);

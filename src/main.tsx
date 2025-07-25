import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./assets/styles/main.css";
import Layout from "./components/layout";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>
);

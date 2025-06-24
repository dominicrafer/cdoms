import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
// import Contact from "./pages/contact";
// import About from "./pages/about";
import "./assets/css/index.scss";
import Layout from "./components/layout";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route> */}
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>
);

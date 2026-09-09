// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Vans from "./pages/VanDetail";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// styles
import "./assets/styles/header-footer.css";
import "./assets/styles/home.css";
import "./assets/styles/about.css";
import "./assets/styles/vans.css";
import VanDetail from "./pages/VanDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

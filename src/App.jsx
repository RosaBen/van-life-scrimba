// Packages
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// styles
import "./assets/styles/header-footer.css";
import "./assets/styles/home.css";
import "./assets/styles/about.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

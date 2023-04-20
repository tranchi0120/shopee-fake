import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          {/* home page route */}
          <Route path="/" element={<Home />} />
          {/* single product route */}
          <Route path="/product/:id" element={<ProductSingle />} />
          {/* category wise product listing route */}
          <Route path="/category/:category" element={<CategoryProduct />} />
          {/* cart */}
          <Route path="/cart" element={<Cart />} />
          {/* searched products */}
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

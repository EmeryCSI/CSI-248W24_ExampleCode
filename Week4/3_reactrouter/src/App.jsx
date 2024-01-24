import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* The Routes component wraps each route */}
      <Routes>
        {/* Define some routes with a path and an element */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductList />} />
        {/* Here we are expecting a parameter to come in at the end of the url */}
        {/* Whatever value is there will me mapped to the id property */}
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* The * is a wildcard, meaning that matching anything else */}
        {/* Not defined as a previous path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

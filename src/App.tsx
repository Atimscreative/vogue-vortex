import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./context/theme-provider";
import AppLayout from "./layout/AppLayout";
import "./App.css";
import Home from "./page/Home";
import ProductPage from "./page/ProductPage";
import Checkout from "./page/Checkout";
import ProductDetails from "./page/ProductDetails";
import NoPage from "./page/NoPage";


function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;

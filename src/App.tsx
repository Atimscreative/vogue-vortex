import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./context/theme-provider";
import AppLayout from "./layout/AppLayout";
// import Home from "./page/Home";
import NoPage from "./page/NoPage";
import ProductPage from "./page/ProductPage";
import ProductDetails from "./page/ProductDetails";
import "./App.css";

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<ProductPage />} />
            <Route path="/products" element={<ProductPage />} />
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

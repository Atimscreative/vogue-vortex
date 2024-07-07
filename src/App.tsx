import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import AppLayout from "./layout/AppLayout";
import Home from "./page/Home";
import NoPage from "./page/NoPage";
import "./App.css";
import ProductPage from "./page/ProductPage";
import ProductDetails from "./page/ProductDetails";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/:id" element={<ProductDetails />} />

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

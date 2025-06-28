import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout.tsx";
import Home from "./pages/HomePage.tsx";
import Login from "./pages/LoginPage.tsx";
import Signup from "./pages/SignUpPage.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProductPages from "@/pages/ProductPages.tsx";
import AboutUs from "@/pages/AboutUs.tsx";


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes >
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products/:id" element={<ProductPages />} />
              <Route path="/aboutus" element={<AboutUs />} />
              
            </Route>
          </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

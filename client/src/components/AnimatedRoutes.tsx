import AppLayout from "../layout/AppLayout.tsx";
import Home from "../pages/HomePage.tsx";
import SignIn from "../pages/LoginPage.tsx";
import {  Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProductPages from "@/pages/ProductPages.tsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/product" element={<ProductPages />} />
            </Route>
          </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes
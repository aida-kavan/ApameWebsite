import MainPageGrid from "../layout/HomePageGrid";
import InstagramPage from "@/layout/InstagramPage";
import { motion } from "framer-motion";
import CardDisplayer from "../components/elements/CardStack/CardDisplayer";
import ProductsOff from "@/layout/ProductsOff";

const HomePage = () => {
  return (
    <motion.div
      className="flex flex-col items-center  "
      // initial={{width: 0}}
      // animate={{width:"100%"}}
      // exit={{x: "100%"}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-screen h-[700px]  flex items-center justify-center">

      <ProductsOff/>
        </div>
      

      <InstagramPage />
    </motion.div>
  );
};

export default HomePage;

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return ( <>
  <h1 className="peydaExtra text-center text-white text-shadow text-shadow-blue-950 text-3xl px-5 py-2 bgBlur w-fit m-auto rounded ">
          ورود کاربران
        </h1>
    <motion.div
      className=" w-[50vw]  flex items-center justify-evenly rounded-4xl bg-white p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      
      <div className="bg-white w-[350px] gap-2 m-2 h-[300px] rounded-3xl flex  p-6 flex-col">
        
        <div className="flex gap-1 ">
          <div className="flex gap-1 p-1  items-center bg-gray-200 w-1/2 h-10 rounded-md border">
            <svg
              width="30"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.52391 18.8209H6.34174V9.54903L0.887695 5.4585V17.1847C0.887695 18.0901 1.62126 18.8209 2.52391 18.8209Z"
                fill="#4285F4"
              ></path>
              <path
                d="M19.4297 18.8209H23.2475C24.1529 18.8209 24.8837 18.0873 24.8837 17.1847V5.4585L19.4297 9.54903"
                fill="#34A853"
              ></path>
              <path
                d="M19.4297 2.45921V9.54947L24.8837 5.45894V3.27732C24.8837 1.25387 22.5739 0.100341 20.9568 1.31386"
                fill="#FBBC04"
              ></path>
              <path
                d="M6.34766 9.54924V2.45898L12.8925 7.36762L19.4374 2.45898V9.54924L12.8925 14.4579"
                fill="#EA4335"
              ></path>
              <path
                d="M0.886719 3.27732V5.45894L6.34076 9.54947V2.45921L4.81363 1.31386C3.19378 0.100341 0.886719 1.25387 0.886719 3.27732Z"
                fill="#C5221F"
              ></path>
            </svg>
            <span className="text-xs">ورود با گوگل</span>
          </div>
          <div className="flex gap-1 p-1  items-center bg-gray-200 w-1/2 h-10 rounded-md border">
            <svg
              className="text-blue-700"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4676 20.9728H16.9118V15.4042C16.9118 14.0762 16.888 12.3668 15.0624 12.3668C13.2103 12.3668 12.9269 13.8136 12.9269 15.3074V20.9724H9.37112V9.52098H12.7847V11.0859H12.8326C13.5276 9.89754 14.8247 9.18511 16.2006 9.23621C19.8046 9.23621 20.4692 11.6067 20.4692 14.6908L20.4676 20.9728ZM5.35891 7.95562C4.22689 7.95562 3.29495 7.02422 3.29495 5.8922C3.29495 4.76017 4.22646 3.82867 5.35848 3.82867C6.4904 3.82867 7.4218 4.75996 7.42201 5.89177C7.42201 7.02358 6.49072 7.95552 5.35891 7.95562ZM7.1368 20.9728H3.57725V9.52098H7.1368V20.9728ZM22.2403 0.526519H1.79034C0.83039 0.515678 0.0312315 1.29626 0.0195312 2.25622V22.7911C0.0308021 23.7516 0.829853 24.533 1.79034 24.5227H22.2403C23.2031 24.5348 24.005 23.7535 24.0179 22.7911V2.25482C24.005 1.29283 23.2021 0.513853 22.2403 0.526519Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="text-xs">ورود با لینکدین</span>
          </div>
        </div>
        <div className="relative flex justify-center mb-1">
                <h3 className="text-xs text-gray-400 z-10 relative dark:bg-dark-930 bg-white px-3">
                    یا ورود به حساب با
                </h3>
                <i className="absolute top-1/2 transform -translate-y-1/2 z-0 right-0 w-full flex border-t border-gray-300 border-opacity-30"></i>
            </div>
        <Input placeholder="نام کاربری، شماره تلفن یا ایمیل" />
        <Input placeholder="رمز عبور" />
        <Button>ورود</Button>
        <Link to={"#"}>
          <p className="text-xs text-gray-500 mr-1">
            رمز خود را فراموش کرده ام.
          </p>
        </Link>
        <Link to={"#"}>
          <p className="text-xs text-gray-500 mr-1">
            حساب کاربری ندارید؟
          </p>
        </Link>
      </div>
      <div className="w-2/5  h-full bg-white/20">
      <img src="/images/موشک پرانی.gif"/>
      </div>
    </motion.div>
  </>
  );
};

export default LoginPage;


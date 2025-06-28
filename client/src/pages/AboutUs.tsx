import { Phone, Triangle } from "lucide-react";

const AboutUs = () => {
  const Tel1 = "09033020318";
  return (
    <div className="bg-white w-[65vw] p-5 min-h-[98vh] rounded-4xl ">
      <div className="flex gap-2 items-center ">
        <Triangle fill="rgb(18, 71, 235)" stroke="0" className="rotate-90" />
        <h1 className="peydaExtra text-2xl">مجموعه چاپ و تبلیغات آپامه</h1>
      </div>
    </div>
  );
};

export default AboutUs;

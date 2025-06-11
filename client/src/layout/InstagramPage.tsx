import { ArrowBigLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

const instagramPage = () => {
  return (
    <div className="mt-12">
      <div className="relative">
        <div className="absolute -inset-2  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-75 blur-xl"></div>
        <div className="relative flex h-44 w-[1000px] items-center rounded-3xl bg-white bg-[radial-gradient(#90AAEE_1px,transparent_1px)] [background-size:26px_26px]">
          <img
            src="/images/instagramBanner.png"
            width={420}
            className="relative bottom-10 right-[-2px]"
          />
          <div className=" flex flex-col justify-center items-center  ">
            <h1 className="hamrah text-3xl">
              ما هر روز کلی مطالب جدید توی پیجمون منتشر میکنیم!
            </h1>
            <Link to={"https://www.instagram.com/apametabligh/"} target="_blank">
              <div className="flex items-center mt-3 hover:scale-110 duration-200 bg-gradient-to-r shadow-2xl from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-fit py-1 px-2 rounded text-white ">
                مشاهده پست های اینستاگرام
                <ArrowBigLeftIcon
                  fill="white"
                  stroke="0"
                  size={30}
                  className=" "
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default instagramPage;

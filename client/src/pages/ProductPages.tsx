import { Circle, Heart, Pin, Share2, X } from "lucide-react";
import { useState } from "react";

interface propTypes {
  src: string;
  alt?: string;
}
import { useParams } from "react-router-dom";

const ProductPages = () => {
  const { id } = useParams();
  const [imageSrc, setImgSrc] = useState("");
  const [showImg, setShowImg] = useState(false);
  return (
    <div className="bg-white w-[65vw] p-5 min-h-[98vh] rounded-4xl ">
      <div className=" flex gap-3">
        <div>
          <div className="w-[400px]  mb-2 rounded-xl overflow-hidden">
            <img src="/images/3.webp" className="w-full h-full " />
          </div>
          <div className="grid grid-cols-4 gap-2 w-[400px] ">
            <ImageGrid
              src="/images/1.webp"
              alt="عکس اول"
              setImgSrc={setImgSrc}
              setShowImg={setShowImg}
            />
            <ImageGrid
              src="/images/2.webp"
              alt="عکس اول"
              setImgSrc={setImgSrc}
              setShowImg={setShowImg}
            />
            <ImageGrid
              src="/images/3.webp"
              alt="عکس اول"
              setImgSrc={setImgSrc}
              setShowImg={setShowImg}
            />
            <ImageGrid
              src="/images/4.webp"
              alt="عکس اول"
              setImgSrc={setImgSrc}
              setShowImg={setShowImg}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl peydaExtra p-1 rounded bg-gradient-to-l w-fit from-[#4b75d0] to-transparent">
              کارت ویزیت سلفون مات { id } 
            </h1>
            <div className="flex items-center gap-3">
              <Heart />
              <Share2 />
            </div>
          </div>
          <p className=" text-sm peydaThin  text-justify m-2">
            کارت ویزیت سلفون مات یکی از پرطرفدارترین انواع کارت ویزیت است که به
            دلیل پوشش سلفون مات، ظاهری شیک و حرفه‌ای به کارت می‌بخشد. این نوع
            کارت ویزیت علاوه بر مقاومت بالا در برابر رطوبت و پارگی، لمس نرم و
            لطیفی دارد و بازتاب نور را کاهش می‌دهد. سلفون مات باعث می‌شود رنگ‌ها
            طبیعی‌تر دیده شوند و نوشته‌ها خواناتر باشند.
          </p>
          <div>
            <div className="border  rounded-xl p-2">
              <h1 className="text-[#d23f05] peydaExtra text-lg">
                انتخاب تیراژ
              </h1>
              <div className="grid grid-cols-4 gap-4 ">
                <a
                  href=""
                  className="bg-gray-200 items-center flex justify-center rounded-lg p-1"
                >
                  1000
                </a>
                <a
                  href=""
                  className="bg-gray-200 items-center flex justify-center rounded-lg p-1"
                >
                  2000
                </a>
                <a
                  href=""
                  className="bg-gray-200 items-center flex justify-center rounded-lg p-1"
                >
                  4000
                </a>
                <a
                  href=""
                  className="bg-gray-200 items-center flex justify-center rounded-lg p-1"
                >
                  4000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showImg && (
        <div className="w-screen h-screen z-70  bg-black/60 fixed top-0 right-0 flex justify-center items-center ">
          <div className=" lg:max-w-[50vw]  max-w-[95vw] bg-black m-auto  rounded-3xl overflow-hidden">
            <button
              className="p-1 bgBlur absolute m-5 rounded"
              onClick={() => setShowImg(false)}
            >
              <X />
            </button>
            <img src={imageSrc} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPages;

interface ImageGridProps extends propTypes {
  setImgSrc: (src: string) => void;
  setShowImg: (show: boolean) => void;
}

const ImageGrid = ({ src, alt, setImgSrc, setShowImg }: ImageGridProps) => {
  return (
    <div className=" w-full   border rounded-xl overflow-hidden">
      <img
        className=""
        src={src}
        alt={alt}
        onClick={() => {
          setImgSrc(src);
          setShowImg(true);
        }}
      />
    </div>
  );
};

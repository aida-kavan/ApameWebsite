import {
  RulerDimensionLine,
  Heart,
  Share2,
  X,
  ScissorsLineDashed,
  StickyNote,
  Proportions,
  Wallet,
  AlarmClockCheck,
  ChevronsLeft,
  Printer,
  Sparkle,
  Layers,
} from "lucide-react";
import { useState } from "react";
import Radio, { RadioGroup } from "../components/ui/Radio";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface propTypes {
  src: string;
  alt?: string;
}
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VariableDiv from "@/components/elements/productPageComponents/VariableDiv";

const value = [
  {value: "gold" , Content:"طلاکوب"},
  {value: "silver" , Content:"نقره کوب"},
]

const ProductPages = () => {
  const { id } = useParams();
  const [imageSrc, setImgSrc] = useState("");
  const [showImg, setShowImg] = useState(false);
  const [amount, setAmount] = useState("");
  const [side, setSide] = useState("");
  const [cut, setCut] = useState("");
  const [orientation, setOrientation] = useState("");
  const [hotfoil, setHotfoli] = useState("");
  console.log(side, amount, cut);
  return (
    <div className="bg-white w-[65vw] p-5 min-h-[60vh] rounded-4xl ">
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
            <h1 className="text-2xl  p-1 rounded  w-fit flex items-center">
              <Sparkle fill="black" stroke="0" />
              کارت ویزیت سلفون مات
            </h1>
            <div className="flex items-center gap-3">
              <Heart />
              <Share2 />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-3/5">
              <p className=" text-sm text-gray-700  text-justify m-2">
                کارت ویزیت سلفون مات یکی از پرطرفدارترین انواع کارت ویزیت است که
                به دلیل پوشش سلفون مات، ظاهری شیک و حرفه‌ای به کارت می‌بخشد. این
                نوع کارت ویزیت علاوه بر مقاومت بالا در برابر رطوبت و پارگی، لمس
                نرم و لطیفی دارد و بازتاب نور را کاهش می‌دهد. سلفون مات باعث
                می‌شود رنگ‌ها طبیعی‌تر دیده شوند و نوشته‌ها خواناتر باشند.
              </p>
              <div>
                <div className="border m-2 rounded-xl p-2">
                  <h2 className="text-gray-700 text-lg mb-1 flex gap-1">
                    <RulerDimensionLine />
                    انتخاب ابعاد
                  </h2>
                  <RadioGroup
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  >
                    <div className="flex gap-2 flex-wrap">
                      <Radio value="1000">
                        <Plan Content={"48×85 میلیمتر"} />
                      </Radio>
                      <Radio value="10600">
                        <Plan Content={"60×60 میلیمتر"} />
                      </Radio>
                      <Radio value="10080">
                        <Plan Content={"60×90 میلیمتر"} />
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>
                <div className="border m-2 rounded-xl p-2">
                  <h2 className="text-gray-700   mb-1 flex gap-1">
                    <ScissorsLineDashed />
                    انتخاب نوع برش
                  </h2>
                  <RadioGroup
                    value={cut}
                    onChange={(e) => setCut(e.target.value)}
                  >
                    <div className="flex gap-2 flex-wrap">
                      <Radio value="noRounded">
                        <Plan Content={"دور تیز"} />
                      </Radio>
                      <Radio value="rounded">
                        <Plan Content={"دور گرد"} />
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>
                <div className="border m-2 rounded-xl p-2">
                  <h2 className="text-gray-700   mb-1 flex gap-1">
                    <StickyNote />
                    انتخاب وجه
                  </h2>
                  <RadioGroup
                    value={side}
                    onChange={(e) => setSide(e.target.value)}
                  >
                    <div className="flex gap-2 flex-wrap">
                      <Radio value="1side">
                        <Plan Content={"یک رو"} />
                      </Radio>
                      <Radio value="2side">
                        <Plan Content={"دو رو"} />
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>
                <div className="border m-2 rounded-xl p-2">
                  <h2 className="text-gray-700   mb-1 flex gap-1">
                    <Proportions />
                    انتخاب جهت
                  </h2>
                  <RadioGroup
                    value={orientation}
                    onChange={(e) => setOrientation(e.target.value)}
                  >
                    <div className="flex gap-2 flex-wrap">
                      <Radio value="1side">
                        <Plan Content={"عمودی"} />
                      </Radio>
                      <Radio value="2side">
                        <Plan Content={"افقی"} />
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>

               
               <VariableDiv
               icon={Layers}
               items={value}
               title="نوع هات فویل"
               state={hotfoil}
               setstate={setHotfoli}
               />

                <div className="border m-2 rounded-xl p-2">
                  <h2 className="text-gray-700   mb-1 flex gap-1">
                    <Printer />
                    انتخاب تیراژ
                  </h2>
                  <Select >
                  <SelectTrigger className="w-4/5 shadow-2xl bg-sky-100 ">
                    <SelectValue placeholder="تیراژ موردنظر را انتخاب کنید." className="placeholder:text-black" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-100">
                    <SelectItem className="bg-white mb-1" value="1000">{toPersianDigits(1000)}</SelectItem>
                    <SelectItem className="bg-white mb-1" value="2000">{toPersianDigits(2000)}</SelectItem>
                    <SelectItem className="bg-white mb-1" value="4000">{toPersianDigits(4000)}</SelectItem>
                    <SelectItem className="bg-white mb-1" value="6000">{toPersianDigits(6000)}</SelectItem>
                    <SelectItem className="bg-white mb-1" value="8000">{toPersianDigits(8000)}</SelectItem>
                    <SelectItem className="bg-white mb-1" value="10000">{toPersianDigits(10000)}</SelectItem>
                  </SelectContent>
                </Select>
                  </div>                
              </div>
            </div>
            <div className="bg-white border rounded-3xl p-3  flex flex-col gap-2 w-1/3 shadow-sky-100  shadow-lg h-32">
              <h5 className="flex gap-1 ">
                <Wallet />
                هزینه ی نهایی:
                {toPersianDigits(2954000)} تومان
              </h5>
              <h5 className="flex gap-1 ">
                <AlarmClockCheck />
                زمان آماده سازی:
                {toPersianDigits(5)} روز
              </h5>
              <Button variant={"OrangeBtn"} className="w-full">
                تائیــد و ادامــه
              </Button>
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

function Plan({ Content }: { Content: string }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="ml-auto font-medium">{Content}</span>
    </div>
  );
}
export function toPersianDigits(input: string | number): React.ReactElement {
  return (
    <span className="farhang-medium  ">{input.toLocaleString("fa-IR")}</span>
  );
}

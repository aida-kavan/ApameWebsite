import { Circle, Phone } from "lucide-react";


const Footer = () => {
  return (
    <footer className="relative min-w-screen ">
      <div className="max-w-[900px] flex flex-col items-center  h-[300px] bg-[url(/images/card.jpg)] bg-cover rounded-4xl mx-auto relative top-40">
        <h1 className="text-3xl text-white text-shadow-amber-50 bg-gradient-to-b from-black to-[#fff0] p-4 mt-7 ">
          عضویت در خبرنامه
        </h1>
        <div className="border w-[400px] h-10 rounded flex justify-between">
          <input
            type="text"
            className="focus:outline-0 mr-2 text-white placeholder:text-white"
            placeholder="ایمیل خود را وارد کنید..."
          />
          <button className="bg-white h-full px-5 hover:cursor-pointer hover:shadow-inner">
            ثبت
          </button>
        </div>
      </div>
      <div className="w-full  flex flex-col items-center [background:radial-gradient(125%_125%_at_50%_10%,#000F36_40%,#0E2A73_100%)] ">
        <div className="max-w-[1200px] mx-auto grid gap-2 grid-cols-4 pt-52">
          <div className="p-2 rounded-2xl shadow shadow-slate-900 border bg-[#ffffff0a]">
            <img
              src="/images/logo.svg"
              alt="apame logo"
              width={200}
              height={50}
              className="mb-2"
            />
            <ul className="gap-2 flex flex-col text-white">
              <li>
                آدرس:کرج، چهارراه طالقانی، بلوار طالقانی شمالی،انتهای کوچه شهدای
                پزشک
              </li>
              <li className="flex ">
                <Phone
                  fill="white"
                  stroke="0"
                  className="rotate-[250deg] size-5"
                />
                امور مشتریان:
                <a dir="ltr" href="tel:02634001215">
                  {" "}
                  026-34001215{" "}
                </a>
              </li>
              <li className="flex gap-5">
                <a href="#">
                  <img src="/images/instagram (2).png" />
                </a>
                <a href="#">
                  <img src="/images/telegram (2).png" />
                </a>
                <a href="#">
                  <img src="/images/whatsapp (2).png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col px-5">
            <h1 className="bg-gradient-to-l rounded from-blue-900 to-[#fff0] h-fit  text-xl text-white p-1">
              لینک های مفید
            </h1>
            <ol className="text-white p-1.5  text-sm">
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                درباره ما
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                ارتباط با ما
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                راهنمای سفارش
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                گالری تصاویر و نمونه ها
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                وبلاگ
              </ul>
            </ol>
          </div>

          <div className="flex flex-col px-5">
            <h1 className="bg-gradient-to-l rounded from-blue-900 to-[#fff0] h-fit  text-xl text-white p-1">
              خدمات مشتریان
            </h1>
            <ol className="text-white p-1.5 text-sm">
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                حساب کاربری من
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                پاسخ به سوالات متداول
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                قوانین و مقررات
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                حریم خصوصی
              </ul>
            </ol>
          </div>
          <div className="flex flex-col px-5">
            <h1 className="bg-gradient-to-l rounded from-blue-900 to-[#fff0] h-fit  text-xl text-white p-1">
              دسترسی سریع
            </h1>
            <ol className="text-white p-1.5 text-sm">
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                پرفروش های ماه گذشته
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                محصولات چاپ آفست
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                محصولات چاپ دیجیتال
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                خدمات سایت و سئو
              </ul>
              <ul className="flex">
                <Circle stroke="0" fill="white" width={8} />
                سوشال مدیا
              </ul>
            </ol>
          </div>
        </div>
        <div className="w-2/3 mt-5 border-t border-gray-700 text-gray-400 text-sm p-2 flex items-center justify-center ">
          کلیه حقوق این سایت متعلق به مجموعه چاپ و تبلیغات آپامه می‌باشد.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

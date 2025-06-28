"use client";
import ProductCard from "@/components/Products/ProductCard";
import { ArrowBigLeftIcon, Flame } from "lucide-react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// ماژول‌ها
import { Pagination, Autoplay } from "swiper/modules";

import "../index.css";
import { Button } from "@/components/ui/button";

const ProductsOff = () => {
  const products = [
    { ProductImg: "images/1.jpg", ProductName: "کارت ویزیت سلفون مات" },
    { ProductImg: "images/2.jpg", ProductName: "کارت ویزیت سلفون براق" },
    { ProductImg: "images/3.jpg", ProductName: "فاکتور چهار لت" },
    { ProductImg: "images/2.jpg", ProductName: "پرچم ساحلی متوسط" },
    { ProductImg: "images/1.jpg", ProductName: "بگ تحریر مشکی" },
    { ProductImg: "images/1.jpg", ProductName: "بگ تحریر مشکی" },
    { ProductImg: "images/1.jpg", ProductName: "بگ تحریر مشکی" },
    { ProductImg: "images/1.jpg", ProductName: "بگ تحریر مشکی" },
    { ProductImg: "images/1.jpg", ProductName: "بگ تحریر مشکی" },
    { ProductImg: "images/1.jpg", ProductName: "بگ تحریر مشکی" },
  ];

  return (
    <div className="bgBlur backdrop-blur-md p-8 w-[85%] rounded-3xl flex flex-col gap-2">
      <div className="flex items-center justify-between px-3 ">
        <div className="text-white text-4xl">
          <div className="flex items-center">
            <Flame
              size={40}
              fill="#d23f05"
              strokeWidth={1}
              stroke="red"
              strokeLinejoin="miter"
            />
            <h1 className="mt-1">آپــــامه آف!</h1>
          </div>
          <p className="text-sm text-blue-100">
            خرید به صرفه و فوری محصولات تخفیف خورده
          </p>
        </div>
        <div>
          <Button variant={"OrangeBtn"} className="flex p-2">
<span>مشاهده همه ی محصولات</span>
          <ArrowBigLeftIcon fill="white" stroke="0" size={60}  />
          </Button>
        </div>
      </div>
      <div className="p-1">
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={5}
          modules={[Pagination, Autoplay]}
          height={"500px"}
          className="w-full"
        >
          {products.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard
                ProductName={item.ProductName}
                ProductImg={item.ProductImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsOff;

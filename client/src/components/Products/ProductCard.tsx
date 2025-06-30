import { ArrowLeft, ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


interface propTypes {
  ProductName: string;
  ProductImg: string;
}

const ProductCard = ({ ProductName, ProductImg }: propTypes) => {


  return (
    <div className=" relative m-2rounded-2xl group/link h-68 w-[220px]">
      <div className="bg-white hover:shadow-lg   duration-150 transition-all hover:shadow-white shadow-lg p-2.5 rounded-tr-2xl flex flex-col gap-1 rounded-tl-2xl rounded-bl-2xl">
        <div className="w-[200px] h-[200px] rounded-2xl border overflow-hidden ">
          <img src={ProductImg} />
        </div>
        <h2 className="text-center  ">{ProductName}</h2>
        <div className="w-full flex items-center justify-center">

        <h6 className="peydaThin text-sm text-center text-gray-700" >از 2،500،000 تا 8،790،000</h6>
        </div>
      </div>

      <div className="bg-white shadow-lg flex items-center justify-center  rounded-b-lg w-32 h-9 absolute">
        <Link to={"products/1"}>
          <Button
            size={"sm"}
            variant={"OrangeBtn"}
            className="  text-white text-sm rounded-lg mb-1 shadow-2xl shadow-blue-800"
          >
            مشاهده محصول
          </Button>
        </Link>
      </div>
      <div className=" absolute left-0 bg-white rounded-br-md rounded-tl-md rounded-bl-md  w-[83px] flex items-center h-7 m-1 justify-center ">
        <span className="text-xs cursor-pointer text-center flex items-center ">
          <ShoppingBag size={18} color="#2b3990" />
          <span>افزودن</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

//  color="#d23f05"
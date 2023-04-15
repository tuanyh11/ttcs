import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store";
import ButtonV1 from "../Button/Button";
import { formatMoney } from "../../../utils";

const HeaderCart = () => {
  const {  items, removeItem, getTotal, getTotalWithQuantity } = useCartStore();
  const totalItems = Number(getTotal())
  return (
    <>
      <Link to={"/cart"} className="relative ml-5">
        <i className="far fa-shopping-cart"></i>
        <span className="absolute text-[11px] rounded-full min-w-[16px] h-4 text-center bg-main-color leading-4 text-white  top-[-5px] right-[-13px]">
          {totalItems}
        </span>
      </Link>
      <div
        className="w-[320px]  bg-white border absolute z-[9999] top-full right-0 rounded-md scale-0 
              invisible group-hover:scale-100 group-hover:visible transition-all duration-[0.25s] ease-in-out origin-top-left-1/4-0  "
      >
        {totalItems === 0 ? (
          <div className="flex p-[15px] text-base relative  text-[#646a7c] ">
            Không có sản phẩm nào trong giỏ hàng.
          </div>
        ) : (
          <div className="">
            <ul className="max-h-[700px] overflow-y-auto scrollbar-thin  scrollbar-thumb-main-color scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
              {items?.map((item) => {
                const image = item?.images[0];
                const price = item?.price.formatted || item?.regularPrice;
                const id = item?.id;
                const name = item?.name;
                const quantity = item?.quantity;

                return (
                  <li
                    key={item?.id}
                    className="flex p-[15px] relative font-semibold font-poppins text-[#212529] border-b"
                  >
                    <Link to={`/product/${name}`} state={{ id }}>
                      <img
                        src={image}
                        alt={image}
                        className="max-w-[80px] mr-[10px]"
                      />
                    </Link>
                    <div className="w-7/12">
                      <Link
                        to={`/product/${name}`}
                        state={{ id }}
                        className="line-clamp-2"
                      >
                        {name}
                      </Link>
                      <div className="mt-[5px]">
                        {quantity} × {price}
                      </div>
                    </div>
                    <div className="ml-3">
                      <button
                        onClick={() => removeItem(item?._id)}
                        className="fa-solid fa-xmark"
                      ></button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className=" bottom-0 border-t left-0 right-0 bg-white z-[9999] text-[#333333]">
              <div className="px-[15px] py-[10px]  flex justify-between">
                <strong className=" text-base">Tổng:</strong>
                <span className="font-semibold">{formatMoney(Number(getTotalWithQuantity()))}</span>
              </div>
              <div className="pt-[5px] pb-[15px] px-[15px]  flex justify-center gap-[15px]">
                <ButtonV1 label={"Xem giỏ hàng"} Tag="Link" to="/cart" />
                <ButtonV1 label={"thanh toán"} Tag="Link" to="/checkout" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderCart;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../Components/store";
import { formatMoney } from "../../../utils";

const CartList = () => {
  const {  upadateItemWithQuantity, items } = useCartStore();
  const [isUpdated, setIsUpdated] = useState(false);
  // console.log(isUpdated);
  const [cart, setCart] = useState([...items]);
  const [itemSale, setItemSale] = useState("");
  const [sale, setSale] = useState();

  const removeItem = (id) => {
    setCart([...cart.filter(item => item._id !== id)])
    setIsUpdated(true)
  }

  const inCreaseQty = (id) => {
    const newCart = cart.map((item) => {
      if (item._id === id && item.quantity) {
        setIsUpdated(true);
        return {
          ...item,
          quantity: Number(item.quantity) + 1,
        };
      }
      return item;
    });
    setCart([...newCart]);
  };

  const deCreaseQty = (id) => {
    const newCart = cart.map((item) => {
      console.log(Number(item.quantity) - 1);
      if (item._id === id && Number(item.quantity) > 1) {
        setIsUpdated(true);
        return {
          ...item,
          quantity: Number(item.quantity) - 1,
        };
      }
      return item;
    });
    setCart([...newCart]);
  };

  const handleChangeQty = (e, id) => {
    if (/^[0-9]*$/.test(e?.target.value)) {
      setIsUpdated(true);
      cart.some((item) => {
        if (item.id === id) {
          item.quantity = e?.target.value;
          return true;
        }
      });
      setCart([...cart]);
    }
  };

  // console.log(items);
  const handleUpdate = () => {
    setIsUpdated(false)
      upadateItemWithQuantity(cart);
      // console.log(item);
  };
  const handleSale = () => {
    itemSale && (
      setSale(50)
    );
  };
  return (

    <form className="overflow-x-auto ">
      <table className="max-w-full bg-transparent w-full border-gray-500">
        <thead>
          <tr>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              &nbsp;
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Sản Phẩm
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Giá
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Số Lượng
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Tổng
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Xoá
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            // const image = item?.featuredImage?.node?.mediaItemUrl;
            const image = item?.images?.[0];
            // const price = item?.salePrice || item?.regularPrice;
            const price = item.price.raw;
            {/* console.log() */ }
            {/* const subTotal = (currency(item.quantity * priceNumber?.intValue, {
              decimal: ".",
              precision: 0,

            }).format()); */}

           
            {/* console.log(); */ }
            const subTotal = formatMoney(price * item.quantity);
            const name = item?.name;
            const _id = item?._id;
            return (
              <tr>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <Link to={`/product/${name}`} state={{ _id }}>
                    <img
                      src={image}
                      alt=""
                      className="sm:w-[90px] mx-auto sm:h-[90px] min-w-[50px] h-auto"
                    />
                  </Link>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <Link to={`/product/${name}`} state={{ _id }}>{item?.name}</Link>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  {item.price.formatted}
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <div className="inline-flex justify-self-stretch">
                    <div className="dec w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px] "
                      // onClick={() => setValue(Math.max(1, value - 1))}
                      onClick={() => deCreaseQty(item._id)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <input
                      className="w-[50px] h-auto bg-transparent border-[1px] border-[#eaeaea] text-center focus:outline-none text-[#000000]"
                      value={item?.quantity}
                      onChange={(e) => handleChangeQty(e, item._id)}
                      type="text"
                    />
                    <div className="inc w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px]"
                      // onClick={() => setValue(value + 1)}
                      onClick={() => inCreaseQty(item._id)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </td>
                {/* {sale === undefined ? (
                  <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                    &pound;{(subTotal.slice(1).replace(/$/g, ' ')) * (sale / 100)}
                  </td>
                ) : ( */}
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  {/* &pound;{subTotal.slice(1).replace(/$/g, ' ')} */}
                    {subTotal}
                </td>
                {/* )} */}

                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px] cursor-pointer"
                  onClick={() => removeItem(item._id)}>
                  <i className="fa-solid fa-xmark"></i>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colspan='6' className="py-[20px] px-[10px] border-[1px] border-[#dee2e6] text-left">
              {/* <div className="float-left">
                <input
                  className=" focus:outline-none w-auto float-left mb-0 h-[50px] px-[20px] border-[1px] border-[#eaeaea]"
                  type="text"
                  placeholder="Coupon code"
                  onChange={(e) => setItemSale(e.target.value)}
                />
                <div
                  className="cursor-pointer inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white float-right "
                  onClick={handleSale}
                >
                  Apply coupon
                </div>
              </div> */}
              <div
                className={`inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white float-right ${isUpdated === true ? 'opacity-[1]' : 'opacity-[0.7]'} cursor-pointer`}
                disabled={!isUpdated}
                onClick={() => handleUpdate()}
              >
                Cập Nhật Giỏ Hàng
              </div>
            </td>

          </tr>
        </tbody>
      </table>

    </form>
  );
};

export default CartList;

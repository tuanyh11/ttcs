import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../Components/store";
import currency from "currency.js";

const CartList = () => {
  const { addItemWithQuantity, upadateItemWithQuantity, removeItem, items } = useCartStore();
  // console.log(items);
  const [isUpdated, setIsUpdated] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemRemoved, setItemRemoved] = useState();
  // console.log(itemRemoved);

  const inCreaseQty = (id) => {
    const newCart = items.map((item) => {
      if (item.id === id && item.quantity) {
        setIsUpdated(true);
        return {
          ...item,
          quantity: item.quantity++,
        };
      }
      return item;
    });
    setCart([...newCart]);
  };

  const deCreaseQty = (id) => {
    const newCart = items.map((item) => {
      if (item.id === id && item.quantity && item.quantity > 1) {
        setIsUpdated(true);
        return {
          ...item,
          quantity: item.quantity--,
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
    cart.map((item) => {
      upadateItemWithQuantity(item);
      // console.log(item);
    });
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
              Product
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Price
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Quantity
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Subtotal
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const image = item?.featuredImage?.node?.mediaItemUrl;
            const price = item?.salePrice || item?.regularPrice;
            const priceNumber = currency(price);
            {/* console.log() */ }
            {/* const subTotal = (currency(item.quantity * priceNumber?.intValue, {
              decimal: ".",
              precision: 0,

            }).format()); */}

            const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',

            });
            {/* console.log(); */ }
            const subTotal = formatter.format(priceNumber * item.quantity);
            const name = item?.name;
            const id = item?.id;
            return (
              <tr>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <Link to={`/product/${name}`} state={{ id }}>
                    <img
                      src={image}
                      alt=""
                      className="sm:w-[90px] mx-auto sm:h-[90px] min-w-[50px] h-auto"
                    />
                  </Link>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <Link to={`/product/${name}`} state={{ id }}>{item?.name}</Link>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  &pound;{price.slice(1).replace(/$/g, ' ')}
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <div className="inline-flex justify-self-stretch">
                    <div className="dec w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px] "
                      // onClick={() => setValue(Math.max(1, value - 1))}
                      onClick={() => deCreaseQty(item.id)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <input
                      className="w-[50px] h-auto bg-transparent border-[1px] border-[#eaeaea] text-center focus:outline-none text-[#000000]"
                      value={item?.quantity}
                      onChange={(e) => handleChangeQty(e, item.id)}
                      type="text"
                    />
                    <div className="inc w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px]"
                      // onClick={() => setValue(value + 1)}
                      onClick={() => inCreaseQty(item.id)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  &pound;{subTotal.slice(1).replace(/$/g, ' ')}
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px] cursor-pointer"
                  onClick={() => removeItem(item.id)}>
                  <i className="fa-solid fa-xmark"></i>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colspan='6' className="py-[20px] px-[10px] border-[1px] border-[#dee2e6] text-left">
              <div className="float-left">
                <input
                  className=" focus:outline-none w-auto float-left mb-0 h-[50px] px-[20px] border-[1px] border-[#eaeaea]"
                  type="text"
                  placeholder="Coupon code"
                />
                <button className="inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white float-right ">
                  Apply coupon
                </button>
              </div>
              <div className="inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white float-right opacity-[0.7]"
                disabled={!isUpdated}
                onClick={() => handleUpdate()}
              >
                Update cart
              </div>
            </td>

          </tr>
        </tbody>
      </table>

    </form>
  );
};

export default CartList;

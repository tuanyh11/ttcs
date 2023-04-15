import React, { useEffect, useState } from "react";
import { BreadcrumbPath } from "../../Components";
import { useCartStore } from "../../Components/store";
import Bill from "./Bill/Bill";
import YourOrder from "./YourOrder/YourOrder";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import dataCountry from "../../../assets/country_code_and_details.json";
import { FormProvider, useForm } from "react-hook-form";
import currency from "currency.js";
import { useMutation } from "react-query";
import { paymentWithBank } from "../../api/order";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Components/CheckoutForm";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { useCreateOrder, useCreatePayment } from "../../api/hooks/order";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51KhkygGTaC45i0Au8Rf07bUPrRtBLGgDLLH2XzsmnlBDXElzoWUjDkvIVqrOV8MujTxcznfV0rs32At6bJPKygpr00n4spZxrO"
);

const Checkout = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Tên không được để trống'),
    address: yup.string().required('Địa chỉ không được để trống'),
    city: yup.string().required('Tên Thành phố không được để trống '),
    country: yup.string().required('tên Nước không được để trống'),
    postal_code: yup.string().required('mã bưu điện không được để trống'),
  });

  const { mutate, data, isLoading } = useMutation(paymentWithBank);

  const { mutate: createOrder, data: orderData } = useCreateOrder();

  const { mutate: createPayment } = useCreatePayment();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const [{ elements, stripe }, setDataStripe] = useState({
    elements: null,
    stripe: null,
  });

  const { handleSubmit, reset } = methods;

  const { items, getTotal } = useCartStore();
  // console.log(items);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const nav = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const { clearCart, getTotalWithQuantity } = useCartStore();

  const handleBanking = async (data) => {
    if (stripe && elements && paymentMethod === "banking") {
      try {
        const { error, paymentIntent } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: `${window.location.origin}/order_success`,
          },
          redirect: "if_required",
        });
        console.log(paymentIntent);
        if (error) Error(error);
        createOrder(
          {
            total: getTotal(),
            products: items.map((item) => {
              return {
                quantity: item.quantity,
                product_id: item._id,
              };
            }),
            shipping_address: {
              ...data,
              amount: paymentIntent.amount,
            },
            status: "pending delivery",
          },
          {
            onSuccess: (data) => {
              createPayment(
                {
                  order_id: data._id,
                  method: paymentMethod,
                  amount: paymentIntent.amount,
                  status: "completed",
                },
                {
                  onSuccess: () => {
                    reset();
                    clearCart();
                    nav("/thank-you", {
                      state: {
                        title: "Thanh toán đã thành công",
                        thankYou:
                          "Cảm ơn bạn đã hoàn thành thanh toán trực tuyến an toàn của mình.",
                      },
                    });
                  },
                }
              );
            },
          }
        );
      } catch (error) {
        window.alert(error);
      }
    } else {
      createOrder(
        {
          total: getTotal(),
          products: items.map((item) => {
            return {
              quantity: item.quantity,
              product_id: item._id,
            };
          }),
          shipping_address: {
            ...data,
            amount: items.reduce(
              (total, item) => total + item.quantity * item.price.raw,
              0
            ),
          },
          status: "pending delivery",
        },
        {
          onSuccess: () => {
            reset();
            clearCart();
            nav("/thank-you", {
              state: {
                title: "Đặt hàng xong",
                thankYou:
                  "Cảm ơn bạn đã đặt hàng, bạn sẽ sớm nhận được Sản phẩm ",
              },
            });
          },
        }
      );
    }
  };

  console.log(elements, stripe);

  const isDisabled = items.length === 0 || false;

  return (
    <div>
      <BreadcrumbPath pathname={"Checkout"} />
      <div className="py-[80px] ">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleBanking)}>
            <div className="lg:max-w-[1200px] md:max-w-[720px] sm:max-w-[540px] w-full m-auto px-[15px]">
              <Bill />
              <YourOrder items={items} total={getTotalWithQuantity()} />
              <div className="px-[15px] mt-4">
                <div className="mb-[15px] leading-[27px]">
                  <div>
                    <input
                      name="radio-item-1"
                      className={`focus:outline-none mr-[5px] ${
                        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                      value="banking"
                      type="radio"
                      onClick={() => mutate({ items })}
                      disabled={isDisabled}
                      id="direct-bank-transfer"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      defaultChecked={paymentMethod === "banking"}
                    />
                    <label htmlFor="direct-bank-transfer">
                      Chuyển khoản trực tiếp
                    </label>
                    {paymentMethod === "banking" && (
                      <p>
                        Thực hiện thanh toán của bạn trực tiếp vào tài khoản
                        ngân hàng của chúng tôi. Vui lòng sử dụng ID đơn đặt
                        hàng của bạn làm tài liệu tham khảo thanh toán. đơn đặt
                        hàng của bạn sẽ không được vận chuyển cho đến khi tiền
                        đã được thanh toán trong tài khoản của chúng tôi tài
                        khoản.
                      </p>
                    )}
                    {paymentMethod === "banking" && data && (
                      <div className="my-8 p-4 shadow-md border">
                        <Elements
                          stripe={stripePromise}
                          options={{ clientSecret: data?.client_secret }}
                        >
                          <CheckoutForm
                            onSelectData={setDataStripe}
                            paymentMethod={paymentMethod}
                          />
                        </Elements>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      name="radio-item-1"
                      className={`focus:outline-none mr-[5px]  ${
                        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                      } `}
                      value="cash"
                      type="radio"
                      id="cash-on-delivery"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      defaultChecked={paymentMethod === "cash"}
                      disabled={isDisabled}
                    />
                    <label htmlFor="cash-on-delivery ">Thanh toán khi giao hàng</label>
                    {paymentMethod === "cash" && (
                      <p>Thanh toán bằng tiền mặt khi giao hàng..                      </p>
                    )}
                  </div>
                </div>
                <p>
                Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng của bạn, hỗ trợ
                  trải nghiệm của bạn trên toàn bộ trang web này và cho các trang web khác
                  mục đích được mô tả trong
                  <a href="#">Chính sách bảo mật</a>
                </p>
                {
                  <button
                    type="submit"
                    disabled={isDisabled}
                    className={`${
                      isDisabled
                        ? "cursor-not-allowed opacity-60"
                        : " cursor-pointer"
                    } bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white mt-[15px]`}
                  >
                    Đặt hàng
                  </button>
                }
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Checkout;

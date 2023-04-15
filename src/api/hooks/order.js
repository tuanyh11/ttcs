import { useMutation } from "react-query";
import { createOrderProduct, createPayment } from "../order";

export const useCreateOrder = (config = { onSuccess: () => {}, onError: () => {} }) => {
  return useMutation(createOrderProduct, {
    ...config,
  });
};

export const useCreatePayment = (
  config = { onSuccess: () => {}, onError: () => {} }
) => {
  return useMutation(createPayment, {
    ...config,
  });
};
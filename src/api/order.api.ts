import instanceAxios from "../config/axios.config"
import { OrderInterface, OrderStatisticsInterface, ProductSaleInterface } from "../interfaces/order.interface"



export const getOrders = async () => {
    return  (await instanceAxios.get<OrderInterface[]>("/order/")).data
}

export const updateOrder = async ({ id, data }: {id: string, data: OrderInterface}) => {
  return (await instanceAxios.patch<OrderInterface>(`/order/${id}`, data)).data;
};

export const deleteOrder = async (id: string) => {
    return (await instanceAxios.delete<OrderInterface>(`/order/${id}`)).data;
}

export const getStatisticProductSales = async () => {
    return (
      await instanceAxios.get<ProductSaleInterface>(
        "/order/statistic/products/sales"
      )
    ).data;
} 

export const getStatisticOrderTotal = async () => {
    return (
      await instanceAxios.get<OrderStatisticsInterface>(
        "/order/statistic/total"
      )
    ).data;
}

import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getOrders } from "../api/order.api"
import { useQueryCustom } from "../config/reactQuery.config"
import { OrderInterface } from "../interfaces/order.interface";
import { ReactQueryInterface } from "../interfaces/reactQuery.interface"

interface Props extends ReactQueryInterface {
    queryFn?: () => Promise<any>;
}

export const useListOrders = (config?: ReactQueryInterface): UseQueryResult=> {
   return useQueryCustom({
        queryKey: ['get-orders'], 
        queryFn: getOrders,
        ...config,
    })
}

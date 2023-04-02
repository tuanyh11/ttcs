import { ReactQueryInterface } from './../interfaces/reactQuery.interface';
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { OrderInterface } from '../interfaces/order.interface';


export const useQueryCustom = ({queryKey, queryFn, ...rest}: ReactQueryInterface)=> {
    return useQuery({
        queryKey,
        queryFn,
        refetchOnWindowFocus: false,
        ...rest
    });
}
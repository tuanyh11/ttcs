import { UseQueryOptions, useQueries, useQuery } from 'react-query';

export const useQueryCustom = (opt: UseQueryOptions) => {
  return useQuery({
    queryKey: Math.random().toString(),
    refetchOnWindowFocus: false,
    ...opt,
  });
};

export const useQueriesCustom = (opt: UseQueryOptions[]) => {
  return useQueries<any>([...opt]);
};

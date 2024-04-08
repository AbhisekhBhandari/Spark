
import { MutationFunction, MutationKey, useMutation } from '@tanstack/react-query';
import _ from 'lodash';

export const useDebouncedMutation = (mutationKey:MutationKey, mutationFn:any, delay:number) => {
  const debouncedQueryFn = _.debounce(mutationFn, delay);
  return useMutation({
    mutationKey:mutationKey,
    mutationFn: debouncedQueryFn
  });
};
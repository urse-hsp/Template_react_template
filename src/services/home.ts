import { useGetRequest, useTriggerRequest } from '@/hooks/useRequest';
import apiList from '@/utils/apiList';

export const useHomeTopicsNewest = () => {
  return useTriggerRequest({
    ...apiList.homeTopicsNewest,
    // data: params,
  });
};

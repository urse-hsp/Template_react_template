import useSWR, { type SWRResponse } from 'swr';
import useSWRMutation, { type SWRMutationResponse } from 'swr/mutation';
import config from '@/config';
import { type urlProps } from '@/utils/apiList';
import { type dataType } from '@/data';
import { useEffect, useState, useMemo } from 'react';
// import { useGetLocationId } from '@/hooks_web3/useSocial';
import { message } from 'antd';

const BASE_URL: string = config.BASE_URL;

const LOCATION_ID = config.LOCATION_ID;
interface fetcherDataProps extends urlProps {
  data?: dataType<any>;
  header?: dataType<any>;
}

// 处理请求方式
const setGetPath = (url: string, data: fetcherDataProps | null | undefined) => {
  let path: string = url;
  if (data && data.method.toLowerCase() === 'get' && data.data) {
    const params: any = data?.data ?? {};
    // get方法将参数拼接在url后面
    const values: any = Object.values(params);
    const keys = Object.keys(params);
    const arr = [];
    for (let i: number = 0; i < values.length; i++) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      arr.push(`${keys[i]}=${values[i]}`);
    }
    const str = arr.join('&');
    path += `?${str}`;
    return path;
  } else {
    return path;
  }
};

// useTriggerRequest模式
export const useFetcher: any = (isTrigger = false) => {
  // const network_id = useGetLocationId();
  const fn = async (args: fetcherDataProps, arg: dataType<any>) => {
    // const data = JSON.parse(localStorage(APPUSERCONFIGSTATE) ?? '{}');

    // fetch请求参数
    const header: any = {
      // Authorization: NFT_STORAGE_APIKEY,
      Sign: '1',
      Location: LOCATION_ID,
      // Token: data[SIGNER_TOKEN],
      ...args.header,
    };

    const fetchOption: dataType<any> = {
      method: args.method,
      headers: new Headers({
        ...header,
      }),
    };

    // post请求将参数转为JSON字符串传给body
    const isPost = fetchOption.method.toLowerCase() === 'post'; // post请求
    if (isPost) {
      const params: any = { ...arg, ...args?.data } ?? {};
      fetchOption.body = JSON.stringify(params);
    }

    // Trigger 触发模式并且等于get
    if (isTrigger && fetchOption.method.toLowerCase() === 'get') {
      const path = setGetPath(args?.url, {
        ...args,
        data: arg,
      });
      args.url = path;
    }
    return await fetch(`${BASE_URL}${args.url}`, fetchOption).then(
      async (res) => {
        const data: any = await res.json();
        if (data?.code === 200 && data?.msg === 'success') {
          return isPost ? data : data?.data;
        } else {
          message.error(data?.msg);
          // return isPost ? data : false;
          return data;
        }
      },
    );
  };
  return fn;
};

export interface useGetRequestType<Data = any, Error = any> {
  data?: Data; //  通过 fetcher 用给定的 key 获取的数据（如未完全加载，返回 undefined）
  error?: Error; //  fetcher 抛出的错误（或者是 undefined）
  isValidating?: boolean; // 是否有请求或重新验证加载
  loading?: boolean; // 是否有一个正在进行中的请求且当前没有“已加载的数据“。预设数据及之前的数据不会被视为“已加载的数据“
  mutate: SWRResponse['mutate']; // mutate(data?, options?): 更改缓存数据的函数 （详情）
}

export function useGetRequest(
  apiData: fetcherDataProps | null | undefined,
  cache: boolean = true, // 开启缓存
): useGetRequestType {
  const path = setGetPath(apiData?.url ?? '', apiData);
  const fetcher = useFetcher();
  const { data, error, isLoading, isValidating, mutate } = useSWR(path, () =>
    fetcher({ ...apiData, url: path }),
  );
  const [cacheData, setCacheData] = useState<any>(null); // 缓存数据： 防止分页类似无数据没有占位

  useEffect(() => {
    if (!isLoading && cache) {
      setCacheData(data);
    }
  }, [data, isLoading]);

  return useMemo(() => {
    return {
      data: cache ? cacheData : data,
      loading: isLoading,
      error,
      isValidating,
      mutate,
    };
  }, [data, isLoading, error, isValidating, mutate, cacheData]);
}

interface useTriggerRequestProps extends SWRMutationResponse {
  // data：从 fetcher 返回给定 key 的数据
  // error：fetcher 中抛出的错误（或 undefined）
  // trigger(arg, options)：一个用于触发远程数据更改的函数
  // reset：一个用于重置状态的函数（ data, error, isMutating ）
  // isMutating：有一个正在进行中的远程数据变更
}
export function useTriggerRequest(
  apiData: fetcherDataProps,
): useTriggerRequestProps {
  const fetcher = useFetcher(true);
  // const path = setGetPath(apiData?.url ?? '', apiData);
  const { data, error, trigger, reset, isMutating } = useSWRMutation(
    apiData?.url,
    // eslint-disable-next-line no-empty-pattern
    ({}, { arg }) => fetcher(apiData, arg),
  );
  return {
    data,
    error,
    trigger,
    reset,
    isMutating,
  };
}

import { useState, useMemo } from 'react';
import { createContainer } from 'unstated-next';
import { localStorage } from '@/utils';

const HASHADDRESSKEY = 'HASHADDRESS';
const HASHLOADINGADDRESSKEY = 'HASHLOADINGADDRESS';

interface defaultStatesType {
  hashAddress: string[];
  setHashAddress: (address: string) => any;

  hashLoadingAddress: string[];
  setLoadingHashAddress: (address: string) => any;
  changeHashAddress: (address: string) => any;
}

function useAppHashStateData(): defaultStatesType {
  const initialStates = {
    hashAddress: JSON.parse(localStorage(HASHADDRESSKEY)) ?? [],
    hashLoadingAddress: JSON.parse(localStorage(HASHLOADINGADDRESSKEY)) ?? [],
  };
  const [hashAddress, setHashAddressList] = useState<string[]>(
    initialStates.hashAddress,
  ); // 上链完成后的交易哈希列表
  const [hashLoadingAddress, setLoadingHashAddressList] = useState<string[]>(
    initialStates.hashLoadingAddress,
  ); // 上链中的哈希列表

  // hash变动
  const changeHashAddress = (address: string) => {
    setHashAddressList_fn(address);
    const newloadingHash: any = hashLoadingAddress.filter(
      (item: any) => item !== address,
    );
    setLoadingHashAddressList(newloadingHash);
    localStorage(HASHLOADINGADDRESSKEY, JSON.stringify(newloadingHash));
  };

  // 改变上链后的列表
  const setHashAddressList_fn = (address: string) => {
    const data: string[] = [...hashAddress, address];
    setHashAddressList(data);
    localStorage(HASHADDRESSKEY, JSON.stringify(data));
  };

  // 改变上链中的列表
  const setLoadingHashAddressList_fn = (address: string) => {
    const data: string[] = [...hashLoadingAddress, address];
    setLoadingHashAddressList(data);
    localStorage(HASHLOADINGADDRESSKEY, JSON.stringify(data));
  };

  return useMemo(() => {
    return {
      hashAddress,
      hashLoadingAddress,
      setHashAddress: setHashAddressList_fn,
      setLoadingHashAddress: setLoadingHashAddressList_fn,
      changeHashAddress,
    };
  }, [hashAddress, hashLoadingAddress]);
}

const AppState = createContainer(useAppHashStateData);
export const useAppHashState = AppState.useContainer;

export default AppState;

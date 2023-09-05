import { useReducer, useState } from 'react';
import { createContainer } from 'unstated-next';
import { localStorage } from '@/utils';

export const APPUSERCONFIGSTATE = 'APPUSERCONFIGSTATE'; // AppUserConfigState-KEY

interface defaultStatesType {
  gasFreeMode: boolean;
  tippingMode: boolean;
  setGasFreeMode: (b: boolean) => any;
  setSignerGasFreeModes: (b?: boolean) => any;
  loading: boolean;
  agentAddress: string;
  signer_token: string;
  signerModule: boolean; // 是否授权弹窗
  setSignerModule: (b?: boolean) => any;
}
function init(initialCount: any) {
  return {
    a: 1,
  };
}

function reducer(state: any, action: any) {
  const data: any = { ...state };
  switch (action.type) {
    case false:
      break;
    default:
      return state;
  }
  localStorage(APPUSERCONFIGSTATE, JSON.stringify(data));
  return data;
}

function useAppUserConfigState(): defaultStatesType {
  const [state, dispatch] = useReducer(reducer, null, init);
  const [loading, setLoading] = useState<boolean>(false); // loading

  return {
    ...state,
    loading,
    setLoading,
  };
}

const AppState = createContainer(useAppUserConfigState);
export const useAppUserConfig = AppState.useContainer;

export default AppState;

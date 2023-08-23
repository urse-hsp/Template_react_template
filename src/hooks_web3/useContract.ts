// import { useWeb3Provider } from './index';
import { type ethers } from '@infte/web3-utils';
import {
  // useContract,
  useErcContract,
  useTokenContract,
} from '@infte/web3modal-react';

// import Social_ABI from '@/constants/abis/SocialX.json';

// import config from '@/config';
export type Contract = ethers.Contract;

export { useErcContract, useTokenContract };

// // get Social
// export function useSocialContract(): Contract | null {
//   const { contracts } = useWeb3Provider();
//   const contractsData: any = contracts;
//   return useContract(
//     contractsData?.[config.SOCIAL_CONTRACTS_KEY],
//     Social_ABI,
//     true,
//   );
// }

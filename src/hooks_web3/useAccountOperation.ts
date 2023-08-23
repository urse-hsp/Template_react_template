import { useAccountOperation } from '@infte/web3modal-react';

export default useAccountOperation;

// 账户操作 / useAccountOperation
// SPDX-License-Identifier:MIT
// pragma solidity 0.8.17;
// interface IERC20 {
//     //发行的代币总量
//     function totalSupply() external view returns (uint256);
//     //某地址余额
//     function balanceOf(address account) external view returns (uint256);
//     //从当前账户对某个地址转amount的钱
//     function transfer(address account, uint256 amount) external returns (bool);
//     //授权某个账户可以用你的钱（用多少钱是指定的）
//     function approve(address spender, uint256 amount) external returns (bool);
//     //你授权的账户还可以有多少你授权的钱可以用
//     function allowance(address owner, address spender) external view returns (uint256);
//     //授权用户的转账方法，只针对授权用户使用
//     function transferFrom(address from,address to,uint256 amount) external returns (bool);
//     //转账时触发转账事件
//     event Transfer(address indexed from, address indexed to, uint256 value);
//     //授权时触发授权事件
//     event Approval(address indexed owner, address indexed spender, uint256 value);
// }

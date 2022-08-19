//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface theWallet{
    function deposit(uint _amount) external payable;
    function withdraw() external;
    function viewBalance() external view returns(uint);
}
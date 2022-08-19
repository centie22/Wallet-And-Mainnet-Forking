//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IWallet{
    function deposit() external payable;
    function withdraw() external;
    function viewBalance() external view returns(uint);
}
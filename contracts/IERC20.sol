// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IERC20{
    function approve(address _spender, uint _value) view external;
    function balanceOf(address who) external view returns(uint256 balance);
}

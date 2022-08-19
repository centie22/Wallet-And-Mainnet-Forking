//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

 contract Wallet{

      mapping (address => uint) wallet;
    address owner;
    uint timeTillWithdraw = 120 days;


    constructor () {
        owner = msg.sender;

    }

    function deposit(uint _amount) public payable {
         _amount = msg.value;
        wallet[msg.sender] += _amount;
    }

    function withdraw() public {
        require(block.timestamp > timeTillWithdraw, "You can only withdraw three months after deposit");
        require (msg.sender == owner, "Only owner can withdraw");
        uint amount = wallet[msg.sender];
        wallet[msg.sender] -= amount;
       payable (msg.sender).transfer(amount);
    }

    function viewBalance() public view returns(uint){
         uint amount = wallet[msg.sender];
        return amount;
    }



}
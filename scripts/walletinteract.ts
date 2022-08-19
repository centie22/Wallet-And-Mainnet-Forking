import { ethers } from "hardhat"

async function main() {
    const helpers = require("@nomicfoundation/hardhat-network-helpers");

const walletUser = "0x59191671bF1281AFeB0E47C9b97C140EE460aF41";
await helpers.impersonateAccount(walletUser);
const impersonatedSigner = await ethers.getSigner(walletUser);

const WalletContract = "0x57E2A1A6D50425f202F4d2fBBD7442e0efA13F88"

const amount =  ethers.utils.parseEther("0.001");
const Value = await ethers.getContractAt("theWallet", WalletContract);

Value.deposit(amount);
const WalletBal = await Value.balanceOf(WalletContract);

console.log("Balance of wallet is: ", WalletBal);

//TRANSACTION HASH: 0x33776cb856b6bf8ad75e5cee12f6752db0f59936a45f1171505b7c235e57d741



}
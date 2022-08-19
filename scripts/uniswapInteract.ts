import { ethers } from "hardhat";

async function main() {
  //interact with uniswap swapTokenforExactToken function
  //swap usdt to dai
  //TO-DO
  //erc20 token interface
  //Approve the uniswap contract
  //check balance of signer before swap
  //swap token caling the function
  //check balance after swap.

  const USDTAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7"
  const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"

  const USDTholder = "0xb9711550ec6dc977f26b73809a2d6791c0f0e9c8"
  const amountOut = 2000
  const amountIN = ethers.utils.parseUnits("2000", "18");

  const helpers = require("@nomicfoundation/hardhat-network-helpers");

await helpers.impersonateAccount(USDTholder);
const impersonatedSigner = await ethers.getSigner(USDTholder);

const USDT= await ethers.getContractAt("IERC20", USDTAddress, impersonatedSigner);
const DAI = await ethers.getContractAt("IERC20", DAIAddress);
const WETH= await ethers.getContractAt("IERC20", WETHAddress, impersonatedSigner);


const UNI = await ethers.getContractAt("IUniswap", UNIRouter, impersonatedSigner);

await WETH.approve(UNIRouter, amountOut);

const holderUSDTbal = await USDT.balanceOf(USDTholder);
const holderDAIbal = await DAI.balanceOf(USDTholder);

console.log("Balance of holder before swap: ", Number(holderUSDTbal._hex));
console.log("Balance of holder before swap: ", Number(holderDAIbal._hex));


// await UNI.swapExactTokensForTokens(
//   amountOut,
//   amountIN, 
//    [USDTAddress, DAIAddress], 
//    USDTholder,
//   Math.floor(Date.now()/1000 + (60 * 10))
//);


await UNI.swapExactETHForTokens(
  amountOut, 
  [WETHAddress, DAIAddress], 
  USDTholder, 
  Math.floor(Date.now()/1000 + (60 * 10))
);



console.log("Balance of holder after swap:", Number(holderUSDTbal._hex));
console.log("Balance of holder after swap:", Number(holderDAIbal._hex));

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
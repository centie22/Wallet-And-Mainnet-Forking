import { ethers } from "hardhat"

async function main() {

    const WalletContract = "0xa55774A55094493ac407d2e58a32E5771D66e79e"

    const amount =  ethers.utils.parseEther("0.1");
    const Value = await ethers.getContractAt("IWallet", WalletContract);
    
    const send = await (await Value.deposit({value: amount})).wait(); 
    // const result = await send;

    const WalletBal = await Value.viewBalance();

    console.log("sent:    ", send);
    

    console.log("Balance of wallet is: ", WalletBal);

    //TRANSACTION HASH: 0xe5c012ceefe5696368c98fd4a1004adecea4be6102efd12f77ef60381bea78fa
}
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
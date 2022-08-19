import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
//require("@nomicfoundation/hardhat-ethers");

require('dotenv').config();
type HttpNetworkAccountUserConfig = any;
const {API_URL, PRIVATE_KEY} = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks:{
    hardhat:{
      forking: {
      url: "https://mainnet.infura.io/v3/8607630c5bc34c4bb990f175acb157e2",
    },
    },
    goerli:{
      url: API_URL,
      accounts:[PRIVATE_KEY] as HttpNetworkAccountUserConfig | undefined,
    }
  },
  //@ts-ignore
  GasLimit: 200000000000,
  gasPrice: 10000000000,
};

export default config;

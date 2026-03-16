import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
const{ LISK_SEPOLIA_URL, PRIVATE_KEY } = process.env;

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version:"0.8.28",
   settings: {
    evmVersion: "cancun",
  },
  },
  
  networks: {
   lisk_sepolia: {
      url: `${LISK_SEPOLIA_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },

    hardhat: {
      forking: {
        enabled: true,
        url: process.env.MAINNET_RPC_URL || "https://eth.publicnode.com",
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};

export default config;

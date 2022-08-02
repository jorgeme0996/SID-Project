require("@nomicfoundation/hardhat-toolbox");
const { PrivateKey, AlchemyUrl } = require('./config/constants');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: AlchemyUrl,
      accounts: [`0x${PrivateKey}`]
    }
  }
};

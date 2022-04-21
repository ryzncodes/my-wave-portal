require("@nomiclabs/hardhat-waffle");
require("dotenv").config(); //enabling .env files,to hide url/api key


module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.URL,
      accounts: [process.env.ACCOUNTS]
    },
  },
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/_tlTUYDuETL7wug6d6iWGsoS2iaCw5xH",
      accounts: [process.env.ACCOUNTS]
    },
  },
};
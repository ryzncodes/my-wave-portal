//hre. doesnt have to be imported. running npx hardhat from terminal will auto build the hre object.

const main = async () => {                                                            //async enables us to use await.
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //hre.ethers.getContractFactory("solidityfile.sol") compile contract
    const waveContract = await waveContractFactory.deploy(); //deploying the contract into blockchain (locally in hardhat).
    await waveContract.deployed(); //to wait until it's deployed first.
    console.log("Contract deployed to:", waveContract.address); // this code will run after contract is deployed. waveContract.addreess will show the contract's address in the blockchain.
  };
  
  const runMain = async () => {
    try { //try catch statement to find error in const main.
      await main();
      process.exit(0); // exit Node process without error // node.js statement.
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();
//hre. doesnt have to be imported. running npx hardhat from terminal will auto build the hre object.

const main = async () => {                                                            //async enables us to use await.
    const [owner, randomPerson] = await hre.ethers.getSigners(); //object that represents an Ethereum account. [] meant both var using same .getSigners.
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //hre.ethers.getContractFactory("solidityfile.sol") compile contract
    const waveContract = await waveContractFactory.deploy(); //deploying the contract into blockchain (locally in hardhat). //bridge to use fx from contract.
    await waveContract.deployed(); //to wait until it's deployed first.

    console.log("Contract deployed to:", waveContract.address); // this code will run after contract is deployed. waveContract.addreess will show the contract's address in the blockchain.
    console.log("Contract deployed by:", owner.address); //the owner's address.

    let waveCount; //variable for the fx in contract
    waveCount = await waveContract.getTotalWaves(); //calling the getTotalWaves fx from our contract. waveContract used as bridge from .js to .sol

    let waveTxn = await waveContract.wave(); //calling wave fx. 
    await waveTxn.wait(); //.wait method used to allow waveTxn to happen first before going to next line of code.

    waveCount = await waveContract.getTotalWaves(); //calling again getTotalWaves. should be changed to 1.
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
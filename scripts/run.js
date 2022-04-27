//hre. doesnt have to be imported. running npx hardhat from terminal will auto build the hre object.

const main = async () => {                                                            //async enables us to use await.
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); //hre.ethers.getContractFactory("solidityfile.sol") compile contract
    const waveContract = await waveContractFactory.deploy({ //deploying the contract into blockchain (locally in hardhat). //bridge to use fx from contract.
      value: hre.ethers.utils.parseEther("0.1"), // giving ethers to the contract itself
    }); 

    await waveContract.deployed(); //to wait until it's deployed first.
    console.log("Contract deployed to:", waveContract.address); // this code will run after contract is deployed. waveContract.addreess will show the contract's address in the blockchain.
    try{
      const getSeedNumber = waveContract.getSeedValue;
      var seedNumber = await waveContract.setSeedValue(getSeedNumber);
      console.log(seedNumber);
    }
    catch(error){
      console.log("THIS SHIT DOESNT WORK");
    }


    let contractBalance = await hre.ethers.provider.getBalance( //.ethers.provider.getBalance(address) to get contract's balance
      waveContract.address
    );

    console.log(
      "Contract Balance:", 
      hre.ethers.utils.formatEther(contractBalance) //formatEther will format the ether to generic format.
    );

    const waveTxn = await waveContract.wave("Hello Faiz!"); //calling wave fx. with strings
    await waveTxn.wait(); //.wait method used to allow waveTxn to happen first before going to next line of code.
    console.log(seedNumber);

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract Balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );

    let allWaves = await waveContract.getAllWaves();
    //console.log(allWaves);
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
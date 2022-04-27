try{
    const getSeedNumber = waveContract.getSeedValue; 
    var seedNumber = await waveContract.setSeedValue(getSeedNumber);
    console.log(seedNumber);
  }
  catch(error){
    console.log("THIS SHIT DOESNT WORK");
  }
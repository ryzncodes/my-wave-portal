// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; //What solidity version I'm using for this project. ^ meaning it's 0.8.0 or higher. Have to be similar in hardhat.config.js as well.


import "hardhat/console.sol"; //to enable console.log in contract files.

//Compile, Deploy to blockchain, console.log will run
contract WavePortal {
    uint256 totalWaves; //uint256 variable to track how many waves have been done.
    uint256 seed; //empty seed. can be change when wave fx is called.
    
    function getSeedValue() public view returns (uint256) {
        return seed;
    }

    function setSeedValue(uint256 _seed) public {
        seed = _seed; 
        }
    
    event NewWave(address indexed from, uint256 timestamp, string message); //something that happen in blockchain, to show on app/ front-end using emit

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves; // declaring waves variable to store array of wavers.

    mapping(address => uint256) public lastWavedAt; //mapping(_KeyType => _ValueType) public mappingName

    //constructor function to put inside contract function, final code deployed to the blockchain. used to initialize state variables (permanent variables). something like owner/wtv that wont change
    constructor() payable{ //need to add payable to enable contract pays people
        console.log("Yo yo, I am a contract and I am smart");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(string memory _message) public { //to wave, adding _message variable for users to send msg and waving

        require(
            lastWavedAt[msg.sender] + 30 seconds < block.timestamp,
            "Wait 30 seconds bro chill"
        );

        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1; //added to the counter when this function is ran
        console.log("%s has waved and said: %s", msg.sender, _message); //%s, js shortcut. meant to msg.sender. useful when dealing w multiple variables
        
        waves.push(Wave(msg.sender, _message, block.timestamp)); //insert new wave info to the array

        seed = (block.difficulty + block.timestamp + seed) % 100;
        
        if (seed <= 50) {
            console.log("%s won!", msg.sender);
            uint256 prizeAmount = 0.0001 ether;
            require( //checks to see if the below condition is true or not. if its not it'll quit the function.
                prizeAmount <= address(this).balance, //address(this).balance is balance of the contract
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}(""); //will send ether to the waver
            require(success, "Failed to withdraw money from contract.");
        }

        emit NewWave(msg.sender, block.timestamp, _message); //emitted the event in function.
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) { //view function will ensure state var will not be modified // returns meaning any output from the function, can return mutiple values.
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
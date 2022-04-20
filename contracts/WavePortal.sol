// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; //What solidity version I'm using for this project. ^ meaning it's 0.8.0 or higher. Have to be similar in hardhat.config.js as well.


import "hardhat/console.sol"; //to enable console.log in contract files.

contract WavePortal {                                           //Compile, Deploy to blockchain, console.log will run
    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }
}
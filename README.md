#Wave DApp

Deployed on rinkeby test server
DApp that lets user waves to the owner and having a chance to receive testeth. Consists of logs of whoever has been waving, timestamp and message.

// included run.js to test multiple situations when user is using the dapp
// generated seed from a random number(not truly random) to choose that associates with waver. If seed of the waver passes the condition placed in the contract, waver will receive ether.
//.env file used to hide address & private key of owner.
//.ethers are used to connect .js to .sol
# Web3 Frontend Senior Assignment

## Mock

![Initial Mock](https://github.com/vijaykrishnavanshi/assignment/blob/main/images/FESeniorAssignment.png)

## User Story

1. Connect wallet using Rainbow kit
2. Interact with contract through the dapp - ABI is in the same repo

    a. Goerli Contract: 0xfBF0c32Ab59c75D881Fd3d0eF5F16fc9c2146CD2 - https://goerli.etherscan.io/address/0xfBF0c32Ab59c75D881Fd3d0eF5F16fc9c2146CD2#readContract

    b. Sepolia Contract: 0x42e16675c793a35009269a4da7be1b3e2893f0b1 - https://sepolia.etherscan.io/address/0x42e16675c793a35009269a4da7be1b3e2893f0b1#readContract

    Note: contracts are verified so you can go to etherscan to play with them as well 

3. Mint 100 Tokens to the connected wallet address - mint function is public and can be called by anyone
4. Disperse tokens to wallet address

    a. first to only one address using transfer function of the contract

    b. then to multiple addresses - might need to sign multiple times

5. Bonus point if you can make the full process signless by generating ephermal wallet in frontend

    a. check: https://docs.ethers.org/v5/api/signer/#Wallet-createRandom

Things to learn here are: 

* how to connect metamask wallet to react app - can use rainbowkit
* Create a static build of the app with hash router
* Deploy and host it on IPFS using fleek and make sure the sub pages work on ipfs gateway
* Create signless flow in the frontend for a dapp

## Key Points

* State Management
* Documentation
* Folder Structure

## Bonus Points

* Implement Signless Functionality
* Unit tests for your components
* Explain how to write End 2 End tests for your code
* Deployed version of the app

## Technologies

* React.js
* Metamask
* IPFS
* Fleek

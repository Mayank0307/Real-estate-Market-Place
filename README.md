# Udacity Blockchain Capstone

Udacity Blockchain Capstone
Minted tokens proofs:
https://rinkeby.etherscan.io/tx/0x3fb3d1be008d96fa427415e50d9d9b5487ac3b489278229a640f66402a5b827f
https://rinkeby.etherscan.io/tx/0x9c503880efecb694677c28dc5697c27bad0cd4d0e69780d316e523678bf2ef2d
https://rinkeby.etherscan.io/tx/0xf75cb56d926b92f113c5011881b8ee5f7941efb2f20bc59f63186aea441e464e
https://rinkeby.etherscan.io/tx/0x20a033e968644ed4095cbec313949f78cd52b15e10f70d9a8f6a5c84a790348e
https://rinkeby.etherscan.io/tx/0xe545a21f82c082dd30afb6b3b075d43afb583c00b57291f005c37dbf3542e0a5
$ node mint.js
Transaction: 0x6562c823e219cc4a2d134ec5791f463e472d7fc819a7e726197ecbc8e96b00b0
Transaction: 0xb6800e30112da992f7d8cb07058423fc07a5318f683027cd054391c048b7a2a6
Transaction: 0xb64c91888fbe9b5ad4d66c3886d5b19fca071b8a9ad8b784186703f7ba4e71ce
Transaction: 0xb91ed1618854c1598e841ee4532f01f68e0484b42314f9bdfac76ed5e0278ad3
Transaction: 0xf060abbb92a71c240c71b6d18571751ace56dde23d8f6346afd354dd88088630
Transaction: 0xc14cd5a7b9bef64bc7eafb85f49f4fa1f24c946097fb5bd74d3227a9efdf13d5
Transaction: 0x99e98119664d12d86ed838abccd789a4aaa046d66b3714343cbe6dd64e1d83cc
Transaction: 0x2f656cf6032f4a0c411dfda3b58c80e570ab2e73aa157b68392a7534483e987b
Transaction: 0x5ed321f5f7b5441d8efd0ca22c7da23f66dd7004f94075a19de828dc41c71f0e
Transaction: 0x6fc05bac2ff5103e2967a6911a72587076b98382f46ce7521210ee87653b6089
Here you can find all assets on OpenSea.
https://rinkeby.opensea.io/account

How to deploy the smart contract:
npm install
truffle compile
truffle migrate --network development --reset
To mint new tokens first you have to create new proof with ZoKrates:

docker run -v /path/to/zokrates/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

Note: for windows the project has to be under the user path "c://Users/.." because docker can't mount folders outside of this path.

cd code/square
~/zokrates setup
~/zokrates compute-witness -a 3 9
Note: the proof to compute witness is simpler, is the square of a number.

~/zokrates generate-proof

You cant find the new proof at zokrates/code/square/proof.json . Then change the proofs inside mint.js with the new one and all the parameters with yours.

The smart contract is deployed on Rinkeby Ethereum test network:
Starting migrations...
Network name: 'rinkeby' Network id: 4447 Block gas limit: 6721975 (0x6691b7)

1_initial_migration.js
Replacing 'Migrations'
transaction hash: 0x003d53b8ff196242e3ec5aa4ff0ba98a93cb2e43c1c6cc0fef9dcb9d2a87c8e6 Blocks: 0 Seconds: 0 contract address: 0x9d73B3b7aa8fC2e1213F225a9f99ad13FFAdF8F8 block number: 1 block timestamp: 1591712775 account: 0x09E08B1888DD04C24814dE9881A31A2D0a799124 balance: 99.99472518 gas used: 263741 (0x4063d) gas price: 20 gwei value sent: 0 ETH total cost: 0.00527482 ETH

Saving migration to chain. Saving artifacts

Total cost: 0.00527482 ETH

2_deploy_contracts.js
Replacing 'MikeRealERC721Token'
transaction hash: 0x7139fba3a2654094c1ec8d8977a803afe328634c5aabeddc768f459f1d748c18 Blocks: 0 Seconds: 0 contract address: 0xaD22B74DAD6B5E8f339Be452bE07eCB8eF19C57D block number: 3 block timestamp: 1591712778 account: 0x09E08B1888DD04C24814dE9881A31A2D0a799124 balance: 99.92193302 gas used: 3597585 (0x36e511) gas price: 20 gwei value sent: 0 ETH total cost: 0.0719517 ETH

Replacing 'SquareVerifier'
transaction hash: 0xa93ccf444ad0d502a975949f26087b4a3a79d06e7cd7da7041b214905833d4ad Blocks: 0 Seconds: 0 contract address: 0xB65fa90010d457bFeea7b15625457904417f25A4 block number: 4 block timestamp: 1591712779 account: 0x09E08B1888DD04C24814dE9881A31A2D0a799124 balance: 99.89798738 gas used: 1197282 (0x1244e2) gas price: 20 gwei value sent: 0 ETH total cost: 0.02394564 ETH

Replacing 'SolnSquareVerifier'
transaction hash: 0x47c847658ae1dddee37196803bc6f1a6cb989c5ba3c14a13c283f68f9dec4ed8 Blocks: 0 Seconds: 0 contract address: 0x5F61204D91437181b9aB7E0A77b9d9072A8d7D44 block number: 5 block timestamp: 1591712779 account: 0x09E08B1888DD04C24814dE9881A31A2D0a799124 balance: 99.81327136 gas used: 4235801 (0x40a219) gas price: 20 gwei value sent: 0 ETH total cost: 0.08471602 ETH

Saving migration to chain. Saving artifacts

Total cost: 0.18061336 ETH

Summary
Total deployments: 4 Final cost: 0.18588818 ETH

Run test cases:
To run the unit test run the following command:

truffle test

Transaction proof on etherscan
https://rinkeby.etherscan.io/tx/0xe89f21b7b1d9120c53ec19aef63f4ced928354abb375977158e449b130830720
https://rinkeby.etherscan.io/tx/0x29b718dbb25ad8735eb8a32b1ddebc349adc398c99c6ad4dbe82b24dbc561b89
https://rinkeby.etherscan.io/tx/0xd59aa7ef990d9c06be833e21ec35d2b3de1706a92969c149302488b64e4b065e
Project Resources
Remix - Solidity IDE
Visual Studio Code
Truffle Framework
Ganache - One Click Blockchain
Open Zeppelin
Interactive zero knowledge 3-colorability demonstration
Docker
ZoKrates# blockchain-capstone-master

# blockchain-capston


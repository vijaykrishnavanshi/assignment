# Web3 Backend Assignment

APIs:

1. API to get NFTs that are on a particular address:
```
  GET /nfts/:ethaddress

  Response: {
    tokenId: "",
    contractAddress: "",
    image: "",
    name: "",
    description: ""
  }
```

2. API to get Tokens that are on a particular address:

```
  GET /tokens/:ethaddress

  Response: {
    contractAddress: "",
    name: "",
    logo: "",
    balance: "",
  }
```

## Technologies

* Node.js
* [Moralis](https://moralis.io/) - You'll need to create account to access their API

Example address you can use: 0xb413fa62326a0de54b2741cb1f584d9dbad9ee31

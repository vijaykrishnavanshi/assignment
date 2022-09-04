# Web3 Backend Assignment

APIs:

1. API to get NFTs that are on a particular address, response should be paginated:

```
  GET /nfts/:ethaddress?pageSize=10&pageNo=1

  Response: 
  {
    currentPage: 1,
    hasNext: false,
    nft: [{
      tokenId: "",
      contractAddress: "",
      image: "",
      name: "",
      description: ""
    }]
  }
```

2. API to get Tokens that are on a particular address, response should be paginated:

```
  GET /tokens/:ethaddress?pageSize=10&pageNo=1

  Response: {
    currentPage: 1,
    hasNext: false,
    token: [{
      contractAddress: "",
      name: "",
      logo: "",
      balance: "",
    }]
  }
```

## Bonus points

* Test cases using mocha
* Documentation
* Postman Collection for easily testing

## Technologies

* Node.js
* [Moralis](https://moralis.io/) - You'll need to create account to access their API
* [Alchemy](https://www.alchemy.com/) - You'll need to create account to access their API

Example address you can use: 0xb413fa62326a0de54b2741cb1f584d9dbad9ee31

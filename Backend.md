# Web3 Backend Assignment

APIs:

1. API to get NFTs that are on a particular address:

  GET /nfts/:address

  Response: {
    tokenId: "",
    contractAddress: "",
    image: "",
    name: "",
    description: ""
  }

2. API to get Tokens that are on a particular address:

  GET /tokens/:address

  Response: {
    contractAddress: "",
    name: "",
    logo: "",
    balance: "",
  }

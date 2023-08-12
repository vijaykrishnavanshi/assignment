# Backend (Full Time) Assignment

APIs:

1. API for uploading a file:

```
  POST /upload

  Response: 
  {
    fileId: "",
    size: "",
    timestamp: ""
  }
```

1. API for serving a file:

```
  GET /file/:fileId

  Response: 
  <file content>
```


## Key points

* Handle large file 100MB+ (can change the API structure also)
* Documentation
* Folder Structure

## Bonus points

* Explain how to write unit tests 
* Explain how to write end 2 end tests
* Postman Collection for easily testing
* Use IPFS for storage

## Technologies

* Node.js / Go

PS: Please try to submit the assignment within one week of recieving, shouldn't take more than 6/7 hours. And I hope at the end you learn something new :) 

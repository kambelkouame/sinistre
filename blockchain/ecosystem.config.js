module.exports = {
  apps : [
  {

     "name": "Node 1",
      "script": "./server.js",
      "watch": ["/"],
      "env": {
        "PORT": "5000"
      }
    },
    {
      "name": "Node 2",
      "script": "./server.js",
      "watch": ["/"],
      "env": {
        "PORT": "5001"
      }

   

  }


  ]
}


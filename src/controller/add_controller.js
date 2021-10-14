'use strict';
const uuid = require('uuid');
const AWS = require('aws-sdk'); 
const Response = require("../util/response");
const response = new Response();

const dynamoDb = new AWS.DynamoDB.DocumentClient();

class addController {
    static async addData(event) {
      
      const timestamp = new Date().getTime();
      const data = JSON.parse(event.body);
      
      const params = {
        TableName: "DataTable-DynamoDB",
        Item: {
          id: uuid.v1(),
          data: data,
          checked: false,
          createdAt: timestamp,
          updatedAt: timestamp,
        },
      };

    dynamoDb.put(params, (error) => {
    if (error) {
      console.error(error);
      callback(null,response.setSuccess("fail created data", error));
      return;
    } 
    callback(null, response.setSuccess(200,"data created correctly", null));
  });
  
    }  
}

module.exports = addController;
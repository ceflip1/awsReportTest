'use strict';
const Response = require("../util/response");
const response = new Response();
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class deleteController {
    static async deleteData(event) {
      const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
          id: event.pathParameters.id,
        },
      };

    dynamoDb.delete(params, (error) => {
        if (error) {
        console.error(error);
        callback(null,response.setSuccess("fail data deleted", error));
        return;
      }
      callback(null, response.setSuccess(200,"data deleted", null));
    });
    }
}

module.exports = deleteController;
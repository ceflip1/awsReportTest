'use strict';
const Response = require("../util/response");
const response = new Response();
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class putController {
    static async putData(event) {
      const timestamp = new Date().getTime();
      const data = JSON.parse(event.body);

      const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
          id: event.pathParameters.id,
        },
        ExpressionAttributeValues: {
          data: data,
          ':updatedAt': timestamp,
        },
        UpdateExpression: 'remove',
        ReturnValues: 'UPDATED_NEW',
      };
    
      dynamoDb.update(params, (error, result) => {
        if (error) {
          callback(null,response.setSuccess("fail updated data", error));
          return;
        }
        callback(null, response.setSuccess(200,"updated data", result));
      });

    }
}

module.exports = putController;

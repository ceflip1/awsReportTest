'use strict';
const AWS = require('aws-sdk'); 
const Response = require("../util/response");
const response = new Response();
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var aspose = aspose || {};
aspose.cells = require("aspose.cells");

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: "DataTable-DynamoDB",
};

class getController {
    static async listData() {
    dynamoDb.scan(params, (error, result) => {
    if (error) {
      callback(null,response.setSuccess("fail list of data obtained", error));
      return;
    }
    callback(null, response.setSuccess(200,"list of data obtained", result));
  });
    }

    static async readData(event) {
      const paramsRead = {
        TableName: "DataTable-DynamoDB",
        Key: {
          id: event.pathParameters.id,
        },
      };
    
      dynamoDb.get(paramsRead, (error, result) => {
        if (error) {
          console.error(error);
          callback(null,response.setSuccess("fail reading the data", error));
          return;
        }
        callback(null, response.setSuccess(200,"reading the data", result));
      });
  }

  static async downloadsxls() {
    try {

      let dataExel = await dynamoDb.scan(params);
      var worksheet = workbook.addWorksheet('My Sheet');
      worksheet.columns = [
        { header: 'Name', key: 'name', width: 10 },
        { header: 'Alias', key: 'alias', width: 20 },
        { header: 'Species', key: 'species', width: 15 },
        { header: 'Company', key: 'company', width: 25 }
    ];
      worksheet.addRows(dataExel);
      await workbook.xlsx.writeFile('../util/tableHeroes.xlsx');
      return response.setSuccess(200,"downloadsxls", null);
  } catch (error) {
      console.log('error');
      return response.setError("fail downloadsxls", error);
  }
    
  }

  static async downloadpdf() {
    try {
      var workbook = new aspose.cells.Workbook("../util/tableHeroes.xlsx");
      var saveOptions = aspose.cells.PdfSaveOptions();
      saveOptions.setOnePagePerSheet(true);
      workbook.save("tableHeroes.pdf", saveOptions);
      workbook.save("Excel to PDF.pdf", SaveFormat.PDF);
      
      return response.setSuccess(200,"downloadpdf", null);
  } catch (error) {
      return response.setError("fail downloadpdf", error);
  }
    
  }
}
module.exports = getController;


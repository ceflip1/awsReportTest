'use strict';
const processRequest = require('./src/factory/process_request');
const Response = require("./src/util/response");
const response = new Response();

module.exports.handler = async (event) => {
  return processRequest.process(event)
      .then(response => {
          return response
      })
      .catch(error => {
          return response.setError("Internal server error.",error);
      });
};
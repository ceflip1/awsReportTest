const postRequest = require('./post_request');
const getRequest = require('./get_request');
const putRequest = require('./put_request');
const deletetRequest = require('./delete_request');

class processRequest {
    static async process(event) {
        if (event.httpMethod) {
            switch (event.httpMethod) {
                case "GET":
                    return getRequest.process(event);
                case "POST":
                    return postRequest.process(event);
                case "PUT":
                    return putRequest.process(event);
                case "DELETE":
                    return deletetRequest.process(event);
                default:
                    throw "Event not allowed.";
            }
        } else {
            throw "Event not allowed.";
        }
    }
}

module.exports = processRequest;
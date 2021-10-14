const putController = require('../controller/put_controller');

class putRequest {
    static async process(event) {
        let command = event.path;

        if (command != undefined) {
            switch (command) {
                case `/update/${event.pathParameters.id}`:
                    return putController.putData(event);
                default:
                    throw "Request not allowed.";
            }
        } else {
            throw "Request not allowed.";
        }
    }
}

module.exports = putRequest;
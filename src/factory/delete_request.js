const deleteController = require('../controller/delete_controller');

class deletetRequest {
    static async process(event) {
        let command = event.path;

        if (command != undefined) {
            switch (command) {
                case `/delete/${event.pathParameters.id}`:
                    return deleteController.deleteData(event);
                default:
                    throw "Request not allowed.";
            }
        } else {
            throw "Request not allowed.";
        }
    }
}

module.exports = deletetRequest;
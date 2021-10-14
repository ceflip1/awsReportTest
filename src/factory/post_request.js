const addController = require('../controller/add_controller');

class postRequest {
    static async process(event) {
        let command =  event.path;

        if (command != undefined) {
            switch (command) {
                case "/add":
                    return addController.addData(event);
                default:
                    throw "Request not allowed.";
            }
        } else {
            throw "Request not allowed.";
        }
    }
}

module.exports = postRequest;
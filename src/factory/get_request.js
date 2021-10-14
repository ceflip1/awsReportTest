const getController = require('../controller/get_controller');

class getRequest {
    static async process(event) {
        let command = event.path;
        if (command != undefined) {
            switch (command) {
                case "/list":
                    return getController.listData();
                case `/read/${event.pathParameters.id}`:
                    return getController.readData(event);
                case "/downloadsxls":
                    return getController.downloadsxls();
                case "/downloadspdf":
                        return getController.downloadpdf();            
                default:
                    throw "Request not allowed.";
            }
        } else {
            throw "Request not allowed.";
        }
    }
}

module.exports = getRequest;
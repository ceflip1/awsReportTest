class Response {
    constructor() {
        this.code = null;
        this.message = null;
        this.type = null;
        this.data = null;
        this.traceId = null;
    }

    setSuccess(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.type = 'success';
        return {
            statusCode: this.code,
            body: JSON.stringify(
              {
                message: this.message,
                data: this.data,
                type: this.type
              },
              null,
              2
            ),
        };
    }

    setError(message,data) {
        this.message = message;
        this.data = data;
        this.type = 'error';
        return {
            statusCode: 400,
            body: JSON.stringify(
              {
                message: this.message,
                data: this.data,
                type: this.type
              },
              null,
              2
            ),
        };
    }
}

module.exports = Response;
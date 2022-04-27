class Request {
    constructor(request){
        this.req = request;
    }

    body(data){
        return {body:JSON.parse(data)}
    }
}

module.exports = Request;
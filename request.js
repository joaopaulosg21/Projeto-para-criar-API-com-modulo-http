class Request {
    constructor(request){
        this.req = request;
    }

    header(){
        return {headers:this.req.headers}
    }

    body(data){
        return {body:JSON.parse(data)}
    }
}

module.exports = Request;
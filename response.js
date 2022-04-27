class Response{
    constructor(response){
        this.res = response;
    }

    head(code,content){
        this.res.writeHead(code,{"Content-Type":content})
    }

    escrever(value){
        this.res.end(value)
    }

    json(value){
        if(typeof value == "object"){
            this.res.end(JSON.stringify(value))
        }
    }
}

module.exports = Response;
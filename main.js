const http = require('http');
const Response = require('./response');
const Request = require('./request');

class MyFramework {

    constructor(port){
        this.port = port
        this.server = http.createServer();
    }

    ligar(){
        this.server.listen(this.port,()=>{
            console.log(`Servidor rodando na porta ${this.port}`)
        })
    }

    get(url,callback){
        if(typeof callback == "function"){
            this.server.on('request',(req,res)=>{
                if(req.url == url && req.method == "GET"){
                    const response = new Response(res)
                    callback(req,response)
                }
            })
        }
    }

    post(url,callback){
        if(typeof callback == "function"){
            this.server.on('request',(req,res)=>{
                if(req.url == url && req.method == "POST"){
                    req.on('data',(data)=>{
                        const request = new Request(req);
                        const response = new Response(res);
                        callback(request.body(data),response)
                    });
                };
            });
        };
    };




}

module.exports = MyFramework
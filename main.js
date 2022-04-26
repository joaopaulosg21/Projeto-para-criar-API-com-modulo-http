const http = require('http');

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
                    callback(req,res)
                }
            })
        }
    }

    post(url,callback){
        if(typeof callback == "function"){
            this.server.on('request',(req,res)=>{
                if(req.url == url && req.method == "POST"){
                    req.on('data',(data)=>{
                        const Request = {
                            body:JSON.parse(data.toString())
                        }
                        const Response = {
                            status(code){
                                res.writeHead(code)
                            },
                            escrever(value){
                                res.end(value)
                            },
                            json(value){
                                if(typeof value == "object"){
                                    res.end(JSON.stringify(value))
                                }
                            }
                        }
                        callback(Request,Response)
                    })
                }
            })
        }
    }


}

module.exports = MyFramework
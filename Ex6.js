const http=require('http');
const requests=[];
const server=http.createServer((req,res)=>{
    //res.write("Hello world");
    if(req.url-'favicon.ico'){
    requests.push(req.url);
    //res.write(requests.toString());
    for(const url of requests){
        res.write(url)
    }
    res.end();
    }
})
server.listen(1234);
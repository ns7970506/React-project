const http = require('http')

  const requestHandler =  ( (req,res)=>{
    console.log(req.url,req.method, req.headers);
    if(req.url==='/'){
         res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Welcome to Home</h1></body>')
    res.write('</html>')
    return res.end()
    }
    else if(req.url === '/product'){
         res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Welcome to product</h1></body>')
    res.write('</html>')
    return res.end()
    }
    
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Welcome to Backend</h1></body>')
    res.write('</html>')
    res.end()
    
})
module.exports = requestHandler;
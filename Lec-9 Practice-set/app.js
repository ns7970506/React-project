const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("first dummy middleware", req.url,req.method);
    next();
    
});

app.use((req,res,next)=>{
    console.log("second dummy middleware", req.url,req.method);
    next();
});

// app.use((req,res,next)=>{
//     console.log("third dummy middleware", req.url,req.method);
//     res.send("<h1>Welcome to World </h1>")
// });

app.get("/",(req,res,next)=>{
    console.log("Handling / for GET", req.url,req.method);
    res.send(`<h1>Welcome to Coding</h1>`)
    
})

app.get("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for GET", req.url,req.method);
    res.send(`<h1>Give your details here</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name ="name" placeholder="Enter your name"/>
         <input type="text" name ="email" placeholder="Enter your Email"/>
        <input type="Submit"/>
        </form>`)
    
})

app.post("/contact-us",(req,res,next)=>{
    console.log("Handling /contact for POST",req.url,req.method);
    res.send(`<h1>Your Data will be informed laterally</h1>`)
    
})

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
    
});
import http from "http"
import fs from "fs"
import util from 'util'


const hostname = "127.0.0.1"
const port = 8001

let index;
let about;
let contact;
let errorPage;

index = fs.readFileSync("index.html", "utf-8")
about = fs.readFileSync("about.html", "utf-8")
contact = fs.readFileSync("contact.html", "utf-8")
errorPage = fs.readFileSync("404.html", "utf-8")

http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader("Content-Type", 'text/html');
  if(req.url=="/"){
    res.end(index)
  }
  else if(req.url=="/about"){
    res.end(about)
  }
  else if(req.url=="/contact"){
    res.end(contact)
  }
  else{
    res.statusCode = 404
    res.end(errorPage)
  }
}).listen(port, hostname, ()=>{
  console.log(`Starting server at ${port}:`);
});

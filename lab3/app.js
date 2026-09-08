import http from "http";
import { getAllTeams } from "./teams.js";
import {parse as parseUrl} from "url";

const PORT = 5000;

const sendJson = (res, statusCode,data)=>{
  res.writeHead(statusCode,{"content-type":"application/json"});
  res.end(data === 'undefined'?'':JSON.stringify(data));
};

const parseJSONBody = (req)=>{
  new Promise((resolve, reject)=>{
    let body = '';
    req.on('data',(chunk)=>{
      body += chunk.toString();
    });
    req.on("end", ()=>{
      try{
        resolve(body ? JSON.parse(body):{});
      }catch(error){
        reject(error);
      }
    });
  });
};

const server = http.createServer((req, res) => {
  const {pathname,query} = parseUrl(req.url, true);
  const {method} = req;
  console.log(pathname);
  console.log('query:', query);
  console.log('method:', method);

  if(pathname === '/api/v1/teams' && method === 'GET'){
    let teams = getAllTeams();
    return sendJson(res,200, teams);
  }else{
    res.statusCode = 404;
    res.end();
  }
});



server.listen(PORT, ()=> {
    console.log("SIH Server is running", PORT);
});
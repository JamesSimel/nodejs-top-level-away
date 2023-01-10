import http from "http";

const server = http.createServer((request, response) => {
    console.log("headers", request.headers);
    console.log("method", request.method);
    console.log("url", request.url);
    const users = {
        userName: "Mark",
        age: 56
    }
    // response.setHeader("content-Type", "text/html");
    response.setHeader("content-Type", "application/json")
    response.end(JSON.stringify(users));
}).listen(5000 || 8000)
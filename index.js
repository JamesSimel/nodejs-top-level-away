// const mesurements = require("./main.js"); //commonjs syntax

// import { l, w } from "./main.js";
let len;
let wid;
if (true){
    const { l, w } = await import("./main.js");
    len = l;
    wid = w;
}
const area = (length,width) => {
    console.log(length * width);
}

area(len,wid);
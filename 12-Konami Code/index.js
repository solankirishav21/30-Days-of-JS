console.log("connected");

const keys = [];
const code = "javascript";

window.addEventListener("keyup",(e)=>{
    console.log(e.key);
    keys.push(e.key);
    console.log(keys);
    keys.splice(-code.length-1,keys.length - code.length);
    if(keys.join('').includes(code)){
        cornify_add();
    }

});
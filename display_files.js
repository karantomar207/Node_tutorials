const  fs =require('fs');
const path = require('path');

const dirname=path.join(__dirname,"files")

for(i=0;i<5;i++){
    fs.writeFileSync(dirname+"/myfiles"+i+".txt","These are my files");
}


fs.readdir(dirname,(err,items)=>{
    console.log("The file name is",items)
})
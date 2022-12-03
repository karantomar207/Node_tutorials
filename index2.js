const fs=require('fs');
const path=require('path');
const dirname= path.join(__dirname,"crud");
const accesspath=dirname+"/createfile.txt";


// Create File
fs.writeFileSync(accesspath,"File is created");

//read File
// fs.readFile(accesspath,"utf-8",(err,item)=>{
//     console.log(item);
// })

//update file
// fs.appendFile(accesspath," Updated text",(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// })

// updating a file
// fs.rename(accesspath,dirname+"/newfile.txt",(err)=>{
//     if(!err){
//         console.log("file Name is updated");
//     }
// })

//deleting a file
// fs.unlink(dirname+"/newfile.txt",(err)=>{
//     if(!err) console.log("File is deleted");
// })
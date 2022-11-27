const value=require('./importing_data');

console.log(value)
console.log(value.x)
console.log(value.y)
console.log(value.z)


let arr=[2,3,4,5,6,7,8,9]

let result=arr.filter((item)=>{
    return item>3;
})

console.log(result)
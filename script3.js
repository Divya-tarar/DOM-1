// const timerId=setinterval(()=>{
//     console.log("After 3 sec")
// },1000)
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },18*1000)
// let count=1
// const timerId=setInterval(()=>{
//     if(count==10)clearInterval(timerId)
//     console.log(count)
//     count+=1

// },1000
console.log("Starting homework...");

setTimeout(() => {

console.log ("Homework done!");

console.log("Starting dinner...");

setTimeout(() => {

console.log("Dinner done!");

console.log("Getting ready to go out...");

setTimeout(() => {

console.log("Going to the playground!");

}, 1000); // after dinner

}, 1500); // dinner time

}, 2000); // homework time

const p=new Promise ((resizeBy,rej)=>{
    let done=false
    setTimeout(()=>{
        if(done){
            res("work is done!!")
        }else{
            rej("Work is not done")
        }
    },5000)
})
p.then((msg)=>{
    console.log(msg)

}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Finally block")
})
console.log(p)





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





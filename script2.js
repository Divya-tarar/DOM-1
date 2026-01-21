const click=document.querySelectord('#click')
//const stop=document.querySelector("#stop");
function Message(event){
    console.log(event.key);
    console.log("Button clicked !!")

}
click.addEventListener('keyup',Message);
//stop.addEventListener("click",()=>{
  //  console.log("stop button clicked")
    //click.removeEventListener("click",showMessage);
//})

// const form=document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log("form submitted!!")
// })

const div=document.querySelector('.container')
const div2=document.querySelector('.outer')
const btn=document.querySelector('button')

div.addEventListener('click',()=>{console.log("clicked the div")},false)
div.addEventListener('click',()=>{console.log("clicked the outer div")},false)
btn.addEventListener('click',()=>{console.log("clicked the button")},false)

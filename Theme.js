let modeBtn = document.querySelector("#modebtn");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode.toLowerCase() == "light")
    {
         
        document.querySelector('body').classList.add("dark");
    }
    else{
        document.querySelector('body').classList.add("white")   
    }
})
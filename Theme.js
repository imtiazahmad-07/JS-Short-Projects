let modeBtn = document.querySelector("#modebtn");
let currMode = "light";
let body = document.querySelector("body")

modeBtn.addEventListener("click",() => {
    if(currMode === "light")
    {
         currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }
    else
    {
        currMode = "light";
        body.classList.add("light") 
        body.classList.remove("dark")  
    }

   
})
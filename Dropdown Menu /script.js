let countries = ["Argentina", "Australia", "Brazil", "Canada", "China", "Egypt", "France", "Germany", "India", "Italy", "Japan", "Mexico", "New Zealand", "Russia", "Saudi Arabia", "South Africa", "South Korea", "Spain", "Turkey", "United Kingdom", "United States"]
let container = document.querySelector(".container")
let selectBtn = container.querySelector(".select-option")
let dropDownList = container.querySelector(".list-search-container")
let searchInput = container.querySelector("#search")
let lists = dropDownList.querySelector(".list")


selectBtn.addEventListener("click",()=>{
    container.classList.toggle("active")
})

function addCountry (){
    lists.innerHTML="";
    countries.forEach((country)=>{
        let listItem = '<li>' + country + '</li>';
        lists.insertAdjacentHTML("beforeend",listItem);

    })  
    addClickEventToLi(); 
}

addCountry();

function addClickEventToLi() {
  lists.querySelectorAll("li").forEach((listItem) => {
    listItem.addEventListener("click", () => {
      updateSelectCountry(listItem);
    });
  });
}
function updateSelectCountry(listItem){
    searchInput.value = "";
    selectBtn.firstElementChild.innerHTML = listItem.innerHTML;
    container.classList.remove("active")
}

searchInput.addEventListener("keyup", ()=>{
    let searchInpVal = searchInput.value.toLowerCase();
    let filterCOuntries = countries.filter(country =>{
        return country.toLowerCase().startsWith(searchInpVal);
    }).map(country=>{
        let listItem = "<li>" + country + "</li>";
        return listItem;
    }).join("");
    lists.innerHTML = filterCOuntries;
    
})

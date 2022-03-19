function home(){
    let liHome = document.querySelector(".liHome");
    liHome.innerHTML = `<i class="fa-solid fa-house-user"></i><a href = "#liHome">ԳԼԽԱՎՈՐ</a>`;
}
home();


function door(){
    let liDoor = document.querySelector(".liDoor");
    liDoor.innerHTML = ` <a href = "#liDoor">ԵՐԿԱԹՅԱ ԴՌՆԵՐ</a>`;
}
door();


function vand(){
    let liVand = document.querySelector(".liVand");
    liVand.innerHTML = `<a href = "#liVand">ԵՐԿԱԹՅԱ  ՃԱՂԱՎԱՆԴԱԿՆԵՐ</a>`;
}
vand();
// addEventListener(HashChangeEvent)
let imgf = document.querySelector(".firstImg");
function wid(){
imgf.classList.add("img-img");
};




let mainHome = document.querySelector(".mainHome")
let sectionDoor = document.querySelector(".sectionDoor");
let sectionVand = document.querySelector(".sectionVand");
let img = document.querySelector("img");
let footer = document.querySelector("footer")


window.addEventListener("hashchange", function(){
switch(window.location.hash){
   case "#liHome":
   mainHome.classList.remove("hidden");
   sectionDoor.classList.add("hidden");
   sectionVand.classList.add("hidden");
   break;

   case "#liDoor":
    footer.classList.add("hidden");
    mainHome.classList.add("hidden");
    sectionDoor.classList.remove("hidden");
    sectionVand.classList.add("hidden");
    break;


    default:
        mainHome.classList.add("hidden");
        sectionDoor.classList.add("hidden");
        sectionVand.classList.remove("hidden");
        footer.classList.add("hidden");
       
    
 };

})

let doorwidth = document.querySelector(".door>img");




let  pageHeight = document.body.scrollHeight - window.innerWidth; 
let  scrol = document.getElementById('inner-progressbar');
let progress ;
var element = document.getElementById("main");
var horizontalScrollPosition = document.querySelector("main").scrollLeft;




  const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
  var horizontalScrollPosition = document.querySelector("main").scrollLeft;
  
  var element = document.querySelector("main");
  var totalWidth = element.scrollWidth - element.clientWidth;

  progress = 100 * ( horizontalScrollPosition /totalWidth);



  console.log("Total Width of Element's Content:", progress );


  scrol.style.width =  progress + "%";
   evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});



var car = document.getElementsByClassName("search-call");
var park = document.getElementById("search-box");

for (let i = 0; i < 2 ; i++) {
  
  car[i].addEventListener("click" , swap);


function swap(){
  park.classList.toggle("boz")
}
}

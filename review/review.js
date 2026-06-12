const slider = document.getElementById("slider-slider")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let index = 0;
const visiblecards = 4;
const totalcards = 10;

next.addEventListener("click",()=>{
  if(index < totalcards - visiblecards){
    index++;
    slider.style.transform = `translateX(-${index*25}%)`
  }
})

prev.addEventListener("click",()=>{
  if(index>0){
    index--;
    slider.style.transform = `translateX(-${index * 25}%)`
  }
})

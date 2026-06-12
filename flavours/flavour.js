const filterBtns = document.querySelectorAll(".filter-btn")
const cards = document.querySelectorAll(".card-section")

filterBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    const filterValue = btn.getAttribute("data-filter")
    cards.forEach(card=>{
      const cardCategory = card.getAttribute("data-category")
      if(filterValue === "all" || cardCategory.includes(filterValue)){
        card.style.display = "block"
      }else{
        card.style.display = "none"
      }
    })
  })
})
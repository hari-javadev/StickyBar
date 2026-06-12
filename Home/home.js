const fav = document.getElementById("flav")
fav.addEventListener("click",()=>{
  window.location.href ="../flavours/index.html"
})

const order = document.getElementById("order-now")
order.addEventListener("click",()=>{
  window.location.href = "../flavours/index.html"
})

const flavor = document.getElementById("flavour-btn")
flavor.addEventListener("click",()=>{
  window.location.href = "../menu/index.html"
})

const menuBtn = document.querySelector(".menu-btnn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card-in");
  const results = document.getElementById("searchResults")

  searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();
    results.innerHTML = ""

    if(value === ""){
      results.style.display = "none"
      return;
    }

    cards.forEach(card => {

      const title = card.querySelector("h3").textContent

      if(title.toLocaleLowerCase().includes(value)){
        const item = document.createElement("div")
        item.classList.add("result-item")
        item.textContent = title;

        item.addEventListener("click",()=>{
          searchInput.value = title;
          results.style.display = "none"
          card.scrollIntoView({
            behavior: "smooth",
            block : "center"
          })
        })
        results.appendChild(item)
      }

    });
    results.style.display = results.children.length ? "block" : "none"

  });

});
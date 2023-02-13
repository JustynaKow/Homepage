console.log("Cześć!");

let changeFavouriteColor = document.querySelector(".js-changeFavouriteColor");
let colorElement = document.querySelector(".js-colorElement");

changeFavouriteColor.addEventListener("click", () => {
    colorElement.classList.toggle("section__colorElement--favourite");
    colorElement.classList.contains("section__colorElement--favourite") ? changeFavouriteColor.innerText = "To niebieski!" : changeFavouriteColor.innerText = "Naciśnij i sprawdź";
});



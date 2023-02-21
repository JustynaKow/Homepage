{
    const welcome = () => {
        console.log("Cześć!");
    };

    const onChangeFavouriteColor = () => {
        const colorElement = document.querySelector(".js-colorElement");
        const nextColorName = document.querySelector(".js-nextColorName");

        colorElement.classList.toggle("section__colorElement--favourite");
        nextColorName.innerText = colorElement.classList.contains("section__colorElement--favourite") ? "To niebieski!" : "Naciśnij i sprawdź";
    };

    const init = () => {
        const changeFavouriteColor = document.querySelector(".js-changeFavouriteColor");

        changeFavouriteColor.addEventListener("click", onChangeFavouriteColor);
        welcome();
    };

    init();
}
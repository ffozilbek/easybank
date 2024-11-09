const elHeaderNav = document.querySelector(".header__nav"),
    elBurger = document.querySelector(".burger");

    if(elBurger) {
        elBurger.addEventListener("click", ()=> {
            elHeaderNav.classList.toggle("active");
        })
    }
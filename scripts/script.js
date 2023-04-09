/*document.getElementById("main-action").onclick = function (arg) {
    document.getElementById("cars").scrollIntoView({behavior: 'smooth'});
}*/

function scroll(duration_value, element_id) {
    const el = document.getElementById(element_id);
    const distanceToTop = el.getBoundingClientRect().top;
    const startingY = window.scrollY;
    const difference = distanceToTop + 60;
    const duration = duration_value;
    let start;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startingY + difference * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    });
}

document.getElementById("main-action").onclick = function (arg) {
    /*scroll(1000, "cars");*/
};

let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        scroll(`1000`, "price");
    }
}

// Получаем кнопку "наверх"
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// Показываем кнопку, когда пользователь прокрутил страницу на 20% высоты экрана
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > window.innerHeight * 0.2 || document.documentElement.scrollTop > window.innerHeight * 0.2) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// При клике на кнопку прокручиваем страницу вверх
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});


document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль!");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");
    }
}
/*document.getElementById("price-action").onclick = function (arg) {

}*/

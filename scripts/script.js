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
    scroll(1000, "cars");
};

let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {
        let parent = this.closest(".car-item");
        let selected_car = parent.querySelector(".car-item-title").textContent;

        //alert(selected_car);
        const selectElement = document.getElementById('car');
        const options = selectElement.options;

        for (let i = 0; i < options.length; i++) {
            if (options[i].value === selected_car) {
                options[i].selected = true;
                break;
            }
        }

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
    let name, phone, car;

    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    car = document.getElementById("car").value;

    if (name === "") {
        alert("Заполните, пожалуйста, поле \"Ваше имя\"!");
    } else if (phone === "") {
        alert("Заполните, пожалуйста, поле \"Ваш телефон\"!");
    } else if (car === "") {
        alert("Выберите, пожалуйста, автомобиль!");
    } else {
        alert(`${name}, Здравствуйте!
        
Вы выбрали автомобиль: ${car}.   
Мы свяжемся с вами в ближайшее время по телефону: ${phone}.
Спасибо за вашу заявку!`);
    }
}
/*document.getElementById("price-action").onclick = function (arg) {

}*/

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});

function animatedFrom() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextFrom = parent.nextElementSibling;

            // check for validation
            if (input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextFrom)
                // console.log('everything is ok');
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextFrom)
            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parent, nextFrom)
            } else {
                parent.style.animation = "shake 0.5s ease";
            }
            // get rid of animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log("not enough characters");
        error('linear-gradient(120deg, #e52d27, #b31217)');
    } else {
        error('linear-gradient(120deg, #1D976C, #93F9B9)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error('linear-gradient(120deg, #1D976C, #93F9B9)');
        return true;
    } else {
        error('linear-gradient(120deg, #e52d27, #b31217)');
    }
}

function nextSlide(parent, nextFrom) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextFrom.classList.add('active')
}

function error(color) {
    document.body.style.backgroundImage = color;
}

animatedFrom();
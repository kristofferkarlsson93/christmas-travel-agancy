window.onload = () => {
    initEvents();
}

const initEvents = () => {
    const form = document.body.querySelector('.login-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const value = form.input.value.toLowerCase();
        if (value === "rätt svar") {
            document.body.querySelector('.login-container').style.display = 'none';
            document.body.style.background = "none";
            document.body.querySelector('.main-content').style.display = 'block';
        } else {
            form.input.classList.add('is-invalid');
            form.input.style.backgroundColor = "#fc8585";
        }
        return false;
    });
}
const sticky = {
    alert: function(text,ok) {
        const wrap = document.querySelector('.sticky');
        const div = document.createElement('div');
        if (ok === 'ok') {
            div.classList.add('sticky__item', 'ok');
        } else {
            div.classList.add('sticky__item');
        }

        div.innerHTML = `
        <div class="svg-shout"></div>
        <div class="sticky__text">${text}</div>
        `;
        wrap.append(div);
        const timer = setTimeout(() => {
            div.remove();
            clearTimeout(timer);
        }, 3000);
    }
}
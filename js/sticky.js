const sticky = {
    alert: function(text) {
        const wrap = document.querySelector('.sticky');
        const div = document.createElement('div');
        div.classList.add('sticky__item');
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
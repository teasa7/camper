customSelect('select');

const picker = new easepick.create({
    element: document.getElementById('date'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
    format: 'DD.MM.YY',
});

// Subscribe Label
const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');
var regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
inputSubscribe.addEventListener('input', ()=> {
    if(inputSubscribe.value.trim() !== '') {
        label.classList.add('subscribe__label--top');
        label.classList.remove('subscribe__label--invalid');
        if(regexp.test(inputSubscribe.value) == false) {
            label.classList.add('subscribe__label--invalid');
        }
        else label.classList.remove('subscribe__label--invalid');
    }
    else {
        label.classList.remove('subscribe__label--top');
        label.classList.remove('subscribe__label--invalid');
    }
})
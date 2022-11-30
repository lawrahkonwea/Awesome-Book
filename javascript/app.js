const first = document.getElementById('one');
const second = document.getElementById('two');
const third = document.getElementById('three');
const body0 = document.querySelector('.body-one');
const bodyT = document.querySelector('.body-two');
const bodyS = document.querySelector('.body-three');

first.addEventListener('click', () => {
    body0.style.display = 'block';
    bodyT.style.display = 'none';
    bodyS.style.display = 'none';
});

second.addEventListener('click', () => {
    body0.style.display = 'none';
    bodyT.style.display = 'block';
    bodyS.style.display = 'none';
});

third.addEventListener('click', () => {
    body0.style.display = 'none';
    bodyT.style.display = 'none';
    bodyS.style.display = 'block';
});
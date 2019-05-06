// Your code goes here
console.log('Press any Key to refresh page.')
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
    logoHeading.animate({
        opacity: [0,1],
        backgroundColor: ['white', 'lightgray','darkgray'],
        color: ['darkgray', 'gray', 'white']
    },
    3000
    );
});

window.addEventListener('keydown', () => {
    document.location.reload();
});

const html = document.querySelector('html');
document.addEventListener('wheel', (event) => {
    console.log(`You just performed an ${event}!`);
});

let dragPick = document.querySelector('.content-destination h2');
document.addEventListener('drag', (event) => {}, false);
document.addEventListener('dragstart', (event) => {
    dragPick = event.target;
    event.target.style.opacity = .5;
}, false);
document.addEventListener('dragend', (event) => {
    event.target.style.opacity = '';
}, false);
document.addEventListener('dragover', (event) => {
    event.preventDefault();
}, false);
document.addEventListener('dragenter', (event) => {
    if (event.target.className == 'drop') {
        event.target.style.opacity = .5;
    }
}, false);
document.addEventListener('dragleave', (event) => {
    if (event.target.className == 'drop') {
        event.target.style.opacity = '';
    }
}, false);
document.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.className == 'drop') {
        event.target.style.opacity = '';
        console.log('Have Fun!');
    }
}, false);
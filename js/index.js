// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    logoHeading.animate({
        opacity: [0,1],
        backgroundColor: ['white', 'lightgray','darkgray'],
        color: ['darkgray', 'gray', 'white']
    },
    3000
    );
});

const header = document.querySelector('header');
header.addEventListener('click', (event) => {
    header.style.background = 'lightgray';
});
const headerNav = document.querySelector('header nav');
headerNav.addEventListener('click', (event) => {
    headerNav.style.background = 'darkgray';
    event.stopPropagation();
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

window.addEventListener('load', (event) => {
    console.log("Let's Get Started!");
    console.log('Press any Key to refresh page.')

});

const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('click', (event) => {
    funBusImg.style.visibility = 'hidden';
    console.log('Dbl Click to redisplay IMG');
});


window.addEventListener('dblclick', (event) => {
    funBusImg.style.visibility = '';
});

funBusImg.addEventListener('auxclick', (event) => {
    if (funBusImg.style.width == '100%') {
        funBusImg.style.width = '50%';
    }
    else {
        funBusImg.style.width = '100%';
    }
});


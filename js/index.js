// Your code goes here
console.log('Press any Key to refresh page.')
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
    logoHeading.animate({
        opacity: [0,1],
        backgroundColor: ['white', 'lightgray','darkgray'],
        color: ['darkgray', 'gray', 'white']
    },
    4000
    );
});

window.addEventListener('keydown', () => {
    document.location.reload();
});

const html = document.querySelector('html');
document.addEventListener('wheel', (event) => {
    console.log(`You just performed an ${event}!`);
});
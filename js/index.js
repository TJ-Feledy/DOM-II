// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
    logoHeading.animate({
        opacity: [0,1],
        backgroundColor: ['white', 'lightgray','darkgray'],
    },
    3000
    );
});


const gifs = document.querySelectorAll('.gif-container img');


gifs.forEach(gif => {
    gif.addEventListener('click', () => {
        
        gif.classList.toggle('spin');
    });
});
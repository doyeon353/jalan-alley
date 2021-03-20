const testClick = document.querySelector('#test');
const postShow = document.getElementById('post');

function see(event) {
    if (!postShow.classList.contains('show')) {
        postShow.classList.remove('remove')
        postShow.classList.add('show');
    } else {
        postShow.classList.remove('show');
        postShow.classList.add('remove');
    }
}


function init() {
    testClick.addEventListener('click', see);
}
init();



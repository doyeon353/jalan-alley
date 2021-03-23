const liPost1 = document.getElementById('lipost-1');
const liPost2 = document.getElementById('lipost-2');
const liPost3 = document.getElementById('lipost-3');
const liPost4 = document.getElementById('lipost-4');
const liPost5 = document.getElementById('lipost-5');

const imgArray = ['post-1', 'post-2', 'post-3', 'post-4', 'post-5'];

function toggleEvent(post) {
    let postImg = document.getElementById(post);
    if (postImg.classList.contains('remove')) {
        postImg.classList.remove('remove');
    }
    postImg.classList.toggle('show');
    if (!postImg.classList.contains('show')) {
        postImg.classList.toggle('remove');
    }
}




function printPost(event) {
    const target = event.target;
    const tarId = target.id;
    if (tarId === 'lipost-1') {
        toggleEvent('post-1');

    } else if (tarId === 'lipost-2') {
        toggleEvent('post-2');
    } else if (tarId === 'lipost-3') {
        toggleEvent('post-3');
    } else if (tarId === 'lipost-4') {
        toggleEvent('post-4');
    } else {
        toggleEvent('post-5');
    }

}

liPost1.addEventListener('click', printPost);
liPost2.addEventListener('click', printPost);
liPost3.addEventListener('click', printPost);
liPost4.addEventListener('click', printPost);
liPost5.addEventListener('click', printPost);


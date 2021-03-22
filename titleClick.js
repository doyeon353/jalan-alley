const liPost1 = document.getElementById('lipost-1');
const liPost2 = document.getElementById('lipost-2');
const liPost3 = document.getElementById('lipost-3');
const liPost4 = document.getElementById('lipost-4');
const liPost5 = document.getElementById('lipost-5');


function printPost(event) {
    const target = event.target;
    if (target.id === 'lipost-1') {
        let postImg = document.getElementById('post-1');
        if (postImg.classList.contains('remove')) {
            postImg.classList.remove('remove');
        }
        postImg.classList.toggle('show');
        if (!postImg.classList.contains('show')) {
            postImg.classList.toggle('remove');
        }
    }

}

liPost1.addEventListener('click', printPost);
liPost2.addEventListener('click', printPost);
liPost3.addEventListener('click', printPost);
liPost4.addEventListener('click', printPost);
liPost5.addEventListener('click', printPost);


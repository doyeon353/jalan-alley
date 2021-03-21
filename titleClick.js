const list1 = document.getElementById('lipost-1');
const list2 = document.getElementById('lipost-2');
const list3 = document.getElementById('lipost-3');
const list4 = document.getElementById('lipost-4');
const list5 = document.getElementById('lipost-5');

const postShow = document.getElementById('post-1');
const postShow2 = document.getElementById('post-2');

function see(event) {
    if (!postShow.classList.contains('show')) {
        postShow.classList.remove('remove')
        postShow.classList.add('show');
    } else {
        postShow.classList.remove('show');
        postShow.classList.add('remove');
    }
}

function see2(event) {
    if (!postShow2.classList.contains('show')) {
        postShow2.classList.remove('remove')
        postShow2.classList.add('show');
    } else {
        postShow2.classList.remove('show');
        postShow2.classList.add('remove');
    }
}


list1.addEventListener('click', see);
list2.addEventListener('click', see2);



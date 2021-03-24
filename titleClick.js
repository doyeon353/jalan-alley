const gangnam = document.getElementById('gangnam');
const hongdae = document.getElementById('hongdae');
const hyehwa = document.getElementById('hyehwa');
const ehwa = document.getElementById('ehwa');
const ilsan = document.getElementById('ilsan');

function removeShow() {
    const postList = document.querySelectorAll('.post-list');
    postList.forEach(span => {
        span.classList.remove('show');
    })
}
function clickEvent(event) {
    const targetId = event.target.id;
    if (targetId === 'gangnam') {
        const gangnamImg = document.getElementById('js-gangnam');
        gangnamImg.classList.toggle('show');
        if (gangnamImg.classList.contains('show')) {
            removeShow();
            gangnamImg.classList.toggle('show');
        }
    } else if (targetId === 'hongdae') {
        const hongdaeImg = document.getElementById('js-hongdae')
        hongdaeImg.classList.toggle('show');
        if (hongdaeImg.classList.contains('show')) {
            removeShow();
            hongdaeImg.classList.toggle('show');
        }
    } else if (targetId === 'hyehwa') {
        const hyehwaImg = document.getElementById('js-hyehwa')
        hyehwaImg.classList.toggle('show');
        if (hyehwaImg.classList.contains('show')) {
            removeShow();
            hyehwaImg.classList.toggle('show');
        }
    } else if (targetId === 'ehwa') {
        const ehwaImg = document.getElementById('js-ehwa')
        ehwaImg.classList.toggle('show');
        if (ehwaImg.classList.contains('show')) {
            removeShow();
            ehwaImg.classList.toggle('show');
        }
    } else {
        const ilsanImg = document.getElementById('js-ilsan')
        ilsanImg.classList.toggle('show');
        if (ilsanImg.classList.contains('show')) {
            removeShow();
            ilsanImg.classList.toggle('show');
        }
    }
}
function init() {
    const titleClick = document.querySelectorAll('.js-title-click');
    for (const title of titleClick) {
        title.addEventListener('click', clickEvent);
    }
}
init();


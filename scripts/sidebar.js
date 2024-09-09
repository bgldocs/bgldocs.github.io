
const exit_sidebar_button = document.querySelector('.exit-side-bar');
const enter_sidebar_button = document.querySelector('.side-bar-open');

exit_sidebar_button.addEventListener('click', (e) => {
    openSideBar(true);
});

enter_sidebar_button.addEventListener('click', (e) => {
    openSideBar(false);
});

function openSideBar(_value) {
    if (_value) {
        const sidebar_cont = document.querySelector('.side-bar-cont');
        sidebar_cont.classList.add('side-bar-move');
    }else{
        const sidebar_cont = document.querySelector('.side-bar-cont');
        sidebar_cont.classList.remove('side-bar-move');
    }
}


const body_size = document.querySelector('body').getBoundingClientRect();
if (body_size.right >= 768) {
    openSideBar(false);
}
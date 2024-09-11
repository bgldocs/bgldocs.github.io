import {load} from 'js-toml';


function openSideBar(_value) {
    if (_value) {
        const sidebar_cont = document.querySelector('.side-bar-cont');
        sidebar_cont.classList.add('side-bar-move');
    }else{
        const sidebar_cont = document.querySelector('.side-bar-cont');
        sidebar_cont.classList.remove('side-bar-move');
    }
}

// Organizing The Sidebar

{/* <div class="side-bar-cont side-bar-move lg:left-0 fixed lg:absolute top-0 lg:top-header left-0 w-full lg:w-136 h-fv lg:h-full z-50 bg-light-mode dark:bg-dark-mode text-dark-mode dark:text-light-mode">
        <button class="exit-side-bar lg:hidden absolute top-4 right-8">X</button>
        <div class="side-bar flex flex-col gap-12 w-full h-full p-12">
            <div class="side-bar-element flex flex-col gap-2">
                <h3>📑 <strong>Intro to Game Development</strong></h3>
                <ul>
                    <li><a href="/docs/overview.html">Overview</a></li>
                    <li><a href="/docs/overview.html">N/A</a></li>
                </ul>
            </div>
        </div>
</div> */}

function RenderSidebar() {
    const preHTML = `<div class="side-bar-cont side-bar-move lg:left-0 fixed lg:absolute top-0 lg:top-header left-0 w-full lg:w-136 h-fv lg:h-full z-50 bg-light-mode dark:bg-dark-mode text-dark-mode dark:text-light-mode">
        <button class="exit-side-bar lg:hidden absolute top-4 right-8">X</button>
        <div class="side-bar flex flex-col gap-12 w-full h-full p-12">`

    const postHTML = `</div>
</div>`

    let side_bar_cont = document.createElement('div');
    side_bar_cont.classList.add('side-bar-cont', 'side-bar-move', 'lg:left-0', 'fixed', 'lg:absolute', 'top-0', 'lg:top-header', 'left-0', 'w-full', 'lg:w-136', 'h-fv', 'lg:h-full', 'z-50', 'bg-light-mode', 'dark:bg-dark-mode', 'text-dark-mode', 'dark:text-light-mode');
    document.querySelector('body').appendChild(side_bar_cont);

    let side_bar_exit = document.createElement('button');
    side_bar_exit.classList.add('exit-side-bar', 'lg:hidden', 'absolute', 'top-4', 'right-8');
    side_bar_exit.innerText = 'X';
    side_bar_cont.appendChild(side_bar_exit);

    let side_bar = document.createElement('div');
    side_bar.classList.add('side-bar', 'flex', 'flex-col', 'gap-8', 'w-full', 'h-full', 'p-12');
    side_bar_cont.appendChild(side_bar);

    fetch("../docs/sidebar.toml")
        .then((res) => res.text())
        .then((text) => {
            const data = load(text);
            for (const section in data["sidebar"]){
                const _sidebar_section = data["sidebar"][section]
                const _sidebar_section_title = _sidebar_section["title"]
                // Foreach Section
                let side_bar_element = document.createElement('div');
                side_bar_element.classList.add('side-bar-element', 'flex', 'flex-col', 'gap-2');
                let section_header = document.createElement('h3');
                section_header.innerHTML = "<strong>"+_sidebar_section_title+"</strong>";
                side_bar_element.appendChild(section_header)
                
                let section_ul = document.createElement('ul');
                side_bar_element.appendChild(section_ul)
                side_bar.appendChild(side_bar_element);
                for (const element in _sidebar_section) {
                    const _sidebar_element = _sidebar_section[element];
                    
                    // To skip the Section Title
                    if (_sidebar_element["path"] == null){
                        continue;
                    }
                    let section_li = document.createElement('li');
                    // Set Items
                    section_li.innerHTML = '<a href="'+_sidebar_element["path"]+'">'+_sidebar_element["title"]+'</a>';
                    section_ul.appendChild(section_li);
                    // Foreach Element
                }
            }
    }).catch((e) => console.error(e));

    // Set Section

    // document.querySelector('body').innerHTML += preHTML + side_bar_element.innerHTML + postHTML;
}

window.addEventListener('load', (e) => {
    RenderSidebar();

    const exit_sidebar_button = document.querySelector('.exit-side-bar');
    const enter_sidebar_button = document.querySelector('.side-bar-open');

    exit_sidebar_button.addEventListener('click', (e) => {
        openSideBar(true);
    });

    enter_sidebar_button.addEventListener('click', (e) => {
        openSideBar(false);
    });

    const body_size = document.querySelector('body').getBoundingClientRect();
    if (body_size.right >= 768) {
        openSideBar(false);
    }
});

// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

import {load} from 'js-toml';

const view_mode_button = document.querySelector(".view-mode");
const view_mode_button_lg = document.querySelector(".view-mode-lg");
view_mode_button.addEventListener('click', (e) => {
    let list = document.querySelector("html").classList;
    localStorage.setItem('darkmode', JSON.stringify(list.length == 0))
    SetDarkMode(list.length == 0)
});

function SetDarkMode(_value) {
    if (_value == true) {
        document.querySelector("html").classList.add('dark')
        view_mode_button.querySelector('.light-mode').classList.remove('hidden');
        view_mode_button.querySelector('.dark-mode').classList.add('hidden');
    }else {
        document.querySelector("html").classList.remove('dark')
        view_mode_button.querySelector('.light-mode').classList.add('hidden');
        view_mode_button.querySelector('.dark-mode').classList.remove('hidden');
    }
}

window.addEventListener('load', (e) => {
    var _darkmode_storage_value = JSON.parse(localStorage.getItem("darkmode"));
    SetDarkMode(_darkmode_storage_value);

    const headline = document.querySelector('h1');
    const description = document.querySelector('h2');
    if (headline != null) {
        fetch("../site.toml")
        .then((res) => res.text())
        .then((text) => {
            const data = load(text);
            const owner = data["owner"];
            document.title = owner["site_title"];
            headline.innerText = owner["site_headline"];
            description.innerText = owner["site_description"]
        }).catch((e) => console.error(e));
    }
})
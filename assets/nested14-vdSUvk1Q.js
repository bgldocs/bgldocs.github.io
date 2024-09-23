import"./main-CQbqv8wJ.js";import{m as o}from"./marked.esm-DoEmVC0A.js";o.use({breaks:!0,gfm:!0});fetch("./d7.UI.md").then(r=>r.text()).then(r=>{let t=r,n="",l=!1;for(let e=0;e<t.length;e++)t[e]=="`"&&t[e+1]=="`"&&t[e+2]=="`"&&t[e+3]!=`
`?l=!0:t[e]=="`"&&t[e+1]=="`"&&t[e+2]=="`"&&t[e+3]==`
`&&(l=!1),e<t.length-1&&t[e]==`
`&&t[e+1]==`
`&&l==!1?n+=` 
<br>
`:n+=t[e];document.querySelector(".content").innerHTML=o.parse(n)}).catch(r=>console.error(r));

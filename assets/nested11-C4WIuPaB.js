import"./main-CQbqv8wJ.js";import{m as l}from"./marked.esm-DoEmVC0A.js";l.use({breaks:!0,gfm:!0});fetch("./d4.Rigidbody.md").then(r=>r.text()).then(r=>{let t=r,n="",o=!1;for(let e=0;e<t.length;e++)t[e]=="`"&&t[e+1]=="`"&&t[e+2]=="`"&&t[e+3]!=`
`?o=!0:t[e]=="`"&&t[e+1]=="`"&&t[e+2]=="`"&&t[e+3]==`
`&&(o=!1),e<t.length-1&&t[e]==`
`&&t[e+1]==`
`&&o==!1?n+=` 
<br>
`:n+=t[e];document.querySelector(".content").innerHTML=l.parse(n)}).catch(r=>console.error(r));

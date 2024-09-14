import"./main-CQbqv8wJ.js";import{m as l}from"./marked.esm-DoEmVC0A.js";l.use({breaks:!0,gfm:!0});fetch("./d1.Inputs.md").then(n=>n.text()).then(n=>{let t=n,r="",s=!1;for(let e=0;e<t.length;e++)t[e]=="`"&&t[e+1]=="`"&&t[e+2]=="`"&&t[e+3]!=`
`?s=!0:t[e]=="`"&&t[e+1]=="`"&&t[e+2]=="`"&&t[e+3]==`
`&&(s=!1),e<t.length-1&&t[e]==`
`&&t[e+1]==`
`&&s==!1?r+=` 
<br>
`:r+=t[e];document.querySelector(".content").innerHTML=l.parse(r)}).catch(n=>console.error(n));

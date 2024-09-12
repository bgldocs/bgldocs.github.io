import"./main-CQbqv8wJ.js";import{m as o}from"./marked.esm-BPQGdaXV.js";o.use({breaks:!0,gfm:!0});fetch("./c1.Variables.md").then(t=>t.text()).then(t=>{let r=t,n="";for(let e=0;e<r.length;e++)e<r.length-1&&r[e]==`
`&&r[e+1]==`
`?n+=` 
<br>
`:n+=r[e];document.querySelector(".content").innerHTML=o.parse(n)}).catch(t=>console.error(t));

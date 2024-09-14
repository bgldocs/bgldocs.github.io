import"./main-CQbqv8wJ.js";import{m as o}from"./marked.esm-DoEmVC0A.js";o.use({breaks:!0,gfm:!0});fetch("./c2.Functions.md").then(t=>t.text()).then(t=>{let n=t,r="";for(let e=0;e<n.length;e++)e<n.length-1&&n[e]==`
`&&n[e+1]==`
`?r+=` 
<br>
`:r+=n[e];document.querySelector(".content").innerHTML=o.parse(r)}).catch(t=>console.error(t));

const e=document.querySelectorAll("._anim-image");e.length>0&&window.addEventListener("scroll",function(){for(let t=0;t<e.length;t++){let n=e[t],i=n.offsetHeight,o=function(e){let t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+n}}(n).top,l=window.innerHeight-i/4;i>window.innerHeight&&(l=window.innerHeight-window.innerHeight/4),pageYOffset>o-l&&pageYOffset<o+i?n.classList.add("_active"):n.classList.remove("_active")}});//# sourceMappingURL=index.c339be20.js.map

//# sourceMappingURL=index.c339be20.js.map

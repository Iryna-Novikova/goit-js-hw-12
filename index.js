import{a as f,S as P,i as M}from"./assets/vendor-CocXUmuy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();f.defaults.baseURL="https://pixabay.com";const $="50600244-46274b1c7bbfed49553e909c7",h=15,p=async(e,s)=>{const a={key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:h};return(await f.get("/api/",{params:a})).data},g=document.querySelector(".gallery"),y=document.querySelector(".loader"),L=document.querySelector(".load-more-btn"),O=new P(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function x(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.webformatURL}">
      <img
        class="gallery-image"
        src="${e.largeImageURL}"
        alt="${e.tags}"
      /> 
    <div class="img-info">
      <div class="img-info-descr">
         <h2 class="img-info-header">likes</h2>
         <p class="img-info-p">${e.likes}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">views</h2>
         <p class="img-info-p">${e.views}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">comments</h2>
         <p class="img-info-p">${e.comments}</p>
      </div>
      <div class="img-info-descr">
         <h2 class="img-info-header">downloads</h2>
         <p class="img-info-p">${e.downloads}</p>
      </div>      
      </div>          
    </a>
    </li>`}function v(e){const s=e.map(x).join(`
`);g.insertAdjacentHTML("beforeend",s),O.refresh()}function B(){g.innerHTML=""}function b(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function k(){L.classList.remove("hidden")}function q(){L.classList.add("hidden")}const d=document.querySelector(".form"),E=document.querySelector(".load-more-btn");let r=0,m=0,i="",n;d.addEventListener("submit",R);async function R(e){if(e.preventDefault(),B(),q(),i=d.elements["search-text"].value.trim(),i!==""){b(),r=1;try{const s=await p(i,r);s.hits.length===0?(n="❌ Sorry, there are no images matching your search query. Please try again!",u("topRight")):(v(s.hits),d.reset()),m=Math.ceil(s.totalHits/h),r<m&&(k(),E.addEventListener("click",S))}catch{}w()}else n="❌ Please enter non empty request.",u("topRight")}async function S(e){r+=1,b();try{const s=await p(i,r);v(s.hits)}catch{}w(),r===m&&(q(),E.removeEventListener("click",S),n="We're sorry, but you've reached the end of search results.",setTimeout(u("bottomCenter"),1e3))}function u(e){M.show({title:"",message:n,backgroundColor:"rgb(136, 44, 44)",messageColor:"rgb(255, 255, 255)",position:e})}
//# sourceMappingURL=index.js.map

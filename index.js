import{a as f,S as B,i as M}from"./assets/vendor-CocXUmuy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();f.defaults.baseURL="https://pixabay.com";const $="50600244-46274b1c7bbfed49553e909c7",h=15,g=async(e,t)=>{const c={key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:h};return(await f.get("/api/",{params:c})).data},p=document.querySelector(".gallery"),y=document.querySelector(".loader"),L=document.querySelector(".load-more-btn"),O=new B(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function x(e){return`<li class="gallery-item">
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
    </li>`}function v(e){const t=e.map(x).join(`
`);p.insertAdjacentHTML("beforeend",t),O.refresh()}function I(){p.innerHTML=""}function b(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function R(){L.classList.remove("hidden")}function q(){L.classList.add("hidden")}const i=document.querySelector(".form"),E=document.querySelector(".load-more-btn");let r=0,m=0,n="",a;i.addEventListener("submit",k);async function k(e){if(e.preventDefault(),I(),q(),n=i.elements["search-text"].value.trim(),n!==""){b(),r=1;try{const t=await g(n,r);t.hits.length===0?(a="❌ Sorry, there are no images matching your search query. Please try again!",u("topRight")):(v(t.hits),P()),i.reset(),m=Math.ceil(t.totalHits/h),r<m&&(R(),E.addEventListener("click",S))}catch{}w()}else a="❌ Please enter non empty request.",u("topRight"),i.reset()}async function S(e){r+=1,b();try{const t=await g(n,r);v(t.hits),P()}catch{}w(),r===m&&(q(),E.removeEventListener("click",S),a="We're sorry, but you've reached the end of search results.",setTimeout(u("bottomCenter"),1e3))}function u(e){M.show({title:"",message:a,backgroundColor:"rgb(136, 44, 44)",messageColor:"rgb(255, 255, 255)",position:e})}function P(){const e=document.querySelector(".gallery-item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

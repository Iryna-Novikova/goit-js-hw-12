import{a as f,S as P,i as B}from"./assets/vendor-CocXUmuy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();f.defaults.baseURL="https://pixabay.com";const M="50600244-46274b1c7bbfed49553e909c7",h=15,g=async(e,t)=>{const l={key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:h};return(await f.get("/api/",{params:l})).data},p=document.querySelector(".gallery"),y=document.querySelector(".loader"),L=document.querySelector(".load-more-btn"),R=new P(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function O(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-image"
        src="${e.webformatURL}"
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
    </li>`}function v(e){const t=e.map(O).join(`
`);p.insertAdjacentHTML("beforeend",t),R.refresh()}function x(){p.innerHTML=""}function b(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function I(){L.classList.remove("hidden")}function S(){L.classList.add("hidden")}const a=document.querySelector(".form"),q=document.querySelector(".load-more-btn");let s=0,u=0,c="",i;a.addEventListener("submit",k);async function k(e){if(e.preventDefault(),x(),S(),c=a.elements["search-text"].value.trim(),c!==""){b(),s=1;try{const t=await g(c,s);t.hits.length===0?(i="❌ Sorry, there are no images matching your search query. Please try again!",n("topRight")):(v(t.hits),$()),a.reset(),u=Math.ceil(t.totalHits/h),s<u&&I()}catch(t){i=`❌ Sorry, it's some error hear: ${t}`,n("topRight")}w()}else i="❌ Please enter non empty request.",n("topRight"),a.reset()}q.addEventListener("click",E);async function E(e){s+=1,b();try{const t=await g(c,s);v(t.hits),$()}catch(t){i=`❌ Sorry, it's some error hear: ${t}`,n("topRight")}w(),s===u&&(S(),q.removeEventListener("click",E),i="We're sorry, but you've reached the end of search results.",setTimeout(n,1e3,"bottomCenter"))}function n(e){B.show({title:"",message:i,backgroundColor:"rgb(136, 44, 44)",messageColor:"rgb(255, 255, 255)",position:e})}function $(){const e=document.querySelector(".gallery-item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

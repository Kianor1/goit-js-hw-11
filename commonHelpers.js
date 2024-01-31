import{i as c,S as L,a as b}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const S=document.querySelector(".search-form"),p=document.querySelector(".pictures-list"),l=document.querySelector(".js-load-btn"),d=document.querySelector(".js-loader");let n=1,u=null;function m(){const r="https://pixabay.com/api/",e={key:"42111454-a6064c7507ecd0abc8356168a",q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:n};return b.get(r,{params:e}).then(o=>o.data)}S.addEventListener("submit",q);async function q(r){if(r.preventDefault(),u=r.target.elements.query.value,n=1,u===""){c.error({position:"topRight",message:"Enter a word to search for"});return}try{const e=await m();if(e.totalHits===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}n===1&&(h(),p.innerHTML="",f(e.hits),g(e.totalHits),y())}catch(e){console.log(`Error: ${e}`)}}function v({largeImageURL:r,webformatURL:e,tags:o,likes:a,views:t,comments:i,downloads:s}){return` <li class="picture-card">
<a class="gallary-card-link" href="${r}">
  <img src="${e}" alt="${o}" />
  <ul class="image-info">
    <li class="image-item-info">
      <p>Likes</p>
      <p>${a}</p>
    </li>
    <li class="image-item-info">
      <p>Views</p>
      <p>${t}</p>
    </li>
    <li class="image-item-info">
      <p>Comments</p>
      <p>${i}</p>
    </li>
    <li class="image-item-info">
      <p>Downloads</p>
      <p>${s}</p>
    </li>
  </ul>
</a>
</li>`}function w(r){return r.map(v).join("")}function f(r){const e=w(r);p.insertAdjacentHTML("beforeend",e),$.refresh()}l.addEventListener("click",P);async function P(){n+=1,h();const r=await m();f(r.hits),g(r.totalHits),y()}function g(r){const e=Math.ceil(r/40);n>=e?(c.info({position:"topRight",message:"We're sorry, there are no more posts to load"}),l.classList.add("is-hidden")):l.classList.remove("is-hidden")}function h(){d.classList.remove("is-hidden")}function y(){d.classList.add("is-hidden")}const $=new L(".pictures-list a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map

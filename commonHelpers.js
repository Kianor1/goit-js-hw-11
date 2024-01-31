import{i as c,S as L}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const w=document.querySelector(".search-form"),m=document.querySelector(".gallery-list"),l=document.querySelector(".js-more-btn"),d=document.querySelector(".js-loader");let a=1,u=null;async function p(){const t="https://pixabay.com/api/",r=new URLSearchParams({key:"42111454-a6064c7507ecd0abc8356168a",q:u,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:a}),i=`${t}?${r.toString()}`;try{const s=await fetch(i);if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);return await s.json()}catch(s){throw console.error(`Fetch error: ${s}`),s}}w.addEventListener("submit",S);async function S(t){if(t.preventDefault(),u=t.target.elements.query.value,a=1,u===""){c.error({position:"topRight",message:"Enter a word to search for"});return}try{const r=await p();if(r.totalHits===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}a===1&&(h(),m.innerHTML="",f(r.hits),g(r.totalHits),y()),t.target.elements.query.value=""}catch(r){console.log(`Error: ${r}`)}}function $({largeImageURL:t,webformatURL:r,tags:i,likes:s,views:e,comments:o,downloads:n}){return` <li class="picture-card">
<a class="gallary-card-link" href="${t}">
  <img src="${r}" alt="${i}" />
  <ul class="image-info">
    <li class="image-item-info">
      <p>Likes</p>
      <p>${s}</p>
    </li>
    <li class="image-item-info">
      <p>Views</p>
      <p>${e}</p>
    </li>
    <li class="image-item-info">
      <p>Comments</p>
      <p>${o}</p>
    </li>
    <li class="image-item-info">
      <p>Downloads</p>
      <p>${n}</p>
    </li>
  </ul>
</a>
</li>`}function b(t){return t.map($).join("")}function f(t){const r=b(t);m.insertAdjacentHTML("beforeend",r),v.refresh()}l.addEventListener("click",q);async function q(){a+=1,h();const t=await p();f(t.hits),g(t.totalHits),y()}function g(t){const r=Math.ceil(t/40);a>=r?(c.info({position:"topRight",message:"We're sorry, there are no more posts to load"}),l.classList.add("is-hidden")):l.classList.remove("is-hidden")}function h(){d.classList.remove("is-hidden")}function y(){d.classList.add("is-hidden")}const v=new L(".gallery-list a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map

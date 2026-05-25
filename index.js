import{a as u,S as m,i as o}from"./assets/vendor-DcHCnVjq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const p="55965414-3154a5ab5237f7ce8780065e8",g="https://pixabay.com/api/";async function d(t){return(await u.get(g,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),f=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){l.innerHTML=t.map(S).join(""),f.refresh()}function h(){l.innerHTML=""}function L(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}function S({webformatURL:t,largeImageURL:s,tags:i,likes:r,views:e,comments:a,downloads:n}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
          class="gallery-image"
          src="${t}"
          alt="${i}"
          loading="lazy"
        />
      </a>
      <ul class="image-stats">
        <li class="image-stat">
          <span class="image-stat-label">Likes</span>
          <span class="image-stat-value">${r}</span>
        </li>
        <li class="image-stat">
          <span class="image-stat-label">Views</span>
          <span class="image-stat-value">${e}</span>
        </li>
        <li class="image-stat">
          <span class="image-stat-label">Comments</span>
          <span class="image-stat-value">${a}</span>
        </li>
        <li class="image-stat">
          <span class="image-stat-label">Downloads</span>
          <span class="image-stat-value">${n}</span>
        </li>
      </ul>
    </li>
  `}const v=document.querySelector(".form");v.addEventListener("submit",w);function w(t){t.preventDefault();const s=t.currentTarget,i=s.elements["search-text"].value.trim();if(!i){o.warning({message:"Please enter a search query.",position:"topRight"});return}h(),L(),d(i).then(r=>{if(r.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r)}).catch(()=>{o.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),s.reset()})}
//# sourceMappingURL=index.js.map

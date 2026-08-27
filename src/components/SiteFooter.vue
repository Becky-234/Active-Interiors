<script setup lang="ts">
const year = new Date().getFullYear()

const quickLinks = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' }
]

const services = [
  'Interior Design',
  'Construction',
  'Renovations',
  'Ceiling Design',
  'Kitchen Fit-outs'
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/active.interiorsconstruc', icon: 'instagram' },
  { label: 'TikTok', href: 'https://tiktok.com/@active.interiorsconstruc', icon: 'tiktok' },
  { label: 'WhatsApp', href: 'https://wa.me/256776419829', icon: 'whatsapp' }
]
</script>

<template>
  <footer class="footer">
    <div class="glow"></div>

    <div class="wrap top">
      <div class="col brand-col">
        <img src="../assets/Active-Logo.jpeg" alt="Active Interiors and Construction" class="logo" />
        <p class="tagline">
          Transforming spaces into timeless masterpieces, interior design,
          construction and renovations across Kampala.
        </p>

        <div class="socials">
          <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" class="social" :aria-label="s.label">
            <svg v-if="s.icon === 'instagram'" viewBox="0 0 24 24" width="18" height="18" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"></rect>
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6"></circle>
              <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"></circle>
            </svg>
            <svg v-else-if="s.icon === 'tiktok'" viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M14 3v10.8a2.9 2.9 0 1 1-2.4-2.86V8.1a5.7 5.7 0 1 0 5.1 5.66V9.2a6.6 6.6 0 0 0 3.8 1.2V7.6a3.9 3.9 0 0 1-3.8-3.6H14z" fill="currentColor"></path>
            </svg>
            <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.65-1.22A9 9 0 1 0 12 3z" stroke="currentColor" stroke-width="1.6"></path>
              <path d="M8.5 8.7c.2-.5.4-.5.6-.5h.5c.15 0 .35 0 .5.4.2.5.65 1.6.7 1.7.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.3-.15.55.5.9 1.1 1.6 2 2.1.25.15.4.1.55-.05l.5-.55c.15-.2.3-.15.5-.1.2.1 1.3.6 1.5.7.2.1.35.15.4.25.05.1.05.55-.1 1.1-.15.55-1.05 1.05-1.5 1.1-.4.05-.85.1-2.6-.55A8.4 8.4 0 0 1 7.6 11.4c-.65-.9-.9-1.7-.85-2.2.05-.5.4-.8.6-1z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="col">
        <h4>Quick Links</h4>
        <nav class="links">
          <a v-for="l in quickLinks" :key="l.href" :href="l.href">{{ l.label }}</a>
        </nav>
      </div>

      <div class="col">
        <h4>Services</h4>
        <ul class="plain">
          <li v-for="s in services" :key="s">{{ s }}</li>
        </ul>
      </div>

      <div class="col">
        <h4>Contact</h4>
        <ul class="plain">
          <li><a href="tel:+256740769931">+256 740 769931</a></li>
          <li><a href="tel:+256776419829">+256 776 419829</a></li>
          <li>Kampala, Uganda</li>
          <li>@active.interiorsconstruc</li>
        </ul>
      </div>
    </div>

    <div class="wrap bar">
      <span>© {{ year }} Active Interiors &amp; Construction. All rights reserved.</span>
      <span class="right">Built in Kampala</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: var(--charcoal);
  border-top: 1px solid rgba(242, 201, 76, 0.2);
  padding-top: clamp(3rem, 7vw, 4.5rem);
  overflow: hidden;
}

.glow {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(242, 201, 76, 0.16), transparent 70%);
  filter: blur(60px);
  top: -140px;
  left: 30%;
  pointer-events: none;
}

.top {
  position: relative;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
}

.brand-col .logo {
 height: 48px;
  width: auto;
  display: block;
  border-radius: 999px;
  transition: transform 0.3s ease;
}

.tagline {
  margin-top: 1.1rem;
  max-width: 34ch;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.socials {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.social {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  transition: color 0.25s ease, background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.social:hover {
  color: var(--charcoal);
  background: var(--brass);
  border-color: var(--brass);
  transform: translateY(-3px);
}

h4 {
  color: var(--off-white);
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: var(--font-mono);
  font-weight: 500;
}

.links,
.plain {
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
  padding: 0;
}

.links a,
.plain li,
.plain a {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.links a:hover,
.plain a:hover {
  color: var(--brass);
}

.bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.4);
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 900px) {
  .top {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
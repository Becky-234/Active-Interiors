<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
const el = useReveal()
</script>

<template>
  <section id="contact" class="contact">
    <div class="glow" />

    <div class="wrap reveal" ref="el">
      <div class="col">
        <p class="eyebrow">Get in touch</p>
        <h2>Tell us what you're building.</h2>
        <p class="sub">
          Call, message, or find us on Instagram &amp; TikTok
          <span class="handle">@active.interiorsconstruc</span>
        </p>

        <div class="actions">
          <a href="tel:+256740769931" class="btn primary">
            <span>Call +256 740 769931</span>
          </a>
          <a href="https://wa.me/256776419829" target="_blank" rel="noopener" class="btn ghost">
            WhatsApp +256 776 419829
          </a>
        </div>
      </div>

      <dl class="card">
        <div>
          <dt>Phone</dt>
          <dd>+256 740 769931</dd>
        </div>
        <div>
          <dt>Alt. line</dt>
          <dd>+256 776 419829</dd>
        </div>
        <div>
          <dt>Based in</dt>
          <dd>Kampala, Uganda</dd>
        </div>
        <div>
          <dt>Social</dt>
          <dd>@active.interiorsconstruc</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  padding: clamp(4rem, 9vw, 7rem) 0 5rem;
  overflow: hidden;
}

.glow {
  position: absolute;
  width: 460px;
  height: 460px;
  border-radius: 999px;
  filter: blur(80px);
  background: radial-gradient(circle, var(--brass-light), transparent 70%);
  opacity: 0.25;
  top: -160px;
  right: -140px;
  pointer-events: none;
  animation: drift 18s ease-in-out infinite;
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 26px); }
}

.wrap {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
}

h2 {
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  margin-top: 0.75rem;
  max-width: 16ch;
}

.sub {
  margin-top: 1.25rem;
  max-width: 40ch;
}

.handle {
  color: var(--brass);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 2.25rem;
  align-items: flex-start;
}

.btn {
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  padding: 0.95rem 1.7rem;
  border-radius: 999px;
  border: 1px solid var(--ink);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.btn.primary {
  background: var(--ink);
  color: var(--off-white);
}

.btn.primary span {
  position: relative;
  z-index: 1;
}

.btn.primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--brass), var(--brass-light));
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.btn.primary:hover::before {
  transform: translateY(0);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px -10px rgba(156, 122, 60, 0.5);
}

.btn.ghost {
  color: var(--ink);
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
}

.btn.ghost:hover {
  border-color: var(--brass);
  color: var(--brass);
  transform: translateY(-2px);
}

/* -------- glass info card -------- */
.card {
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 16px 34px -18px rgba(26, 24, 21, 0.28);
  padding: 2rem;
  margin: 0;
}

.card div + div {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
}

.card dt {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brass);
}

.card dd {
  margin: 0.35rem 0 0;
  font-size: 1rem;
  color: var(--ink);
}

@media (max-width: 780px) {
  .wrap {
    grid-template-columns: 1fr;
  }
}
</style>
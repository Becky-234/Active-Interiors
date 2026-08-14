<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
const el = useReveal()
</script>

<template>
  <section id="contact" class="contact">
    <div class="wrap reveal" ref="el">
      <div class="col">
        <p class="eyebrow">Get in touch</p>
        <h2>Tell us what you're building.</h2>
        <p class="sub">
          Call, message, or find us on Instagram &amp; TikTok
          <span class="handle">@active.interiorsconstruc</span>
        </p>

        <div class="actions">
          <a href="tel:+256744300188" class="btn primary">Call 0744 300188</a>
          <a href="https://wa.me/256776419829" target="_blank" rel="noopener" class="btn ghost">
            WhatsApp +256 776 419829
          </a>
        </div>
      </div>

      <dl class="card">
        <div>
          <dt>Phone</dt>
          <dd>0744 300188</dd>
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
  padding: clamp(3.5rem, 8vw, 6rem) 0 5rem;
}

.wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;
}

h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
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
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  padding: 0.9rem 1.6rem;
  border-radius: 2px;
  border: 1px solid var(--ink);
  transition: background 0.2s ease, color 0.2s ease;
}

.btn.primary {
  background: var(--ink);
  color: var(--off-white);
}

.btn.primary:hover {
  background: var(--brass);
  border-color: var(--brass);
}

.btn.ghost:hover {
  border-color: var(--brass);
  color: var(--brass);
}

.card {
  border: 1px solid var(--line-strong);
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
<script setup lang="ts">
</script>

<template>
  <section id="top" class="hero blueprint-grid">
    <div class="wrap hero-inner">
      <p class="eyebrow">Kampala, Uganda — Est. site of operations</p>
      <h1>
        Transforming spaces<br />
        into <em>timeless masterpieces.</em>
      </h1>
      <p class="sub">
        Active Interiors &amp; Construction plans, builds and finishes homes
        and commercial spaces across Kampala — from structural work to the
        last coat of paint.
      </p>

      <div class="actions">
        <a href="#contact" class="btn primary">Start your project</a>
        <a href="#portfolio" class="btn ghost">See our work</a>
      </div>

      <dl class="specs">
        <div>
          <dt>Scope</dt>
          <dd>Interior Design · Construction · Renovations</dd>
        </div>
        <div>
          <dt>Finish</dt>
          <dd>Luxury finishes, functional designs</dd>
        </div>
        <div>
          <dt>Contact</dt>
          <dd>0744 300188 / +256 776 419829</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(3rem, 8vw, 6rem);
  padding-bottom: clamp(3rem, 8vw, 5rem);
  background-color: var(--paper);
  background-size: 44px 44px;
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}

.hero-inner {
  -webkit-mask-image: none;
  mask-image: none;
}

.eyebrow {
  margin-bottom: 1.25rem;
  display: block;
}

h1 {
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  max-width: 16ch;
}

h1 em {
  font-style: normal;
  color: var(--brass);
}

.sub {
  margin-top: 1.75rem;
  max-width: 46ch;
  font-size: 1.05rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.btn {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.9rem 1.6rem;
  border-radius: 2px;
  border: 1px solid var(--ink);
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.btn.primary {
  background: var(--ink);
  color: var(--off-white);
}

.btn.primary:hover {
  background: var(--brass);
  border-color: var(--brass);
}

.btn.ghost {
  color: var(--ink);
}

.btn.ghost:hover {
  border-color: var(--brass);
  color: var(--brass);
}

.specs {
  margin: 3.5rem 0 0;
  padding-top: 2rem;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 760px;
}

.specs dt {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brass);
  margin-bottom: 0.4rem;
}

.specs dd {
  margin: 0;
  font-size: 0.92rem;
  color: var(--ink);
}

@media (max-width: 640px) {
  .specs {
    grid-template-columns: 1fr;
  }
}
</style>
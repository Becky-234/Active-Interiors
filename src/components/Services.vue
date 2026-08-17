<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

interface Service {
  code: string
  title: string
  body: string
}

const services: Service[] = [
  {
    code: 'ID',
    title: 'Interior Design',
    body: 'Concept to completion for kitchens, living areas and full homes space planning, material selection and custom ceiling and cabinetry design.'
  },
  {
    code: 'CN',
    title: 'Construction',
    body: 'Structural and build work carried out to the same standard we finish to, so design intent survives from foundation to handover.'
  },
  {
    code: 'RN',
    title: 'Renovations',
    body: 'Reworking existing kitchens, ceilings and living spaces modern gypsum ceiling designs, cabinetry upgrades and full space overhauls.'
  }
]

const el = useReveal()
</script>

<template>
  <section id="services" class="services">
    <div class="wrap reveal" ref="el">
      <p class="eyebrow">What we do</p>
      <h2>What we build</h2>
      <p class="lede">Three disciplines, one crew, no handoffs between design and site.</p>

      <div class="grid">
        <article
          v-for="(s, i) in services"
          :key="s.code"
          class="card"
          :style="{ '--i': i }"
        >
          <div class="card-glow" />
          <span class="code">{{ s.code }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
          <span class="arrow">→</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: clamp(3.5rem, 8vw, 6rem) 0;
  position: relative;
}

.eyebrow {
  display: block;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
}

.lede {
  margin-top: 0.75rem;
  max-width: 42ch;
  font-size: 1rem;
}

.grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* -------- glass card -------- */
.card {
  position: relative;
  padding: 2.25rem 2rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 14px 30px -18px rgba(26, 24, 21, 0.25);
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 42px -18px rgba(26, 24, 21, 0.32);
  border-color: rgba(156, 122, 60, 0.4);
}

.card-glow {
  position: absolute;
  top: -60%;
  right: -40%;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(156, 122, 60, 0.25), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.card:hover .card-glow {
  opacity: 1;
}

.code {
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--brass);
  display: inline-block;
  border: 1px solid var(--line-strong);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
}

.card h3 {
  position: relative;
  margin-top: 1.1rem;
  font-size: 1.3rem;
}

.card p {
  position: relative;
  margin-top: 0.75rem;
  font-size: 0.92rem;
}

.arrow {
  position: relative;
  display: inline-block;
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  color: var(--brass);
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.card:hover .arrow {
  transform: translateX(6px);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
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
    body: 'Concept to completion for kitchens, living areas and full homes — space planning, material selection and custom ceiling and cabinetry design.'
  },
  {
    code: 'CN',
    title: 'Construction',
    body: 'Structural and build work carried out to the same standard we finish to, so design intent survives from foundation to handover.'
  },
  {
    code: 'RN',
    title: 'Renovations',
    body: 'Reworking existing kitchens, ceilings and living spaces — modern gypsum ceiling designs, cabinetry upgrades and full space overhauls.'
  }
]

const el = useReveal()
</script>

<template>
  <section id="services" class="services">
    <div class="wrap reveal" ref="el">
      <h2>What we build</h2>
      <p class="lede">Three disciplines, one crew, no handoffs between design and site.</p>

      <div class="grid">
        <article v-for="s in services" :key="s.code" class="card">
          <span class="code">{{ s.code }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: clamp(3rem, 7vw, 5rem) 0;
}

h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.4rem);
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
  gap: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.card {
  padding: 2.25rem 2rem;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transition: background 0.25s ease;
}

.card:hover {
  background: var(--paper-dim);
}

.code {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--brass);
  display: inline-block;
  border: 1px solid var(--line-strong);
  padding: 0.15rem 0.45rem;
  border-radius: 2px;
}

.card h3 {
  margin-top: 1.1rem;
  font-size: 1.25rem;
}

.card p {
  margin-top: 0.75rem;
  font-size: 0.92rem;
}

@media (max-width: 780px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
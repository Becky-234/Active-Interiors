<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

interface Value {
  label: string
  title: string
  body: string
}

const values: Value[] = [
  {
    label: 'Finish',
    title: 'Luxury finishes',
    body: 'Marble, brass and custom cabinetry detailing on every handover — not reserved for the show unit.'
  },
  {
    label: 'Layout',
    title: 'Functional design',
    body: 'Every square metre earns its place. We design for how a kitchen or living room actually gets used.'
  },
  {
    label: 'Delivery',
    title: 'One crew, start to end',
    body: 'Design and construction under one roof, so nothing gets lost translating a drawing into a wall.'
  }
]

const el = useReveal()
</script>

<template>
  <section id="why-us" class="why">
    <div class="wrap reveal" ref="el">
      <p class="eyebrow light">Why Active</p>
      <h2>Built the way it was drawn.</h2>

      <div class="values">
        <div v-for="v in values" :key="v.label" class="value">
          <span class="label">{{ v.label }}</span>
          <h3>{{ v.title }}</h3>
          <p>{{ v.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  background: var(--charcoal);
  padding: clamp(3.5rem, 8vw, 6rem) 0;
}

.eyebrow.light {
  color: var(--brass-light);
}

.why h2 {
  color: var(--off-white);
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
  margin-top: 0.75rem;
  max-width: 18ch;
}

.values {
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.value {
  border-top: 1px solid rgba(201, 167, 106, 0.3);
  padding-top: 1.5rem;
}

.label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brass-light);
}

.value h3 {
  color: var(--off-white);
  margin-top: 0.75rem;
  font-size: 1.2rem;
}

.value p {
  margin-top: 0.65rem;
  color: rgba(250, 248, 243, 0.65);
  font-size: 0.92rem;
}

@media (max-width: 780px) {
  .values {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
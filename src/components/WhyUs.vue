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
    <div class="glow glow-a" />
    <div class="glow glow-b" />

    <div class="wrap reveal" ref="el">
      <p class="eyebrow light">Why Active</p>
      <h2>Built the way it was drawn.</h2>

      <div class="values">
        <div
          v-for="(v, i) in values"
          :key="v.label"
          class="value"
          :style="{ '--i': i }"
        >
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
  position: relative;
  background: var(--charcoal);
  padding: clamp(4rem, 9vw, 7rem) 0;
  overflow: hidden;
}

/* -------- ambient glow -------- */
.glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(70px);
  pointer-events: none;
}

.glow-a {
  width: 380px;
  height: 380px;
  top: -120px;
  left: -80px;
  background: radial-gradient(circle, rgba(201, 167, 106, 0.28), transparent 70%);
  animation: drift-a 16s ease-in-out infinite;
}

.glow-b {
  width: 300px;
  height: 300px;
  bottom: -100px;
  right: 5%;
  background: radial-gradient(circle, rgba(156, 122, 60, 0.22), transparent 70%);
  animation: drift-b 20s ease-in-out infinite;
}

@keyframes drift-a {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, 30px); }
}

@keyframes drift-b {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, -24px); }
}

.wrap {
  position: relative;
  z-index: 1;
}

.eyebrow.light {
  color: var(--brass-light);
}

.why h2 {
  color: var(--off-white);
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  margin-top: 0.75rem;
  max-width: 18ch;
}

.values {
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* -------- glass value card, dark variant -------- */
.value {
  padding: 1.75rem 1.6rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(201, 167, 106, 0.22);
  transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease;
}

.value:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(201, 167, 106, 0.45);
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
    gap: 1rem;
  }
}
</style>
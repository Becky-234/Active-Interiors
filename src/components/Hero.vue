<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

const mounted = ref<boolean>(false)
const mouseX = ref<number>(0)
const mouseY = ref<number>(0)

function onMouseMove(e: MouseEvent): void {
  // -1 to 1 range, based on viewport position
  mouseX.value = (e.clientX / window.innerWidth) * 2 - 1
  mouseY.value = (e.clientY / window.innerHeight) * 2 - 1
}

const parallax = computed(() => ({
  transform: `translate(${mouseX.value * 10}px, ${mouseY.value * 8}px)`
}))

const parallaxSlow = computed(() => ({
  transform: `translate(${mouseX.value * -16}px, ${mouseY.value * -12}px)`
}))

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  requestAnimationFrame(() => {
    mounted.value = true
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})

const specs = [
  { label: 'Scope', value: 'Interior Design · Construction · Renovations' },
  { label: 'Finish', value: 'Luxury finishes, functional designs' },
  { label: 'Contact', value: '+256 740 769931 / +256 776 419829' }
]
</script>

<template>
  <section id="top" class="hero">
    <div class="backdrop">
      <div class="grid-layer" />
      <div class="glow glow-a" :style="parallaxSlow" />
      <div class="glow glow-b" :style="parallax" />
    </div>

    <div class="wrap hero-inner">
      <p class="eyebrow enter" :class="{ show: mounted }" style="--d: 0ms">
        Kampala, Uganda — Est. site of operations
      </p>

      <h1>
        <span class="line enter" :class="{ show: mounted }" style="--d: 90ms">
          Transforming spaces
        </span>
        <span class="line enter" :class="{ show: mounted }" style="--d: 200ms">
          into <em>timeless masterpieces.</em>
        </span>
      </h1>

      <p class="sub enter" :class="{ show: mounted }" style="--d: 320ms">
        Active Interiors &amp; Construction plans, builds and finishes homes
        and commercial spaces across Kampala — from structural work to the
        last coat of paint.
      </p>

      <div class="actions enter" :class="{ show: mounted }" style="--d: 420ms">
        <a href="#contact" class="btn primary">
          <span>Start your project</span>
        </a>
        <a href="#portfolio" class="btn ghost">See our work</a>
      </div>

      <div class="chips enter" :class="{ show: mounted }" style="--d: 520ms" :style="parallax">
        <div v-for="s in specs" :key="s.label" class="chip">
          <span class="chip-label">{{ s.label }}</span>
          <span class="chip-value">{{ s.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-top: clamp(3.5rem, 9vw, 7rem);
  padding-bottom: clamp(3.5rem, 9vw, 6rem);
  overflow: hidden;
}

/* -------- animated backdrop -------- */
.backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.grid-layer {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 44px 44px;
  background-position: center;
  opacity: 0;
  -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
  animation: fade-grid 1.6s ease forwards 0.1s;
}

@keyframes fade-grid {
  to {
    opacity: 1;
  }
}

.glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(60px);
  opacity: 0.35;
  transition: transform 0.4s ease-out;
}

.glow-a {
  width: 420px;
  height: 420px;
  top: -140px;
  right: -80px;
  background: radial-gradient(circle, var(--brass-light), transparent 70%);
  animation: float-a 14s ease-in-out infinite;
}

.glow-b {
  width: 320px;
  height: 320px;
  bottom: -100px;
  left: 10%;
  background: radial-gradient(circle, var(--brass), transparent 70%);
  opacity: 0.22;
  animation: float-b 18s ease-in-out infinite;
}

@keyframes float-a {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 24px); }
}

@keyframes float-b {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(24px, -20px); }
}

/* -------- entrance animation -------- */
.enter {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: var(--d, 0ms);
}

.enter.show {
  opacity: 1;
  transform: translateY(0);
}

/* -------- content -------- */
.hero-inner {
  position: relative;
  z-index: 1;
}

.eyebrow {
  margin-bottom: 1.25rem;
  display: block;
}

h1 {
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
  max-width: 18ch;
}

h1 .line {
  display: block;
}

h1 em {
  font-style: normal;
  background: linear-gradient(100deg, var(--brass) 10%, var(--brass-light) 50%, var(--brass) 90%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shine 5s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
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
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.95rem 1.7rem;
  border-radius: 999px;
  border: 1px solid var(--ink);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  overflow: hidden;
}

.btn.primary {
  background: var(--ink);
  color: var(--off-white);
  border-color: var(--ink);
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
  box-shadow: 0 12px 28px -10px rgba(156, 122, 60, 0.55);
  transform: translateY(-2px);
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

/* -------- glass spec chips -------- */
.chips {
  margin-top: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.chip {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.9rem 1.3rem;
  border-radius: 16px;
  background: rgba(250, 248, 243, 0.5);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 10px 24px -14px rgba(26, 24, 21, 0.3);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.chip:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 30px -14px rgba(26, 24, 21, 0.35);
}

.chip-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brass);
}

.chip-value {
  font-size: 0.85rem;
  color: var(--ink);
  max-width: 30ch;
}

@media (max-width: 640px) {
  .chips {
    flex-direction: column;
  }
  .chip {
    max-width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .glow,
  .grid-layer,
  h1 em {
    animation: none !important;
  }
}
</style>
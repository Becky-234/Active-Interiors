<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

interface WorkItem {
  fig: string
  title: string
  tag: string
  img: string | null
}

// TODO: once photos arrive, replace `img: null` with the real
// image path (e.g. import kitchen1 from '../assets/work/kitchen-1.jpg')
// and swap the <div class="ph"> block below for <img :src="img" />
const work: WorkItem[] = [
  { fig: '01', title: 'Kitchen Concept', tag: 'Interior Design', img: null },
  { fig: '02', title: 'Small Kitchen, Full Function', tag: 'Interior Design', img: null },
  { fig: '03', title: 'Gypsum Ceiling Design', tag: 'Construction', img: null },
  { fig: '04', title: 'Modern Ceiling Design', tag: 'Renovation', img: null },
  { fig: '05', title: 'Full Kitchen Renovation', tag: 'Renovation', img: null },
  { fig: '06', title: 'Marble Finish Kitchen', tag: 'Interior Design', img: null }
]

const el = useReveal()
</script>

<template>
  <section id="portfolio" class="portfolio">
    <div class="wrap reveal" ref="el">
      <h2>Recent work</h2>
      <p class="lede">A running record of what's gone through the workshop. Photography updating soon.</p>

      <div class="grid">
        <figure v-for="w in work" :key="w.fig" class="item">
          <div class="ph">
            <img v-if="w.img" :src="w.img" :alt="w.title" />
            <span v-else class="ph-mark">FIG. {{ w.fig }}</span>
          </div>
          <figcaption>
            <span class="fig">FIG. {{ w.fig }}</span>
            <span class="title">{{ w.title }}</span>
            <span class="tag">{{ w.tag }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  padding: clamp(3rem, 7vw, 5rem) 0;
  background: var(--paper-dim);
}

h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.4rem);
}

.lede {
  margin-top: 0.75rem;
  max-width: 46ch;
}

.grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.item {
  margin: 0;
}

.ph {
  aspect-ratio: 4 / 5;
  border: 1px solid var(--line-strong);
  background-image:
    repeating-linear-gradient(45deg, var(--line) 0, var(--line) 1px, transparent 1px, transparent 12px);
  background-color: var(--paper);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.ph img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ph-mark {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
  background: var(--paper);
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--line-strong);
}

figcaption {
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.fig {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--brass);
}

.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
}

.tag {
  font-size: 0.8rem;
  color: var(--ink-soft);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
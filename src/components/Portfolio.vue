<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import kitchenConcepts from '../assets/work/kitchen-concepts.mp4'
import kitchenRenovation from '../assets/work/kitchen-renovation.mp4'
import gypsumCeiling from '../assets/work/gypsum-ceiling.mp4'
import walkinCloset from '../assets/work/walk-in-closet.mp4'
import tvDisplayCabinet from '../assets/work/tv-display.mp4'
import modernCeiling from '../assets/work/modern-ceiling.mp4'

interface WorkItem {
  fig: string
  title: string
  tag: string
  video: string | null
  poster: string | null
}

const work: WorkItem[] = [
  { fig: '01', title: 'Kitchen Concept', tag: 'Interior Design', video: kitchenConcepts, poster: null },
  { fig: '02', title: 'TV Display Cabinet', tag: 'Interior Design', video: tvDisplayCabinet, poster: null },
  { fig: '03', title: 'Gypsum Ceiling Design', tag: 'Construction', video: gypsumCeiling, poster: null },
  { fig: '04', title: 'Modern Ceiling Design', tag: 'Renovation', video: modernCeiling, poster: null },
  { fig: '05', title: 'Full Kitchen Renovation', tag: 'Renovation', video: kitchenRenovation, poster: null },
  { fig: '06', title: 'Modern Walk-in Closet Design', tag: 'Interior Design', video: walkinCloset, poster: null }
]

const el = useReveal()
</script>

<template>
  <section id="portfolio" class="portfolio">
    <div class="wrap reveal" ref="el">
      <p class="eyebrow">Recent work</p>
      <h2>What we've built lately</h2>
      <p class="lede">A running record of what's gone through the workshop.</p>

      <div class="grid">
        <figure
          v-for="(w, i) in work"
          :key="w.fig"
          class="item"
          :style="{ '--i': i }"
        >
          <div class="ph">
            <video
              v-if="w.video"
              :src="w.video"
              :poster="w.poster ?? undefined"
              muted
              loop
              playsinline
              controls
            ></video>
            <template v-else>
              <span class="ph-mark">FIG. {{ w.fig }}</span>
              <span class="ph-play">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M8 5v14l11-7z" fill="currentColor"></path>
                </svg>
              </span>
            </template>

            <div class="overlay">
              <span class="tag-pill">{{ w.tag }}</span>
              <span class="title">{{ w.title }}</span>
            </div>
          </div>
          <figcaption>
            <span class="fig">FIG. {{ w.fig }}</span>
            <span class="cap-title">{{ w.title }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  padding: clamp(3.5rem, 8vw, 6rem) 0;
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
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 20px;
  border: 1px solid var(--line-strong);
  background-image:
    repeating-linear-gradient(45deg, var(--line) 0, var(--line) 1px, transparent 1px, transparent 12px);
  background-color: var(--paper);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.ph:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 40px -18px rgba(26, 24, 21, 0.35);
}

.ph video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ph-mark {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
}

.ph-play {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: var(--off-white);
  background: rgba(26, 24, 21, 0.55);
  backdrop-filter: blur(6px);
}

/* -------- glass caption overlay on hover -------- */
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.4rem;
  padding: 1.1rem;
  background: linear-gradient(to top, rgba(26, 24, 21, 0.65), transparent 60%);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.ph:hover .overlay {
  opacity: 1;
  transform: translateY(0);
}

.tag-pill {
  align-self: flex-start;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--off-white);
  background: rgba(250, 248, 243, 0.18);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
}

.overlay .title {
  color: var(--off-white);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
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

.cap-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
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
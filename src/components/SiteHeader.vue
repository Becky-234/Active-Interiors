<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const open = ref<boolean>(false)
const scrolled = ref<boolean>(false)

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' }
]

function close(): void {
  open.value = false
}

function onScroll(): void {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header">
    <div class="wrap bar">
      <div class="pill" :class="{ scrolled }">
        <a href="#top" class="brand" @click="close">
          <img src="../assets/Active-Logo.jpeg" alt="Active Interiors & Construction" class="mark" />
        </a>

        <nav class="nav">
          <a v-for="l in links" :key="l.href" :href="l.href" @click="close">
            <span>{{ l.label }}</span>
          </a>
        </nav>

        <a href="tel:+256740769931" class="call">Call us</a>

        <button class="burger" :class="{ open }" @click="open = !open" aria-label="Toggle menu">
          <span></span><span></span>
        </button>
      </div>

      <transition name="drop">
        <nav v-if="open" class="mobile-nav">
          <a v-for="l in links" :key="l.href" :href="l.href" @click="close">{{ l.label }}</a>
          <a href="tel:+256740769931" class="mobile-call" @click="close">Call +256 740 769931</a>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding-top: 1rem;
  pointer-events: none;
}

.bar {
  position: relative;
  pointer-events: none;
  display: flex;
}

/* -------- floating glass pill -------- */
.pill {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0.5rem 0.6rem 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    0 1px 1px rgba(0, 0, 0, 0.04),
    0 8px 24px -8px rgba(0, 0, 0, 0.25);
  transition: background 0.35s ease, box-shadow 0.35s ease;
  width: 100%;
}

.pill.scrolled {
  background: rgba(255, 255, 255, 0.85);
  box-shadow:
    0 1px 1px rgba(0, 0, 0, 0.05),
    0 12px 32px -10px rgba(0, 0, 0, 0.3);
}

/* -------- brand / logo -------- */
.brand {
  display: flex;
  align-items: center;
}

.mark {
  height: 48px;
  width: auto;
  display: block;
  border-radius: 999px;
  transition: transform 0.3s ease;
}

.brand:hover .mark {
  transform: scale(1.04);
}

/* -------- nav links with sliding underline -------- */
.nav {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.86rem;
}

.nav a {
  position: relative;
  padding: 0.5rem 0.9rem;
  color: var(--ink-soft);
  border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
}

.nav a span {
  position: relative;
}

.nav a span::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background: var(--brass);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav a:hover {
  color: var(--ink);
  background: rgba(0, 0, 0, 0.04);
}

.nav a:hover span::after {
  transform: scaleX(1);
}

/* -------- call CTA -------- */
.call {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--off-white);
  background: linear-gradient(135deg, var(--ink), var(--charcoal-soft));
  padding: 0.65rem 1.2rem;
  border-radius: 999px;
  white-space: nowrap;
  box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.25s ease, transform 0.25s ease, background 0.25s ease;
}

.call:hover {
  background: linear-gradient(135deg, var(--brass), var(--brass-light));
  box-shadow: 0 10px 22px -6px rgba(242, 201, 76, 0.55);
  transform: translateY(-1px);
}

/* -------- mobile burger -------- */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}

.burger span {
  width: 18px;
  height: 1.5px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.burger.open span:first-child {
  transform: translateY(3.25px) rotate(45deg);
}

.burger.open span:last-child {
  transform: translateY(-3.25px) rotate(-45deg);
}

/* -------- mobile glass drawer -------- */
.mobile-nav {
  pointer-events: auto;
  margin-top: 0.75rem;
  padding: 1.25rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: fit-content;
}

.mobile-nav a {
  padding: 0.75rem 0.5rem;
  color: var(--ink);
  font-size: 0.95rem;
  border-bottom: 1px solid var(--line);
}

.mobile-nav a:last-child {
  border-bottom: none;
}

.mobile-call {
  margin-top: 0.5rem;
  text-align: center;
  border-radius: 999px;
  background: var(--ink);
  color: var(--off-white) !important;
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 780px) {
  .nav,
  .call {
    display: none;
  }
  .burger {
    display: flex;
  }
}
</style>
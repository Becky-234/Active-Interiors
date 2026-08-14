<script setup lang="ts">
import { ref } from 'vue'

const open = ref<boolean>(false)

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' }
]

function close(): void {
  open.value = false
}
</script>

<template>
  <header class="header">
    <div class="wrap bar">
      <a href="#top" class="brand" @click="close">
        <img src="../assets/Active-Logo.jpeg" alt="Active Interiors & Construction" class="mark" />
        <span class="wordmark">
          ACTIVE
          <small>Interiors &amp; Construction</small>
        </span>
      </a>

      <nav class="nav" :class="{ open }">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="close">{{ l.label }}</a>
        <a href="tel:+256744300188" class="call">Call us</a>
      </nav>

      <button class="burger" :class="{ open }" @click="open = !open" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(245, 242, 236, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--line);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.mark {
  height: 30px;
  width: auto;
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.14em;
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.wordmark small {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  font-weight: 400;
  color: var(--ink-soft);
  text-transform: uppercase;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.9rem;
}

.nav a {
  color: var(--ink-soft);
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--ink);
}

.nav .call {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--off-white);
  background: var(--ink);
  padding: 0.55rem 1rem;
  border-radius: 2px;
}

.nav .call:hover {
  background: var(--brass);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 0.5rem;
}

.burger span {
  width: 22px;
  height: 1.5px;
  background: var(--ink);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

@media (max-width: 780px) {
  .burger {
    display: flex;
  }
  .nav {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.5rem var(--edge) 2rem;
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .wordmark small {
    display: none;
  }
}
</style>
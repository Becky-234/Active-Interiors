<script setup lang="ts">
// Mimics a dimension line off a construction drawing: a hairline
// run with tick marks at each end and a sheet label in the middle,
// e.g. "SHEET A-02 — PORTFOLIO". Real drawings number sheets this
// way, so it reads as a legitimate structural device, not decoration.
const { sheet, label, dark = false } = defineProps<{
  sheet: string
  label: string
  dark?: boolean
}>()
</script>

<template>
  <div class="divider" :class="{ dark }">
    <span class="tick" />
    <span class="rule" />
    <span class="tag">SHEET {{ sheet }} — {{ label }}</span>
    <span class="rule" />
    <span class="tick" />
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 2.5rem var(--edge);
  max-width: var(--max-width);
  margin: 0 auto;
}

.rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--line-strong) 20%, var(--line-strong) 80%, transparent);
}

.tick {
  width: 1px;
  height: 12px;
  background: var(--line-strong);
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
  white-space: nowrap;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.divider.dark .rule {
  background: linear-gradient(90deg, transparent, rgba(201, 167, 106, 0.4) 20%, rgba(201, 167, 106, 0.4) 80%, transparent);
}

.divider.dark .tick {
  background: rgba(201, 167, 106, 0.4);
}

.divider.dark .tag {
  color: var(--brass-light);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(201, 167, 106, 0.25);
}
</style>
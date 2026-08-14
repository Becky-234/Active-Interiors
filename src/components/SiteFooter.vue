<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap bar">
      <span>© {{ year }} Active Interiors &amp; Construction</span>
      <span class="right">Kampala, Uganda</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--charcoal);
  border-top: 1px solid rgba(201, 167, 106, 0.25);
  padding: 1.5rem 0;
}

.bar {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: rgba(250, 248, 243, 0.55);
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
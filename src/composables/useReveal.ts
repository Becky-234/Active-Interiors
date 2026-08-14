import { onMounted, onUnmounted, ref, type Ref } from 'vue'

// Attaches an IntersectionObserver to el.value and adds
// "is-visible" once it scrolls into view. Pair with the
// .reveal class in main.css.
export function useReveal(threshold = 0.15): Ref<HTMLElement | null> {
  const target = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (!target.value) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      target.value.classList.add('is-visible')
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { threshold },
    )
    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return target
}

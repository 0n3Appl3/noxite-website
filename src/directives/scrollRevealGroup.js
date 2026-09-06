// src/directives/scrollRevealGroup.js
const DEFAULTS = {
  stagger: 80,          // base ms between each child's reveal
  maxTotalDuration: 900, // whole sequence won't take longer than this, regardless of list length
  distance: '20px',
  duration: 550,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  threshold: 0.1,
  direction: 'up'
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default {
  mounted(el, binding) {
    const options = { ...DEFAULTS, ...(binding.value || {}) }
    const children = Array.from(el.children)
    if (children.length === 0) return

    if (prefersReducedMotion()) {
      children.forEach((child) => {
        child.style.opacity = '1'
        child.style.transform = 'none'
      })
      return
    }

    const offsets = {
      up: `translate3d(0, ${options.distance}, 0)`,
      down: `translate3d(0, -${options.distance}, 0)`,
      left: `translate3d(${options.distance}, 0, 0)`,
      right: `translate3d(-${options.distance}, 0, 0)`
    }
    const startTransform = offsets[options.direction] || offsets.up

    // Shrink the per-item stagger for long lists so the last item doesn't
    // wait forever, while keeping every delay strictly increasing (index order).
    const lastIndex = children.length - 1
    const effectiveStagger =
      lastIndex > 0
        ? Math.min(options.stagger, options.maxTotalDuration / lastIndex)
        : options.stagger

    children.forEach((child) => {
      child.style.opacity = '0'
      child.style.transform = startTransform
      child.style.transition = `opacity ${options.duration}ms ${options.easing}, transform ${options.duration}ms ${options.easing}`
      child.style.willChange = 'opacity, transform'
    })

    let triggered = false
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || triggered) return
          triggered = true

          // Strictly monotonic delay by DOM index - guarantees first-to-last order
          // no matter how long the list is or how fast the user scrolled.
          children.forEach((child, index) => {
            const delay = index * effectiveStagger
            child.style.transitionDelay = `${delay}ms`
            requestAnimationFrame(() => {
              child.style.opacity = '1'
              child.style.transform = 'translate3d(0, 0, 0)'
            })
          })

          observer.unobserve(el)
        })
      },
      { threshold: options.threshold, rootMargin: '0px 0px -5% 0px' }
    )

    observer.observe(el)
  }
}
const DEFAULTS = {
  distance: '20px',
  duration: 550,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  threshold: 0.15,
  direction: 'up', // 'up' | 'down' | 'left' | 'right'
  delay: 0
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let sharedObserver = null

function getObserver(threshold) {
  if (sharedObserver) return sharedObserver

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target

        requestAnimationFrame(() => {
          el.style.transitionDelay = el.dataset.revealDelay || '0ms'
          el.style.opacity = '1'
          el.style.transform = 'translate3d(0, 0, 0)'
        })

        sharedObserver.unobserve(el)
      })
    },
    { threshold, rootMargin: '0px 0px -5% 0px' }
  )

  return sharedObserver
}

export default {
  mounted(el, binding) {
    const options = { ...DEFAULTS, ...(binding.value || {}) }

    // Respect accessibility preference - show immediately, no motion.
    if (prefersReducedMotion()) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const offsets = {
      up: `translate3d(0, ${options.distance}, 0)`,
      down: `translate3d(0, -${options.distance}, 0)`,
      left: `translate3d(${options.distance}, 0, 0)`,
      right: `translate3d(-${options.distance}, 0, 0)`
    }

    el.style.opacity = '0'
    el.style.transform = offsets[options.direction] || offsets.up
    el.style.transition = `opacity ${options.duration}ms ${options.easing}, transform ${options.duration}ms ${options.easing}`
    el.style.willChange = 'opacity, transform'

    if (options.delay) {
      el.dataset.revealDelay = `${options.delay}ms`
    }

    getObserver(options.threshold).observe(el)
  },
  unmounted(el) {
    if (sharedObserver) sharedObserver.unobserve(el)
  }
}
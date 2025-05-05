<template>
  <div class="home">
    <hero-section />
    <features-section />
    <product-section />
    <testimonials-section />
    <cta-section />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import ProductSection from '@/components/home/ProductSection.vue'
// import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'
import { useAppStore } from '@/stores/app'

export default {
  name: 'HomeView',
  
  components: {
    HeroSection,
    FeaturesSection,
    ProductSection,
   // TestimonialsSection,
    CtaSection
  },
  
  setup() {
    const appStore = useAppStore()
    
    // Ustawienie transparentności nagłówka dla strony głównej
    appStore.updateHeaderTransparency(true)
    
    // Obsługa przewijania i pokazywanie przycisku "scroll to top"
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      appStore.updateScrollToTop(scrollPosition > 500)
      appStore.updateHeaderTransparency(scrollPosition < 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return {
      // Cleanup listenera przy odmontowaniu komponentu
      onBeforeUnmount() {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }
}
</script>
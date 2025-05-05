<template>
    <app-section
      id="features"
      title="Nasze technologie"
      subtitle="Odkryj innowacyjne rozwiązania, które zmieniają sposób organizacji i uczestnictwa w wydarzeniach"
      badge="DLACZEGO MY"
      gradient="top-right"
    >
      <div class="features">
        <app-feature-card
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          glass-effect
        />
      </div>
    </app-section>
  </template>
  
  <script>
  import AppSection from '@/components/common/AppSection.vue'
  import AppFeatureCard from '@/components/common/AppFeatureCard.vue'
  
  export default {
    name: 'FeaturesSection',
    
    components: {
      AppSection,
      AppFeatureCard
    },
    
    data() {
      return {
        features: [
          {
            title: 'Sztuczna inteligencja',
            description: 'Wykorzystujemy zaawansowane algorytmy AI do precyzyjnego rozpoznawania twarzy i automatyzacji procesów.',
            icon: 'AI'
          },
          {
            title: 'Intuicyjny interfejs',
            description: 'Nasze aplikacje są proste w obsłudze zarówno dla organizatorów, jak i uczestników wydarzeń.',
            icon: 'UX'
          },
          {
            title: 'Doświadczenie w branży eventowej',
            description: 'Wieloletnie doświadczenie w branży gwarantuje zrozumienie Twoich potrzeb i niezawodność naszych systemów.',
            icon: '🏆'
          },
          {
            title: 'Bezpieczeństwo',
            description: 'Najwyższe standardy ochrony danych i pełna zgodność z RODO oraz innymi regulacjami.',
            icon: '🔒'
          },
          {
            title: 'Skalowalność',
            description: 'Nasze rozwiązania sprawdzają się zarówno przy małych, jak i wielotysięcznych wydarzeniach.',
            icon: '🚀'
          },
          {
            title: 'Personalizacja',
            description: 'Pełna możliwość dostosowania wyglądu aplikacji do identyfikacji wizualnej wydarzenia.',
            icon: '🎨'
          }
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    
    @include max-width(lg) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @include max-width(md) {
      grid-template-columns: 1fr;
    }
  }
  </style>

<template>
    <app-section
      id="testimonials"
      title="Co mówią nasi klienci"
      subtitle="Poznaj opinie organizatorów eventów, którzy zaufali naszym rozwiązaniom"
      badge="REFERENCJE"
    >
      <div class="testimonials">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="testimonials__item"
        >
          <div class="card card--testimonial">
            <div class="card__rating">
              <span v-for="i in 5" :key="i">★</span>
            </div>
            
            <p class="card__quote">
              "{{ testimonial.content }}"
            </p>
            
            <div class="card__author">
              <div class="card__avatar">
                <img 
                  v-if="testimonial.avatar" 
                  :src="testimonial.avatar" 
                  :alt="testimonial.author"
                />
              </div>
              <div>
                <div class="card__name">{{ testimonial.author }}</div>
                <div class="card__position">{{ testimonial.position }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-section>
  </template>
  
  <script>
  import AppSection from '@/components/common/AppSection.vue'
  import { useTestimonialsStore } from '@/stores/testimonials'
  import { mapState } from 'pinia'
  
  export default {
    name: 'TestimonialsSection',
    
    components: {
      AppSection
    },
    
    computed: {
      ...mapState(useTestimonialsStore, ['testimonials'])
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .testimonials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    
    @include max-width(lg) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @include max-width(md) {
      grid-template-columns: 1fr;
    }
    
    &__item {
      transform: translateY(0);
      transition: transform $transition-base;
      
      &:hover {
        transform: translateY(-10px);
      }
    }
    
    // Dodatkowe style dla kart testimonial zdefiniowane są w _cards.scss
  }
  </style>
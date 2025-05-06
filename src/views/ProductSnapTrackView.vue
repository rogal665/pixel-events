<template>
  <div class="product-snap-track">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__content">
          <app-badge variant="primary">ROZPOZNAWANIE TWARZY DLA UCZESTNIKÓW EVENTÓW</app-badge>
          <h1 class="product-hero__title gradient-text">Snap Track</h1>
          <p class="product-hero__description">{{ productData.description }}</p>
        </div>
      </div>
    </section>
    
    <!-- Główna sekcja z informacjami o produkcie -->
    <app-section
      variant="lighter"
      gradient="bottom-left"
    >
      <div class="product-content">
        <div class="product-content__grid">
          <div class="product-content__image">
            
            <img :src="'/' + productData.image" :alt="productData.name" />
          </div>
          
          <div class="product-content__info">
            <h2 class="product-content__title gradient-text">Główne funkcje</h2>
            <p class="product-content__subtitle">Odkryj jak Snap Track może podnieść Twoje wydarzenie na nowy poziom</p>
            
            <div class="product-content__features">
              <div 
                v-for="(feature, index) in productData.features" 
                :key="index"
                class="product-content__feature"
              >
                <div class="product-content__feature-icon">✓</div>
                <p class="product-content__feature-text">{{ feature.description }}</p>
              </div>
            </div>
            
            <div class="product-content__actions">
              <app-button 
                variant="primary"
                rounded
                with-arrow
                @click="scrollToContact"
              >
                Zamów prezentację
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Sekcja zastosowań -->
    <app-section
      id="use-cases"
      title="Zastosowania"
      subtitle="Poznaj różnorodne scenariusze wykorzystania Snap Track"
      badge="ELASTYCZNE ROZWIĄZANIE"
      :centered="true"
    >
      <div class="use-cases">
        <div 
          v-for="(useCase, index) in useCases" 
          :key="index"
          class="use-cases__item"
        >
          <div class="use-cases__icon">{{ useCase.icon }}</div>
          <h3 class="use-cases__title">{{ useCase.title }}</h3>
          <p class="use-cases__description">{{ useCase.description }}</p>
        </div>
      </div>
    </app-section>
    
    <!-- Galeria zdjęć -->
    <app-section
      id="gallery"
      title="Snap Track w akcji"
      subtitle="Zobacz jak wygląda aplikacja w użyciu"
      variant="darker"
      :centered="true"
    >
      <div class="product-gallery">
        <div class="product-gallery__grid">
          <div 
            v-for="index in 3" 
            :key="index"
            class="product-gallery__item"
          >
            <img 
              :src="`/img/photos/snap-track-${index}.jpg`" 
              :alt="`Snap Track Screenshot ${index}`"
              class="product-gallery__image"
            />
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Pricing Section -->
    <app-section
      id="pricing"
      title="Cennik"
      subtitle="Wybierz plan najlepiej dopasowany do Twoich potrzeb"
      gradient="top-right"
      :centered="true"
    >
      <div class="pricing">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="index"
          class="pricing__item"
          :class="{ 'pricing__item--featured': plan.featured }"
        >
          <div class="pricing__header">
            <h3 class="pricing__title">{{ plan.title }}</h3>
            <div class="pricing__price">
              <span class="pricing__amount">{{ plan.price }}</span>
              <span class="pricing__period">{{ plan.period }}</span>
            </div>
            <p class="pricing__description">{{ plan.description }}</p>
          </div>
          
          <div class="pricing__features">
            <div 
              v-for="(feature, i) in plan.features" 
              :key="i"
              class="pricing__feature"
            >
              <div class="pricing__feature-icon">✓</div>
              <p class="pricing__feature-text">{{ feature }}</p>
            </div>
          </div>
          
          <div class="pricing__footer">
            <app-button 
              :variant="plan.featured ? 'primary' : 'secondary'"
              rounded
              block
              @click="scrollToContact"
            >
              {{ plan.buttonText }}
            </app-button>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- FAQ Section -->
    <app-section
      id="faq"
      title="Często zadawane pytania"
      subtitle="Odpowiedzi na najczęstsze pytania dotyczące Snap Track"
      :centered="true"
    >
      <div class="product-faq">
        <div 
          v-for="(question, index) in faqItems" 
          :key="index"
          class="product-faq__item"
          :class="{ 'product-faq__item--active': activeAccordion === index }"
        >
          <div 
            class="product-faq__question"
            @click="toggleAccordion(index)"
          >
            {{ question.question }}
            <span class="product-faq__icon">{{ activeAccordion === index ? '−' : '+' }}</span>
          </div>
          <div 
            class="product-faq__answer"
            :style="{ display: activeAccordion === index ? 'block' : 'none' }"
          >
            {{ question.answer }}
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- CTA Section -->
    <section class="product-cta">
      <div class="container">
        <div class="product-cta__content">
          <h2 class="product-cta__title">Gotowy, by zacząć?</h2>
          <p class="product-cta__text">
            Skontaktuj się z nami, aby porozmawiać o dostosowaniu Snap Track do Twoich potrzeb
          </p>
          <div class="product-cta__buttons">
            <app-button 
              variant="white"
              rounded
              with-arrow
              @click="$router.push('/kontakt')"
            >
              Umów prezentację
            </app-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppBadge from '@/components/common/AppBadge.vue'
import { useProductsStore } from '@/stores/products'
import { mapState } from 'pinia'

export default {
  name: 'ProductSnapTrackView',
  
  components: {
    AppSection,
    AppButton,
    AppBadge
  },
  
  data() {
    return {
      activeAccordion: 0,
      useCases: [
        {
          icon: '🎭',
          title: 'Konferencje i kongresy',
          description: 'Idealne rozwiązanie dla dużych wydarzeń branżowych, gdzie uczestnicy chcą mieć dostęp do zdjęć z wykładów i networkingu.'
        },
        {
          icon: '🎵',
          title: 'Festiwale i koncerty',
          description: 'Uczestnicy mogą łatwo znaleźć swoje zdjęcia z koncertów i innych wydarzeń artystycznych.'
        },
        {
          icon: '🎓',
          title: 'Ceremonie ukończenia',
          description: 'Absolwenci i ich rodziny mogą łatwo znaleźć i udostępnić swoje momenty podczas uroczystości.'
        },
        {
          icon: '💼',
          title: 'Wydarzenia firmowe',
          description: 'Idealne dla firmowych integracji, konferencji wewnętrznych, gal i innych wydarzeń korporacyjnych.'
        }
      ],
      pricingPlans: [
        {
          title: 'Basic',
          price: '999 PLN',
          period: 'za wydarzenie',
          description: 'Idealne dla małych i średnich wydarzeń do 200 uczestników',
          features: [
            'Rozpoznawanie twarzy uczestników',
            'Personalizowane galerie',
            'Podstawowe statystyki',
            'Powiadomienia push',
            'Wsparcie email'
          ],
          buttonText: 'Wybierz plan',
          featured: false
        },
        {
          title: 'Premium',
          price: '1999 PLN',
          period: 'za wydarzenie',
          description: 'Optymalne dla średnich i dużych wydarzeń do 1000 uczestników',
          features: [
            'Wszystkie funkcje Basic',
            'Zaawansowana personalizacja',
            'White-label',
            'Integracja z mediami społecznościowymi',
            'Priorytetowe wsparcie',
            'Dedykowany konsultant'
          ],
          buttonText: 'Wybierz plan',
          featured: true
        },
        {
          title: 'Enterprise',
          price: 'Wycena indywidualna',
          period: '',
          description: 'Dostosowane do potrzeb dużych wydarzeń i stałej współpracy',
          features: [
            'Wszystkie funkcje Premium',
            'Nielimitowana liczba uczestników',
            'Pełna customizacja',
            'Dedykowana infrastruktura',
            'SLA z gwarancją czasu reakcji',
            'Wsparcie 24/7'
          ],
          buttonText: 'Skontaktuj się',
          featured: false
        }
      ],
      faqItems: [
        {
          question: 'Jak działa technologia rozpoznawania twarzy?',
          answer: 'Nasza technologia wykorzystuje zaawansowane algorytmy sztucznej inteligencji, które analizują charakterystyczne cechy twarzy uczestników. Podczas rejestracji, uczestnicy dodają swoje zdjęcie profilowe, które służy jako punkt odniesienia. Następnie system automatycznie identyfikuje ich na wszystkich materiałach z wydarzenia i tworzy spersonalizowane galerie.'
        },
        {
          question: 'Czy system jest zgodny z RODO?',
          answer: 'Tak, nasz system został zaprojektowany z myślą o pełnej zgodności z Rozporządzeniem o Ochronie Danych Osobowych (RODO). Uczestnicy muszą wyrazić wyraźną zgodę na przetwarzanie swoich danych biometrycznych, a wszystkie dane są szyfrowane i bezpiecznie przechowywane. Zapewniamy również opcje usunięcia danych na żądanie użytkownika.'
        },
        {
          question: 'Jak szybko po wydarzeniu zdjęcia są dostępne?',
          answer: 'Zdjęcia są przetwarzane w czasie rzeczywistym i trafiają do galerii uczestników natychmiast po załadowaniu ich do systemu przez fotografów. Uczestnicy otrzymują powiadomienia push, gdy nowe zdjęcia z ich udziałem zostaną dodane do ich galerii.'
        },
        {
          question: 'Czy można zintegrować system z naszą istniejącą aplikacją eventową?',
          answer: 'Tak, oferujemy możliwość integracji naszego systemu z istniejącymi aplikacjami eventowymi poprzez API. Nasz zespół techniczny pomoże w procesie integracji, aby zapewnić płynne działanie obu systemów.'
        }
      ]
    }
  },
  
  computed: {
    ...mapState(useProductsStore, ['getProductById']),
    
    productData() {
      return this.getProductById('snap-track')
    }
  },
  
  mounted() {
    // Ustawienie tytułu strony
    document.title = `Snap Track - Pixel Events`
    
    // Obsługa przewijania i ustawienia transparentności headera
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      this.updateHeaderTransparency(scrollPosition < 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    // Cleanup przy odmontowaniu komponentu
    this.$options.beforeUnmount = () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },
  
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index
    },
    
    scrollToContact() {
      this.$router.push('/kontakt')
    },
    
    updateHeaderTransparency(isTransparent) {
      // Korzysta z store'a app do zarządzania transparentnością headera
      const appStore = this.$pinia.state.value.app
      if (appStore) {
        appStore.isHeaderTransparent = isTransparent
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.product-snap-track {
  // Hero section
  .product-hero {
    padding-top: 150px;
    padding-bottom: 80px;
    background-color: $color-bg-dark;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at top right, rgba(0, 198, 255, 0.2), transparent 50%);
      z-index: 0;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at bottom left, rgba(0, 114, 255, 0.2), transparent 50%);
      z-index: 0;
    }
    
    &__content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }
    
    &__title {
      font-size: $font-size-6xl;
      font-weight: $font-weight-bold;
      margin: 20px 0;
      
      @include max-width(md) {
        font-size: $font-size-4xl;
      }
    }
    
    &__description {
      font-size: $font-size-xl;
      color: $color-text-muted;
      line-height: 1.6;
      
      @include max-width(md) {
        font-size: $font-size-lg;
      }
    }
  }
  
  // Główna sekcja z informacjami
  .product-content {
    position: relative;
    z-index: 1;
    
    &__grid {
      display: flex;
      align-items: center;
      gap: 60px;
      
      @include max-width(md) {
        flex-direction: column;
      }
    }
    
    &__image {
      flex: 1;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: linear-gradient(45deg, $color-primary, $color-primary-dark);
        filter: blur(40px);
        opacity: 0.15;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      img {
        width: 100%;
        border-radius: $border-radius-large;
        box-shadow: $shadow-medium;
      }
    }
    
    &__info {
      flex: 1;
      
      @include max-width(md) {
        text-align: center;
      }
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: 15px;
      
      @include max-width(md) {
        font-size: $font-size-3xl;
      }
    }
    
    &__subtitle {
      font-size: $font-size-md;
      line-height: 1.7;
      color: $color-text-muted;
      margin-bottom: 25px;
    }
    
    &__features {
      margin-bottom: 30px;
      
      @include max-width(md) {
        text-align: left;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    
    &__feature {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    
    &__feature-icon {
      min-width: 24px;
      height: 24px;
      background-color: rgba(0, 198, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      color: $color-primary;
      font-weight: $font-weight-bold;
    }
    
    &__feature-text {
      margin-bottom: 0;
      color: $color-text-muted;
      line-height: 1.6;
    }
    
    &__actions {
      display: flex;
      gap: 15px;
      
      @include max-width(md) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
  
  // Use cases
  .use-cases {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    
    @include max-width(lg) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @include max-width(md) {
      grid-template-columns: 1fr;
    }
    
    &__item {
      background: rgba(255, 255, 255, 0.03);
      border-radius: $border-radius-large;
      padding: 30px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      text-align: center;
      transition: all $transition-base;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: $shadow-medium;
        border-color: rgba(0, 198, 255, 0.2);
      }
    }
    
    &__icon {
      font-size: 40px;
      margin-bottom: 15px;
    }
    
    &__title {
      font-size: $font-size-lg;
      margin-bottom: 10px;
      color: $color-text;
    }
    
    &__description {
      font-size: $font-size-base;
      color: $color-text-muted;
      line-height: 1.6;
    }
  }
  
  // Galeria zdjęć
  .product-gallery {
    &__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      
      @include max-width(lg) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @include max-width(md) {
        grid-template-columns: 1fr;
      }
    }
    
    &__item {
      border-radius: $border-radius-medium;
      overflow: hidden;
      box-shadow: $shadow-small;
      transition: all $transition-base;
      
      &:hover {
        transform: scale(1.03);
        box-shadow: $shadow-medium;
      }
    }
    
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  
  // Pricing section
  .pricing {
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
      background: rgba(255, 255, 255, 0.03);
      border-radius: $border-radius-large;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all $transition-base;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: $shadow-medium;
      }
      
      &--featured {
        background: rgba(0, 198, 255, 0.05);
        border-color: rgba(0, 198, 255, 0.2);
        transform: scale(1.05);
        box-shadow: $shadow-medium;
        
        @include max-width(md) {
          transform: scale(1);
        }
        
        &:hover {
          transform: translateY(-10px) scale(1.05);
          
          @include max-width(md) {
            transform: translateY(-10px) scale(1);
          }
        }
        
        .pricing__header {
          background: linear-gradient(45deg, rgba(0, 198, 255, 0.2), rgba(0, 114, 255, 0.2));
        }
      }
    }
    
    &__header {
      padding: 30px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    &__title {
      font-size: $font-size-xl;
      margin-bottom: 15px;
      color: $color-text;
    }
    
    &__price {
      margin-bottom: 15px;
    }
    
    &__amount {
      font-size: $font-size-3xl;
      font-weight: $font-weight-bold;
      color: $color-primary;
    }
    
    &__period {
      font-size: $font-size-base;
      color: $color-text-muted;
    }
    
    &__description {
      font-size: $font-size-base;
      color: $color-text-muted;
    }
    
    &__features {
      padding: 30px;
    }
    
    &__feature {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    &__feature-icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      color: $color-primary;
      font-weight: $font-weight-bold;
    }
    
    &__feature-text {
      font-size: $font-size-base;
      color: $color-text-muted;
    }
    
    &__footer {
      padding: 0 30px 30px;
    }
  }
  
  // FAQ section
  .product-faq {
    max-width: 800px;
    margin: 0 auto;
    
    &__item {
      margin-bottom: 15px;
      border: 1px solid $color-border;
      border-radius: $border-radius-medium;
      overflow: hidden;
      
      &--active {
        border-color: rgba(0, 198, 255, 0.3);
        box-shadow: $shadow-small;
        
        .product-faq__question {
          background-color: rgba(0, 198, 255, 0.1);
        }
      }
    }
    
    &__question {
      padding: 20px;
      font-weight: $font-weight-semibold;
      font-size: $font-size-lg;
      color: $color-text;
      background-color: rgba(255, 255, 255, 0.03);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all $transition-base;
      
      &:hover {
        background-color: rgba(0, 198, 255, 0.05);
      }
    }
    
    &__icon {
      font-size: $font-size-xl;
      color: $color-primary;
    }
    
    &__answer {
      padding: 20px;
      color: $color-text-muted;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: $font-size-base;
      line-height: 1.6;
    }
  }
  
  // CTA section
  .product-cta {
    background: linear-gradient(45deg, $color-primary, $color-primary-dark);
    padding: 80px 0;
    margin: 60px 20px;
    border-radius: $border-radius-large;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at top right, rgba(0, 198, 255, 0.2), transparent 50%);
      z-index: 0;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at bottom left, rgba(0, 114, 255, 0.2), transparent 50%);
      z-index: 0;
    }
    
    &__content {
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: 20px;
      color: $color-text;
      
      @include max-width(md) {
        font-size: $font-size-3xl;
      }
    }
    
    &__text {
      font-size: $font-size-lg;
      margin-bottom: 30px;
      color: $color-text;
      opacity: 0.9;
      
      @include max-width(md) {
        font-size: $font-size-base;
      }
    }
    
    &__buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
      
      @include max-width(md) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>

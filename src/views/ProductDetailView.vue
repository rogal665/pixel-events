<template>
  <div v-if="product" class="product-detail">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__content">
          <app-badge variant="primary">{{ product.tagline }}</app-badge>
          <h1 class="product-hero__title gradient-text">{{ product.name }}</h1>
          <p class="product-hero__description">{{ product.description }}</p>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <app-section
      id="features"
      title="Funkcje i możliwości"
      subtitle="Odkryj wszystkie możliwości, które oferuje nasz produkt"
      variant="lighter"
      gradient="bottom-left"
    >
      <div class="product-features">
        <div 
          v-for="(feature, index) in product.features" 
          :key="index"
          class="product-features__item"
        >
          <div class="product-features__icon">
            <span class="product-features__number">{{ index + 1 }}</span>
          </div>
          <div class="product-features__content">
            <h3 class="product-features__title">{{ feature.title }}</h3>
            <p class="product-features__description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Screenshots Section -->
    <app-section
      id="screenshots"
      title="Galeria zdjęć"
      subtitle="Zobacz nasz produkt w akcji"
      :centered="true"
    >
      <div class="product-gallery">
        <div class="product-gallery__grid">
          <div 
            v-for="i in 6" 
            :key="i"
            class="product-gallery__item"
          >
            <img 
              :src="require(`@/assets/images/screenshots/snap-track-${i}.jpg`)" 
              :alt="`Snap Track Screenshot ${i}`"
            />
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Use Cases Section -->
    <app-section
      id="use-cases"
      title="Zastosowania"
      subtitle="Poznaj różnorodne scenariusze zastosowania naszego produktu"
      variant="darker"
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
    
    <!-- Testimonials Section -->
    <app-section
      id="testimonials"
      title="Opinie klientów"
      subtitle="Co mówią użytkownicy o naszym produkcie"
      :centered="true"
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
              @click="$router.push('/kontakt')"
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
      subtitle="Odpowiedzi na najczęstsze pytania dotyczące produktu"
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
    <section class="product-detail-cta">
      <div class="container">
        <div class="product-detail-cta__content">
          <h2 class="product-detail-cta__title">Gotowy, by zacząć?</h2>
          <p class="product-detail-cta__text">
            Skontaktuj się z nami, aby porozmawiać o dostosowaniu {{ product.name }} do Twoich potrzeb
          </p>
          <div class="product-detail-cta__buttons">
            <app-button 
              variant="white"
              rounded
              with-arrow
              @click="$router.push('/kontakt')"
            >
              Umów prezentację
            </app-button>
            
            <app-button 
              variant="outline"
              rounded
              class="product-detail-cta__secondary-btn"
              @click="scrollToTop"
            >
              Wróć do góry
            </app-button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="product-not-found">
    <div class="container">
      <h1>Produkt nie znaleziony</h1>
      <p>Przepraszamy, nie mogliśmy znaleźć produktu, którego szukasz.</p>
      <app-button 
        variant="primary"
        rounded
        @click="$router.push('/produkty')"
      >
        Wróć do listy produktów
      </app-button>
    </div>
  </div>
</template>

<script>
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppBadge from '@/components/common/AppBadge.vue'
import { useProductsStore } from '@/stores/products'
import { useTestimonialsStore } from '@/stores/testimonials'
import { mapState } from 'pinia'
import { useAppStore } from '@/stores/app'

export default {
  name: 'ProductDetailView',
  
  components: {
    AppSection,
    AppButton,
    AppBadge
  },
  
  props: {
    id: {
      type: String,
      required: true
    }
  },
  
  data() {
    return {
      activeAccordion: 0,
      useCases: [
        {
          icon: '🎭',
          title: 'Konferencje i kongresy',
          description: 'Idealne rozwiązanie dla dużych wydarzeń branżowych, gdzie uczestnicy chcą mieć dostęp do zdjęć z wykładów, warsztatów i networkingu.'
        },
        {
          icon: '🎵',
          title: 'Festiwale i koncerty',
          description: 'Uczestnicy mogą łatwo znaleźć swoje zdjęcia z koncertów i innych wydarzeń artystycznych, zwiększając interakcję z wydarzeniem.'
        },
        {
          icon: '🎓',
          title: 'Ceremonie rozdania dyplomów',
          description: 'Absolwenci i ich rodziny mogą łatwo znaleźć i udostępnić swoje momenty podczas ważnych uroczystości uniwersyteckich.'
        },
        {
          icon: '💼',
          title: 'Wydarzenia firmowe',
          description: 'Idealne dla firmowych integracji, konferencji wewnętrznych, gal i innych wydarzeń korporacyjnych.'
        },
        {
          icon: '💍',
          title: 'Wesela i przyjęcia',
          description: 'Goście weselni mogą szybko znaleźć i pobrać zdjęcia, na których się znajdują, bez konieczności przeszukiwania całej galerii.'
        },
        {
          icon: '🏆',
          title: 'Wydarzenia sportowe',
          description: 'Uczestnicy zawodów sportowych mogą łatwo znaleźć swoje zdjęcia z różnych etapów wydarzenia.'
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
    ...mapState(useTestimonialsStore, ['testimonials']),
    
    product() {
      return this.getProductById(this.id)
    }
  },
  
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  
  mounted() {
    // Jeśli produkt nie istnieje, przekierujemy do listy produktów
    if (!this.product) {
      this.$router.push('/produkty')
      return
    }
    
    // Ustawienie tytułu strony
    document.title = `${this.product.name} - Pixel Events`
    
    // Obsługa przewijania
    const appStore = useAppStore()
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      appStore.updateScrollToTop(scrollPosition > 500)
      appStore.updateHeaderTransparency(scrollPosition < 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    // Cleanup przy odmontowaniu komponentu
    this.$options.beforeUnmount = () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.product-detail {
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
  
  // Features section
  .product-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    
    @include max-width(md) {
      grid-template-columns: 1fr;
    }
    
    &__item {
      display: flex;
      gap: 20px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: $border-radius-large;
      padding: 30px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all $transition-base;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: $shadow-medium;
        border-color: rgba(0, 198, 255, 0.2);
      }
    }
    
    &__icon {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(45deg, $color-primary, $color-primary-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: $font-weight-bold;
    }
    
    &__content {
      flex: 1;
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
  
  // Gallery section
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
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
    }
  }
  
  // Use cases section
  .use-cases {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
  
  // Testimonials section
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
    // Style są już zdefiniowane w ProductsView.vue
  }
  
  // CTA section
  .product-detail-cta {
    background: linear-gradient(45deg, $color-primary, $color-primary-dark);
    padding: 80px 0;
    margin: 0 20px 80px;
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
    
    &__secondary-btn {
      color: white;
      border-color: white;
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

.product-not-found {
  padding: 150px 0 80px;
  text-align: center;
  
  h1 {
    font-size: $font-size-4xl;
    margin-bottom: 20px;
  }
  
  p {
    font-size: $font-size-lg;
    color: $color-text-muted;
    margin-bottom: 30px;
  }
}
</style>

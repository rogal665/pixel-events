<template>
  <div class="products">
    <!-- Sekcja nagłówkowa -->
    <app-section
      id="products-hero"
      badge="NASZE ROZWIĄZANIA"
      title="Produkty Pixel Events"
      subtitle="Odkryj innowacyjne rozwiązania technologiczne, które rewolucjonizują sposób organizacji i uczestnictwa w wydarzeniach"
      gradient="top-right"
      :centered="true"
    />
    
    <!-- Sekcja głównego produktu (Snap Track) -->
    <app-section
      id="current-product"
      variant="lighter"
      gradient="bottom-left"
    >
      <div class="featured-product">
        <div class="featured-product__content">
          <div class="featured-product__image">
            {{ featuredProduct.image }}
            <img 
              
              :src="featuredProduct.image" 
              :alt="featuredProduct.name"
            />
          </div>
          
          <div class="featured-product__text">
            <app-badge variant="primary">FLAGOWY PRODUKT</app-badge>
            <h2 class="featured-product__title gradient-text">{{ featuredProduct.name }}</h2>
            <p class="featured-product__description">{{ featuredProduct.description }}</p>
            
            <div class="featured-product__features">
              <div 
                v-for="(feature, index) in featuredProduct.features" 
                :key="index"
                class="featured-product__feature"
              >
                <div class="featured-product__feature-icon">✓</div>
                <p class="featured-product__feature-text">{{ feature.description }}</p>
              </div>
            </div>
            
            <div class="featured-product__actions">
              <app-button 
                variant="primary"
                rounded
                with-arrow
                @click="goToProductDetail(featuredProduct.id)"
              >
                Dowiedz się więcej
              </app-button>
              
              <app-button 
                variant="secondary"
                rounded
                @click="$router.push('/kontakt')"
              >
                Zamów prezentację
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Sekcja nadchodzących produktów -->
    <app-section
      id="upcoming-products"
      title="W fazie rozwoju"
      subtitle="Odkryj nasze nadchodzące rozwiązania, które już wkrótce dołączą do naszego portfolio produktów"
      :centered="true"
    >
      <div class="upcoming-products">
        <div class="upcoming-products__grid">
          <div 
            v-for="product in upcomingProducts" 
            :key="product.id"
            class="upcoming-products__card"
          >
            <div class="upcoming-products__card-image">
              <img 
                :src="require(`@/assets/img/photos/${product.image}`)" 
                :alt="product.name"
              />
              <div 
                class="upcoming-products__card-badge"
                :class="`upcoming-products__card-badge--${product.status}`"
              >
                {{ product.releaseDate }}
              </div>
            </div>
            <div class="upcoming-products__card-content">
              <h3 class="upcoming-products__card-title">{{ product.name }}</h3>
              <p class="upcoming-products__card-description">{{ product.description }}</p>
              <span class="upcoming-products__card-date">{{ product.releaseInfo }}</span>
              <app-button 
                variant="outline" 
                size="sm" 
                block
                @click="showInterestForm(product.id)"
              >
                {{ product.ctaText }}
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Sekcja porównania produktów -->
    <app-section
      id="comparison"
      title="Porównanie produktów"
      subtitle="Zestawienie funkcji i możliwości naszych rozwiązań"
      variant="darker"
      :centered="true"
    >
      <div class="product-comparison">
        <div class="product-comparison__table-wrapper">
          <table class="product-comparison__table">
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Status</th>
                <th>Główne funkcje</th>
                <th>Zastosowanie</th>
                <th>Cennik</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="product in allProducts" 
                :key="product.id"
                :class="{ 'product-comparison__row--highlighted': product.id === featuredProductId }"
              >
                <td><strong>{{ product.name }}</strong></td>
                <td>
                  <span 
                    class="product-comparison__status"
                    :class="`product-comparison__status--${product.status}`"
                  >
                    {{ getStatusText(product.status) }}
                  </span>
                </td>
                <td>{{ product.keyFeatures }}</td>
                <td>{{ product.applications }}</td>
                <td>{{ product.pricing }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </app-section>
    
    <!-- Sekcja FAQ -->
    <app-section
      id="faq"
      title="Najczęściej zadawane pytania"
      subtitle="Odpowiedzi na najczęstsze pytania dotyczące naszych produktów"
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
    
    <!-- Sekcja CTA -->
    <section class="products-cta">
      <div class="container">
        <div class="products-cta__content">
          <h2 class="products-cta__title">Zainteresowany naszymi rozwiązaniami?</h2>
          <p class="products-cta__text">
            Skontaktuj się z nami, aby porozmawiać o możliwościach dostosowanych do Twoich potrzeb
          </p>
          <app-button 
            variant="white"
            rounded
            with-arrow
            @click="$router.push('/kontakt')"
          >
            Umów konsultację
          </app-button>
        </div>
      </div>
    </section>
    
    <!-- Modal formularza zainteresowania produktem -->
    <div 
      v-if="showInterestModal"
      class="interest-modal"
    >
      <div class="interest-modal__backdrop" @click="closeInterestModal"></div>
      <div class="interest-modal__content">
        <div class="interest-modal__header">
          <h3>Zapisz się na listę oczekujących</h3>
          <button class="interest-modal__close" @click="closeInterestModal">×</button>
        </div>
        <div class="interest-modal__body">
          <p>Zostaw swoje dane, aby być na bieżąco z informacjami o produkcie {{ getProductName(selectedProductId) }}</p>
          <form class="interest-modal__form" @submit.prevent="submitInterestForm">
            <div class="interest-modal__form-group">
              <label for="name">Imię i nazwisko</label>
              <input type="text" id="name" v-model="interestForm.name" required>
            </div>
            <div class="interest-modal__form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="interestForm.email" required>
            </div>
            <div class="interest-modal__form-group">
              <label for="company">Firma</label>
              <input type="text" id="company" v-model="interestForm.company">
            </div>
            <div class="interest-modal__actions">
              <app-button 
                variant="primary" 
                type="submit"
                rounded
              >
                Zapisz się
              </app-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppBadge from '@/components/common/AppBadge.vue'
import { useProductsStore } from '@/stores/products'
import { mapState } from 'pinia'

export default {
  name: 'ProductsView',
  
  components: {
    AppSection,
    AppButton,
    AppBadge
  },
  
  data() {
    return {
      activeAccordion: 0,
      showInterestModal: false,
      selectedProductId: null,
      interestForm: {
        name: '',
        email: '',
        company: ''
      },
      upcomingProducts: [
      {
        "id": "personalizowane-gry-komputerowe",
        "name": "Personalizowane Gry Komputerowe",
        "description": "Aplikacja umożliwiająca granie w popularne gry, takie jak Tetris czy Mario, z uwzględnieniem logotypów marek i assetów konkretnego eventu lub firmy. Angażująca forma promocji i rozrywki.",
        "image": "placeholder.webp",
        "status": "concept",
        "releaseDate": "DOSTĘPNY Q4 2025",
        "releaseInfo": "W fazie koncepcyjnej",
        "ctaText": "Powiadom mnie o postępach",
        "keyFeatures": "Personalizacja gier, branding, gry retro, marketing eventowy, grywalizacja",
        "applications": "Stoiska targowe, eventy promocyjne, konferencje, akcje marketingowe, imprezy integracyjne",
        "pricing": "Do ustalenia"
      },
      {
        "id": "mobilny-escape-room",
        "name": "Mobilny Escape Room w Aplikacji",
        "description": "Aplikacja oferująca cyfrowy escape room powiązany z fizyczną lokalizacją eventu. Uczestnicy rozwiązują zagadki łączące elementy wirtualne z rzeczywistymi obiektami, rozwijając współpracę i logiczne myślenie.",
        "image": "placeholder.webp",
        "status": "concept",
        "releaseDate": "KONCEPCJA",
        "releaseInfo": "W fazie koncepcyjnej",
        "ctaText": "Powiadom mnie o postępach",
        "keyFeatures": "Zagadki mobilne, integracja, współpraca, personalizacja, grywalizacja",
        "applications": "Eventy firmowe, konferencje, targi, imprezy integracyjne, szkolenia",
        "pricing": "Do ustalenia"
      },
      {
        "id": "wspolna-playlista-muzyczna",
        "name": "Aplikacja do Tworzenia Wspólnej Playlisty Muzycznej",
        "description": "System, który pozwala uczestnikom wydarzenia współtworzyć playlistę muzyczną odtwarzaną podczas przerw czy afterparty. Umożliwia dodawanie utworów, głosowanie na propozycje i komentowanie wyborów.",
        "image": "placeholder.webp",
        "status": "concept",
        "releaseDate": "KONCEPCJA",
        "releaseInfo": "W fazie koncepcyjnej",
        "ctaText": "Powiadom mnie o postępach",
        "keyFeatures": "Współtworzenie playlisty, głosowanie, interakcja, muzyka na eventach, zaangażowanie uczestników",
        "applications": "Konferencje (przerwy, afterparty), imprezy firmowe, wesela, spotkania towarzyskie, festiwale",
        "pricing": "Do ustalenia"
      }
      ],
      faqItems: [
        {
          question: 'Jak działa technologia rozpoznawania twarzy w Snap Track?',
          answer: 'Snap Track wykorzystuje zaawansowane algorytmy sztucznej inteligencji do analizy zdjęć i filmów z wydarzenia. System identyfikuje unikalne cechy twarzy każdego uczestnika i dopasowuje je do materiałów, na których dana osoba się znajduje. Wszystko to z dokładnością do 99% i przy pełnej zgodności z przepisami RODO.'
        },
        {
          question: 'Jakie są opcje licencjonowania Snap Track?',
          answer: 'Oferujemy różne modele licencjonowania w zależności od potrzeb klienta: licencja na pojedyncze wydarzenie, pakiety na wiele wydarzeń oraz subskrypcje roczne dla agencji eventowych. Każda opcja zawiera pełne wsparcie techniczne, szkolenie oraz możliwość personalizacji aplikacji.'
        },
        {
          question: 'Kiedy będą dostępne produkty z kategorii "W fazie rozwoju"?',
          answer: 'Event Manager planujemy wprowadzić na rynek w trzecim kwartale 2025 roku, natomiast Guest List Pro będzie dostępny już w pierwszym kwartale 2025. Event Analytics jest obecnie w fazie koncepcyjnej, a jego premiera zależy od wyników badań rynkowych i testów.'
        },
        {
          question: 'Czy mogę zintegrować Snap Track z innymi systemami?',
          answer: 'Tak, Snap Track posiada API umożliwiające integrację z popularnymi systemami rejestracji uczestników, platformami eventowymi oraz mediami społecznościowymi. Oferujemy również usługi dostosowania integracji do specyficznych potrzeb klienta.'
        }
      ]
    }
  },
  
  computed: {
    ...mapState(useProductsStore, [
      'featuredProduct', 
      'featuredProductId'
    ]),
    
    allProducts() {
      // Łączymy flagowy produkt z nadchodzącymi
      return [
        {
          id: this.featuredProduct.id,
          name: this.featuredProduct.name,
          status: 'available',
          keyFeatures: 'Rozpoznawanie twarzy, personalizowane galerie, natychmiastowe udostępnianie',
          applications: 'Konferencje, targi, koncerty, eventy firmowe, wesela',
          pricing: 'Od 999 PLN / wydarzenie'
        },
        ...this.upcomingProducts
      ]
    }
  },
  
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index
    },
    
    goToProductDetail(id) {
      this.$router.push({
        name: 'product-detail',
        params: { id }
      })
    },
    
    getStatusText(status) {
      switch(status) {
        case 'available':
          return 'Dostępny'
        case 'coming-soon':
          return 'Wkrótce'
        case 'concept':
          return 'Koncepcja'
        default:
          return status
      }
    },
    
    showInterestForm(productId) {
      this.selectedProductId = productId
      this.showInterestModal = true
      document.body.style.overflow = 'hidden'
    },
    
    closeInterestModal() {
      this.showInterestModal = false
      document.body.style.overflow = ''
    },
    
    getProductName(id) {
      const product = this.upcomingProducts.find(p => p.id === id)
      return product ? product.name : ''
    },
    
    submitInterestForm() {
      // Tutaj można dodać logikę wysyłania formularza do API
      console.log('Form submitted:', {
        productId: this.selectedProductId,
        ...this.interestForm
      })
      
      // Reset formularza i zamknięcie modalu
      this.interestForm = { name: '', email: '', company: '' }
      this.closeInterestModal()
      
      // Można dodać powiadomienie o sukcesie
      alert('Dziękujemy za zainteresowanie! Będziemy informować o nowościach.')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
@import "@/assets/styles/mixins";

.products {
    .featured-product {
      position: relative;
      z-index: 1;
      
      &__content {
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
      
      &__text {
        flex: 1;
        
        @include max-width(md) {
          text-align: center;
        }
      }
      
      &__title {
        font-size: $font-size-4xl;
        font-weight: $font-weight-bold;
        margin-bottom: 20px;
        
        @include max-width(md) {
          font-size: $font-size-3xl;
        }
      }
      
      &__description {
        font-size: $font-size-md;
        line-height: 1.7;
        color: $color-text-muted;
        margin-bottom: 30px;
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
    
    // Sekcja nadchodzących produktów
    .upcoming-products {
      &__grid {
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
      
      &__card {
        background: rgba(20, 20, 40, 0.6);
        border-radius: $border-radius-large;
        overflow: hidden;
        border: 1px solid $color-border-light;
        backdrop-filter: blur(5px);
        transition: transform $transition-base, box-shadow $transition-base;
        
        &:hover {
          transform: translateY(-10px);
          box-shadow: $shadow-medium;
          border-color: rgba(0, 198, 255, 0.2);
        }
      }
      
      &__card-image {
        position: relative;
        height: 200px;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7) saturate(0.8);
          transition: all 0.5s;
        }
        
        &:hover img {
          filter: brightness(0.9) saturate(1);
          transform: scale(1.05);
        }
      }
      
      &__card-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        backdrop-filter: blur(5px);
        
        &--coming-soon {
          background: rgba(255, 184, 0, 0.2);
          color: #ffb800;
        }
        
        &--concept {
          background: rgba(255, 255, 255, 0.1);
          color: $color-text-muted;
        }
      }
      
      &__card-content {
        padding: 25px;
      }
      
      &__card-title {
        font-size: $font-size-xl;
        font-weight: $font-weight-semibold;
        margin-bottom: 10px;
        color: $color-text;
        font-size: $font-size-xl;
        cursor: pointer;
        transition: all $transition-base;
        
        &:hover {
          background: rgba(255, 255, 255, 0.2);
          
        }
      }
      
      &__body {
        padding: 30px;
      }
      
      &__form {
        margin-top: 20px;
      }
      
      &__form-group {
        margin-bottom: 20px;
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: $font-weight-medium;
          color: $color-text;
        }
        
        input {
          width: 100%;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid $color-border;
          border-radius: $border-radius-medium;
          color: $color-text;
          transition: all $transition-base;
          font-size: $font-size-base;
          
          &:focus {
            outline: none;
            border-color: $color-primary;
            background: rgba(0, 198, 255, 0.05);
          }
        }
      }
      
      &__actions {
        margin-top: 30px;
      }
    }
  }
</style>

<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero__content">
          <app-badge variant="primary">POZNAJ PIXEL EVENTS</app-badge>
          <h1 class="about-hero__title gradient-text">Na styku branży eventowej i technologii</h1>
          <p class="about-hero__description">
            Tworzymy innowacyjne rozwiązania software'owe, które transformują doświadczenia uczestników wydarzeń
          </p>
        </div>
      </div>
    </section>
    
    <!-- Historia i Doświadczenie -->
    <app-section
      variant="darker"
      :centered="false"
    >
      <div class="about-section">
        <div class="about-section__grid">
          <div class="about-section__image">
            <div class="about-section__image-blob"></div>
            <img src="@/assets/img/photos/pawel2.jpg" alt="Założyciel Pixel Events" />
          </div>
          
          <div class="about-section__content">
            <app-badge variant="primary">HISTORIA I DOŚWIADCZENIE</app-badge>
            <h2 class="about-section__title">Od frustracji do innowacji</h2>
            <p class="about-section__text">
              Moja podróż rozpoczęła się od zauważenia luki w branży eventowej. Po latach organizowania wydarzeń, dostrzegłem powtarzające się problemy, które można było rozwiązać dzięki odpowiednim narzędziom technologicznym.
            </p>
            <p class="about-section__text">
              Łącząc moje doświadczenie w branży eventowej z umiejętnościami programistycznymi, stworzyłem rozwiązania, które adresują rzeczywiste bolączki organizatorów i uczestników wydarzeń.
            </p>
            <p class="about-section__text">
              Pixel Events nie jest zwykłą firmą programistyczną – to projekt pasji, który wynika z głębokiego zrozumienia potrzeb branży eventowej i znajomości najnowszych możliwości technologicznych.
            </p>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Model Działania -->
    <app-section
      title="Przewaga małej firmy"
      subtitle="Niewielki rozmiar naszej firmy to nasza największa siła. Dzięki temu możemy oferować to, czego nie zapewnią duże korporacje."
      badge="MODEL DZIAŁANIA"
      :centered="true"
    >
      <div class="model-grid">
        <div 
          v-for="(item, index) in modelItems" 
          :key="index"
          class="model-card"
        >
          <div class="model-card__icon">{{ item.icon }}</div>
          <h3 class="model-card__title">{{ item.title }}</h3>
          <p class="model-card__text">{{ item.description }}</p>
        </div>
      </div>
    </app-section>
    
    <!-- Metodologia pracy -->
    <app-section
      variant="lighter"
      gradient="bottom-left"
      :centered="false"
    >
      <div class="methodology">
        <div class="methodology__grid">
          <div class="methodology__content">
            <app-badge variant="primary">METODOLOGIA PRACY</app-badge>
            <h2 class="methodology__title">Jak działamy</h2>
            
            <div class="methodology__steps">
              <div 
                v-for="(step, index) in methodologySteps" 
                :key="index"
                class="methodology__step"
              >
                <div class="methodology__step-number">{{ step.number }}</div>
                <div class="methodology__step-content">
                  <h3 class="methodology__step-title">{{ step.title }}</h3>
                  <p class="methodology__step-text">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="methodology__image">
            <div class="methodology__image-blob"></div>
            <img src="@/assets/img/photos/workflod.png" alt="Metodologia pracy" />
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Podejście AI First -->
    <app-section
      :centered="false"
    >
      <div class="ai-approach">
        <div class="ai-approach__grid">
          <div class="ai-approach__image">
            <div class="ai-approach__image-blob"></div>
            <img src="@/assets/img/photos/cyber-brain.png" alt="AI i człowiek pracujący razem" />
          </div>
          
          <div class="ai-approach__content">
            <app-badge variant="primary">NASZE PODEJŚCIE</app-badge>
            <h2 class="ai-approach__title">AI First w praktyce</h2>
            <p class="ai-approach__text">
              W Pixel Events realizujemy zasadę "AI First" - inteligentne technologie stanowią nie dodatek, ale fundament naszych rozwiązań. Sztuczna inteligencja jest integralną częścią każdego projektu, od koncepcji po wdrożenie.
            </p>
            <p class="ai-approach__text">
              Wykorzystujemy najnowsze modele AI do rozpoznawania obrazów, analizy danych i personalizacji doświadczeń użytkowników. Dzięki temu nasze aplikacje nie tylko realizują bieżące potrzeby, ale uczą się i doskonalą z każdym użyciem.
            </p>
            <p class="ai-approach__text">
              Łącząc nowoczesne frameworki frontendowe (Vue.js) z potężnymi narzędziami backendowymi i algorytmami AI, tworzymy rozwiązania, które wyprzedzają standardy branżowe i zapewniają unikalne doświadczenia uczestnikom wydarzeń.
            </p>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- Wartości firmy -->
    <app-section
      variant="darker"
      :centered="false"
    >
      <div class="values">
        <div class="values__grid">
          <div class="values__intro">
            <app-badge variant="primary">WARTOŚCI FIRMY</app-badge>
            <h2 class="values__title">Co nas wyróżnia</h2>
            <p class="values__text">
              Pixel Events to więcej niż tylko firma technologiczna. To zbiór wartości i przekonań, które kształtują wszystko, co robimy.
            </p>
          </div>
          
          <div class="values__cards">
            <div 
              v-for="(value, index) in valueItems" 
              :key="index"
              class="values__card"
            >
              <h3 class="values__card-title">{{ value.title }}</h3>
              <p class="values__card-text">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- CTA Section -->
    <section class="about-cta">
      <div class="container">
        <div class="about-cta__content">
          <h2 class="about-cta__title">Zrealizujmy Twój projekt razem</h2>
          <p class="about-cta__text">
            Masz pytania lub pomysł na projekt? Skontaktuj się ze mną, aby omówić jak mogę pomóc w realizacji Twoich celów.
          </p>
          <app-button 
            variant="white"
            rounded
            with-arrow
            @click="$router.push('/kontakt')"
          >
            Skontaktuj się
          </app-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppBadge from '@/components/common/AppBadge.vue'

export default {
  name: 'AboutView',
  
  components: {
    AppSection,
    AppButton,
    AppBadge
  },
  
  data() {
    return {
      modelItems: [
        {
          icon: '👨‍💻',
          title: 'Bezpośredni kontakt',
          description: 'Pracujesz bezpośrednio z twórcą oprogramowania, bez pośredników i długich łańcuchów komunikacji.'
        },
        {
          icon: '⚡️',
          title: 'Szybkość i elastyczność',
          description: 'Natychmiastowa reakcja na potrzeby i możliwość wprowadzania zmian nawet w trakcie projektu.'
        },
        {
          icon: '🎯',
          title: 'Indywidualne podejście',
          description: 'Każdy projekt traktowany jest indywidualnie, z pełnym zaangażowaniem i uwagą na szczegóły.'
        },
        {
          icon: '🤝',
          title: 'Sieć partnerów',
          description: 'Przy większych projektach współpracuję ze sprawdzonymi partnerami, zapewniając pełną skalę usług.'
        },
        {
          icon: '💡',
          title: 'Innowacyjne podejście',
          description: 'Ciągłe doskonalenie i szukanie nowych, lepszych rozwiązań dla Twoich wyzwań.'
        },
        {
          icon: '🔒',
          title: 'Osobiste zaangażowanie',
          description: 'Twój sukces jest moim sukcesem – działam jak partner, a nie tylko dostawca.'
        }
      ],
      methodologySteps: [
        {
          number: '01',
          title: 'Zrozumienie potrzeb',
          description: 'Dokładna analiza Twoich wymagań i problemów, które chcesz rozwiązać.'
        },
        {
          number: '02',
          title: 'Koncepcja i planowanie',
          description: 'Opracowanie szczegółowej koncepcji rozwiązania i planu implementacji.'
        },
        {
          number: '03',
          title: 'Iteracyjny rozwój',
          description: 'Cykliczne dostarczanie działających części systemu, z możliwością testów i feedbacku.'
        },
        {
          number: '04',
          title: 'Wdrożenie i wsparcie',
          description: 'Profesjonalne wdrożenie rozwiązania i ciągłe wsparcie po uruchomieniu.'
        }
      ],
      valueItems: [
        {
          title: 'Innowacyjność',
          description: 'Ciągle poszukuję nowych, lepszych sposobów na rozwiązywanie problemów branży eventowej. Śledzę najnowsze trendy technologiczne i adaptuję je do specyficznych potrzeb naszych klientów.'
        },
        {
          title: 'Zrozumienie branży',
          description: 'Moje doświadczenie w organizacji eventów pozwala mi nie tylko tworzyć oprogramowanie, ale faktycznie rozumieć wyzwania, przed którymi stoisz. Nie musisz tłumaczyć mi specyfiki branży - ja ją znam.'
        },
        {
          title: 'Jakość ponad ilość',
          description: 'Zamiast przyjmować wiele projektów naraz, skupiam się na starannej realizacji ograniczonej liczby zleceń. Dzięki temu każdy klient otrzymuje 100% mojej uwagi i zaangażowania.'
        },
        {
          title: 'Partnerskie relacje',
          description: 'Nie jestem zwykłym dostawcą usług - jestem partnerem w Twoim sukcesie. Zależy mi na długofalowej współpracy i wspólnym rozwijaniu Twojego biznesu.'
        }
      ]
    }
  },
  
  mounted() {
    // Ustawienie tytułu strony
    document.title = 'O nas - Pixel Events'
    
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

.about-view {
  // Hero Section
  .about-hero {
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
  
  // Historia i Doświadczenie Section
  .about-section {
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
      
      &-blob {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: linear-gradient(45deg, $color-primary, $color-primary-dark);
        filter: blur(60px);
        opacity: 0.2;
        z-index: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      img {
        width: 100%;
        border-radius: $border-radius-large;
        box-shadow: $shadow-medium;
        position: relative;
        z-index: 1;
      }
    }
    
    &__content {
      flex: 1;
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin: 20px 0;
      color: $color-text;
      
      @include max-width(md) {
        font-size: $font-size-3xl;
      }
    }
    
    &__text {
      font-size: $font-size-base;
      color: $color-text-muted;
      line-height: 1.6;
      margin-bottom: 20px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  // Model Działania
  .model-grid {
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
  
  .model-card {
    background: rgba(255, 255, 255, 0.03);
    border-radius: $border-radius-large;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    transition: all $transition-base;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: $shadow-medium;
      border-color: rgba(0, 198, 255, 0.2);
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
    
    &__text {
      font-size: $font-size-base;
      color: $color-text-muted;
      line-height: 1.6;
    }
  }
  
  // Metodologia pracy
  .methodology {
    &__grid {
      display: flex;
      align-items: center;
      gap: 60px;
      
      @include max-width(md) {
        flex-direction: column-reverse;
      }
    }
    
    &__content {
      flex: 1;
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin: 20px 0;
      color: $color-text;
      
      @include max-width(md) {
        font-size: $font-size-3xl;
      }
    }
    
    &__steps {
      margin-top: 30px;
    }
    
    &__step {
      display: flex;
      align-items: flex-start;
      margin-bottom: 25px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    &__step-number {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(45deg, $color-primary, $color-primary-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: $font-weight-bold;
      font-size: $font-size-lg;
      margin-right: 20px;
    }
    
    &__step-content {
      flex: 1;
    }
    
    &__step-title {
      font-size: $font-size-xl;
      font-weight: $font-weight-semibold;
      color: $color-text;
      margin-bottom: 10px;
    }
    
    &__step-text {
      font-size: $font-size-base;
      color: $color-text-muted;
      line-height: 1.6;
    }
    
    &__image {
      flex: 1;
      position: relative;
      
      &-blob {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: linear-gradient(45deg, $color-primary, $color-primary-dark);
        filter: blur(60px);
        opacity: 0.2;
        z-index: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      img {
        width: 100%;
        border-radius: $border-radius-large;
        box-shadow: $shadow-medium;
        position: relative;
        z-index: 1;
      }
    }
  }
  
  // AI Approach
  .ai-approach {
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
      
      &-blob {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: linear-gradient(45deg, $color-primary, $color-primary-dark);
        filter: blur(60px);
        opacity: 0.2;
        z-index: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      img {
        width: 100%;
        border-radius: $border-radius-large;
        box-shadow: $shadow-medium;
        position: relative;
        z-index: 1;
      }
    }
    
    &__content {
      flex: 1;
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin: 20px 0;
      color: $color-text;
      
      @include max-width(md) {
        font-size: $font-size-3xl;
      }
    }
    
    &__text {
      font-size: $font-size-base;
      color: $color-text-muted;
      line-height: 1.6;
      margin-bottom: 20px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  // Values section
  .values {
    &__grid {
      display: flex;
      gap: 60px;
      
      @include max-width(lg) {
        flex-direction: column;
      }
    }
    
    &__intro {
      flex: 0 0 300px;
      
      @include max-width(lg) {
        flex: none;
      }
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin: 20px 0;
      color: $color-text;
      
      @include max-width(md) {
        font-size: $font-size-3xl;
      }
    }
    
    &__text {
      font-size: $font-size-base;
      color: $color-text-muted;
      line-height: 1.6;
    }
    
    &__cards {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    
    &__card {
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
    
    &__card-title {
      font-size: $font-size-xl;
      font-weight: $font-weight-semibold;
      color: $color-primary;
      margin-bottom: 15px;
    }
    
    &__card-text {
      font-size: $font-size-base;
      color: $color-text-muted;
      line-height: 1.6;
    }
  }
  
  // CTA section
  .about-cta {
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
  }
}
</style>

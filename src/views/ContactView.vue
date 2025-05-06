<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="contact-hero__content">
          <app-badge variant="primary">SKONTAKTUJ SIĘ Z NAMI</app-badge>
          <h1 class="contact-hero__title gradient-text">Porozmawiajmy o Twoim projekcie</h1>
          <p class="contact-hero__description">
            Chętnie odpowiemy na Twoje pytania i pomożemy w realizacji Twojego przyszłego wydarzenia
          </p>
        </div>
      </div>
    </section>
    
    <!-- Sekcja Kontaktowa -->
    <app-section id="contact" variant="lighter" gradient="bottom-left">
      <div class="contact-section">
        <div class="contact-section__grid">
          <div class="contact-section__form-wrapper">
            <h2 class="contact-section__title">Napisz do nas</h2>
            <p class="contact-section__text">
              Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin roboczych.
            </p>
            
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="contact-form__group">
                <label for="name" class="contact-form__label">Imię i nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="contact-form__input" 
                  placeholder="Wprowadź swoje imię i nazwisko"
                  required
                />
              </div>
              
              <div class="contact-form__group">
                <label for="email" class="contact-form__label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="contact-form__input" 
                  placeholder="Wprowadź swój adres email"
                  required
                />
              </div>
              
              <div class="contact-form__group">
                <label for="phone" class="contact-form__label">Telefon (opcjonalnie)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  class="contact-form__input" 
                  placeholder="Wprowadź swój numer telefonu"
                />
              </div>
              
              <div class="contact-form__group">
                <label for="subject" class="contact-form__label">Temat</label>
                <select 
                  id="subject" 
                  v-model="form.subject" 
                  class="contact-form__select"
                  required
                >
                  <option value="" disabled selected>Wybierz temat</option>
                  <option value="snap-track">Snap Track</option>
                  <option value="custom-project">Projekt na zamówienie</option>
                  <option value="collaboration">Współpraca</option>
                  <option value="pricing">Wycena</option>
                  <option value="other">Inne</option>
                </select>
              </div>
              
              <div class="contact-form__group">
                <label for="message" class="contact-form__label">Wiadomość</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  class="contact-form__textarea" 
                  placeholder="Opisz swój projekt lub pytanie"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <div class="contact-form__consent">
                <input 
                  type="checkbox" 
                  id="consent" 
                  v-model="form.consent"
                  required
                />
                <label for="consent">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na przesłane zapytanie. Zapoznałem/am się z <router-link to="/privacy-policy" class="contact-form__link">polityką prywatności</router-link>.
                </label>
              </div>
              
              <app-button 
                type="submit" 
                variant="primary" 
                rounded 
                :disabled="isSubmitting"
                class="contact-form__submit"
              >
                {{ isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość' }}
              </app-button>
            </form>
            
            <div v-if="formSubmitted" class="contact-form__success">
              <div class="contact-form__success-icon">✓</div>
              <h3>Dziękujemy za wiadomość!</h3>
              <p>Skontaktujemy się z Tobą jak najszybciej.</p>
            </div>
          </div>
          
          <div class="contact-section__info">
            <div class="contact-info">
              <h2 class="contact-info__title">Dane kontaktowe</h2>
              
              <div class="contact-info__items">
                <div class="contact-info__item">
                  <div class="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 16.714 18.086 20.571 13.455 20.571V22L10.818 19.428L13.455 16.857V18.285C16.62 18.285 19.182 15.428 19.182 12C19.182 8.572 16.62 5.715 13.455 5.715C10.289 5.715 7.727 8.572 7.727 12H5C5 7.286 8.823 3.429 13.455 3.429C18.086 3.429 22 7.286 22 12Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="contact-info__content">
                    <h3 class="contact-info__label">Email</h3>
                    <a href="mailto:kontakt@pixelevents.pl" class="contact-info__text">kontakt@pixelevents.pl</a>
                  </div>
                </div>
                
                <div class="contact-info__item">
                  <div class="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C16.052 4 20 6.943 20 10.999Z" fill="currentColor"/>
                      <path d="M13 8C15.103 8 17 9.897 17 12H19C19 8.8 16.2 6 13 6V8Z" fill="currentColor"/>
                      <path d="M13 12C13.552 12 14 12.448 14 13C14 13.551 13.552 14 13 14C12.448 14 12 13.551 12 13C12 12.448 12.448 12 13 12Z" fill="currentColor"/>
                      <path d="M15.422 16.594L13.625 16.897C9.058 17.81 6.893 15.645 6.127 11.09L5.978 9.309C5.868 8.195 6.636 7.226 7.75 7.226C8.854 7.226 8.854 7.226 9.126 8.274L9.242 8.829C9.397 9.468 9.232 10.146 8.791 10.593L8.677 10.709C9.518 14.043 10.355 14.88 13.65 15.645L13.766 15.531C14.213 15.09 14.89 14.926 15.52 15.081L16.226 15.23C17.115 15.459 17.115 15.459 17.115 16.563C17.115 17.676 16.146 18.444 15.032 18.335L15.422 16.594Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="contact-info__content">
                    <h3 class="contact-info__label">Telefon</h3>
                    <a href="tel:+48123456789" class="contact-info__text">+48 123 456 789</a>
                  </div>
                </div>
                
                <div class="contact-info__item">
                  <div class="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                      <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="contact-info__content">
                    <h3 class="contact-info__label">Godziny pracy</h3>
                    <p class="contact-info__text">Pon. - Pt., 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
              
              <div class="contact-info__social">
                <h3 class="contact-info__social-title">Znajdź nas</h3>
                <div class="contact-info__social-links">
                  <a href="#" class="contact-info__social-link" aria-label="Facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" class="contact-info__social-link" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" class="contact-info__social-link" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div class="contact-info__cta">
                <app-button 
                  variant="secondary" 
                  rounded 
                  with-arrow
                  @click="scrollToForm"
                >
                  Napisz wiadomość
                </app-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-section>
    
    <!-- FAQ Section -->
    <app-section
      id="faq"
      title="Często zadawane pytania"
      subtitle="Odpowiedzi na najczęstsze pytania dotyczące współpracy"
      :centered="true"
    >
      <div class="contact-faq">
        <div 
          v-for="(question, index) in faqItems" 
          :key="index"
          class="contact-faq__item"
          :class="{ 'contact-faq__item--active': activeAccordion === index }"
        >
          <div 
            class="contact-faq__question"
            @click="toggleAccordion(index)"
          >
            {{ question.question }}
            <span class="contact-faq__icon">{{ activeAccordion === index ? '−' : '+' }}</span>
          </div>
          <div 
            class="contact-faq__answer"
            :style="{ display: activeAccordion === index ? 'block' : 'none' }"
          >
            {{ question.answer }}
          </div>
        </div>
      </div>
    </app-section>
  </div>
</template>

<script>
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppBadge from '@/components/common/AppBadge.vue'

export default {
  name: 'ContactView',
  
  components: {
    AppSection,
    AppButton,
    AppBadge
  },
  
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      },
      isSubmitting: false,
      formSubmitted: false,
      activeAccordion: 0,
      faqItems: [
        {
          question: 'Jaki jest czas realizacji projektu?',
          answer: 'Czas realizacji projektu zależy od jego złożoności. Typowy projekt zajmuje od 2 do 6 tygodni. Podczas konsultacji wstępnej podamy dokładniejsze szacunki dla Twojego konkretnego projektu.'
        },
        {
          question: 'Czy oferujecie wsparcie po wdrożeniu?',
          answer: 'Tak, oferujemy pełne wsparcie techniczne po wdrożeniu. W zależności od wybranego pakietu, wsparcie może obejmować regularne aktualizacje, poprawki błędów oraz asystę podczas wydarzeń.'
        },
        {
          question: 'Czy możecie dostosować rozwiązanie do mojego konkretnego wydarzenia?',
          answer: 'Oczywiście! Personalizacja jest jednym z naszych głównych atutów. Dostosujemy nasze rozwiązania do specyficznych wymagań Twojego wydarzenia, identyfikacji wizualnej oraz procesów organizacyjnych.'
        },
        {
          question: 'Jak wygląda proces współpracy?',
          answer: 'Współpraca rozpoczyna się od konsultacji, podczas której poznajemy Twoje potrzeby. Następnie przygotowujemy koncepcję i wycenę. Po akceptacji przechodzimy do projektowania, implementacji i testów. Cały proces jest transparentny, a Ty masz wpływ na kluczowe decyzje na każdym etapie realizacji.'
        },
        {
          question: 'Czy zajmujecie się również szkoleniem personelu?',
          answer: 'Tak, oferujemy szkolenia dla zespołu klienta, aby wszyscy członkowie personelu mogli efektywnie korzystać z naszych rozwiązań. Szkolenia mogą odbywać się online lub stacjonarnie, w zależności od potrzeb.'
        }
      ]
    }
  },
  
  mounted() {
    // Ustawienie tytułu strony
    document.title = 'Kontakt - Pixel Events'
    
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
    },
    
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index
    },
    
    submitForm() {
      this.isSubmitting = true
      
      // Tutaj można dodać logikę wysyłania formularza, np. poprzez API
      // Symulacja wysyłki
      setTimeout(() => {
        this.isSubmitting = false
        this.formSubmitted = true
        this.resetForm()
      }, 1500)
    },
    
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      }
    },
    
    scrollToForm() {
      const formElement = document.querySelector('.contact-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.contact-view {
  // Hero Section
  .contact-hero {
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
  
  // Contact Section
  .contact-section {
    &__grid {
      display: flex;
      gap: 50px;
      
      @include max-width(lg) {
        flex-direction: column;
      }
    }
    
    &__form-wrapper {
      flex: 1;
      padding: 30px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: $border-radius-large;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    &__title {
      font-size: $font-size-2xl;
      font-weight: $font-weight-bold;
      margin-bottom: 15px;
      color: $color-text;
    }
    
    &__text {
      font-size: $font-size-base;
      color: $color-text-muted;
      margin-bottom: 30px;
    }
    
    &__info {
      flex: 0 0 350px;
      
      @include max-width(lg) {
        flex: none;
      }
    }
  }
  
  // Contact Form
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    &__group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    &__label {
      font-size: $font-size-base;
      font-weight: $font-weight-medium;
      color: $color-text;
    }
    
    &__input,
    &__select,
    &__textarea {
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: $border-radius-medium;
      color: $color-text;
      font-size: $font-size-base;
      transition: all $transition-base;
      outline: none;
      width: 100%;
      
      &:focus {
        border-color: rgba(0, 198, 255, 0.5);
        background: rgba(0, 198, 255, 0.05);
      }
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
    }
    
    &__select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 16px center;
      background-size: 16px;
      
      option {
        background-color: $color-bg-darker;
        color: $color-text;
      }
    }
    
    &__textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    &__consent {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: $font-size-sm;
      color: $color-text-muted;
      
      input[type="checkbox"] {
        margin-top: 3px;
      }
    }
    
    &__link {
      color: $color-primary;
      text-decoration: underline;
      transition: all $transition-base;
      
      &:hover {
        color: lighten($color-primary, 10%);
      }
    }
    
    &__submit {
      margin-top: 10px;
      align-self: flex-start;
    }
    
    &__success {
      margin-top: 30px;
      padding: 20px;
      background: rgba(0, 198, 255, 0.1);
      border-radius: $border-radius-medium;
      text-align: center;
      
      &-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: $color-primary;
        color: $color-bg-dark;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        margin: 0 auto 20px;
      }
      
      h3 {

font-size: $font-size-xl;
        color: $color-text;
        margin-bottom: 10px;
      }
      
      p {
        color: $color-text-muted;
      }
    }
  }
  
  // Contact Info
  .contact-info {
    padding: 30px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: $border-radius-large;
    border: 1px solid rgba(255, 255, 255, 0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    
    &__title {
      font-size: $font-size-2xl;
      font-weight: $font-weight-bold;
      margin-bottom: 25px;
      color: $color-text;
    }
    
    &__items {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    
    &__item {
      display: flex;
      align-items: flex-start;
      gap: 15px;
    }
    
    &__icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(0, 198, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color-primary;
    }
    
    &__content {
      flex: 1;
    }
    
    &__label {
      font-size: $font-size-base;
      font-weight: $font-weight-semibold;
      margin-bottom: 5px;
      color: $color-text;
    }
    
    &__text {
      font-size: $font-size-base;
      color: $color-text-muted;
      text-decoration: none;
      transition: all $transition-base;
      
      &:hover {
        color: $color-primary;
      }
    }
    
    &__social {
      margin-top: auto;
      margin-bottom: 30px;
      
      &-title {
        font-size: $font-size-base;
        font-weight: $font-weight-semibold;
        margin-bottom: 15px;
        color: $color-text;
      }
      
      &-links {
        display: flex;
        gap: 15px;
      }
      
      &-link {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $color-text;
        transition: all $transition-base;
        
        &:hover {
          background: $color-primary;
          color: white;
          transform: translateY(-3px);
        }
      }
    }
    
    &__cta {
      margin-top: auto;
      
      @include max-width(lg) {
        display: none;
      }
    }
  }
  
  // FAQ
  .contact-faq {
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
        
        .contact-faq__question {
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
}
</style>

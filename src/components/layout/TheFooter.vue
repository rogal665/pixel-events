<template>
    <footer class="footer">
      <div class="footer__divider"></div>
      
      <div class="container">
        <div class="footer__content">
          <div class="footer__info">
            <div class="footer__logo">PixelEvents</div>
            <p class="footer__description">
              Tworzymy innowacyjne rozwiązania software'owe dla branży eventowej, łącząc najnowsze technologie z intuicyjnym designem. Nasza misja to transformacja doświadczeń uczestników wydarzeń.
            </p>
            <div class="footer__social">
              <a href="#" class="footer__social-link" aria-label="Facebook">FB</a>
              <a href="#" class="footer__social-link" aria-label="Instagram">IN</a>
              <a href="#" class="footer__social-link" aria-label="LinkedIn">TW</a>
              <a href="#" class="footer__social-link" aria-label="Twitter">IG</a>
            </div>
          </div>
          
          <div class="footer__links">
            <h3 class="footer__heading">Nawigacja</h3>
            <ul class="footer__list">
              <li v-for="item in navigationItems" :key="item.path">
                <router-link :to="item.path" class="footer__link">
                  {{ item.label }}
                </router-link>
              </li>
              <li><a href="#" class="footer__link">Blog</a></li>
            </ul>
          </div>
          
          <div class="footer__links">
            <h3 class="footer__heading">Produkty</h3>
            <ul class="footer__list">
              <li v-for="product in productItems" :key="product.id">
                <router-link 
                  :to="{ name: 'product-detail', params: { id: product.id }}" 
                  class="footer__link"
                >
                  {{ product.name }}
                </router-link>
              </li>
            </ul>
          </div>
          
          <div class="footer__links">
            <h3 class="footer__heading">Kontakt</h3>
            <ul class="footer__list">
              <li><a href="mailto:kontakt@pixelevents.pl" class="footer__link">kontakt@pixelevents.pl</a></li>
              <li><a href="tel:+48123456789" class="footer__link">+48 123 456 789</a></li>
              <li><span class="footer__text">ul. Przykładowa 123</span></li>
              <li><span class="footer__text">00-001 Warszawa</span></li>
            </ul>
          </div>
        </div>
        
        <div class="footer__bottom">
          <div class="footer__copyright">
            &copy; {{ currentYear }} Pixel Events. Wszelkie prawa zastrzeżone.
          </div>
          
          <div class="footer__policy-links">
            <a href="#" class="footer__policy-link">Polityka prywatności</a>
            <a href="#" class="footer__policy-link">Regulamin</a>
            <a href="#" class="footer__policy-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { useProductsStore } from '@/stores/products'
  import { mapState } from 'pinia'
  
  export default {
    name: 'TheFooter',
    
    data() {
      return {
        navigationItems: [
          { label: 'Strona główna', path: '/' },
          { label: 'O nas', path: '/o-nas' },
          { label: 'Produkty', path: '/produkty' },
          { label: 'Kontakt', path: '/kontakt' }
        ]
      }
    },
    
    computed: {
      ...mapState(useProductsStore, ['products']),
      
      currentYear() {
        return new Date().getFullYear()
      },
      
      productItems() {
        return this.products.map(product => ({
          id: product.id,
          name: product.name
        }))
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .footer {
    background-color: $color-bg-darker;
    color: $color-text;
    padding: 80px 0 30px;
    position: relative;
    overflow: hidden;
    
    &__divider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, $color-primary, $color-primary-dark, transparent);
    }
    
    &__content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 60px;
      
      @include max-width(lg) {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }
      
      @include max-width(md) {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }
    
    &__info {
      max-width: 400px;
    }
    
    &__logo {
      font-size: $font-size-2xl;
      font-weight: $font-weight-bold;
      background: $color-primary-gradient;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
    }
    
    &__description {
      color: $color-text-footer;
      line-height: 1.7;
      margin-bottom: 25px;
    }
    
    &__social {
      display: flex;
      gap: 15px;
    }
    
    &__social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: $border-radius-full;
      background: rgba(255, 255, 255, 0.1);
      color: $color-text;
      transition: all $transition-base;
      
      &:hover {
        background: $color-primary-gradient;
        color: white;
        transform: translateY(-3px);
      }
    }
    
    &__heading {
      font-size: $font-size-md;
      font-weight: $font-weight-semibold;
      margin-bottom: 25px;
      color: $color-text;
    }
    
    &__list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    &__link {
      color: $color-text-footer;
      transition: color $transition-base;
      
      &:hover {
        color: $color-primary;
      }
    }
    
    &__text {
      color: $color-text-footer;
    }
    
    &__bottom {
      margin-top: 60px;
      padding-top: 30px;
      border-top: 1px solid $color-border;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      @include max-width(md) {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
    }
    
    &__copyright {
      color: $color-text-footer;
      font-size: $font-size-sm;
    }
    
    &__policy-links {
      display: flex;
      gap: 20px;
      
      @include max-width(md) {
        flex-direction: column;
        gap: 10px;
      }
    }
    
    &__policy-link {
      color: $color-text-footer;
      font-size: $font-size-sm;
      transition: color $transition-base;
      
      &:hover {
        color: $color-primary;
      }
    }
  }
  </style>

<template>
    <div 
      class="mobile-menu" 
      :class="{ 'mobile-menu--open': isOpen }"
    >
      <div class="mobile-menu__backdrop" @click="$emit('close')"></div>
      
      <div class="mobile-menu__content">
        <div class="mobile-menu__header">
          <div class="mobile-menu__logo">PixelEvents</div>
          <button class="mobile-menu__close" @click="$emit('close')" aria-label="Zamknij menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav class="mobile-menu__nav">
          <ul class="mobile-menu__list">
            <li 
              v-for="item in navigationItems" 
              :key="item.path" 
              class="mobile-menu__item"
            >
              <router-link 
                :to="item.path" 
                class="mobile-menu__link"
                active-class="mobile-menu__link--active"
                @click="$emit('close')"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </nav>
        
        <div class="mobile-menu__footer">
          <app-button 
            variant="primary" 
            block 
            rounded 
            @click="handleContactClick"
          >
            Zamów demo
          </app-button>
          
          <div class="mobile-menu__social">
            <a href="#" class="mobile-menu__social-link" aria-label="Facebook">FB</a>
            <a href="#" class="mobile-menu__social-link" aria-label="Instagram">IG</a>
            <a href="#" class="mobile-menu__social-link" aria-label="LinkedIn">IN</a>
            <a href="#" class="mobile-menu__social-link" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppButton from '../common/AppButton.vue'
  
  export default {
    name: 'TheMobileMenu',
    
    components: {
      AppButton
    },
    
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    },
    
    emits: ['close'],
    
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
    
    methods: {
      handleContactClick() {
        this.$emit('close')
        this.$router.push('/kontakt')
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: $z-index-modal;
    visibility: hidden;
    
    &__backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      opacity: 0;
      transition: opacity $transition-base;
    }
    
    &__content {
      position: absolute;
      top: 0;
      right: 0;
      width: 80%;
      max-width: 350px;
      height: 100%;
      background-color: $color-bg-dark;
      border-left: 1px solid $color-border;
      padding: 30px;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform $transition-slow;
    }
    
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }
    
    &__logo {
      font-size: $font-size-xl;
      font-weight: $font-weight-bold;
      background: $color-primary-gradient;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    &__close {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color-text;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: $border-radius-full;
      transition: all $transition-base;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: $color-primary;
      }
    }
    
    &__nav {
      flex: 1;
    }
    
    &__list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    &__link {
      display: block;
      font-size: $font-size-lg;
      font-weight: $font-weight-medium;
      color: $color-text;
      padding: 10px 0;
      border-bottom: 1px solid $color-border-light;
      transition: all $transition-base;
      
      &:hover,
      &--active {
        color: $color-primary;
        border-bottom-color: $color-primary;
      }
    }
    
    &__footer {
      margin-top: 40px;
    }
    
    &__social {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 30px;
    }
    
    &__social-link {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: $border-radius-full;
      color: $color-text;
      transition: all $transition-base;
      
      &:hover {
        background: $color-primary-gradient;
        transform: translateY(-3px);
      }
    }
    
    // Open state
    &--open {
      visibility: visible;
      
      .mobile-menu__backdrop {
        opacity: 1;
      }
      
      .mobile-menu__content {
        transform: translateX(0);
      }
    }
  }
  </style>

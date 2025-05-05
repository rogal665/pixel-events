<template>
    <header 
      class="header" 
      :class="{ 
        'header--transparent': isHeaderTransparent,
        'header--solid': !isHeaderTransparent
      }"
    >
      <div class="container">
        <div class="header__content">
          <router-link to="/" class="header__logo">
            PixelEvents
          </router-link>
          
          <the-navigation class="header__nav d-none d-lg-block" />
          
          <div class="header__actions">
            <app-button 
              variant="primary" 
              size="sm" 
              rounded
              class="d-none d-md-inline-block"
              @click="scrollToContact"
            >
              Zamów demo
            </app-button>
            
            <button 
              class="header__menu-toggle d-lg-none" 
              @click="toggleMobileMenu" 
              aria-label="Menu mobilne"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      
      <the-mobile-menu 
        :is-open="isMobileMenuOpen" 
        @close="closeMobileMenu" 
      />
    </header>
  </template>
  
  <script>
  import TheNavigation from './TheNavigation.vue'
  import TheMobileMenu from './TheMobileMenu.vue'
  import AppButton from '../common/AppButton.vue'
  import { useAppStore } from '@/stores/app'
  import { mapState, mapActions } from 'pinia'
  
  export default {
    name: 'TheHeader',
    
    components: {
      TheNavigation,
      TheMobileMenu,
      AppButton
    },
    
    data() {
      return {
        scrollPosition: 0
      }
    },
    
    computed: {
      ...mapState(useAppStore, ['isMobileMenuOpen', 'isHeaderTransparent'])
    },
    
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    },
    
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    
    methods: {
      ...mapActions(useAppStore, ['toggleMobileMenu', 'closeMobileMenu', 'updateHeaderTransparency']),
      
      handleScroll() {
        this.scrollPosition = window.scrollY
        this.updateHeaderTransparency(this.scrollPosition < 50)
      },
      
      scrollToContact() {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        } else {
          this.$router.push({ path: '/kontakt' })
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: $z-index-fixed;
    transition: all $transition-base;
    padding: 15px 0;
    
    &--transparent {
      background-color: rgba($color-bg-dark, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      .header__logo {
        color: $color-text;
      }
    }
    
    &--solid {
      background-color: $color-bg-dark;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    &__logo {
      font-size: $font-size-2xl;
      font-weight: $font-weight-bold;
      background: $color-primary-gradient;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: $color-primary;
        border-radius: 50%;
        bottom: 2px;
        right: -12px;
      }
    }
    
    &__actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    
    &__menu-toggle {
      width: 30px;
      height: 20px;
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: $color-text;
        transition: all $transition-base;
      }
    }
  }
  </style>

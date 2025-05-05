<template>
    <section class="hero">
      <div class="hero__bg"></div>
      
      <div class="container">
        <div class="hero__content">
          <div class="hero__text">
            <div class="hero__badge">REWOLUCJA W BRANŻY EVENTOWEJ</div>
            <h1 class="hero__title">Rewolucjonizujemy sposób przeżywania <span class="gradient-text">eventów</span></h1>
            <h2 class="hero__subtitle">
              Nasze rozwiązania technologiczne podnoszą doświadczenia uczestników wydarzeń 
              na nowy poziom, łącząc innowacyjność z prostotą użytkowania.
            </h2>
            
            <div class="hero__actions">
              <app-button 
                variant="primary" 
                rounded 
                animated
                with-arrow
                @click="scrollToProduct"
              >
                Odkryj Snap Track
              </app-button>
              
              <app-button 
                variant="secondary" 
                rounded
                @click="$router.push('/o-nas')"
              >
                O nas
              </app-button>
            </div>
          </div>
          
          <div class="hero__image">
            <div class="hero__blob"></div>
            <img src="@/../public/img/photos/01.png" alt="Pixel Events platform visualization" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import AppButton from '@/components/common/AppButton.vue'
  
  export default {
    name: 'HeroSection',
    
    components: {
      AppButton
    },
    
    methods: {
      scrollToProduct() {
        const productSection = document.getElementById('product-section')
        if (productSection) {
          productSection.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    
    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at bottom right, rgba(0, 198, 255, 0.2), transparent 50%);
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at top left, rgba(0, 114, 255, 0.2), transparent 50%);
      }
    }
    
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      @include max-width(md) {
        flex-direction: column;
        gap: 40px;
      }
    }
    
    &__text {
      flex: 1;
      padding-right: 40px;
      
      @include max-width(md) {
        padding-right: 0;
        text-align: center;
      }
    }
    
    &__badge {
      display: inline-block;
      padding: 8px 16px;
      background-color: rgba(0, 198, 255, 0.1);
      color: $color-primary;
      border-radius: 20px;
      font-size: $font-size-sm;
      font-weight: $font-weight-semibold;
      margin-bottom: 20px;
      
      @include max-width(md) {
        margin-bottom: 15px;
      }
    }
    
    &__title {
      font-size: $font-size-6xl;
      margin-bottom: 20px;
      line-height: 1.2;
      
      @include max-width(md) {
        font-size: $font-size-4xl;
      }
      
      span {
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 10px;
          background: rgba(0, 198, 255, 0.2);
          bottom: 5px;
          left: 0;
          z-index: -1;
          border-radius: 10px;
        }
      }
    }
    
    &__subtitle {
      font-size: $font-size-lg;
      font-weight: $font-weight-normal;
      color: $color-text-muted;
      margin-bottom: 30px;
      line-height: 1.5;
      
      @include max-width(md) {
        font-size: $font-size-md;
      }
    }
    
    &__actions {
      display: flex;
      gap: 15px;
      
      @include max-width(md) {
        justify-content: center;
      }
    }
    
    &__image {
      flex: 1;
      position: relative;
      
      img {
        width: 100%;
        border-radius: $border-radius-large;
        box-shadow: $shadow-large;
        position: relative;
        z-index: 1;
      }
    }
    
    &__blob {
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
  }
  </style>

<template>
    <section class="cta">
      <div class="container">
        <div class="cta__content">
          <h2 class="cta__title">Odkryj potencjał Snap Track dla Twojego wydarzenia</h2>
          <p class="cta__text">
            Skontaktuj się z nami, aby dowiedzieć się, jak Snap Track może zwiększyć zaangażowanie 
            uczestników i podnieść poziom Twojego wydarzenia.
          </p>
          <app-button 
            variant="white"
            rounded
            with-arrow
            @click="$router.push('/kontakt')"
          >
            Zamów bezpłatną prezentację
          </app-button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import AppButton from '@/components/common/AppButton.vue'
  
  export default {
    name: 'CtaSection',
    
    components: {
      AppButton
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .cta {
    background-color: $color-primary;
    color: $color-bg-dark;
    padding: 80px 0;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, $color-primary, $color-primary-dark);
      z-index: 0;
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      top: -200px;
      right: -200px;
    }
    
    &__content {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      z-index: 1;
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: 20px;
      
      @include max-width(md) {
        font-size: $font-size-3xl;
      }
    }
    
    &__text {
      font-size: $font-size-lg;
      margin-bottom: 30px;
      opacity: 0.9;
      color: $color-bg-dark;
      @include max-width(md) {
        font-size: $font-size-base;
      }
    }
  }
  </style>

<template>
    <app-section
      id="product-section"
      variant="lighter"
      gradient="bottom-left"
    >
      <div class="product">
        <div class="product__content">
          <div class="product__image">
<img 
  :src="featuredProduct.image" 
  :alt="featuredProduct.name"
/>
          </div>
          
          <div class="product__text">
            <div class="product__tag">FLAGOWY PRODUKT</div>
            <h2 class="product__title">{{ featuredProduct.name }}</h2>
            <p class="product__description">{{ featuredProduct.description }}</p>
            
            <div class="product__features">
              <div 
                v-for="(feature, index) in featuredProduct.features" 
                :key="index"
                class="product__feature"
              >
                <div class="product__feature-icon">✓</div>
                <p class="product__feature-text">{{ feature.description }}</p>
              </div>
            </div>
            
            <div class="product__actions">
              <app-button 
                variant="primary"
                rounded
                with-arrow
                @click="goToProductDetail"
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
  </template>
  
  <script>
  import AppSection from '@/components/common/AppSection.vue'
  import AppButton from '@/components/common/AppButton.vue'
  import { useProductsStore } from '@/stores/products'
  import { mapState } from 'pinia'
  
  export default {
    name: 'ProductSection',
    
    components: {
      AppSection,
      AppButton
    },
    
    computed: {
      ...mapState(useProductsStore, ['featuredProduct'])
    },
    
    methods: {
      goToProductDetail() {
        this.$router.push({
          name: 'product-detail',
          params: { id: this.featuredProduct.id }
        })
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  
  .product {
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
    
    &__tag {
      display: inline-block;
      background-color: rgba(0, 198, 255, 0.1);
      color: $color-primary;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: $font-size-sm;
      font-weight: $font-weight-semibold;
      margin-bottom: 15px;
    }
    
    &__title {
      font-size: $font-size-4xl;
      font-weight: $font-weight-bold;
      margin-bottom: 20px;
      background: $color-primary-gradient;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      
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
  </style>

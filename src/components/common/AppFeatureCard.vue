<template>
    <div class="card card--feature" :class="cardClasses">
      <div class="card__icon">
        <slot name="icon">{{ icon }}</slot>
      </div>
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppFeatureCard',
    
    props: {
      title: {
        type: String,
        required: true
      },
      
      description: {
        type: String,
        required: true
      },
      
      icon: {
        type: String,
        default: ''
      },
      
      hover: {
        type: Boolean,
        default: true
      },
      
      glassEffect: {
        type: Boolean,
        default: false
      },
      
      glow: {
        type: Boolean,
        default: false
      }
    },
    
    computed: {
      cardClasses() {
        return {
          'card--glass': this.glassEffect,
          'card--glow': this.glow,
          'card--hover-scale': this.hover
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  // Styles są zaciągane z _cards.scss
  </style>
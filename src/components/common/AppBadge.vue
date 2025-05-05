<template>
    <span class="badge" :class="badgeClasses">
      <slot></slot>
    </span>
  </template>
  
  <script>
  export default {
    name: 'AppBadge',
    
    props: {
      variant: {
        type: String,
        default: 'primary',
        validator: value => ['primary', 'secondary', 'outline', 'dark'].includes(value)
      },
      
      size: {
        type: String,
        default: 'md',
        validator: value => ['sm', 'md', 'lg'].includes(value)
      },
      
      uppercase: {
        type: Boolean,
        default: false
      }
    },
    
    computed: {
      badgeClasses() {
        return {
          [`badge--${this.variant}`]: true,
          [`badge--${this.size}`]: true,
          'badge--uppercase': this.uppercase
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    border-radius: 20px;
    
    &--primary {
      background: rgba(0, 198, 255, 0.1);
      color: $color-primary;
    }
    
    &--secondary {
      background: rgba(255, 255, 255, 0.1);
      color: $color-text;
    }
    
    &--outline {
      background: transparent;
      border: 1px solid $color-primary;
      color: $color-primary;
    }
    
    &--dark {
      background: $color-bg-lighter;
      color: $color-text;
    }
    
    &--sm {
      padding: 0.25rem 0.75rem;
      font-size: $font-size-xs;
    }
    
    &--md {
      padding: 0.5rem 1rem;
      font-size: $font-size-sm;
    }
    
    &--lg {
      padding: 0.75rem 1.25rem;
      font-size: $font-size-base;
    }
    
    &--uppercase {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: $font-size-xs;
    }
  }
  </style>

<template>
    <component 
      :is="tag" 
      :type="type" 
      class="btn" 
      :class="buttonClasses"
      v-bind="$attrs"
    >
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix">
        <span v-if="withArrow" class="btn__arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </slot>
    </component>
  </template>
  
  <script>
  export default {
    name: 'AppButton',
    
    inheritAttrs: false,
    
    props: {
      variant: {
        type: String,
        default: 'primary',
        validator: value => ['primary', 'secondary', 'outline', 'white', 'text'].includes(value)
      },
      
      size: {
        type: String,
        default: 'md',
        validator: value => ['sm', 'md', 'lg'].includes(value)
      },
      
      tag: {
        type: String,
        default: 'button'
      },
      
      type: {
        type: String,
        default: 'button'
      },
      
      rounded: {
        type: Boolean,
        default: false
      },
      
      block: {
        type: Boolean,
        default: false
      },
      
      disabled: {
        type: Boolean,
        default: false
      },
      
      withArrow: {
        type: Boolean,
        default: false
      },
      
      animated: {
        type: Boolean,
        default: false
      }
    },
    
    computed: {
      buttonClasses() {
        return {
          [`btn--${this.variant}`]: true,
          [`btn--${this.size}`]: true,
          'btn--rounded': this.rounded,
          'btn--block': this.block,
          'btn--disabled': this.disabled,
          'btn--icon': this.withArrow,
          'btn--animated': this.animated
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .btn {
    // Style zaciągane z _buttons.scss
    
    &__arrow {
      margin-left: 8px;
      display: inline-flex;
      transition: transform $transition-base;
    }
    
    &:hover &__arrow {
      transform: translateX(4px);
    }
  }
  </style>

<template>
    <section 
      class="section" 
      :class="sectionClasses"
      :id="id"
    >
      <div class="container">
        <div v-if="title || subtitle" class="section-title" :class="{ 'text-center': centered }">
          <app-badge v-if="badge" :variant="badgeVariant" :uppercase="true">{{ badge }}</app-badge>
          <h2>{{ title }}</h2>
          <p v-if="subtitle">{{ subtitle }}</p>
        </div>
        
        <slot></slot>
      </div>
    </section>
  </template>
  
  <script>
  import AppBadge from './AppBadge.vue'
  
  export default {
    name: 'AppSection',
    
    components: {
      AppBadge
    },
    
    props: {
      id: {
        type: String,
        default: ''
      },
      
      title: {
        type: String,
        default: ''
      },
      
      subtitle: {
        type: String,
        default: ''
      },
      
      badge: {
        type: String,
        default: ''
      },
      
      badgeVariant: {
        type: String,
        default: 'primary'
      },
      
      centered: {
        type: Boolean,
        default: true
      },
      
      variant: {
        type: String,
        default: 'default',
        validator: value => ['default', 'darker', 'lighter'].includes(value)
      },
      
      gradient: {
        type: String,
        default: '',
        validator: value => ['', 'top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
      }
    },
    
    computed: {
      sectionClasses() {
        return {
          'section--bg-darker': this.variant === 'darker',
          'section--bg-lighter': this.variant === 'lighter',
          [`section--gradient-${this.gradient}`]: this.gradient
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .section {
    // Styles są zaciągane z _utils.scss
  }
  </style>
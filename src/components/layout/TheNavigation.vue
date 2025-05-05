<template>
    <nav class="nav">
      <ul class="nav__list">
        <li 
          v-for="item in navigationItems" 
          :key="item.path" 
          class="nav__item"
        >
          <router-link 
            :to="item.path" 
            class="nav__link"
            active-class="nav__link--active"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'TheNavigation',
    
    data() {
      return {
        navigationItems: [
          { label: 'Strona główna', path: '/' },
          { label: 'O nas', path: '/o-nas' },
          { label: 'Produkty', path: '/produkty' },
          { label: 'Kontakt', path: '/kontakt' }
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/styles/main.scss";
  .nav {
    &__list {
      display: flex;
      list-style: none;
      gap: $navbar-item-spacing;
    }
    
    &__link {
      color: $color-text;
      font-weight: $font-weight-medium;
      position: relative;
      padding: 8px 0;
      transition: all $transition-base;
      
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background: $color-primary-gradient;
        bottom: 0;
        left: 0;
        transition: width $transition-base;
      }
      
      &:hover,
      &--active {
        color: $color-primary;
        
        &::after {
          width: 100%;
        }
      }
    }
  }
  </style>


import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isMobileMenuOpen: false,
    isHeaderTransparent: true,
    isDarkMode: true,
    showScrollToTop: false
  }),
  
  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      
      // Zapobiegaj przewijaniu strony gdy menu mobilne jest otwarte
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    
    closeMobileMenu() {
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false
        document.body.style.overflow = ''
      }
    },
    
    updateHeaderTransparency(isTransparent) {
      this.isHeaderTransparent = isTransparent
    },
    
    updateScrollToTop(show) {
      this.showScrollToTop = show
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
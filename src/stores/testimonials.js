import { defineStore } from 'pinia'

export const useTestimonialsStore = defineStore('testimonials', {
  state: () => ({
    testimonials: [
      {
        id: 1,
        content: "Snap Track całkowicie zmienił sposób, w jaki uczestnicy naszej konferencji interagują ze zdjęciami. Zaangażowanie wzrosło o 300%!",
        author: "Anna Kowalska",
        position: "Event Manager, TechConf",
        avatar: "https://placehold.co/100x100/png?text=Avatar+1",
        rating: 5
      },
      {
        id: 2,
        content: "Implementacja Snap Track była niezwykle prosta, a zespół Pixel Events zapewnił wsparcie na każdym etapie. Polecam!",
        author: "Piotr Nowak",
        position: "CEO, EventPro",
        avatar: "https://placehold.co/100x100/png?text=Avatar+2",
        rating: 5
      },
      {
        id: 3,
        content: "Dzięki Snap Track nasi klienci otrzymują wartość dodaną w postaci spersonalizowanych galerii zdjęć z eventów.",
        author: "Marta Wiśniewska",
        position: "Marketing Director, EventGo",
        avatar: "https://placehold.co/100x100/png?text=Avatar+3",
        rating: 5
      },
      {
        id: 4,
        content: "Korzystamy z rozwiązań Pixel Events od ponad roku i jesteśmy zachwyceni efektami. Nasi uczestnicy uwielbiają możliwość łatwego dostępu do zdjęć, na których się znajdują.",
        author: "Jan Kowalczyk",
        position: "Dyrektor, Summer Festival",
        avatar: "https://placehold.co/100x100/png?text=Avatar+4",
        rating: 5
      }
    ]
  }),
  
  getters: {
    allTestimonials: (state) => state.testimonials,
    
    getFeaturedTestimonials: (state) => (count = 3) => {
      return state.testimonials.slice(0, count)
    }
  }
})

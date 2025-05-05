import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 'snap-track',
        name: 'Snap Track',
        slug: 'snap-track',
        tagline: 'Rozpoznawanie twarzy dla uczestników eventów',
        description: 'Innowacyjna aplikacja wykorzystująca sztuczną inteligencję do rozpoznawania twarzy uczestników na zdjęciach i filmach z wydarzenia. Umożliwia łatwe udostępnianie i pobieranie materiałów, na których znajdują się uczestnicy.',
        longDescription: 'Snap Track to rewolucyjne rozwiązanie dla branży eventowej, które wykorzystuje zaawansowane algorytmy sztucznej inteligencji do automatycznego rozpoznawania twarzy uczestników na zdjęciach i filmach z wydarzenia. Dzięki naszej technologii, każdy uczestnik otrzymuje dostęp do spersonalizowanej galerii zawierającej tylko te materiały, na których się znajduje. Eliminuje to konieczność ręcznego przeszukiwania setek zdjęć, oszczędzając czas i zwiększając zaangażowanie uczestników. Aplikacja może być w pełni dostosowana do identyfikacji wizualnej wydarzenia, a wszystko to przy zachowaniu najwyższych standardów bezpieczeństwa i zgodności z RODO.',
        image: 'img/photos/phone2.png',
        features: [
          {
            title: 'Precyzyjna identyfikacja',
            description: 'Algorytmy AI o 99,3% skuteczności rozpoznawania twarzy, nawet w trudnych warunkach oświetleniowych.'
          },
          {
            title: 'Natychmiastowy dostęp',
            description: 'Uczestnicy otrzymują powiadomienia o nowych zdjęciach w czasie rzeczywistym.'
          },
          {
            title: 'Bezpieczeństwo danych',
            description: 'Dane użytkowników są bezpieczne, bo ich nie pobieramy! Zdjęcia są usuwane automatycznie.'
          },
          {
            title: 'White label',
            description: 'Łatwe dostosowanie wyglądu aplikacji do identyfikacji wizualnej Twojego wydarzenia.'
          }
        ],
        keyFeatures: 'Rozpoznawanie twarzy, personalizowane galerie, natychmiastowe udostępnianie',
        applications: 'Konferencje, targi, koncerty, eventy firmowe, wesela',
        pricing: 'Od 999 PLN / wydarzenie',
        status: 'available',
        screenshots: [
          'snap-track-1.jpg',
          'snap-track-2.jpg',
          'snap-track-3.jpg',
          'snap-track-4.jpg',
          'snap-track-5.jpg',
          'snap-track-6.jpg'
        ],
        benefits: [
          'Zwiększenie zaangażowania uczestników o średnio 300%',
          'Oszczędność czasu fotografów i organizatorów',
          'Większa satysfakcja uczestników z udziału w wydarzeniu',
          'Zwiększona obecność marki w mediach społecznościowych',
          'Łatwe zarządzanie prawami do zdjęć i zgód uczestników'
        ]
      },
      
      {
        id: 'event-manager',
        name: 'Event Manager',
        slug: 'event-manager',
        tagline: 'Kompleksowe zarządzanie wydarzeniami',
        description: 'Zaawansowane rozwiązanie do planowania i zarządzania wszystkimi aspektami wydarzenia. Od rejestracji uczestników po analizę efektywności.',
        image: 'https://placehold.co/400x300',
        features: [
          {
            title: 'Rejestracja uczestników',
            description: 'Intuicyjny system rejestracji z personalizowanymi formularzami i automatycznymi potwierdzeniami.'
          },
          {
            title: 'Zarządzanie agendą',
            description: 'Łatwe planowanie harmonogramu wydarzenia z możliwością wprowadzania zmian w czasie rzeczywistym.'
          },
          {
            title: 'Analityka',
            description: 'Szczegółowe raporty i statystyki pozwalające na ocenę efektywności wydarzenia.'
          },
          {
            title: 'Integracje',
            description: 'Możliwość integracji z popularnymi narzędziami marketingowymi i CRM.'
          }
        ],
        keyFeatures: 'Zarządzanie harmonogramem, budżetem, zadaniami, zespołem',
        applications: 'Agencje eventowe, działy marketingu, organizatorzy wydarzeń',
        pricing: 'Od 299 PLN / mies',
        status: 'coming-soon',
        releaseDate: 'Q3 2025'
      },
      {
        id: 'guest-list-pro',
        name: 'Guest List Pro',
        slug: 'guest-list-pro',
        tagline: 'Inteligentne zarządzanie listą gości',
        description: 'Profesjonalne narzędzie do zarządzania listami gości i procesem check-in na wydarzeniu. Eliminuje kolejki i usprawnia proces weryfikacji.',
        image: 'guest-list.jpg',
        features: [
          {
            title: 'Szybki check-in',
            description: 'Skanowanie kodów QR lub rozpoznawanie twarzy dla błyskawicznej weryfikacji gości.'
          },
          {
            title: 'Zarządzanie VIP',
            description: 'Specjalne oznaczenia i ścieżki obsługi dla gości VIP.'
          },
          {
            title: 'Statystyki w czasie rzeczywistym',
            description: 'Bieżące informacje o liczbie gości, średnim czasie check-in i innych kluczowych metrykach.'
          },
          {
            title: 'Tryb offline',
            description: 'Możliwość pracy nawet bez dostępu do internetu z automatyczną synchronizacją po przywróceniu połączenia.'
          }
        ],
        keyFeatures: 'Rejestracja, potwierdzenia, check-in, identyfikatory',
        applications: 'Wydarzenia VIP, konferencje, gale, wydarzenia biletowane',
        pricing: 'Od 499 PLN / wydarzenie',
        status: 'coming-soon',
        releaseDate: 'Q1 2025'
      },
      {
        id: 'event-analytics',
        name: 'Event Analytics',
        slug: 'event-analytics',
        tagline: 'Zaawansowana analityka wydarzeń',
        description: 'Narzędzie analityczne do mierzenia efektywności wydarzeń. Heatmapy, statystyki zaangażowania, raporty i szczegółowe analizy.',
        image: 'event-analytics.jpg',
        features: [
          {
            title: 'Heatmapy zaangażowania',
            description: 'Wizualizacja ruchu i aktywności uczestników podczas wydarzenia.'
          },
          {
            title: 'Szczegółowe raporty',
            description: 'Automatyczne generowanie raportów z kluczowymi metrykami z wydarzenia.'
          },
          {
            title: 'Integracja z mediami społecznościowymi',
            description: 'Analiza zaangażowania i zasięgu w mediach społecznościowych.'
          },
          {
            title: 'Personalizowane dashboardy',
            description: 'Możliwość tworzenia niestandardowych widoków dla różnych interesariuszy.'
          }
        ],
        keyFeatures: 'Analiza zaangażowania, heatmapy, statystyki, raporty',
        applications: 'Organizatorzy wydarzeń, agencje marketingowe, sponsorzy',
        pricing: 'Do ustalenia',
        status: 'concept'
      }
    ],
    featuredProductId: 'snap-track'
  }),
  
  getters: {
    allProducts: (state) => state.products,
    
    availableProducts: (state) => {
      return state.products.filter(product => product.status === 'available')
    },
    
    upcomingProducts: (state) => {
      return state.products.filter(product => product.status !== 'available')
    },
    
    featuredProduct: (state) => {
      return state.products.find(product => product.id === state.featuredProductId)
    },
    
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    
    getProductBySlug: (state) => (slug) => {
      return state.products.find(product => product.slug === slug)
    }
  },
  
  actions: {
    setFeaturedProduct(productId) {
      if (this.getProductById(productId)) {
        this.featuredProductId = productId
      }
    },
    
   
  }
})
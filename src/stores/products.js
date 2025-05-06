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
        image: 'img/photos/snap-track.jpg',
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
        "id": "mobilny-escape-room",
        "name": "Mobilny Escape Room w Aplikacji",
        "slug": "mobilny-escape-room",
        "tagline": "Interaktywne zagadki łączące świat wirtualny z rzeczywistym",
        "description": "Aplikacja oferująca cyfrowy escape room powiązany z fizyczną lokalizacją eventu. Uczestnicy rozwiązują zagadki łączące elementy wirtualne z rzeczywistymi obiektami w przestrzeni wydarzenia. Rozwija współpracę i logiczne myślenie.",
        "image": "https://placehold.co/400x300",
        "features": [
          {
            "title": "Zagadki hybrydowe",
            "description": "Łączenie elementów wirtualnych z rzeczywistymi obiektami w przestrzeni wydarzenia dla pełnej immersji."
          },
          {
            "title": "Zadania kooperacyjne",
            "description": "Scenariusze wymagające współpracy między uczestnikami, sprzyjające integracji zespołu."
          },
          {
            "title": "Personalizacja tematyczna",
            "description": "Możliwość dostosowania zagadek i fabuły do tematyki eventu oraz celów klienta."
          },
          {
            "title": "Immersyjny interfejs",
            "description": "Intuicyjny interfejs użytkownika z elementami interaktywnymi, stworzony dla maksymalnego zaangażowania."
          }
        ],
        "keyFeatures": "Zagadki mobilne, integracja, współpraca, personalizacja, grywalizacja",
        "applications": "Eventy firmowe, konferencje, targi, imprezy integracyjne, szkolenia",
        "pricing": "Do ustalenia",
        "status": "concept",
        "releaseDate": "Q2 2026"
      },
      {
        "id": "wspolna-playlista-eventowa",
        "name": "Aplikacja do Tworzenia Wspólnej Playlisty Muzycznej",
        "slug": "wspolna-playlista-eventowa",
        "tagline": "Muzyka tworzona przez uczestników Twojego wydarzenia",
        "description": "System, który pozwala wszystkim uczestnikom wydarzenia współtworzyć playlistę muzyczną odtwarzaną podczas przerw czy afterparty. Uczestnicy dodają utwory, głosują na propozycje i komentują wybory, zwiększając poczucie wpływu na atmosferę.",
        "image": "https://placehold.co/400x300",
        "features": [
          {
            "title": "Współtworzenie playlisty",
            "description": "Uczestnicy mogą dodawać swoje ulubione utwory do wspólnej kolejki odtwarzania."
          },
          {
            "title": "Głosowanie na utwory",
            "description": "Demokratyczny wybór muzyki poprzez system głosowania na proponowane piosenki."
          },
          {
            "title": "Interakcja i komentarze",
            "description": "Możliwość komentowania wyborów muzycznych i interakcji z innymi uczestnikami."
          },
          {
            "title": "Wpływ na atmosferę",
            "description": "Uczestnicy aktywnie kształtują muzyczny klimat wydarzenia, co zwiększa ich zaangażowanie."
          }
        ],
        "keyFeatures": "Współtworzenie playlisty, głosowanie, interakcja, muzyka na eventach, zaangażowanie uczestników",
        "applications": "Konferencje (przerwy, afterparty), imprezy firmowe, wesela, spotkania towarzyskie, festiwale",
        "pricing": "Do ustalenia",
        "status": "concept",
        "releaseDate": "Q3 2026"
      },
      {
        "id": "personalizowane-gry-eventowe",
        "name": "Personalizowane Gry Komputerowe na Eventy",
        "slug": "personalizowane-gry-eventowe",
        "tagline": "Twoja marka w kultowych grach!",
        "description": "Aplikacja umożliwiająca granie w popularne gry, takie jak Tetris czy Mario, z uwzględnieniem logotypów marek i assetów konkretnego eventu lub firmy. Angażująca forma promocji i rozrywki.",
        "image": "https://placehold.co/400x300",
        "features": [
          {
            "title": "Klasyczne gry w nowej odsłonie",
            "description": "Dostęp do znanych i lubianych mechanik gier, zaadaptowanych do celów marketingowych."
          },
          {
            "title": "Pełna personalizacja brandingowa",
            "description": "Integracja logotypów, kolorów, produktów i innych assetów marki wewnątrz gry."
          },
          {
            "title": "Angażująca rozrywka",
            "description": "Zapewnia doskonałą zabawę, pozytywne skojarzenia z marką i zwiększa interakcję na evencie."
          },
          {
            "title": "Łatwe wdrożenie",
            "description": "Szybka implementacja jako atrakcja na stoiskach targowych, eventach promocyjnych czy imprezach firmowych."
          }
        ],
        "keyFeatures": "Personalizacja gier, branding, gry retro, marketing eventowy, grywalizacja",
        "applications": "Stoiska targowe, eventy promocyjne, konferencje, akcje marketingowe, imprezy integracyjne",
        "pricing": "Do ustalenia",
        "status": "concept",
        "releaseDate": "Q4 2026"
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
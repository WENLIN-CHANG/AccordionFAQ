import { filterFaqs, toggleFaq } from '../function.js';

export default function faqComponent() {
  return {
    init() {
      setTimeout(() => {
        this.isLoading = false
        // 載入完成後自動聚焦搜尋框
        this.$nextTick(() => {
          this.$refs.searchInput.focus()
        })
      },1500)

      // 從 localStorage 讀取之前保存的分類
      const savedCategory = localStorage.getItem('faq-category')
      if(savedCategory) {
        this.$store.faqStore.currentCategory = savedCategory
      }

      // 監聽分類變化並保存
      this.$watch('$store.faqStore.currentCategory', (value) => {
        localStorage.setItem('faq-category', value)
      })
    },

    faqs: [
      { question: '什麼是 Alpine.js？', answer: 'Alpine.js 是一個輕量級的 JavaScript 框架，用於在 HTML 中添加互動性。',category: '技術', isOpen: false, isAnimating: false },
      { question: 'Alpine.js 有什麼優點？', answer: '輕量級、易學習、無需編譯、可以漸進式採用，適合為現有專案添加互動性。',category: '技術', isOpen: false, isAnimating: false },
      { question: '如何學習 Alpine.js？', answer: '從官方文檔開始，做一些小專案練習，理解響應式資料和指令的使用方式。',category: '學習', isOpen: false, isAnimating: false }
    ],
    searchTerm: '',
    currentIndex: -1,
    isLoading: true,
    loadingText: '載入中...',

    get filteredFaqs() {
      return filterFaqs(this.faqs, this.searchTerm, this.$store.faqStore.currentCategory)
    },

    toggle(faq) {
      toggleFaq(this.faqs, faq)
    },

    closeAll() {
      this.faqs.forEach(faq => faq.isOpen = false)
    },

    navigateUp() {
      if(this.currentIndex > 0) {
        this.currentIndex --
      }
    },

    navigateDown() {
      if(this.currentIndex < this.filteredFaqs.length - 1) {
        this.currentIndex ++
      }
    },

    toggleCurrent() {
      if(this.currentIndex >= 0) {
        this.toggle(this.filteredFaqs[this.currentIndex])
      }
    },

    animateToggle(faq) {
      // 先觸發動畫效果
      faq.isAnimating = true

      // 延遲切換狀態，製造更自然的動畫
      setTimeout(() => {
        this.toggle(faq)
        faq.isAnimating = false
      },100)
    },

    // 在 return 物件中加入計算屬性
    get hasNoResults() {
      return this.filteredFaqs.length === 0 && this.searchTerm.trim() !== ''
    },

    get emptyMessage() {
      return `找不到包含「${this.searchTerm}」的 FAQ`
    },
  }
}
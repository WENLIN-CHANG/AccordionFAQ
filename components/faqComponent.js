import { filterFaqs, toggleFaq } from '../function.js';

export default function faqComponent() {
  return {
    faqs: [
      { question: '什麼是 Alpine.js？', answer: 'Alpine.js 是一個輕量級的 JavaScript 框架，用於在 HTML 中添加互動性。', isOpen: false },
      { question: 'Alpine.js 有什麼優點？', answer: '輕量級、易學習、無需編譯、可以漸進式採用，適合為現有專案添加互動性。', isOpen: false },
      { question: '如何學習 Alpine.js？', answer: '從官方文檔開始，做一些小專案練習，理解響應式資料和指令的使用方式。', isOpen: false }
    ],
    searchTerm: '',

    get filteredFaqs() {
      return filterFaqs(this.faqs, this.searchTerm)
    },

    toggle(faq) {
      toggleFaq(this.faqs, faq)
    }
  }
}
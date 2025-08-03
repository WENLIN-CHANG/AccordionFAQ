import Alpine from 'alpinejs';
import faqComponent from './components/faqComponent.js';

Alpine.data('faqComponent', faqComponent);

window.Alpine = Alpine;

Alpine.store('faqStore', {
  currentCategory: '全部',
  categories: ['全部', '技術', '學習']
})

Alpine.start();
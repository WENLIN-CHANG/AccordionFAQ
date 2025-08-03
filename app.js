import Alpine from 'alpinejs';
import faqComponent from './components/faqComponent.js';

Alpine.data('faqComponent', faqComponent);

window.Alpine = Alpine;
Alpine.start();
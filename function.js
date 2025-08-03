// 一次只開一個 FAQ
export function toggleFaq(faqs, targetFaq) {
  // 如果目標 FAQ 已經是展開的，就關閉它
  if(targetFaq.isOpen) {
    targetFaq.isOpen = false
  } else {
    // 否則關閉所有 FAQ，然後展開目標 FAQ
    faqs.forEach(faq => faq.isOpen = false)
    targetFaq.isOpen = true
  }
}

export function filterFaqs(faqs, searchTerm, currentCategory = '全部') {
  let filtered = faqs

  if(currentCategory !== '全部'){
    filtered = filtered.filter(faq => faq.category === currentCategory)
  }

  if(searchTerm !== "") {
    filtered = filtered.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return filtered
}
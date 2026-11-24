import type { MenuItem } from '../types/menu'

export function normalizeFa(input: string): string {
  return input
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/\u200c/g, '')
    .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

export function filterItems(items: MenuItem[], categoryId: string | null, query: string): MenuItem[] {
  const q = normalizeFa(query)
  return items.filter((item) => {
    if (categoryId !== null && item.categoryId !== categoryId) return false
    if (!q) return true
    const haystack = normalizeFa(`${item.name} ${item.nameEn ?? ''} ${item.description ?? ''}`)
    return haystack.includes(q)
  })
}

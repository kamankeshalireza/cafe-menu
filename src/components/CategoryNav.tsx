import type { MenuCategory } from '../types/menu'

interface Props {
  categories: MenuCategory[]
  activeId: string | null
  onSelect: (id: string | null) => void
}

const pill = 'min-h-11 shrink-0 rounded-full border px-4 font-medium transition-colors'
const on = 'border-accent bg-accent text-on-accent'
const off = 'border-line bg-surface text-ink'

export default function CategoryNav({ categories, activeId, onSelect }: Props) {
  const pick = (id: string | null, el: HTMLButtonElement) => {
    onSelect(id)
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: calm ? 'auto' : 'smooth' })
  }
  return (
    <nav aria-label="دسته‌بندی‌های منو" className="no-scrollbar flex gap-2 overflow-x-auto py-3">
      <button type="button" aria-pressed={activeId === null} onClick={(e) => pick(null, e.currentTarget)} className={`${pill} ${activeId === null ? on : off}`}>همه</button>
      {categories.map((c) => (
        <button key={c.id} type="button" aria-pressed={activeId === c.id} onClick={(e) => pick(c.id, e.currentTarget)} className={`${pill} ${activeId === c.id ? on : off}`}>
          {c.name}
        </button>
      ))}
    </nav>
  )
}

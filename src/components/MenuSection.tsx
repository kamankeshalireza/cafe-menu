import { useMemo, useRef, useState } from 'react'
import { categories, menuItems } from '../data/menu'
import { filterItems } from '../lib/search'
import { formatNumber } from '../lib/format'
import CategoryNav from './CategoryNav'
import MenuItemCard from './MenuItemCard'
import SearchInput from './SearchInput'

if (import.meta.env.DEV) {
  const bad = menuItems.filter((i) => !categories.some((c) => c.id === i.categoryId)).map((i) => i.id)
  if (bad.length) console.warn('Unknown categoryId for items:', bad.join(', '))
}

function EmptyState({ onClear, onAll }: { onClear: () => void; onAll: () => void }) {
  const btn = 'min-h-11 rounded-full border border-line bg-surface px-5 font-medium text-ink transition-colors hover:border-accent'
  return (
    <div className="rounded-card border border-line bg-surface p-8 text-center">
      <p className="text-lg font-bold">موردی پیدا نشد.</p>
      <p className="mt-1 text-ink-muted">عبارت دیگری را امتحان کنید یا همه‌ی دسته‌ها را ببینید.</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={onClear} className={btn}>پاک کردن جستجو</button>
        <button type="button" onClick={onAll} className={btn}>نمایش همه دسته‌ها</button>
      </div>
    </div>
  )
}

export default function MenuSection() {
  const [activeCategoryId, setActive] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const navRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const { groups, count } = useMemo(() => {
    const visible = filterItems(menuItems, activeCategoryId, query)
    const g = categories
      .map((c) => ({ category: c, items: visible.filter((i) => i.categoryId === c.id) }))
      .filter((x) => x.items.length > 0)
    return { groups: g, count: visible.length }
  }, [activeCategoryId, query])

  const select = (id: string | null) => {
    setActive(id)
    requestAnimationFrame(() => {
      const nav = navRef.current, list = listRef.current
      if (!nav || !list) return
      const navBottom = nav.getBoundingClientRect().bottom
      const top = list.getBoundingClientRect().top
      if (top < navBottom) {
        const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: window.scrollY + top - navBottom - 8, behavior: calm ? 'auto' : 'smooth' })
      }
    })
  }

  return (
    <section id="menu" aria-labelledby="menu-title" className="scroll-mt-4">
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
        <h2 id="menu-title" className="text-2xl font-extrabold sm:text-3xl">منو</h2>
        <div className="mt-6 max-w-xl"><SearchInput value={query} onChange={setQuery} /></div>
      </div>
      <div ref={navRef} className="sticky top-0 z-10 mt-4 border-b border-line bg-page">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <CategoryNav categories={categories} activeId={activeCategoryId} onSelect={select} />
        </div>
      </div>
      <div ref={listRef} className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:pb-16 lg:px-8">
        <p role="status" aria-live="polite" className="sr-only">
          {count === 0 ? 'موردی پیدا نشد' : `${formatNumber(count)} مورد نمایش داده می‌شود`}
        </p>
        {count === 0 ? (
          <EmptyState onClear={() => setQuery('')} onAll={() => setActive(null)} />
        ) : (
          groups.map(({ category, items }) => (
            <div key={category.id} className="mb-10 last:mb-0">
              <h3 className="text-xl font-extrabold">{category.name}</h3>
              {category.description && <p className="text-ink-muted">{category.description}</p>}
              <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => <MenuItemCard key={item.id} item={item} />)}
              </ul>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

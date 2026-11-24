import { useRef } from 'react'
import { CloseIcon, SearchIcon } from './icons'

interface Props { value: string; onChange: (v: string) => void }

export default function SearchInput({ value, onChange }: Props) {
  const ref = useRef<HTMLInputElement>(null)
  const clear = () => { onChange(''); ref.current?.focus() }
  return (
    <div role="search" className="relative">
      <label htmlFor="menu-search" className="sr-only">جستجو در منو</label>
      <SearchIcon className="pointer-events-none absolute inset-y-0 start-4 my-auto text-ink-muted" />
      <input
        ref={ref}
        id="menu-search"
        type="search"
        value={value}
        placeholder="جستجوی نوشیدنی یا خوراکی…"
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Escape' && value) { e.preventDefault(); clear() } }}
        className="min-h-12 w-full rounded-control border border-line bg-surface ps-12 pe-12 text-start [&::-webkit-search-cancel-button]:appearance-none"
      />
      {value && (
        <button type="button" onClick={clear} aria-label="پاک کردن جستجو" className="absolute inset-y-0 end-1 my-auto flex size-11 items-center justify-center rounded-full text-ink-muted hover:text-ink">
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

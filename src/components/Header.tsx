import { cafe } from '../data/cafe'
import { CupIcon } from './icons'

export default function Header() {
  return (
    <header className="border-b border-line bg-page">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#menu-top" className="flex items-center gap-2 font-extrabold text-ink">
          <CupIcon className="text-accent" />
          {cafe.name}
        </a>
        <nav aria-label="پیوندهای صفحه" className="flex items-center gap-1 font-medium">
          <a href="#menu" className="inline-flex min-h-11 items-center px-3 text-ink hover:text-accent">منو</a>
          <a href="#contact" className="inline-flex min-h-11 items-center px-3 text-ink hover:text-accent">تماس</a>
        </nav>
      </div>
    </header>
  )
}

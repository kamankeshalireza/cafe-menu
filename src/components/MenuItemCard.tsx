import { useState } from 'react'
import type { BadgeId, MenuItem } from '../types/menu'
import { formatNumber } from '../lib/format'
import { getMenuImage } from '../lib/menuImages'
import { CupIcon } from './icons'

const badgeLabel: Record<BadgeId, string> = { popular: 'محبوب', new: 'جدید' }
const badgeStyle: Record<BadgeId, string> = { popular: 'bg-accent-soft text-accent-strong', new: 'bg-leaf-soft text-leaf' }
const pillBase = 'rounded-full px-2.5 py-0.5 text-xs font-bold'

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const [imageFailed, setImageFailed] = useState(false)
  const src = getMenuImage(item.id)
  const available = item.isAvailable !== false
  const tile = 'size-24 shrink-0 rounded-xl sm:size-28'

  return (
    <li className="flex gap-3 rounded-card border border-line bg-surface p-3 shadow-card sm:gap-4 sm:p-4">
      <div className="min-w-0 flex-1">
        <h4 className={`text-base font-bold sm:text-lg ${available ? 'text-ink' : 'text-ink-muted'}`}>{item.name}</h4>
        {item.nameEn && <bdi lang="en" dir="ltr" className="block text-start text-xs text-ink-muted sm:text-sm">{item.nameEn}</bdi>}
        {item.description && <p className="mt-1 text-sm leading-7 text-ink-muted sm:text-base">{item.description}</p>}
        <ul className="mt-2 flex flex-col gap-0.5">
          {item.prices.map((p, i) => (
            <li key={i} className="flex flex-wrap items-baseline gap-x-2">
              {p.label && <span className="text-sm text-ink-muted">{p.label}</span>}
              <span className="whitespace-nowrap">
                <span className={`font-bold ${available ? 'text-ink' : 'text-ink-muted'}`}>{formatNumber(p.amount)}</span>{' '}
                <span className="text-xs text-ink-muted">تومان</span>
              </span>
            </li>
          ))}
        </ul>
        {(item.badges?.length || !available) && (
          <div className="mt-2 flex flex-wrap gap-2">
            {item.badges?.map((b) => <span key={b} className={`${pillBase} ${badgeStyle[b]}`}>{badgeLabel[b]}</span>)}
            {!available && <span className={`${pillBase} bg-surface-muted text-ink-muted`}>ناموجود</span>}
          </div>
        )}
      </div>
      {src && !imageFailed ? (
        <img src={src} alt={item.name} width={112} height={112} loading="lazy" decoding="async" onError={() => setImageFailed(true)} className={`${tile} object-cover ${available ? '' : 'grayscale'}`} />
      ) : (
        <div aria-hidden="true" className={`${tile} flex items-center justify-center bg-accent-soft text-accent`}><CupIcon width={32} height={32} /></div>
      )}
    </li>
  )
}

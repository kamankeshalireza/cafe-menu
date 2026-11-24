import { cafe } from '../data/cafe'
import { ArrowIcon, ClockIcon, CupIcon } from './icons'

export default function Hero() {
  const hours = cafe.hours[0]
  return (
    <section className="on-dark bg-ink text-on-dark">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{cafe.name}</h1>
          <p className="mt-3 text-xl font-bold text-on-dark-muted">{cafe.tagline}</p>
          <p className="mt-4 max-w-xl text-on-dark-muted">{cafe.intro}</p>
          {hours && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-on-dark-muted px-4 py-1 text-sm">
              <ClockIcon width={16} height={16} />
              <span>{hours.label}: {hours.value}</span>
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-bold text-on-accent transition-colors hover:bg-accent-strong">
              مشاهده منو
              <ArrowIcon />
            </a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-on-dark-muted px-6 font-medium text-on-dark transition-colors hover:bg-white/10">
              آدرس و تماس
            </a>
          </div>
        </div>
        <CupIcon aria-hidden="true" width={160} height={160} strokeWidth={1} className="hidden text-accent-soft lg:block" />
      </div>
    </section>
  )
}

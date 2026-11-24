import { cafe } from '../data/cafe'
import { toFaDigits, toTelHref } from '../lib/format'
import { InstagramIcon, MapPinIcon, PhoneIcon } from './icons'

const year = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date())

export default function Footer() {
  const link = 'inline-flex min-h-11 items-center gap-2 text-on-dark hover:underline'
  return (
    <footer id="contact" className="on-dark bg-ink text-on-dark">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-16 lg:px-8">
        <div>
          <h2 className="text-xl font-extrabold">{cafe.name}</h2>
          <p className="mt-2 flex gap-2 text-on-dark-muted"><MapPinIcon className="mt-2 shrink-0" />{cafe.address}</p>
          {cafe.mapUrl && <a href={cafe.mapUrl} className={link} target="_blank" rel="noreferrer">مسیریابی روی نقشه</a>}
        </div>
        <div>
          <h3 className="text-lg font-bold">ساعت کار</h3>
          <dl className="mt-2 text-on-dark-muted">
            {cafe.hours.map((h) => (
              <div key={h.label}><dt className="inline">{h.label}: </dt><dd className="inline">{h.value}</dd></div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-lg font-bold">تماس</h3>
          <a dir="ltr" href={toTelHref(cafe.phone)} className={link}><PhoneIcon />{toFaDigits(cafe.phone)}</a>
          {cafe.instagram && (
            <a href={`https://instagram.com/${cafe.instagram}`} className={`${link} block`} target="_blank" rel="noreferrer">
              <InstagramIcon className="inline" /> <bdi lang="en" dir="ltr">@{cafe.instagram}</bdi>
            </a>
          )}
        </div>
      </div>
      <p className="border-t border-white/15 px-4 py-4 text-center text-sm text-on-dark-muted">
        قیمت‌ها به تومان است. © {year} {cafe.name}
      </p>
    </footer>
  )
}

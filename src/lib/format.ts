const faNumber = new Intl.NumberFormat('fa-IR')
export const formatNumber = (n: number) => faNumber.format(n)

const faDigits = '۰۱۲۳۴۵۶۷۸۹'
export const toFaDigits = (s: string) => s.replace(/\d/g, (d) => faDigits[Number(d)])
export const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`

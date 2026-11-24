export type BadgeId = 'popular' | 'new'

export interface PriceOption {
  label?: string
  amount: number
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
}

export interface MenuItem {
  id: string
  categoryId: string
  name: string
  nameEn?: string
  description?: string
  prices: [PriceOption, ...PriceOption[]]
  badges?: BadgeId[]
  isAvailable?: boolean
}

export interface OpeningHours {
  label: string
  value: string
}

export interface CafeInfo {
  name: string
  nameEn?: string
  tagline: string
  intro: string
  address: string
  mapUrl?: string
  phone: string
  instagram?: string
  hours: OpeningHours[]
}

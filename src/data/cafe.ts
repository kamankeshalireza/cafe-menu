import type { CafeInfo } from '../types/menu'

export const cafe: CafeInfo = {
  name: 'کافه دارچین',
  nameEn: 'Cinnamon Cafe',
  tagline: 'قهوه‌ای گرم، گوشه‌ای آرام',
  intro: 'دانه‌های تازه‌برشته، شیرینی‌های خانگی و فضایی که دلتان نخواهد زود بلند شوید.',
  address: 'تهران، خیابان ولیعصر، نرسیده به پارک ملت، پلاک ۱۲',
  mapUrl: 'https://maps.google.com',
  phone: '021-12345678',
  instagram: 'cinnamon.cafe',
  hours: [
    { label: 'شنبه تا چهارشنبه', value: '۸ صبح تا ۱۱ شب' },
    { label: 'پنجشنبه و جمعه', value: '۹ صبح تا ۱۲ شب' },
  ],
}

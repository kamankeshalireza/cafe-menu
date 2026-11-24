import type { MenuCategory, MenuItem } from '../types/menu'

export const categories: MenuCategory[] = [
  { id: 'hot-coffee', name: 'قهوه گرم', description: 'دانه‌های تازه‌برشته با عصاره‌ای غلیظ و معطر' },
  { id: 'iced-coffee', name: 'قهوه سرد' },
  { id: 'tea-and-more', name: 'چای و دمنوش' },
  { id: 'desserts', name: 'کیک و دسر' },
  { id: 'breakfast', name: 'صبحانه', description: 'تا ساعت ۱۲ ظهر سرو می‌شود' },
]

export const menuItems: MenuItem[] = [
  { id: 'espresso', categoryId: 'hot-coffee', name: 'اسپرسو', nameEn: 'Espresso', description: 'شات غلیظ و معطر از ترکیب عربیکا و روبوستا.', prices: [{ label: 'سینگل', amount: 85000 }, { label: 'دبل', amount: 115000 }], badges: ['popular'] },
  { id: 'americano', categoryId: 'hot-coffee', name: 'آمریکانو', nameEn: 'Americano', prices: [{ amount: 105000 }] },
  { id: 'latte', categoryId: 'hot-coffee', name: 'لاته', nameEn: 'Latte', description: 'اسپرسو و شیر بخارداده با فوم نرم.', prices: [{ amount: 135000 }] },
  { id: 'cinnamon-latte', categoryId: 'hot-coffee', name: 'لاته دارچین', nameEn: 'Cinnamon Latte', description: 'اسپرسو، شیر بخارداده و کمی دارچین تازه.', prices: [{ amount: 145000 }], badges: ['new'] },
  { id: 'iced-latte', categoryId: 'iced-coffee', name: 'آیس لاته', nameEn: 'Iced Latte', description: 'اسپرسو، شیر سرد و یخ فراوان.', prices: [{ amount: 140000 }], badges: ['popular'] },
  { id: 'cold-brew', categoryId: 'iced-coffee', name: 'کلد برو', nameEn: 'Cold Brew', description: 'دم‌آوری ۱۸ ساعته با طعمی نرم و کم‌اسید.', prices: [{ amount: 155000 }] },
  { id: 'affogato', categoryId: 'iced-coffee', name: 'آفوگاتو', nameEn: 'Affogato', description: 'بستنی وانیلی با یک شات اسپرسوی داغ.', prices: [{ amount: 150000 }], badges: ['new'] },
  { id: 'saffron-tea', categoryId: 'tea-and-more', name: 'چای زعفرانی', prices: [{ amount: 95000 }] },
  { id: 'herbal-tea', categoryId: 'tea-and-more', name: 'دمنوش گل‌گاوزبان', description: 'گل‌گاوزبان، بهارنارنج و کمی عسل.', prices: [{ label: 'تک‌نفره', amount: 90000 }, { label: 'دونفره', amount: 160000 }] },
  { id: 'hot-chocolate', categoryId: 'tea-and-more', name: 'هات چاکلت', nameEn: 'Hot Chocolate', description: 'شکلات تلخ واقعی، نه پودر.', prices: [{ amount: 130000 }] },
  { id: 'cheesecake', categoryId: 'desserts', name: 'چیزکیک نیویورکی', description: 'با سس توت‌فرنگی خانگی.', prices: [{ amount: 160000 }], isAvailable: false },
  { id: 'brownie', categoryId: 'desserts', name: 'براونی', nameEn: 'Brownie', description: 'نرم و پرشکلات، کنار یک اسکوپ بستنی.', prices: [{ amount: 145000 }], badges: ['popular'] },
  { id: 'cinnamon-roll', categoryId: 'desserts', name: 'رول دارچین', nameEn: 'Cinnamon Roll', description: 'تازه از فر، با روکش کرم‌چیز.', prices: [{ amount: 120000 }] },
  { id: 'omelette', categoryId: 'breakfast', name: 'املت سنتی', description: 'گوجه، تخم‌مرغ محلی و نان سنگک.', prices: [{ amount: 185000 }] },
  { id: 'croissant-plate', categoryId: 'breakfast', name: 'بشقاب کروسان', description: 'کروسان کره‌ای، مربای فصل و پنیر خامه‌ای.', prices: [{ amount: 170000 }], badges: ['new'] },
]

const images = import.meta.glob<string>('../assets/menu/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function getMenuImage(id: string): string | undefined {
  return images[`../assets/menu/${id}.webp`]
}

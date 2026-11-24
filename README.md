# Cafe Menu (Persian, RTL)

React + TypeScript + Vite + Tailwind v4. Static, no backend.

    npm install
    npm run dev       # develop
    npm run build     # output in dist/
    npm run preview   # check the production build

## Updating content
- Cafe info: `src/data/cafe.ts`
- Categories and items: `src/data/menu.ts` (prices are integer Toman)
- Item photo: drop `<item-id>.webp` (480x480, 1:1, <=40 KB) into `src/assets/menu/`; no data edit needed.

After any change run `npm run build` and upload `dist/` to a static host at the domain root.
Point the QR code at the final URL (keep it fixed so printed QR codes stay valid).

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'

export default function App() {
  return (
    <>
      <a href="#menu" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-surface focus:p-3">پرش به منو</a>
      <Header />
      <main id="menu-top">
        <Hero />
        <MenuSection />
      </main>
      <Footer />
    </>
  )
}

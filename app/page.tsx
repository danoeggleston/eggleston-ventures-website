import Header from '@/app/components/header'
import Hero from '@/app/components/hero'
import Introduction from '@/app/components/introduction'
import WhyChooseUs from '@/app/components/why-choose-us'
import PortfolioPreview from '@/app/components/portfolio-preview'
import FinalCTA from '@/app/components/final-cta'
import Footer from '@/app/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <Hero />
        <Introduction />
        <WhyChooseUs />
        <div id="portfolio">
          <PortfolioPreview />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}


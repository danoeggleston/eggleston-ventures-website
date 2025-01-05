import Header from '@/components/header'
import Hero from '@/components/hero'
import Introduction from '@/components/introduction'
import WhyChooseUs from '@/components/why-choose-us'
import PortfolioPreview from '@/components/portfolio-preview'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <Hero />
        <Introduction />
        <WhyChooseUs />
        <PortfolioPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}


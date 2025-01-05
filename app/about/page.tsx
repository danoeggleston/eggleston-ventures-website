// app/about.tsx
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <h1>Preserving the Legacy of Small Business</h1>
        <h2>Our Mission:</h2>
        <p>Eggleston Ventures exists to sustain and elevate small businesses that are the lifeblood of the American economy. We acquire businesses with decades of success, giving them the attention and tools needed to thrive for decades more.</p>
        
        <h2>Our Philosophy:</h2>
        <ul>
          <li><strong>Values-Driven:</strong> We believe in ethical business practices, valuing employees, and prioritizing long-term sustainability over short-term profits.</li>
          <li><strong>Technology with Purpose:</strong> Our expertise in technology allows us to modernize operations, improve efficiency, and help businesses adapt to a new generation.</li>
          <li><strong>Preserving Legacy:</strong> We ensure that great businesses don’t disappear due to labor shortages, lack of succession planning, or changing markets.</li>
        </ul>

        <h2>Our Roots:</h2>
        <p>Founded in Louisville, KY, and driven by Midwest values, we’re a lean, hardworking team committed to honesty, integrity, and results.</p>

        <h2>CTA:</h2>
        <p>Learn more about our team and how we’re shaping the future of small businesses.</p>
        {/* Add more content as needed */}
      </main>
      <Footer />
    </div>
  )
}
import { Wrench, Cpu, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Experienced Operators",
      description: "From running pressure washing services to advising SaaS companies, we have the hands-on experience to navigate diverse industries."
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Technology-Driven Solutions",
      description: "We integrate practical technology to improve operations without overcomplicating processes."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Long-Term Focus",
      description: "While growth is valuable, our top priority is creating durable, AI-proof businesses that will stand the test of time."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-5xl font-black mb-16 text-center text-[#26306f]">
          WHY CHOOSE <span className="text-[#D32F2F]">US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] p-8 border-4 border-[#26306f] transition-transform duration-200 group cursor-pointer"
            >
              <div className="mb-6 text-[#D32F2F] group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#26306f]">{reason.title}</h3>
              <p className="text-lg text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


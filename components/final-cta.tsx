import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8 text-[#26306f]">
            READY TO <span className="text-[#D32F2F]">MAKE AN IMPACT?</span>
          </h2>
          <p className="text-xl mb-12 text-[#26306f]">
            Looking to sell your business, invest in durable enterprises, or work with a company that values honesty and sustainability? Let's talk.
          </p>
          <button className="group bg-[#26306f] text-white px-8 py-4 text-lg font-bold 
            transition-colors duration-200 
            border-4 border-[#26306f] hover:bg-[#D32F2F] hover:border-[#D32F2F]">
            Get In Touch
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}


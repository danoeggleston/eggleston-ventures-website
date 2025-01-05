import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none text-[#26306f]">
            SUSTAINING SMALL BUSINESSES,
            <br />
            <span className="text-[#D32F2F]">EMPOWERING GENERATIONS</span>
          </h1>
          <p className="text-xl mb-8 max-w-lg text-[#26306f]">
            Eggleston Ventures acquires, operates, and grows AI-proof small businesses to ensure their legacy continues for decades to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#portfolio">
              <button className="group bg-white text-[#26306f] px-8 py-4 text-lg font-bold 
                transition-colors duration-200 
                border-4 border-[#26306f] hover:bg-[#607D8B] hover:text-white hover:border-[#607D8B]">
                View Our Portfolio
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
    </section>
  )
}


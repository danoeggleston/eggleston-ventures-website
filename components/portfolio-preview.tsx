import Image from 'next/image'

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container">
        <h2 className="text-5xl font-black mb-16 text-center text-[#26306f]">
          OUR <span className="text-[#D32F2F]">PORTFOLIO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card bg-white border-4 border-[#26306f] p-4 transition-transform duration-200">
            <div className="aspect-square relative mb-4 flex items-center justify-center">
              <Image
                src="/images/flawless_finish_logo.png"
                alt="Flawless Finish Pressure Washing Logo"
                width={300}
                height={300}
                className="object-contain w-3/4 h-3/4"
                unoptimized
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#26306f]">Flawless Finish Pressure Washing</h3>
            <p className="text-gray-600">A premier pressure washing service operating in the Michiana and Kentuckiana areas, delivering exceptional cleaning solutions for residential and commercial properties.</p>
          </div>
          <div className="card bg-white border-4 border-[#26306f] p-4 transition-transform duration-200">
            <div className="aspect-square relative mb-4 flex items-center justify-center">
              <Image
                src="/images/longwave.png"
                alt="Longwave Solutions Logo"
                width={300}
                height={300}
                className="object-contain w-3/4 h-3/4"
                unoptimized
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#26306f]">Longwave Solutions</h3>
            <p className="text-gray-600">A specialized consulting firm providing technology and operations expertise to small businesses, helping them optimize their processes and leverage modern solutions for sustainable growth.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


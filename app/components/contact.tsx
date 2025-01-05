export default function Contact() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-4 border-black p-8 transform -rotate-1">
            <h2 className="text-4xl font-black mb-8 text-center">
              LET'S <span className="text-[#D32F2F]">CONNECT</span>
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-lg font-bold">Name</label>
                <input
                  type="text"
                  className="w-full border-4 border-black p-4 text-lg focus:border-[#D32F2F] 
                    outline-none transform hover:-rotate-1 transition-transform"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-bold">Email</label>
                <input
                  type="email"
                  className="w-full border-4 border-black p-4 text-lg focus:border-[#D32F2F] 
                    outline-none transform hover:rotate-1 transition-transform"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-bold">Message</label>
                <textarea
                  className="w-full border-4 border-black p-4 text-lg focus:border-[#D32F2F] 
                    outline-none min-h-[150px] transform hover:-rotate-1 transition-transform"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D32F2F] text-white px-8 py-4 text-lg font-bold 
                  border-4 border-black transform hover:rotate-1 transition-transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#607D8B] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D32F2F] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
    </section>
  )
}


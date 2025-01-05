import { Building2, Rocket, Users, LineChart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Strategic Investment",
      description: "We focus on high-growth potential companies with innovative solutions."
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Startup Acceleration",
      description: "Providing resources and guidance to accelerate your company's growth."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Network",
      description: "Access to our network of industry experts and successful entrepreneurs."
    },
    {
      icon: <LineChart className="h-12 w-12" />,
      title: "Growth Strategy",
      description: "Data-driven insights to optimize your business performance."
    }
  ]

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container">
        <h2 className="text-5xl font-black mb-16 text-center">
          WHAT WE <span className="text-[#D32F2F]">OFFER</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 border-4 border-black transform hover:rotate-1 
                transition-transform duration-200 group cursor-pointer"
            >
              <div className="mb-6 text-[#D32F2F] group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


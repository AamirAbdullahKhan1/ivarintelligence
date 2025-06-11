import { Bot, Users, BarChart3, Workflow, Database, Zap } from "lucide-react"

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-6 mx-auto">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
      <p className="text-gray-300 mb-6 text-center leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Zap className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline your business processes and boost efficiency.",
      features: [
        "Custom AI workflow design",
        "Process automation",
        "Intelligent decision making",
        "24/7 automated operations",
      ],
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Advanced customer relationship management powered by AI for better customer insights.",
      features: [
        "AI-powered customer insights",
        "Automated lead scoring",
        "Predictive analytics",
        "Custom CRM development",
      ],
    },
    {
      icon: BarChart3,
      title: "Lead Generation",
      description: "AI-driven lead generation systems that identify and convert high-quality prospects.",
      features: [
        "Intelligent lead identification",
        "Automated outreach campaigns",
        "Lead qualification systems",
        "Conversion optimization",
      ],
    },
    {
      icon: Workflow,
      title: "B2B Automation",
      description: "Comprehensive B2B automation solutions designed to scale your business operations.",
      features: ["Sales process automation", "Marketing automation", "Customer onboarding", "Performance analytics"],
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform your data into actionable insights with our AI-powered analytics platform.",
      features: ["Data mining and analysis", "Predictive modeling", "Real-time dashboards", "Custom reporting"],
    },
    {
      icon: Zap,
      title: "Integration Services",
      description: "Seamlessly integrate AI solutions with your existing systems and workflows.",
      features: ["API development", "System integration", "Cloud migration", "Technical support"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              AI Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI automation solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import { CheckCircle, Clock, Shield, Rocket, Award, Users } from "lucide-react"

const FloatingCube = ({ position }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color="#3b82f6" />
    </Box>
  )
}

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Proven Results",
      description:
        "Our AI solutions have helped businesses increase efficiency by up to 300% and reduce operational costs significantly.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Clock,
      title: "Fast Implementation",
      description:
        "Quick deployment of AI solutions with minimal disruption to your existing workflows and operations.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability ensuring your data and processes are always protected.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "AI systems that grow with your business, adapting to increased demands and evolving requirements.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "Deep domain knowledge across multiple industries with proven track record of successful implementations.",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your AI systems run smoothly.",
      color: "from-pink-500 to-rose-600",
    },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingCube position={[-3, 2, 0]} />
          <FloatingCube position={[3, -1, 0]} />
          <FloatingCube position={[0, 3, -2]} />
          <FloatingCube position={[-2, -2, 1]} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Ivarintelligence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We deliver cutting-edge AI solutions that transform businesses and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-10 lg:p-12 border border-blue-500/20 backdrop-blur-sm">
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

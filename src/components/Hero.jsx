"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Float } from "@react-three/drei"
import { ArrowRight, Zap, Target, TrendingUp, Sparkles } from "lucide-react"

const FloatingOrb = ({ position, color, scale = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
      <Sphere ref={meshRef} args={[0.2, 16, 16]} scale={scale} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.1} />
      </Sphere>
    </Float>
  )
}

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Simple animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">AI-Powered Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  {" "}
                  Business
                </span>
                <br />
                with AI Automation
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                Revolutionize your operations with cutting-edge AI automation solutions. We specialize in CRM
                optimization, intelligent lead generation, and B2B growth strategies.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm px-3 py-2 rounded-full border border-blue-500/30">
                <Zap className="h-4 w-4 text-blue-400" />
                <span className="text-white text-sm font-medium">AI Automation</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-600/20 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/30">
                <Target className="h-4 w-4 text-purple-400" />
                <span className="text-white text-sm font-medium">Lead Generation</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-600/20 backdrop-blur-sm px-3 py-2 rounded-full border border-green-500/30">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm font-medium">B2B Growth</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View Our Work
              </button>
            </div>

            {/* Stats - Properly contained */}
            
          </div>

          {/* Right 3D Content */}
          <div className="h-64 sm:h-80 lg:h-96 order-1 lg:order-2">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 5, 5]} intensity={0.8} />
              <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />

              <FloatingOrb position={[0, 0, 0]} color="#3b82f6" scale={1} />
              <FloatingOrb position={[1.5, 0.8, -0.5]} color="#8b5cf6" scale={0.6} />
              <FloatingOrb position={[-1.5, -0.8, 0.5]} color="#06b6d4" scale={0.4} />
              <FloatingOrb position={[0.8, -1.2, 0]} color="#10b981" scale={0.5} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

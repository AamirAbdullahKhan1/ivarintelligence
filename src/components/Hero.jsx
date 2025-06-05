"use client"

import { ArrowRight, Zap, Target, TrendingUp, Sparkles } from "lucide-react"

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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden flex items-center"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center mb-8 mt-8">
              <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-2xl font-semibold">AI-Powered Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
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
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          <div className="grid grid-cols-3 gap-8 pt-6 w-full max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">50+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">98%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">300%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

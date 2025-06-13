"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Aamir Khan",
      position: "CEO",
      company: "XenTek",
      image: "https://imgur.com/jQrK2Nf.jpg",
      content:
        "Ivarintelligence transformed our entire sales process with their AI automation. We've seen a 250% increase in qualified leads and our team efficiency has improved dramatically. Their expertise in CRM optimization is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "VP of Operations",
      company: "DataDrive Corp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The AI solutions implemented by Ivarintelligence have revolutionized our business operations. We've reduced manual tasks by 80% and our customer satisfaction scores have never been higher. Exceptional service and results.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthLab Inc",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Ivarintelligence was a game-changer for our marketing automation. Their B2B lead generation system has consistently delivered high-quality prospects, resulting in a 300% ROI within the first quarter.",
      rating: 5,
    },
    {
      name: "David Thompson",
      position: "CTO",
      company: "InnovateTech",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The technical expertise and professionalism of the Ivarintelligence team is outstanding. They delivered a complex AI automation system on time and within budget. The ongoing support has been exceptional.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      position: "Founder",
      company: "ScaleUp Ventures",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Ivarintelligence helped us scale our operations seamlessly with their intelligent automation solutions. The ROI has been incredible, and their team's dedication to our success is evident in every interaction.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable growth through AI
            automation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Quote className="h-12 w-12 text-blue-400 opacity-50" />
            </div>

            <div className="text-center mb-8">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
              />
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-blue-400 font-medium">{testimonials[currentIndex].position}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-300 border border-gray-600"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-300 border border-gray-600"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-400" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
            <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

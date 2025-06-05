import { Brain, Users, Award, Globe } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Ivarintelligence
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a leading AI automation company specializing in transforming businesses through intelligent
              automation solutions. Our team of experts combines cutting-edge technology with deep industry knowledge to
              deliver results that matter.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From CRM optimization to lead generation and B2B automation, we help companies streamline their
              operations, reduce costs, and accelerate growth through the power of AI.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <Brain className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Expertise</h3>
              <p className="text-gray-300 text-sm">Deep knowledge in machine learning and AI technologies</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300 text-sm">Skilled professionals with proven track records</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Quality Focus</h3>
              <p className="text-gray-300 text-sm">Commitment to delivering exceptional results</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
              <Globe className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300 text-sm">Serving clients worldwide with 24/7 support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

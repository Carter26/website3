import { Briefcase, Users, TrendingUp } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-indigo-600">GS Advertising</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connecting Local Businesses<br />
            <span className="text-indigo-600">With Local Teams</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            GS Advertising & Connections bridges the gap between local businesses and youth sports teams, high school athletic programs, and community organizations through meaningful sponsorship partnerships.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-blue-50 rounded-lg">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Community Focused</h3>
              <p className="text-gray-600">We understand local communities and help businesses connect with the teams that matter most.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-blue-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">Our partnerships deliver measurable growth and increased visibility for both businesses and organizations.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-blue-50 rounded-lg">
              <Briefcase className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Professional Service</h3>
              <p className="text-gray-600">Expert team dedicated to creating customized sponsorship solutions that work for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-gray-400">GS Advertising & Connections</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Sponsorships</a></li>
                <li><a href="#" className="hover:text-white">Partnerships</a></li>
                <li><a href="#" className="hover:text-white">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GS Advertising & Connections. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

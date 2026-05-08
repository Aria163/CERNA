import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-indigo-600 tracking-tight">
          CERNA
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-28 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        Welcome to <span className="text-indigo-600">CERNA</span>
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
        Building the future, one project at a time. Discover our services and find out how we can help you grow.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#services"
          className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Explore Services
        </a>
        <a
          href="#about"
          className="border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-full hover:border-indigo-400 hover:text-indigo-600 transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}

const services = [
  {
    icon: '🚀',
    title: 'Web Development',
    description: 'Modern, fast and responsive web applications built with the latest technologies.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that delight users and drive engagement.',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description: 'Turn your data into actionable insights with custom dashboards and reports.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure designed for reliability and performance.',
  },
]

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Services</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Everything you need to bring your ideas to life — under one roof.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About CERNA</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          CERNA is a passionate team of developers, designers and strategists committed to delivering
          high-quality digital products. We combine technical excellence with creative thinking to
          build solutions that make a real difference.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-500 mb-10">Have a project in mind? We'd love to hear from you.</p>
        {submitted ? (
          <p className="text-indigo-600 font-semibold text-lg">
            Thank you! We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Your name"
              required
              className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              required
              className="border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
      <p>© {new Date().getFullYear()} CERNA. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

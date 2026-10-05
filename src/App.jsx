import { useState, useEffect } from 'react'

function App() {
  // LocalStorage Counter
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('app_count')
    return saved ? parseInt(saved, 10) : 0
  })

  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [showTop, setShowTop] = useState(false)

  // Save counter to LocalStorage
  useEffect(() => {
    localStorage.setItem('app_count', count)
  }, [count])

  // Show Back To Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Copy Email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com')
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  // Contact Form
  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  // Skills
  const skills = [
    {
      name: 'React 19',
      color: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    },
    {
      name: 'Tailwind CSS',
      color: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    },
    {
      name: 'JavaScript ES6+',
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
    {
      name: 'Vite',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    },
    {
      name: 'HTML5 & CSS3',
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    },
    {
      name: 'Git & GitHub',
      color: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    },
  ]

  // Projects
  const projects = [
    {
      name: 'Pharmacy Store System',
      description:
        'A system for managing medicine inventory, sales, and customer service.',
      tech: 'React • Tailwind CSS',
      icon: '💊',
    },
    {
      name: 'Employee Management System',
      description:
        'A system for managing employee information and searching employee records.',
      tech: 'Java • JDBC • MySQL',
      icon: '👨‍💼',
    },
    {
      name: 'Personal Portfolio',
      description:
        'A responsive personal portfolio website built with modern web technologies.',
      tech: 'React • Vite • Tailwind CSS',
      icon: '💻',
    },
  ]

  // FAQ
  const faqs = [
    {
      q: 'តើ Website នេះបង្កើតឡើងដោយប្រើអ្វីខ្លះ?',
      a: 'Website នេះបង្កើតឡើងដោយប្រើ React, Vite និង Tailwind CSS។',
    },
    {
      q: 'តើខ្ញុំអាចទាក់ទងអ្នកតាមណាបាន?',
      a: 'លោកអ្នកអាចបំពេញ Contact Form ឬចុច Copy Email ដើម្បីទាក់ទងខ្ញុំ។',
    },
    {
      q: 'តើ Project នេះអាច Deploy ទៅណាបាន?',
      a: 'Project នេះអាច Deploy ទៅ Vercel, Netlify ឬ GitHub Pages បាន។',
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans scroll-smooth ${
        darkMode
          ? 'bg-slate-900 text-white'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* ================= NAVIGATION ================= */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur border-b transition-colors ${
          darkMode
            ? 'bg-slate-900/90 border-slate-800'
            : 'bg-white/90 border-slate-200'
        }`}
      >
        <div className="flex justify-between items-center p-5 max-w-6xl w-full mx-auto">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-sky-500 tracking-wide"
          >
            Toeurng Phak
          </a>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6">
            <div
              className={`flex space-x-6 font-medium ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              <a href="#home" className="hover:text-sky-500 transition">
                Home
              </a>

              <a href="#about" className="hover:text-sky-500 transition">
                About
              </a>

              <a href="#skills" className="hover:text-sky-500 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-sky-500 transition">
                Projects
              </a>

              <a href="#demo" className="hover:text-sky-500 transition">
                Demo
              </a>

              <a href="#faq" className="hover:text-sky-500 transition">
                FAQ
              </a>

              <a href="#contact" className="hover:text-sky-500 transition">
                Contact
              </a>
            </div>

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border text-sm font-semibold transition cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700'
                  : 'bg-slate-200 border-slate-300 text-slate-800 hover:bg-slate-300'
              }`}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 sm:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-slate-200 border-slate-300'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`sm:hidden px-6 pb-5 ${
              darkMode ? 'bg-slate-900' : 'bg-white'
            }`}
          >
            <div className="flex flex-col gap-4 font-medium">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500"
              >
                Projects
              </a>

              <a
                href="#demo"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500"
              >
                Demo
              </a>

              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500"
              >
                FAQ
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <main id="home" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="bg-sky-500/10 text-sky-500 text-xs font-semibold px-4 py-1.5 rounded-full border border-sky-500/20 inline-block mb-5">
          🚀 Modern Web Developer
        </span>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 mb-6 leading-tight">
          Building Modern Web Applications
        </h2>

        <p
          className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Hello! I'm Toeurng Phak, a Computer Science student interested in
          Web Development and modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className={`font-semibold px-6 py-3 rounded-lg border transition ${
              darkMode
                ? 'border-slate-700 hover:border-sky-500'
                : 'border-slate-300 hover:border-sky-500'
            }`}
          >
            Contact Me
          </a>
        </div>

        {/* Email */}
        <div className="mt-8">
          <button
            onClick={handleCopyEmail}
            className={`px-4 py-2 rounded-lg text-sm border font-medium transition cursor-pointer ${
              darkMode
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-sky-500'
                : 'bg-white border-slate-300 text-slate-700 hover:border-sky-500'
            }`}
          >
            {copied
              ? '✅ Copied Email!'
              : '📋 Copy Email: your.email@example.com'}
          </button>
        </div>

        {/* ================= ABOUT ================= */}
        <section id="about" className="py-20">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>

          <div
            className={`max-w-3xl mx-auto border rounded-2xl p-8 ${
              darkMode
                ? 'bg-slate-800/50 border-slate-700'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <p
              className={`leading-8 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              I'm a Computer Science student who enjoys learning Web
              Development and building interactive applications. I am
              currently learning React, JavaScript, HTML, CSS, Tailwind CSS,
              Git, and other modern technologies.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              <div>
                <p className="text-2xl font-bold text-sky-500">2026</p>
                <p className="text-sm text-slate-400">Learning</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-sky-500">React</p>
                <p className="text-sm text-slate-400">Main Technology</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-sky-500">Web</p>
                <p className="text-sm text-slate-400">Main Interest</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="py-12 mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">
            Technologies I Use
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-xl text-sm font-medium border ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="py-12 mb-12">
          <h3 className="text-3xl font-bold mb-3">My Projects</h3>

          <p className="text-slate-400 mb-8">
            Some projects and systems I have worked on.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`text-left border rounded-2xl p-6 transition duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? 'bg-slate-800/70 border-slate-700 hover:border-sky-500'
                    : 'bg-white border-slate-200 shadow-sm hover:border-sky-500'
                }`}
              >
                <div className="text-4xl mb-4">{project.icon}</div>

                <h4 className="text-xl font-bold mb-3">
                  {project.name}
                </h4>

                <p
                  className={`text-sm leading-6 mb-5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {project.description}
                </p>

                <span className="text-sm text-sky-500 font-medium">
                  {project.tech}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COUNTER DEMO ================= */}
        <section id="demo" className="py-12 mb-12">
          <div
            className={`border rounded-2xl p-8 shadow-2xl max-w-md mx-auto w-full transition-colors ${
              darkMode
                ? 'bg-slate-800/80 border-slate-700'
                : 'bg-white border-slate-200 shadow-slate-200'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-1 ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              Interactive Counter Demo
            </h3>

            <p className="text-xs text-slate-400 mb-4">
              Auto-saved with LocalStorage
            </p>

            <p className="text-5xl font-bold text-sky-500 my-6">
              {count}
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg shadow transition active:scale-95 cursor-pointer"
              >
                Increment (+)
              </button>

              <button
                onClick={() => setCount(0)}
                className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-500 border border-rose-500/40 font-semibold px-5 py-2.5 rounded-lg transition active:scale-95 cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section
          id="faq"
          className={`py-12 border-t text-left max-w-2xl mx-auto ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 text-center ${
              darkMode ? 'text-slate-100' : 'text-slate-800'
            }`}
          >
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl p-4 transition-colors ${
                  darkMode
                    ? 'bg-slate-800/40 border-slate-700'
                    : 'bg-white border-slate-200'
                }`}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full text-left font-semibold flex justify-between items-center cursor-pointer"
                >
                  <span>{faq.q}</span>

                  <span>
                    {openFaq === index ? '➖' : '➕'}
                  </span>
                </button>

                {openFaq === index && (
                  <p
                    className={`mt-3 text-sm border-t pt-3 ${
                      darkMode
                        ? 'text-slate-400 border-slate-700'
                        : 'text-slate-600 border-slate-100'
                    }`}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className={`py-12 border-t ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <div
            className={`max-w-xl mx-auto border p-8 rounded-2xl text-left ${
              darkMode
                ? 'bg-slate-800/50 border-slate-700/60'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-2 text-center ${
                darkMode ? 'text-slate-100' : 'text-slate-800'
              }`}
            >
              Get In Touch
            </h3>

            <p
              className={`text-sm text-center mb-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Send a message to connect with me.
            </p>

            {submitted ? (
              <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 rounded-lg text-center font-medium">
                ✅ Thank you! Your message has been received.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    className={`block text-sm mb-1 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-sky-500 ${
                      darkMode
                        ? 'bg-slate-900 border-slate-700 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className={`block text-sm mb-1 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-sky-500 ${
                      darkMode
                        ? 'bg-slate-900 border-slate-700 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className={`block text-sm mb-1 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-sky-500 ${
                      darkMode
                        ? 'bg-slate-900 border-slate-700 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-3 rounded-lg shadow transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ================= SOCIAL LINKS ================= */}
        <section className="py-10">
          <h3 className="text-xl font-bold mb-5">Connect With Me</h3>

          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="#"
              className="px-5 py-2 rounded-lg border hover:border-sky-500 hover:text-sky-500 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-5 py-2 rounded-lg border hover:border-sky-500 hover:text-sky-500 transition"
            >
              Facebook
            </a>

            <a
              href="#"
              className="px-5 py-2 rounded-lg border hover:border-sky-500 hover:text-sky-500 transition"
            >
              Telegram
            </a>

            <a
              href="#"
              className="px-5 py-2 rounded-lg border hover:border-sky-500 hover:text-sky-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer
        className={`py-6 text-center text-sm border-t ${
          darkMode
            ? 'border-slate-800 text-slate-500'
            : 'border-slate-200 text-slate-600'
        }`}
      >
        <p>© 2026 Toeurng Phak. All rights reserved.</p>

        <p className="mt-2">
          Built with React, Vite & Tailwind CSS.
        </p>
      </footer>

      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="fixed bottom-6 right-6 bg-sky-500 hover:bg-sky-400 text-slate-950 w-12 h-12 rounded-full font-bold text-xl shadow-lg transition"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
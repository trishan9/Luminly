import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight, Code, BarChart, Search, Palette, Server, Lightbulb } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Revamped */}
      <section id="home" className="relative min-h-screen bg-gradient-hero text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.png')] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-navy to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Navigation */}
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <span className="text-yellow-400 text-3xl font-bold mr-2">
                <span className="inline-block transform rotate-45">X</span>
              </span>
              <span className="text-white text-xl font-bold tracking-wide">Luminly</span>
            </div>
            <div className="hidden md:flex space-x-10">
              <Link
                href="#home"
                className="text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                Home
              </Link>
              <Link
                href="#portfolio"
                className="text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-yellow-400 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-fadeIn">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                THE <span className="text-gradient">REVOLUTION</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-xl">
                Empowering businesses with seamless tech solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center bg-white text-navy font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative animate-fadeIn">
              <div className="relative w-full max-w-xl mx-auto">
                <Image
                  src="/images/laptop.png"
                  alt="Laptop with colorful lighting"
                  width={1200}
                  height={800}
                  className="object-contain"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
          <span className="text-white/50 text-xs mt-2">Scroll Down</span>
        </div>
      </section>

      {/* Services Section - Improved */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive tech solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-navy/5 p-4 rounded-lg inline-block mb-6">
                <Code className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600">
                Custom web applications and responsive websites built with the latest technologies to deliver
                exceptional user experiences.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-navy/5 p-4 rounded-lg inline-block mb-6">
                <BarChart className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
              <p className="text-gray-600">
                Strategic digital marketing campaigns that increase your online presence and drive measurable results
                for your business.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-navy/5 p-4 rounded-lg inline-block mb-6">
                <Search className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO</h3>
              <p className="text-gray-600">
                Search engine optimization strategies that improve your visibility online and help you reach more
                potential customers.
              </p>
            </div>

            {/* Service 4 */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-navy/5 p-4 rounded-lg inline-block mb-6">
                <Palette className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Graphics & Web Design</h3>
              <p className="text-gray-600">
                Creative design solutions that communicate your brand message effectively and create memorable visual
                experiences.
              </p>
            </div>

            {/* Service 5 */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-navy/5 p-4 rounded-lg inline-block mb-6">
                <Server className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Server Maintenance</h3>
              <p className="text-gray-600">
                Proactive server monitoring and maintenance to ensure your systems run smoothly and securely at all
                times.
              </p>
            </div>

            {/* Service 6 */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-navy/5 p-4 rounded-lg inline-block mb-6">
                <Lightbulb className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">IT Consulting</h3>
              <p className="text-gray-600">
                Expert IT consulting services to help you make informed technology decisions that align with your
                business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Improved */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about our mission and values</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl h-[400px] w-full overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] opacity-10 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="text-yellow-400 text-5xl font-bold mb-4">
                        <span className="inline-block transform rotate-45">X</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Luminly</h3>
                      <p className="text-gray-300">Established 2020</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-800 mb-6 text-lg">
                At Luminly, we believe in the power of technology to transform businesses and elevate experiences.
                Founded with a passion for innovation, we specialize in crafting custom IT solutions that drive growth,
                enhance efficiency, and empower digital transformation.
              </p>
              <p className="text-gray-800 mb-6 text-lg">
                Our team of tech enthusiasts, problem solvers, and creative thinkers is dedicated to delivering seamless
                solutions, from software development and cloud integration to cybersecurity and IT support. We blend
                technical expertise with a deep understanding of your needs, ensuring every solution is tailored for
                success.
              </p>
              <p className="text-gray-800 text-lg">
                Join us on a journey of innovation, where technology meets possibility. Let's build the future together.
              </p>
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-navy-light transition-colors"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Improved */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our recent projects and success stories</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Left column */}
            <div className="col-span-1 space-y-4">
              <div className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">E-commerce Platform</h3>
                    <p className="text-sm text-gray-200">Web Development</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">Brand Identity</h3>
                    <p className="text-sm text-gray-200">Graphics & Web Design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle column */}
            <div className="col-span-1 space-y-4">
              <div className="portfolio-item bg-gray-100 aspect-square rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">Mobile App</h3>
                    <p className="text-sm text-gray-200">App Development</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item bg-gray-100 aspect-square rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">SEO Campaign</h3>
                    <p className="text-sm text-gray-200">Digital Marketing</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item bg-gray-100 aspect-square rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">Cloud Migration</h3>
                    <p className="text-sm text-gray-200">Server Maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="col-span-1 space-y-4">
              <div className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">CRM System</h3>
                    <p className="text-sm text-gray-200">IT Consulting</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                    <p className="text-sm text-gray-200">Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section - Improved */}
      <section id="success-stories" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Success Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What our Clients Say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Alex Johnson</h3>
                  <p className="text-sm text-gray-500">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Luminly transformed our digital presence completely. Their team delivered a website that not only looks
                great but also performs exceptionally well. The SEO improvements have increased our organic traffic by
                150%."
              </p>
              <div className="mt-4 flex">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Sarah Williams</h3>
                  <p className="text-sm text-gray-500">Marketing Director, GrowthHub</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Working with Luminly on our digital marketing strategy has been a game-changer. Their data-driven
                approach and creative campaigns have helped us achieve a 200% ROI on our marketing spend."
              </p>
              <div className="mt-4 flex">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-sm text-gray-500">CTO, InnovateTech</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Luminly's IT consulting services helped us modernize our infrastructure and reduce operational costs by
                30%. Their team's expertise in cloud solutions was invaluable during our digital transformation."
              </p>
              <div className="mt-4 flex">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section - Improved */}
      <section id="contact" className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Contact Info */}
            <div className="w-full md:w-1/3 mb-12 md:mb-0">
              <h2 className="text-5xl font-bold mb-2">
                Contact Us <span className="text-yellow-400">.</span>
              </h2>
              <p className="mb-12 text-gray-300">Let's Talk About Your Project</p>

              <div className="border-l-4 border-yellow-400 pl-6 space-y-8">
                <div>
                  <p className="font-bold mb-2 text-gray-300">Visit Us :</p>
                  <p className="text-white">
                    Tej Bhawan, Uttar Dhoka Rd,
                    <br />
                    Kathmandu 44600
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-2 text-gray-300">Chat With Us :</p>
                  <p className="text-white">Luminly6@gmail.com</p>
                </div>

                <div>
                  <p className="font-bold mb-2 text-gray-300">Call Us :</p>
                  <p className="text-white">+977 9800000000</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full md:w-2/3">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl relative border border-white/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Improved */}
      <footer className="bg-navy-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Social */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-yellow-400 text-3xl font-bold mr-2">
                  <span className="inline-block transform rotate-45">X</span>
                </span>
                <span className="text-white text-xl font-bold">Luminly</span>
              </div>
              <p className="text-gray-400 mb-6">Empowering businesses with seamless tech solutions since 2020.</p>

              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-yellow-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-yellow-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-yellow-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-yellow-400 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-yellow-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Overview */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Services Overview</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Graphics & Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Server Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-yellow-400 mt-0.5" />
                  <span>Tej Bhawan, Uttar Dhoka Rd, Kathmandu 44600</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-yellow-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+977 9800000000</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-yellow-400"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Luminly6@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-yellow-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Mon-Fri, 9:00 AM - 5:00 PM</span>
                </li>
              </ul>

              <div className="mt-6 bg-navy/50 rounded-lg p-2 h-32">
                <div className="h-full w-full bg-gray-200 rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Luminly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

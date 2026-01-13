import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Drinks', 'Gallery', 'Reviews', 'Contact']

  const testimonials = [
    {
      quote: "A hidden gem in Cowling! The selection of local ales is fantastic, and the atmosphere is so welcoming. No loud music, just good conversation and great drinks.",
      author: "Sarah M.",
      source: "Local regular"
    },
    {
      quote: "Finally, a proper micropub in the area. The staff really know their beers and are always happy to recommend something new. The gin selection is impressive too!",
      author: "James T.",
      source: "CAMRA member"
    },
    {
      quote: "Love bringing my dog here - they made us feel so welcome. The cosy atmosphere by the fire on a winter evening is unbeatable. A real community hub.",
      author: "Michelle R.",
      source: "Dog walker"
    },
    {
      quote: "Beautiful conversion of the old building. Modern yet cosy, with proper Yorkshire ales. The visible beer store through the glass is a nice touch!",
      author: "David K.",
      source: "Ale enthusiast"
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <a href="#home" className="flex items-center">
              <img src="/images/logo.png" alt="The Hop & Vine" className="h-12 w-auto invert" />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8 text-base">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-stone-300 hover:text-sage-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Hamburger Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-stone-300 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-stone-300 transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-stone-300 transition-transform duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-4 text-stone-300 hover:text-sage-400 hover:bg-stone-800/50 rounded-lg transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(28, 25, 23, 0.7), rgba(28, 25, 23, 0.85)), url('/images/hero.jpg')" }}
      >
        <div className="text-center px-4 pt-16">
          <img src="/images/logo.png" alt="The Hop & Vine" className="mx-auto w-48 sm:w-64 md:w-80 mb-6 invert" />
          <p className="text-sage-400 uppercase tracking-[0.3em] text-sm sm:text-base mb-3">Micropub & Wine Bar</p>
          <p className="text-stone-300 text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Real ales, fine wines & good company in the heart of Cowling
          </p>
          <a
            href="#drinks"
            className="inline-block px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-lg transition-colors duration-200 text-lg"
          >
            View Our Drinks
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* About */}
        <section id="about" className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-800 mb-12">Welcome to The Hop & Vine</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-stone-600 text-lg leading-relaxed">
                Nestled in the heart of Cowling, The Hop & Vine is a cosy micropub and wine bar
                offering the perfect spot for a quiet drink by the fireplace or a lively gathering
                with friends. Converted from offices and a café in 2021-2022, we've created a
                welcoming space on two levels with the bar downstairs and a function room above.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                As proud supporters of LocAle, we champion local breweries and always have a
                fantastic selection of real ales on tap. Our beer store is visible through the
                glazed wall at the end of the bar, and we're always happy to talk you through
                what's pouring. Dogs are welcome, board games are available, and there's always
                a warm fire waiting.
              </p>
              <div className="rounded-xl overflow-hidden shadow-xl mt-8">
                <img src="/images/interior.jpg" alt="Inside The Hop & Vine" className="w-full h-auto" />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: '🍺', title: 'Real Ales', desc: 'Local Yorkshire breweries' },
                { icon: '🍷', title: 'Wine & Spirits', desc: 'Carefully selected range' },
                { icon: '🔥', title: 'Real Fire', desc: 'Cosy atmosphere' },
                { icon: '🐕', title: 'Dog Friendly', desc: 'Four-legged friends welcome' },
                { icon: '🎲', title: 'Board Games', desc: 'Dominoes & more' },
                { icon: '🎉', title: 'Function Room', desc: 'Available for hire' },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
                >
                  <span className="text-3xl block mb-2">{feature.icon}</span>
                  <h3 className="font-semibold text-stone-800 mb-1">{feature.title}</h3>
                  <p className="text-stone-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Drinks */}
      <section id="drinks" className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-sage-400 mb-12">Our Drinks</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Real Ales',
                intro: 'Proud LocAle supporters - always featuring Yorkshire breweries',
                items: [
                  { name: 'Dark Horse Hetton Pale Ale', price: '4.2%', desc: 'Session pale ale from Dark Horse Brewery' },
                  { name: 'Saltaire Blonde', price: '4.0%', desc: 'Refreshing session blonde ale' },
                  { name: 'Timothy Taylor Landlord', price: '4.3%', desc: 'Classic Yorkshire session bitter' },
                  { name: 'Guest Ales', price: 'Rotating', desc: 'Ask at the bar for today\'s selection' },
                ]
              },
              {
                title: 'Wines',
                intro: 'A carefully curated selection of wines',
                items: [
                  { name: 'Red Wines', price: 'Glass / Bottle', desc: 'Selection available - ask for our current list' },
                  { name: 'White Wines', price: 'Glass / Bottle', desc: 'Selection available - ask for our current list' },
                  { name: 'Rosé Wines', price: 'Glass / Bottle', desc: 'Selection available - ask for our current list' },
                  { name: 'Prosecco & Fizz', price: 'Glass / Bottle', desc: 'For celebrations big and small' },
                ]
              },
              {
                title: 'Spirits & Cocktails',
                intro: 'Premium spirits and handcrafted cocktails',
                items: [
                  { name: 'Gins', price: 'Various', desc: 'Selection of premium gins with tonics' },
                  { name: 'Whiskies', price: 'Various', desc: 'Single malts and blends' },
                  { name: 'Vodka, Rum & More', price: 'Various', desc: 'Full spirits selection available' },
                  { name: 'Cocktails', price: 'Various', desc: 'Classic and seasonal creations' },
                ]
              },
              {
                title: 'Soft & Hot Drinks',
                intro: 'Not drinking? No problem',
                items: [
                  { name: 'Tea', price: '', desc: 'A proper brew' },
                  { name: 'Coffee', price: '', desc: 'Freshly made' },
                  { name: 'Hot Chocolate', price: '', desc: 'Perfect for cold evenings' },
                  { name: 'Soft Drinks', price: '', desc: 'Full range available' },
                ]
              },
            ].map((category) => (
              <div key={category.title} className="bg-stone-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-sage-400 border-b-2 border-sage-600 pb-2 mb-2">
                  {category.title}
                </h3>
                <p className="text-stone-400 text-sm italic mb-4">{category.intro}</p>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="border-b border-stone-600/30 pb-3">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-stone-200">{item.name}</span>
                        <span className="text-sage-400 font-semibold">{item.price}</span>
                      </div>
                      <p className="text-stone-400 text-sm italic mt-1">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-sage-400 mb-12">Our Space</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:row-span-2 rounded-xl overflow-hidden group">
              <img
                src="/images/hero.jpg"
                alt="The Hop & Vine bar area"
                className="w-full h-full object-cover min-h-[300px] md:min-h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {['/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg'].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden group">
                <img
                  src={src}
                  alt={`The Hop & Vine ${i + 1}`}
                  className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-stone-400">
            Follow us on{' '}
            <a
              href="https://www.instagram.com/hopandvinecowling/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-400 hover:text-plum-300 font-semibold"
            >
              Instagram
            </a>{' '}
            for more photos and updates
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-sage-800 to-sage-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">What People Say</h2>
          <p className="text-center text-sage-300 mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our visitors have to say about The Hop & Vine
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-sage-600/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-gold-400">★</span>
                  ))}
                </div>
                <blockquote className="text-stone-200 text-lg mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-plum-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-sage-400 text-sm">{testimonial.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sage-300 mb-4">
              Rated <span className="text-white font-bold">5/5</span> for Food Hygiene by Craven Council
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/hopandvinecowling/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-plum-600 hover:bg-plum-700 text-white rounded-lg transition-colors"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063901756921"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-stone-700 hover:bg-stone-600 text-white rounded-lg transition-colors"
              >
                Like on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-800 mb-12">Find Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-sage-700 mb-2">Address</h3>
                <p className="text-stone-600">
                  The Hop & Vine<br />
                  111 Keighley Road<br />
                  Cowling<br />
                  BD22 0BE
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-700 mb-2">Opening Hours</h3>
                <p className="text-stone-600">
                  Monday - Tuesday: <span className="text-stone-400">Closed</span><br />
                  Wednesday - Thursday: 4pm - 11pm<br />
                  Friday: 3pm - 11pm<br />
                  Saturday: 2pm - 11pm<br />
                  Sunday: 2pm - 9:30pm
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-700 mb-2">Contact</h3>
                <p className="text-stone-600">
                  Email:{' '}
                  <a href="mailto:hopandvine02@gmail.com" className="text-plum-600 hover:text-plum-700">
                    hopandvine02@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-700 mb-2">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/hopandvinecowling/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063901756921"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.8!2d-2.0089!3d53.9326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be4c8a8a8a8a9%3A0x0!2s111%20Keighley%20Rd%2C%20Cowling%2C%20Keighley%20BD22%200BE!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Hop & Vine location map"
                className="w-full"
              />
              <div className="bg-stone-800 p-4 text-center">
                <p className="text-stone-400 text-sm mb-3">On the A6068 • On-street parking • Bus M4 stops nearby</p>
                <a
                  href="https://maps.app.goo.gl/FVdUn3TVDATmu72u5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-sage-600 hover:bg-sage-700 text-white text-sm rounded-lg transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-stone-900" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/images/logo.png" alt="The Hop & Vine" className="h-16 w-auto mx-auto mb-4 invert" />
          <p className="text-stone-400">
            &copy; {new Date().getFullYear()} The Hop & Vine, Cowling. All rights reserved.
          </p>
          <p className="text-sage-500 italic mt-1">Good beer, good wine, good times.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/hopandvinecowling/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-sage-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-stone-600">|</span>
            <a
              href="https://www.facebook.com/profile.php?id=100063901756921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-sage-400 transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="nav-brand">
          <img src="/images/logo.png" alt="The Hop & Vine" className="nav-logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#drinks">Drinks</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <img src="/images/logo.png" alt="The Hop & Vine" className="hero-logo" />
          <p className="tagline">Micropub & Wine Bar</p>
          <p className="subtitle">Real ales, fine wines & good company in the heart of Cowling</p>
          <a href="#drinks" className="cta-button">View Our Drinks</a>
        </div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>Welcome to The Hop & Vine</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Nestled in the heart of Cowling, The Hop & Vine is a cosy micropub and wine bar
                offering the perfect spot for a quiet drink by the fireplace or a lively gathering
                with friends. Converted from offices and a café in 2021-2022, we've created a
                welcoming space on two levels with the bar downstairs and a function room above.
              </p>
              <p>
                As proud supporters of LocAle, we champion local breweries and always have a
                fantastic selection of real ales on tap. Our beer store is visible through the
                glazed wall at the end of the bar, and we're always happy to talk you through
                what's pouring. Dogs are welcome, board games are available, and there's always
                a warm fire waiting.
              </p>
              <div className="about-image">
                <img src="/images/interior.jpg" alt="Inside The Hop & Vine" />
              </div>
            </div>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🍺</span>
                <h3>Real Ales</h3>
                <p>Local Yorkshire breweries</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🍷</span>
                <h3>Wine & Spirits</h3>
                <p>Carefully selected range</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🔥</span>
                <h3>Real Fire</h3>
                <p>Cosy atmosphere</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🐕</span>
                <h3>Dog Friendly</h3>
                <p>Four-legged friends welcome</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🎲</span>
                <h3>Board Games</h3>
                <p>Dominoes & more</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🎉</span>
                <h3>Function Room</h3>
                <p>Available for hire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="drinks" className="menu">
        <div className="container">
          <h2>Our Drinks</h2>
          <div className="menu-grid">
            <div className="menu-category">
              <h3>Real Ales</h3>
              <p className="category-intro">Proud LocAle supporters - always featuring Yorkshire breweries</p>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Dark Horse Hetton Pale Ale</span>
                  <span className="item-price">4.2%</span>
                  <span className="item-desc">Session pale ale from Dark Horse Brewery</span>
                </li>
                <li>
                  <span className="item-name">Saltaire Blonde</span>
                  <span className="item-price">4.0%</span>
                  <span className="item-desc">Refreshing session blonde ale</span>
                </li>
                <li>
                  <span className="item-name">Timothy Taylor Landlord</span>
                  <span className="item-price">4.3%</span>
                  <span className="item-desc">Classic Yorkshire session bitter</span>
                </li>
                <li>
                  <span className="item-name">Guest Ales</span>
                  <span className="item-price">Rotating</span>
                  <span className="item-desc">Ask at the bar for today's selection</span>
                </li>
              </ul>
            </div>
            <div className="menu-category">
              <h3>Wines</h3>
              <p className="category-intro">A carefully curated selection of wines</p>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Red Wines</span>
                  <span className="item-price">Glass / Bottle</span>
                  <span className="item-desc">Selection available - ask for our current list</span>
                </li>
                <li>
                  <span className="item-name">White Wines</span>
                  <span className="item-price">Glass / Bottle</span>
                  <span className="item-desc">Selection available - ask for our current list</span>
                </li>
                <li>
                  <span className="item-name">Rosé Wines</span>
                  <span className="item-price">Glass / Bottle</span>
                  <span className="item-desc">Selection available - ask for our current list</span>
                </li>
                <li>
                  <span className="item-name">Prosecco & Fizz</span>
                  <span className="item-price">Glass / Bottle</span>
                  <span className="item-desc">For celebrations big and small</span>
                </li>
              </ul>
            </div>
            <div className="menu-category">
              <h3>Spirits & Cocktails</h3>
              <p className="category-intro">Premium spirits and handcrafted cocktails</p>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Gins</span>
                  <span className="item-price">Various</span>
                  <span className="item-desc">Selection of premium gins with tonics</span>
                </li>
                <li>
                  <span className="item-name">Whiskies</span>
                  <span className="item-price">Various</span>
                  <span className="item-desc">Single malts and blends</span>
                </li>
                <li>
                  <span className="item-name">Vodka, Rum & More</span>
                  <span className="item-price">Various</span>
                  <span className="item-desc">Full spirits selection available</span>
                </li>
                <li>
                  <span className="item-name">Cocktails</span>
                  <span className="item-price">Various</span>
                  <span className="item-desc">Classic and seasonal creations</span>
                </li>
              </ul>
            </div>
            <div className="menu-category">
              <h3>Soft & Hot Drinks</h3>
              <p className="category-intro">Not drinking? No problem</p>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Tea</span>
                  <span className="item-price"></span>
                  <span className="item-desc">A proper brew</span>
                </li>
                <li>
                  <span className="item-name">Coffee</span>
                  <span className="item-price"></span>
                  <span className="item-desc">Freshly made</span>
                </li>
                <li>
                  <span className="item-name">Hot Chocolate</span>
                  <span className="item-price"></span>
                  <span className="item-desc">Perfect for cold evenings</span>
                </li>
                <li>
                  <span className="item-name">Soft Drinks</span>
                  <span className="item-price"></span>
                  <span className="item-desc">Full range available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Our Space</h2>
          <div className="gallery-grid">
            <div className="gallery-item gallery-item-large">
              <img src="/images/hero.jpg" alt="The Hop & Vine bar area" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-1.jpg" alt="Inside The Hop & Vine" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-2.jpg" alt="The Hop & Vine atmosphere" />
            </div>
            <div className="gallery-item">
              <img src="/images/gallery-3.jpg" alt="Drinks at The Hop & Vine" />
            </div>
          </div>
          <p className="gallery-cta">
            Follow us on{' '}
            <a href="https://www.instagram.com/hopandvinecowling/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{' '}
            for more photos and updates
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Find Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <h3>Address</h3>
                <p>The Hop & Vine<br />111 Keighley Road<br />Cowling<br />BD22 0BE</p>
              </div>
              <div className="info-item">
                <h3>Opening Hours</h3>
                <p>
                  Monday - Tuesday: Closed<br />
                  Wednesday - Thursday: 4pm - 11pm<br />
                  Friday: 3pm - 11pm<br />
                  Saturday: 2pm - 11pm<br />
                  Sunday: 2pm - 9:30pm
                </p>
              </div>
              <div className="info-item">
                <h3>Contact</h3>
                <p>
                  Email: <a href="mailto:hopandvine02@gmail.com">hopandvine02@gmail.com</a>
                </p>
              </div>
              <div className="info-item">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/hopandvinecowling/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100063901756921" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <div className="map-placeholder">
                <p>📍 111 Keighley Road, Cowling</p>
                <p>On the A6068 at the west end of the village</p>
                <p>On-street parking available</p>
                <p>Bus: Transdev Mainline M4 stops nearby</p>
                <a
                  href="https://maps.app.goo.gl/FVdUn3TVDATmu72u5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <img src="/images/logo.png" alt="The Hop & Vine" className="footer-logo" />
            <p>&copy; {new Date().getFullYear()} The Hop & Vine, Cowling. All rights reserved.</p>
            <p className="footer-tagline">Good beer, good wine, good times.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/hopandvinecowling/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <span className="separator">|</span>
              <a href="https://www.facebook.com/profile.php?id=100063901756921" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

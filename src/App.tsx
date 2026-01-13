import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">The Hop & Vine</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <h1>The Hop & Vine</h1>
          <p className="tagline">A village pub in the heart of Cowling</p>
          <p className="subtitle">Craft beers, fine wines & hearty food</p>
          <a href="#menu" className="cta-button">View Our Menu</a>
        </div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>Welcome to The Hop & Vine</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Nestled in the picturesque village of Cowling, The Hop & Vine has been a
                beloved gathering place for locals and visitors alike. Our cozy pub combines
                the warmth of traditional Yorkshire hospitality with a carefully curated
                selection of craft beers and wines.
              </p>
              <p>
                Whether you're looking for a quiet pint by the fire, a hearty meal with
                family, or a lively evening with friends, we've got you covered. Our kitchen
                serves up classic pub favourites made with locally sourced ingredients.
              </p>
            </div>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🍺</span>
                <h3>Craft Beers</h3>
                <p>Local and international craft selections</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🍷</span>
                <h3>Fine Wines</h3>
                <p>Carefully curated wine list</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🍽️</span>
                <h3>Pub Grub</h3>
                <p>Hearty dishes made fresh daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="container">
          <h2>Our Menu</h2>
          <div className="menu-grid">
            <div className="menu-category">
              <h3>Starters</h3>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Yorkshire Pudding Bites</span>
                  <span className="item-price">£6.50</span>
                  <span className="item-desc">With onion gravy</span>
                </li>
                <li>
                  <span className="item-name">Soup of the Day</span>
                  <span className="item-price">£5.50</span>
                  <span className="item-desc">Served with crusty bread</span>
                </li>
                <li>
                  <span className="item-name">Loaded Nachos</span>
                  <span className="item-price">£7.50</span>
                  <span className="item-desc">Cheese, jalapeños, salsa & sour cream</span>
                </li>
              </ul>
            </div>
            <div className="menu-category">
              <h3>Mains</h3>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Fish & Chips</span>
                  <span className="item-price">£14.50</span>
                  <span className="item-desc">Beer-battered cod, mushy peas, tartare sauce</span>
                </li>
                <li>
                  <span className="item-name">Steak & Ale Pie</span>
                  <span className="item-price">£13.50</span>
                  <span className="item-desc">With mash and seasonal vegetables</span>
                </li>
                <li>
                  <span className="item-name">Hop & Vine Burger</span>
                  <span className="item-price">£12.50</span>
                  <span className="item-desc">8oz beef, bacon, cheese, hand-cut chips</span>
                </li>
                <li>
                  <span className="item-name">Vegetable Curry</span>
                  <span className="item-price">£11.50</span>
                  <span className="item-desc">Served with rice and naan bread</span>
                </li>
              </ul>
            </div>
            <div className="menu-category">
              <h3>Sunday Roasts</h3>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Roast Beef</span>
                  <span className="item-price">£15.50</span>
                  <span className="item-desc">With all the trimmings</span>
                </li>
                <li>
                  <span className="item-name">Roast Chicken</span>
                  <span className="item-price">£14.50</span>
                  <span className="item-desc">With all the trimmings</span>
                </li>
                <li>
                  <span className="item-name">Nut Roast</span>
                  <span className="item-price">£13.50</span>
                  <span className="item-desc">Vegetarian option with all the trimmings</span>
                </li>
              </ul>
            </div>
            <div className="menu-category">
              <h3>Drinks</h3>
              <ul className="menu-items">
                <li>
                  <span className="item-name">Cask Ales</span>
                  <span className="item-price">from £4.20</span>
                  <span className="item-desc">Rotating selection of local brews</span>
                </li>
                <li>
                  <span className="item-name">Craft Lagers</span>
                  <span className="item-price">from £4.80</span>
                  <span className="item-desc">British and continental</span>
                </li>
                <li>
                  <span className="item-name">House Wine</span>
                  <span className="item-price">£4.50 / £18</span>
                  <span className="item-desc">Glass / Bottle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Find Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <h3>Address</h3>
                <p>The Hop & Vine<br />Main Street<br />Cowling, BD22 0NJ<br />North Yorkshire</p>
              </div>
              <div className="info-item">
                <h3>Opening Hours</h3>
                <p>
                  Monday - Thursday: 12pm - 11pm<br />
                  Friday - Saturday: 12pm - 12am<br />
                  Sunday: 12pm - 10:30pm
                </p>
              </div>
              <div className="info-item">
                <h3>Contact</h3>
                <p>
                  Tel: 01onal 635XXX<br />
                  Email: info@hopandvine-cowling.co.uk
                </p>
              </div>
            </div>
            <div className="contact-map">
              <div className="map-placeholder">
                <p>📍 Located in the heart of Cowling village</p>
                <p>Easy access from Skipton and Keighley</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} The Hop & Vine, Cowling. All rights reserved.</p>
          <p className="footer-tagline">Good beer, good wine, good times.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

// About page - Company information and mission
// Demonstrates: static content, component structure, semantic HTML

import Hero from '../components/Hero';

export default function About() {
  return (
    <main className="page about-page">
      <Hero
        title="About EuroShop"
        subtitle="Your trusted online shopping destination"
      />

      <div className="container">
        <section className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At EuroShop, our mission is to provide customers with the finest selection of
              technology products, exceptional customer service, and unbeatable prices. We believe
              that everyone deserves access to quality electronics at an affordable cost.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <ul className="features-list">
              <li>✅ Wide selection of premium products</li>
              <li>✅ Competitive pricing and regular discounts</li>
              <li>✅ Fast and reliable shipping</li>
              <li>✅ Exceptional customer support</li>
              <li>✅ Secure and safe checkout</li>
              <li>✅ 30-day money-back guarantee</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, EuroShop started as a small online store with a big vision: to
              revolutionize the way people shop for electronics online. Over the years, we've
              grown to serve millions of customers across Europe and beyond.
            </p>
            <p>
              Our success is built on three pillars: quality products, competitive prices, and
              outstanding customer service. We handpick every product in our catalog to ensure it
              meets our high standards.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              Our dedicated team of professionals is committed to making your shopping experience
              exceptional. From our product specialists to our customer service representatives,
              everyone at EuroShop is here to help you find exactly what you need.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>1M+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Products</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Satisfaction Guarantee</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


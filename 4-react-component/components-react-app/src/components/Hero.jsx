// Hero component - Large banner section showcasing a promotion
// Props: title (banner title), subtitle (banner subtitle), buttonText (CTA button text)

import Button from './Button';

export default function Hero({ title = 'Welcome to EuroShop', subtitle = 'Find amazing products at great prices', buttonText = 'Shop Now' }) {
  const handleShopClick = () => {
    // You can add functionality here, like scrolling to products
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <Button text={buttonText} onClick={handleShopClick} style="btn-hero" />
      </div>
    </section>
  );
}

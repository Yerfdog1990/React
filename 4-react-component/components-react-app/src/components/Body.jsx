// Body component - Displays a grid of products
// Props: products (array of product objects), onAddToCart (callback function)

import Button from './Button';

export default function Body({ products = [], onAddToCart }) {
  // Sample products if none are provided
  const defaultProducts = [
    { id: 1, name: 'Laptop', price: '$999', category: 'Electronics', image: '💻' },
    { id: 2, name: 'Smartphone', price: '$699', category: 'Electronics', image: '📱' },
    { id: 3, name: 'Headphones', price: '$199', category: 'Audio', image: '🎧' },
    { id: 4, name: 'Smartwatch', price: '$299', category: 'Wearables', image: '⌚' },
    { id: 5, name: 'Camera', price: '$1099', category: 'Photography', image: '📷' },
    { id: 6, name: 'Tablet', price: '$499', category: 'Electronics', image: '📱' },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="body">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {displayProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">{product.price}</p>
              <Button
                text="Add to Cart"
                onClick={() => handleAddToCart(product)}
                style="btn-add-to-cart"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

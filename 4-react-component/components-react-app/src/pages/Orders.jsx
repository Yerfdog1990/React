// Orders page - Displays user's orders and shopping cart
// Demonstrates: conditional rendering, state management, list rendering

import { useState } from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';

export default function Orders() {
  // Example orders data
  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2026-06-10',
      status: 'Delivered',
      total: '$999',
      items: 'Laptop',
      statusColor: 'status-delivered',
    },
    {
      id: 'ORD-002',
      date: '2026-06-05',
      status: 'In Transit',
      total: '$699',
      items: 'Smartphone',
      statusColor: 'status-transit',
    },
    {
      id: 'ORD-003',
      date: '2026-05-28',
      status: 'Delivered',
      total: '$199',
      items: 'Headphones',
      statusColor: 'status-delivered',
    },
  ]);

  const [cart] = useState([
    { id: 1, name: 'Smartwatch', price: '$299', quantity: 1 },
    { id: 2, name: 'Tablet', price: '$499', quantity: 1 },
  ]);

  const cartTotal = '$798';

  const handleTrackOrder = (orderId) => {
    alert(`Tracking Order ${orderId}. Check your email for tracking details.`);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout. Thank you for shopping at EuroShop!');
  };

  return (
    <main className="page orders-page">
      <Hero
        title="Your Orders & Cart"
        subtitle="View your order history and shopping cart"
      />

      <div className="container">
        <div className="orders-content">
          {/* Orders Section */}
          <section className="orders-section">
            <h2>Order History</h2>

            {orders.length > 0 ? (
              <div className="orders-list">
                {orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div className="order-id-date">
                        <h3>{order.id}</h3>
                        <p className="order-date">{order.date}</p>
                      </div>
                      <div className={`order-status ${order.statusColor}`}>
                        {order.status}
                      </div>
                    </div>

                    <div className="order-details">
                      <p><strong>Items:</strong> {order.items}</p>
                      <p><strong>Total:</strong> {order.total}</p>
                    </div>

                    <Button
                      text="Track Order"
                      onClick={() => handleTrackOrder(order.id)}
                      style="btn-secondary"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-orders">No orders found. Start shopping today!</p>
            )}
          </section>

          {/* Cart Section */}
          <section className="cart-section">
            <h2>Shopping Cart</h2>

            {cart.length > 0 ? (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        <p>{item.price}</p>
                      </div>
                      <button className="remove-btn">×</button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>{cartTotal}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping:</span>
                    <span>$0 (Free)</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax:</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="summary-row total">
                    <span><strong>Total:</strong></span>
                    <span><strong>{cartTotal}</strong></span>
                  </div>
                </div>

                <Button
                  text="Proceed to Checkout"
                  onClick={handleCheckout}
                  style="btn-primary"
                />
              </>
            ) : (
              <p className="empty-cart">Your cart is empty. <a href="/">Continue shopping</a></p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}


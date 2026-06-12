# Quick Reference - React Patterns & Code Examples

## 📌 Common React Patterns Used in EuroShop

---

## 1️⃣ State Management (useState)

### Basic State
```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### State with Objects (Used in SignUp page)
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
});

// Update single field
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

### State with Arrays (Used in Home/Orders page)
```javascript
const [cart, setCart] = useState([]);

// Add item
setCart([...cart, newItem]);

// Remove item
setCart(cart.filter(item => item.id !== itemId));

// Update item
setCart(cart.map(item => 
  item.id === itemId ? {...item, quantity: qty} : item
));
```

### Lazy Initialization (Used in App.jsx)
```javascript
// This runs only ONCE on first render
const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem('isLoggedIn') === 'true';
});
```

---

## 2️⃣ Props - Passing Data from Parent to Child

### Simple Props
```javascript
// Parent
<Button text="Click Me" onClick={handleClick} />

// Child
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
```

### Props with Default Values
```javascript
function Hero({ 
  title = 'Welcome', 
  subtitle = 'Default subtitle' 
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
```

### Destructuring Props
```javascript
// These do the same thing:

// Option 1: Manual destructuring
function Card(props) {
  const { name, price } = props;
  return <div>{name}: {price}</div>;
}

// Option 2: Destructure in function parameters (preferred)
function Card({ name, price }) {
  return <div>{name}: {price}</div>;
}
```

---

## 3️⃣ Event Handling

### Click Events
```javascript
// Direct function
<button onClick={() => handleClick()}>Click</button>

// With parameter
<button onClick={() => setCount(count + 1)}>+</button>

// With event object
<button onClick={(e) => handleClick(e.target.value)}>Click</button>
```

### Form Input Events (Used in Login/SignUp pages)
```javascript
// Input field
<input 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter email"
/>

// Checkbox
<input
  type="checkbox"
  checked={agreeTerms}
  onChange={(e) => setAgreeTerms(e.target.checked)}
/>

// Select/Dropdown
<select onChange={(e) => setCategory(e.target.value)}>
  <option>Electronics</option>
  <option>Books</option>
</select>
```

### Form Submission
```javascript
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  // Process form data
};

<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

---

## 4️⃣ Conditional Rendering

### if/else
```javascript
if (isLoggedIn) {
  return <Dashboard />;
} else {
  return <LoginForm />;
}
```

### Ternary Operator (Used throughout app)
```javascript
{isLoggedIn ? <Dashboard /> : <LoginForm />}

{cart.length > 0 ? (
  <CartSummary />
) : (
  <p>Your cart is empty</p>
)}
```

### Logical AND (&&)
```javascript
{isLoggedIn && <Dashboard />}
{errors.email && <span className="error">{errors.email}</span>}
```

### Switch Statements
```javascript
switch(status) {
  case 'loading':
    return <Spinner />;
  case 'error':
    return <Error />;
  case 'success':
    return <Success />;
  default:
    return null;
}
```

---

## 5️⃣ List Rendering with map()

### Basic List
```javascript
// Used in Body.jsx for products
const products = [
  { id: 1, name: 'Laptop', price: '$999' },
  { id: 2, name: 'Mouse', price: '$29' }
];

{products.map((product) => (
  <ProductCard key={product.id} {...product} />
))}
```

### Conditional List Rendering
```javascript
// Used in Orders.jsx
{orders.length > 0 ? (
  orders.map(order => <OrderCard key={order.id} order={order} />)
) : (
  <p>No orders yet</p>
)}
```

### Important: Always use 'key' prop!
```javascript
// ❌ WRONG - Don't use index as key
{items.map((item, index) => <Item key={index} {...item} />)}

// ✅ CORRECT - Use unique ID
{items.map((item) => <Item key={item.id} {...item} />)}
```

---

## 6️⃣ Callbacks - Child Notifying Parent

### Simple Callback
```javascript
// Parent
<Button onClick={handleClick} text="Add to Cart" />

// Child
function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

// Usage
const handleClick = (product) => {
  console.log('User clicked:', product);
};
```

### Callback with Parameter (Used in Body/Orders)
```javascript
// Parent passes callback
<Body onAddToCart={handleAddToCart} />

// Child calls callback with data
const handleAddToCart = (product) => {
  setCart([...cart, product]);
};

// In child component
<button onClick={() => onAddToCart(product)}>Add</button>
```

---

## 7️⃣ Form Validation

### Basic Validation (Used in Login.jsx)
```javascript
const validateForm = () => {
  const errors = {};
  
  if (!email.includes('@')) {
    errors.email = 'Invalid email';
  }
  
  if (password.length < 6) {
    errors.password = 'Password too short';
  }
  
  return errors;
};
```

### Error State Management (Used in SignUp.jsx)
```javascript
const [errors, setErrors] = useState({});

<input onChange={(e) => {
  setEmail(e.target.value);
  if (errors.email) {
    setErrors(prev => ({ ...prev, email: '' }));
  }
}} />

{errors.email && <span className="error">{errors.email}</span>}
```

---

## 8️⃣ localStorage - Persist Data

### Save to localStorage
```javascript
// Used in Login/SignUp pages
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('userEmail', email);
```

### Get from localStorage
```javascript
// Used in App.jsx
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
```

### Remove from localStorage
```javascript
// Used in logout
localStorage.removeItem('isLoggedIn');
localStorage.removeItem('userEmail');
```

---

## 9️⃣ React Router - Navigation

### Setup (App.jsx)
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Home />} /> {/* 404 fallback */}
  </Routes>
</BrowserRouter>
```

### Link Component (Header.jsx)
```javascript
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/login">Login</Link>
```

### useNavigate Hook (Login.jsx)
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/'); // Go to home
navigate('/orders'); // Go to orders
```

---

## 🔟 Component Composition

### Passing Components as Props
```javascript
// Parent passes component
<Layout header={<Header />} main={<Main />} footer={<Footer />} />

// Layout component
function Layout({ header, main, footer }) {
  return (
    <div className="app">
      {header}
      {main}
      {footer}
    </div>
  );
}
```

### Composing Multiple Components (Home.jsx)
```javascript
function Home() {
  return (
    <>
      <Hero />
      <div className="home-content">
        <SideBar />
        <Body />
      </div>
    </>
  );
}
```

---

## 1️⃣1️⃣ Array Destructuring

```javascript
// Simple destructuring
const [first, second] = [1, 2];
console.log(first); // 1

// Skipping elements
const [a, , c] = [1, 2, 3];
console.log(c); // 3

// React hooks - similar pattern
const [state, setState] = useState(initial);
```

---

## 1️⃣2️⃣ Object Destructuring

```javascript
const user = { name: 'John', email: 'john@example.com' };

// Extract properties
const { name, email } = user;

// Rename properties
const { name: userName } = user;

// Default values
const { role = 'user' } = user;

// Rest operator - collect remaining
const { name, ...rest } = user;
// rest = { email: 'john@example.com' }
```

---

## 1️⃣3️⃣ Spread Operator (...)

### For Objects (State updates)
```javascript
// Copy object and update
const newUser = { ...user, name: 'Jane' };

// Merge objects
const combined = { ...user, ...address };
```

### For Arrays
```javascript
const original = [1, 2, 3];

// Copy array
const copy = [...original];

// Combine arrays
const combined = [...original, ...newArray];

// Add to array
const added = [...cart, newProduct];
```

---

## 1️⃣4️⃣ Accessing Nested Properties

```javascript
// Object
const user = { profile: { name: 'John' } };
const name = user.profile.name; // 'John'

// With optional chaining (?.）
const name = user?.profile?.name; // 'John' or undefined

// Array
const products = [{ name: 'Laptop' }];
const firstProduct = products[0].name; // 'Laptop'
```

---

## 1️⃣5️⃣ Shorthand Syntax

```javascript
// Property shorthand
const name = 'John';
const age = 30;
const user = { name, age }; // { name: 'John', age: 30 }

// Method shorthand
const obj = {
  greet() {
    console.log('Hello');
  }
};

// Arrow function shorthand
const add = (a, b) => a + b;
```

---

## Common Mistakes to Avoid

```javascript
// ❌ Don't mutate state directly
state.name = 'John'; // Wrong!

// ✅ Create new object instead
setState({ ...state, name: 'John' }); // Correct!

// ❌ Don't forget 'key' in lists
list.map(item => <Item />); // Wrong!

// ✅ Always use unique keys
list.map(item => <Item key={item.id} />); // Correct!

// ❌ Don't use array index as key
list.map((item, idx) => <Item key={idx} />); // Wrong!

// ❌ Don't call functions on render
onClick={handleClick()} // Wrong - calls immediately

// ✅ Pass function reference or arrow function
onClick={handleClick} // Correct
onClick={() => handleClick()} // Also correct
```

---

## 🎯 Where These Patterns Are Used

| Pattern | Location |
|---------|----------|
| useState | Login, SignUp, Home, Orders, Contact |
| Props | All components |
| Events | Forms, Buttons, Inputs |
| Conditional | Header, Orders, About, Home |
| map() | Body, Orders, SideBar |
| Callbacks | Body, SideBar, Header |
| Validation | Login, SignUp, Contact |
| localStorage | App, Login, SignUp |
| React Router | App, Header |
| Spread Operator | Form updates, State modifications |
| Destructuring | All components |

---

Good luck with your React learning journey! 🚀


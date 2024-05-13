import React, { useState } from "react";
import gamePadImg from "../resources/gamePad.svg";
import lcdImg from "../resources/LCD.svg";

function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      image: lcdImg,
      price: 650,
      quantity: 1,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      image: gamePadImg,
      price: 550,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, amount) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const styles = {
    cartContainer: {
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '50px 20px',
    },
    cartHeader: {
      fontWeight: 'bold',
      padding: '10px 0',
      borderBottom: '1px solid #ccc',
      
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #eee',
    },
    cartItemInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    img: {
      marginRight: '10px',
    },
    button: {
      padding: '5px 10px',
      margin: '0 5px',
      backgroundColor: '#db4444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
    },
    totalContainer: {
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'flex-end',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
      {items.map(item => (
        <div key={item.id} style={styles.cartItem}>
          <div style={styles.cartItemInfo}>
            <img src={item.image} alt={item.name} style={{ height: '50px', width: '50px' }} />
            <span>{item.name}</span>
          </div>
          <div>${item.price}</div>
          <div>
            <button style={styles.button} onClick={() => updateQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button style={styles.button} onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
          <div>${item.price * item.quantity}</div>
        </div>
      ))}
      <div style={styles.totalContainer}>
        Total: ${calculateTotal()}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button style={styles.button}>Continue Shopping</button>
        <button style={styles.button}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;

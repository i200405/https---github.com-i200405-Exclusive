import React from 'react';
import mainImg from '../resources/main.jpeg';
import img1 from '../resources/i1.jpeg';
import img2 from '../resources/i2.jpeg';
import img3 from '../resources/i3.jpeg';
import keyboardImg from '../resources/keyboard.jpeg';
import monitorImg from '../resources/monitor.jpeg';
import mouseImg from '../resources/mouse.jpeg';
import coolerImg from '../resources/cooler.jpeg';

function ProductPage() {
  const relatedItems = [
    { id: 1, image: keyboardImg, title: 'Gaming Keyboard', price: '$150' },
    { id: 2, image: monitorImg, title: 'IPS LCD Gaming Monitor', price: '$1400' },
    { id: 3, image: mouseImg, title: 'Gaming Mouse', price: '$130' },
    { id: 4, image: coolerImg, title: 'RGB CPU Cooler', price: '$400' },
  ];

  const styles = {
    container: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    header: {
      color: '#db4444', // Primary color for headers
    },
    button: {
      backgroundColor: '#db4444', // Primary button color
      borderColor: '#db4444',
      color: 'white',
    },
    deliveryBox: {
      display: 'flex',
      alignItems: 'center',
      background: '#f8f9fa',
      padding: '15px',
      borderRadius: '5px',
    },
    imageGallery: {
      display: 'flex',
      justifyContent: 'center',
      margin: '15px 0',
    },
    card: {
      marginBottom: '20px',
    },
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <img src={mainImg} className="img-fluid mb-2" alt="Havic HV G-92 Gamepad" style={{ maxWidth: '80%' }} />
          <div style={styles.imageGallery}>
            {[img1, img2, img3].map((img, index) => (
              <img key={index} src={img} className="img-fluid mr-2" alt="Havic HV G-92 Gamepad Variant" style={{ width: '20%' }} />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h2 style={styles.header}>Havic HV G-92 Gamepad</h2>
          <h3>$192.00</h3>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal. Pressure sensitive.
          </p>
          <h4>Colours:</h4>
          <div className="colors d-flex mb-3">
            {['red', 'blue', 'green'].map(color => (
              <div key={color} className="color-option mr-2" style={{ backgroundColor: color, width: '40px', height: '40px', borderRadius: '50%' }}></div>
            ))}
          </div>
          <h4>Size:</h4>
          <select className="form-control w-50 mb-3">
            {['XS', 'S', 'M', 'L', 'XL'].map(size => <option key={size}>{size}</option>)}
          </select>
          <button className="btn btn-primary mb-3" style={styles.button}>Buy Now</button>
          <div style={styles.deliveryBox}>
            <i className="fas fa-truck mr-2"></i>
            <div>
              <p className="mb-0">Free Delivery</p>
              <small>Enter your postal code for Delivery Availability</small>
            </div>
          </div>
          <div style={styles.deliveryBox}>
            <i className="fas fa-undo-alt mr-2"></i>
            <div>
              <p className="mb-0">Return Delivery</p>
              <small>Free 30 Days Delivery Returns. Details</small>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h3>Related Items</h3>
        </div>
        {relatedItems.map(item => (
          <div key={item.id} className="col-md-3">
            <div className="card" style={styles.card}>
              <img src={item.image} className="card-img-top" alt={`Related Item ${item.id}`} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}</p>
                <a href="#" className="btn btn-primary" style={styles.button}>View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

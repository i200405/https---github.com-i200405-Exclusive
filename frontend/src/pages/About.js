import React from 'react';
import ourteam from '../resources/ourteam.webp'

function AboutPage() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '20px auto',
      lineHeight: '1.6',
    },
    header: {
      color: '#db4444',
      marginBottom: '20px',
    },
    content: {
      fontSize: '16px',
      color: '#333',
      marginBottom: '10px',
    },
    strong: {
      color: '#db4444',
    },
    teamPhoto: {
      width: '100%',
      maxHeight: '300px',
      objectFit: 'cover',
      borderRadius: '4px',
    },
    section: {
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <section style={styles.section}>
        <p style={styles.content}>
          At <strong style={styles.strong}>Exclusive</strong>, we are committed to delivering excellence in everything we do. Our team believes that the products we sell are not just items, but a part of the lifestyle that our customers desire. We ensure that our products are the best in the market and that every customer experience is exceptional.
        </p>
        <img src= {ourteam} alt="Our Team" style={styles.teamPhoto} />
      </section>
      <section style={styles.section}>
        <h2 style={styles.header}>Our Vision</h2>
        <p style={styles.content}>
          Our vision is to be the leading provider in premium lifestyle products, empowering our customers to achieve their personal and professional goals. We aim to inspire a connection with our brands that goes beyond the product, building a loyal customer community through innovation and sustainability.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.header}>Why Choose Us?</h2>
        <p style={styles.content}>
          Choosing <strong style={styles.strong}>Exclusive</strong> means opting for a quality that you can trust. We provide:
          <ul>
            <li>Top-quality products with the latest technology.</li>
            <li>Customer service that listens and responds.</li>
            <li>An ethos of sustainability and innovation.</li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default AboutPage;

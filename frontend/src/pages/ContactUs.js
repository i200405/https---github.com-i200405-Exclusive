import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },
    section: {
      backgroundColor: "#fff",
      padding: "25px",
      margin: "20px 0",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
    },
    header: {
      marginBottom: "20px",
      color: "#db4444",
      fontSize: "1.2rem",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ced4da",
      borderRadius: "4px",
      transition: "border-color 0.3s",
    },
    textArea: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ced4da",
      borderRadius: "4px",
      transition: "border-color 0.3s",
    },
    button: {
      backgroundColor: "#db4444",
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: "10px 15px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    }
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <div style={styles.section}>
            <h3 style={styles.header}><i className="fas fa-phone-alt"></i> Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div style={styles.section}>
            <h3 style={styles.header}><i className="fas fa-envelope"></i> Write To Us</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div style={styles.section}>
              <div className="form-group">
                <input type="text" style={styles.input} id="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="email" style={styles.input} id="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" style={styles.input} id="phone" placeholder="Your Phone *" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <textarea style={styles.textArea} id="message" rows="3" placeholder="Message *" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" style={styles.button}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

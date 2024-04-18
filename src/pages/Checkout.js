import React from "react";
import gamePadImg from "../resources/gamePad.svg";
import lcdImg from "../resources/LCD.svg";
import bKashImg from "../resources/bKash.svg";
import visaImg from "../resources/visa.svg";
import masterCardImg from "../resources/masterCard.svg";
import hindiCardImg from "../resources/hindiCard.svg";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const styles = {
  pageContent: {
    display: "flex",
    justifyContent: "space-around",
    margin: "50px 0",
    marginLeft: "150px",
  },
  billingCard: {
    width: "40%", // Increased width for better layout
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    margin: "5px 0 15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#333",
  },
  orderContainer: {
    width: "35%", // Adjusted for layout consistency
    height: "50%",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
  },
  orderItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  totalContainer: {
    borderTop: "2px solid #eee",
    borderBottom: "2px solid #eee",
    padding: "15px 0",
  },
};

function BillingDetails() {
  return (
    <div style={styles.billingCard}>
      <h3 style={{ color: "#db4444", marginBottom: "20px" }}>
        Billing Details
      </h3>
      <form>
        {[
          "First Name",
          "Last Name",
          "Email Address",
          "Street Address",
          "City",
          "Postal Code",
          "Country",
        ].map((field) => (
          <div style={styles.formGroup} key={field}>
            <label style={styles.label}>{field}</label>
            <input
              type={field === "Email Address" ? "email" : "text"}
              style={styles.input}
            />
          </div>
        ))}
      </form>
    </div>
  );
}

function OrderSummary() {
  return (
    <div style={styles.orderContainer}>
      <div style={styles.orderItem}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={gamePadImg} alt="Gamepad" height="55" width="50" />
          <span style={{ marginLeft: "10px" }}>H1 Gamepad</span>
        </div>
        <span>$650</span>
      </div>

      {/* Other order items */}
      <div style={styles.totalContainer}>
        <div style={styles.orderItem}>
          <span>SubTotal:</span>
          <span>$1750</span>
        </div>
        <div style={styles.orderItem}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div style={styles.orderItem}>
          <span>Total:</span>
          <span>$1750</span>
        </div>
      </div>
    </div>
  );
}

function CheckoutPage() {
  return (
    <div>
      <div style={styles.pageContent}>
        <BillingDetails />
        <OrderSummary />
      </div>
    </div>
  );
}

export default CheckoutPage;

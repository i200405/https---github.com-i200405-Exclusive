import React, { useState } from "react";

function EditProfile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // States to handle hover effects
  const [isHoverPrimary, setIsHoverPrimary] = useState(false);
  const [isHoverSecondary, setIsHoverSecondary] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  const handleCancel = () => {
    setProfile({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const styles = {
    container: {
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },
    formContainer: {
      background: "#fff",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      width: "auto",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    header: {
      marginBottom: "20px",
      color: "#333",
    },
    button: {
      primary: {
        backgroundColor: "#db4444",
        borderColor: "#db4444",
        color: "#fff",
        marginRight: "10px",
        borderRadius: "5px",
        padding: ".375rem .75rem",
        fontSize: "1rem",
        lineHeight: 1.5,
      },
      secondary: {
        backgroundColor: "transparent",
        borderColor: "#ffffff",
        color: "#6c757d",
        borderRadius: "5px",
        padding: ".375rem .75rem",
        fontSize: "1rem",
        lineHeight: 1.5,
      },
    },
    input: {
      width: "100%",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      marginBottom: "15px",
      padding: "12px",
    },
    label: {
      fontWeight: "bold",
      display: "block",
      marginBottom: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Edit Your Profile</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(profile).map((key) => (
            <div key={key}>
              <label style={styles.label} htmlFor={key}>
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type={
                  key.includes("Password")
                    ? "password"
                    : key === "email"
                    ? "email"
                    : "text"
                }
                id={key}
                value={profile[key]}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          ))}
          <div>
            <button
              type="submit"
              style={
                isHoverPrimary
                  ? {
                      ...styles.button.primary,
                      backgroundColor: "#852828", // Darken button color on hover
                    }
                  : styles.button.primary
              }
              onMouseEnter={() => setIsHoverPrimary(true)}
              onMouseLeave={() => setIsHoverPrimary(false)}
            >
              Save Changes
            </button>
            <button
              type="button"
              style={
                isHoverSecondary
                  ? {
                      ...styles.button.secondary,
                      borderColor: "#cccccc", // Change border color on hover
                      color: "#999", // Lighten text color on hover
                    }
                  : styles.button.secondary
              }
              onClick={handleCancel}
              onMouseEnter={() => setIsHoverSecondary(true)}
              onMouseLeave={() => setIsHoverSecondary(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;

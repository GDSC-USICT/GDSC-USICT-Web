import React from 'react'
import styles from "./css/navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
            <img style={{height: "100%"}}src="/Images/logo.png" alt="GDSC USICT Logo" />
            </div>
        <div className={styles.navbarLinks}>
            <div className={styles.navbarLink}>Home</div>
            <div className={styles.navbarLink}>About</div>
            <div className={styles.navbarLink}>Events</div>
            <div className={styles.navbarLink}>Contact Us</div>
            </div>        
        </div>
    )
}

export default Navbar

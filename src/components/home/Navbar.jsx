import React from 'react'
import styles from "./css/navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
            <img style={{height: "100%"}}src="/Images/logo.png" alt="GDSC USICT Logo" />
            </div>
        </div>
    )
}

export default Navbar

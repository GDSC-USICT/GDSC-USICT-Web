import React from 'react'
import { Link } from "react-router-dom";
import styles from "./css/navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
            <img style={{height: "100%"}}src="/Images/logo.png" alt="GDSC USICT Logo" />
            </div>
        <div className={styles.navbarLinks}>
            <div className={styles.navbarLink}><Link to="../" >Home</Link></div>
            <div className={styles.navbarLink}><Link to="../Aboutus" >About</Link></div>
            <div className={styles.navbarLink}><Link to="../Events" >Events</Link></div>
            <div className={styles.navbarLink}><Link to="../Team" >Team</Link></div>
            <div className={styles.navbarLink}><Link to="../Projects" >Projects</Link></div>
            <div className={styles.navbarLink}><Link to="../" >Contact Us</Link></div>
            {/* <div className={styles.navbarLink}>Contact Us</div> */}
            </div>        
        </div>
    )
}

export default Navbar

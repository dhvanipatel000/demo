import { Component } from "react";
import styles from "./Navbar.module.css";

class Navbar extends Component{
    render(){
        return(
<header className={styles.header}>
    <a href="#" className={styles.logo}>Cinemagic </a>
    <nav className={styles.navbar}>
        <div id="nav-close"></div>
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Reviews</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <a href="#">Logout</a>
    </nav>
</header>
        )
    }
}


export default Navbar;
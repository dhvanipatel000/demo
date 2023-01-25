import { Component } from "react";
import styles from "./Homepage.module.css";


class Homepage extends Component{
    render(){
        return(
           <div className={styles.container}>
            <h2>Yeh Jawani Hai Deewani</h2>
            <p>A story of the exhilarating and terrifying journey of four characters as they navigate through their youth; from their carefree laughter as they set off on a holiday together in their college days, until their bittersweet tears as they watch the first of their bunch get married.</p>
            <button className={styles.btn}>Book Now</button>
            </div>

        )
    }
}


export default Homepage;
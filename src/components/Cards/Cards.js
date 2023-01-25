import React, { Component } from 'react'
import styles from "./Cards.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Cards extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.griditem}>
          <div className={styles.card}>
            <img className={styles.cardimg} src="c1.jpg"/>
            <div className={styles.cardcontent}>
              <h1 className={styles.cardheader}>Ek Villian</h1>
              <p className={styles.cardtext}>Genre: Romantic</p>
              <p className={styles.cardtext}>This is my fav</p>
              <button className={styles.cardbtn}>View More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.card}>
            <img className={styles.cardimg} src="c1.jpg"/>
            <div className={styles.cardcontent}>
              <h1 className={styles.cardheader}>Ek Villian</h1>
              <p className={styles.cardtext}>Genre: Romantic</p>
              <p className={styles.cardtext}>This is my fav</p>
              <button className={styles.cardbtn}>View More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.card}>
            <img className={styles.cardimg} src="c1.jpg"/>
            <div className={styles.cardcontent}>
              <h1 className={styles.cardheader}>Ek Villian</h1>
              <p className={styles.cardtext}>Genre: Romantic</p>
              <p className={styles.cardtext}>This is my fav</p>
              <button className={styles.cardbtn}>View More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.card}>
            <img className={styles.cardimg} src="c2.jpg"/>
            <div className={styles.cardcontent}>
              <h1 className={styles.cardheader}>All the Bright Places</h1>
              <p className={styles.cardtext}>this is my fav</p>
              <button className={styles.cardbtn}>View More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.card}>
            <img className={styles.cardimg} src="c3.jpg"/>
            <div className={styles.cardcontent}>
              <h1 className={styles.cardheader}>All the Bright Places</h1>
              <p className={styles.cardtext}>this is my fav</p>
              <button className={styles.cardbtn}>View More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        <div className={styles.griditem}>
          <div className={styles.card}>
            <img className={styles.cardimg} src="c4.jpg"/>
            <div className={styles.cardcontent}>
              <h1 className={styles.cardheader}>All the Bright Places</h1>
              <p className={styles.cardtext}>this is my fav</p>
              <button className={styles.cardbtn}>View More<span>&rarr;</span></button>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Cards;

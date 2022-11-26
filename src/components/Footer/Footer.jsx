import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pags </span>
          <span> Stores</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, harum? Modi labore aut adipisci quos officiis quod ipsum at ad nulla. Esse eligendi cupiditate, repellendus amet minus quos aspernatur, in quidem</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, harum? Modi labore aut adipisci quos officiis quod ipsum at ad nulla. Esse eligendi cupiditate, repellendus amet minus quos aspernatur, in quidem</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Ashik Store</span>
          <span className='copyright'> © Copyright 2023. All Right reserved by Al Amin Ashik</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
     </div>
  )
}

export default Footer
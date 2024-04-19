import React, { useEffect, useState } from 'react'
import {redux} from 'redux'
import "./ecom.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Ecom = ({store,setStore}) => {
    const [prod,setProd] = useState()
    

 
    const handleAdd = (i)=>{
        setStore(prevStore => [...prevStore, prod[i]])
        console.log();
    }

    function truncateDescription(description, maxLength) {
        if (description.length <= maxLength) {
          return description;
        } else {
          return description.slice(0, maxLength) + "...";
        }
      }

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => setProd(products))
      .catch(error => console.error('Error fetching products:', error));
    },[])
  return (
    <div className='main'>
         <nav className="navbar">
      <div className="logo">E-Commerce</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
      </ul>
      <div className="cart-icon">
       <Link to="/panier"><FaShoppingCart className="cart-icon-svg" />
        <span className="cart-count">{store.length}</span></Link> 
      </div>
    </nav>
        <section className="products">
        <div className="products-container">
  {prod ? (
    prod.map((e, i) => {
      const { id, title, price, description, category, image } = e;
      return (
        <div key={id} className="product-card">
        <img className="product-image" src={image} alt={title} />
            <div className="product-details">
            <h3 className="product-title">{title}</h3>
            <p className="product-price">${price}</p>
            <p className="product-description">
            {truncateDescription(description, 20)}
            </p>
            <p className="product-category">Category: {category}</p>
            <button onClick={()=>{handleAdd(i)}} className="add-to-cart-btn">Ajouter au panier</button>
            </div>
        </div>
      );
    })
  ) : (
    <p>Loading products...</p>
  )}
</div>

        </section>
    </div>
  )
  
}

export default Ecom
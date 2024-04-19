import React from 'react'

const Panier = ({store,setStore}) => {
    function truncateDescription(description, maxLength) {
        if (description.length <= maxLength) {
          return description;
        } else {
          return description.slice(0, maxLength) + "...";
        }
      }

      const Supprimer = (index) =>{
       setStore(store.filter((e,i)=>i!==index))
      }

      const totalItems = store.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className='main'>
    <nav className="navbar">
    <div className="logo">E-Commerce</div>
    <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    </ul>
    <div className="cart-icon">
    </div>
    </nav>
    <section className="products">
    <div className="products-container">
    {store ? (
    store.map((e, i) => {
    const { id, title, price, description, category, image } = e;
    return (
    <div key={id} className="product-card">
    <img className="product-image" src={image} alt={title} />
       <div className="product-details">
       <h3 className="product-title">{title}</h3>
       <p className="product-price">${price}</p>
       <p className="product-description">
       {truncateDescription(description, 30)}
       </p>
       <p className="product-category">Category: {category}</p>
       <button onClick={()=>Supprimer(i)}  className="add-to-cart-btn">supprimer du panier</button>
       </div>
    </div>
    );
    })
    ) : (
    <p>Loading products...</p>
    )}
    </div>
    
    </section>
    <footer className="footer">
      <div className="container">
        <p>le prix Total est : {totalItems}</p>
      </div>
    </footer>
    </div>
    
  )
}

export default Panier





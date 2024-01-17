import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MediumCard from '../Card/MediumCard';
import Loader from '../Loader';

const SectionScroll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/product");
        setProducts(response.data); // Guarda los datos de la respuesta, no toda la respuesta
      } catch (error) {
        console.error("Error al recuperar los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  let latestProduct = null;
  let miniProducts = [];

  if (Array.isArray(products) && products.length > 0) {
    latestProduct = products[products.length - 1]; // Obtiene el último producto del array
    miniProducts = products.slice(-3); // Obtiene los últimos 5 productos del array
  }
  
  return (
    <div className='SectionScroll' >
      <div className='scroll' >
        {miniProducts.length > 0 ? (
          miniProducts.map(product => (
            <MediumCard key={product.id} produc={product} />
          ))
        ) : (
          <Loader/>
        )}
    </div>
    </div>
  )
}

export default SectionScroll
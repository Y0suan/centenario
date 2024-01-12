import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BigCard from '../Card/BigCard';
import MiniCardRow from '../Card/MiniCardRow';
import BigCardLoader from '../Card/BigCardLoader';

const SectionHome = () => {
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
    miniProducts = products.slice(-5); // Obtiene los últimos 5 productos del array
  }

  return (
    <div className='SectionHome'>
      <div className='SectionHomeBig'>
        {latestProduct ? (
          <BigCard key={latestProduct.id} product={latestProduct} />
        ) : (
          <BigCardLoader/>
        )}
      </div>
      <div className='SectionHomeMini'>
        {miniProducts.length > 0 ? (
          miniProducts.map(product => (
            <MiniCardRow key={product.id} product={product} />
          ))
        ) : (
          <p>No hay Eventos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default SectionHome;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import { CardChica } from './CardChica';

export const ContEventSemana = () => {
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

  return (
    <div className='ContEventSemana'>
      <h1>Eventos de La Semana</h1>
      <div className='EventSemanaContCard'>
        {Array.isArray(products) && products.length > 0 ? (
          products.map(product => (
            <CardChica key={product.id} produc={product} />
          ))
        ) : (
          <p>No hay Eventos disponibles</p>
        )}
      </div>
    </div>
  );  
};

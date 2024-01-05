import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import { CardMini } from '../CardMini';

const CardList = () => {
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

  // Mostrar solo los últimos 3 productos
  const lastThreeProducts = products.slice().reverse().slice(0, 5);

  return (
    <div className='CardListCont' >
      {Array.isArray(lastThreeProducts) && lastThreeProducts.length > 0 ? (
        lastThreeProducts.map(product => (
          <CardMini key={product.id} produc={product} />
        ))
      ) : (
        <p>No hay Eventos disponibles</p>
      )}
    </div>
  );
};

export default CardList;

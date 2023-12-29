import Header from '@/Component/Header';
import Nav from '@/Component/Nav';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import CardXl from '@/Component/CardXl';

const seDeProduccion = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/secDeGob");
        setProducts(response.data); // Guarda los datos de la respuesta, no toda la respuesta
      } catch (error) {
        console.error("Error al recuperar los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  // Función para filtrar los productos
  const filterProductsByCategory = (categoryName) => {
    const filteredProducts = products.filter(product => product.category.parent === categoryName);
    return filteredProducts;
  };

  // Filtrar los productos por una categoría específica en la propiedad 'parent' de la categoría
  const filteredProducts = filterProductsByCategory('656db1d5b237aa95e172dc7d');
  return (
    <div>
    <Header/>
    <Nav/>
    <div class='ContSec'>
      <div class='Cont' >
      <div class='img'>
        <h2>
          Secretaria de Produccion
        </h2>
        <h3>
          Mantente al tanto de todo
        </h3>
      </div>
      </div>
    </div>
    <div className='ConSecretaria'>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.slice().reverse().map(product => (
            <CardXl key={product.id} produc={product} />
          ))
        ) : (
          <p>No hay Eventos disponibles</p>
        )}
      </div>
  </div>
  )
}

export default seDeProduccion
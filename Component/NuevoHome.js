import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'



const NuevoHome = () => {
    const [latestProduct, setLatestProduct] = useState(null);
  
    useEffect(() => {
        const fetchLatestProduct = async () => {
            try {
                const response = await axios.get("/api/product");
                if (response.data && response.data.length > 0) {
                    const lastIndex = response.data.length - 1;
                    setLatestProduct(response.data[lastIndex]); // Guarda el último producto en el estado
                }
            } catch (error) {
                console.error("Error al recuperar el último producto:", error);
            }
        };
        fetchLatestProduct();
    }, []);

          // Función para limitar la descripción a un máximo de 20 palabras
  const truncateDescription = (description) => {
    const words = description.split(' ');
    const truncated = words.slice(0, 20).join(' ');
    return truncated + (words.length > 20 ? '...' : ''); // Agregar puntos suspensivos si hay más de 20 palabras
  };


  return (
    <Cont class='NuevoHome' >
            {latestProduct && (
    <div  passHref className='cardXl2'>
      
    <div className='imgXl2'>
      {/* Mostrar solo la primera imagen si existen imágenes */}
      {latestProduct.images.length > 0 && (
        <img src={latestProduct.images[0]} alt='Product' /> 
      )}
    </div>
    <div className='textXl2'>
      <h2>{latestProduct.title}</h2>
      <p>{truncateDescription(latestProduct.description)}</p> 
      <div>
        <p>{latestProduct.fecha}</p>
        {latestProduct.category && (
        <a href='/'>{latestProduct.category.name}</a>
      )}
      </div>
    </div>

</div>
            )}
      
    </Cont>
  )
}

export default NuevoHome

const Cont = styled.div`
width: 100%;
height: 70vh;
display: flex;
gap:8px;
`

const Eventsm = styled.div`
width: 30%;
height: 100%;
background-color: aqua;
`

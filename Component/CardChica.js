import Image from 'next/image';
import React from 'react';

export const CardChica = ({ produc }) => {
  // Función para limitar la descripción a un máximo de 20 palabras
  const truncateDescription = (description) => {
    const words = description.split(' ');
    const truncated = words.slice(0, 20).join(' ');
    return truncated + (words.length > 20 ? '...' : ''); // Agregar puntos suspensivos si hay más de 20 palabras
  };

  return (
    <div key={produc._id} className='card'> {/* Es className, no class */}
      <div className='img'>
        {/* Mostrar solo la primera imagen si existen imágenes */}
        {produc.images.length > 0 && (
          <img src={produc.images[0]} alt='Product' /> 
        )}
      </div>
      <div className='text'>
        <h2>{produc.title}</h2>
        <p>{truncateDescription(produc.description)}</p> {/* Mostrar la descripción truncada */}
        <div>
          <p>{produc.fecha}</p>
          <a href='/'>Sec. de Gobierno</a>
        </div>
      </div>
    </div>
  );
};


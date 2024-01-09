import Link from 'next/link';
import React from 'react'

const MiniCardRow = ({product}) => {
      // Función para obtener un máximo de 20 palabras
  const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

    const truncatedDescription = truncateDescription(product.description, 5);
    const url = '/product/' + product._id ;
  return (
    <Link href={url} className='contMiniCardRow'>
      <div className='imagen'>
        <img src={product.images} alt="Product" />
      </div>
      <div className='text'>
      {product.category && (
            <a href='/'>{product.category.name}</a>
          )}
        <h3 className='tituloChico' >{product.title}</h3>
        <p>{product.fecha}</p>
      </div>
    </Link>
  )
}

export default MiniCardRow
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuditoriasVIew = ({searchResults}) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('/api/product').then(response => {
      setProducts(response.data);
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='cont-view'>
      <div className="cont-auditorias">
        {searchResults.map(product => (
          <div className="div-card" key={product._id} onClick={() => handleCardClick(product)}>
            <div>
              <p className="subtitle">Fecha</p>
              <p>{product.fecha}</p>
              <p className="subtitle">Interes</p>
              <p>{product.interes}</p>
              <p className="subtitle">Sintesis</p>
              <p>{product.sintesis}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
        <div className='modal-content'>
          <div className="modal-colum">
     
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {/* Mostrar información de los participantes */}
            {selectedProduct.participants &&
              Object.entries(
                selectedProduct.participants.reduce((acc, participant) => {
                  const { nombre, apellido, dni, enRepresentacionde, representacion } = participant;
                  if (!acc[representacion]) {
                    acc[representacion] = [];
                  }
                  acc[representacion].push({ nombre, apellido, dni, enRepresentacionde, representacion });
                  return acc;
                }, {})
              ).map(([representation, participants]) => (
                <div className='' key={representation}>
                  <p className="subtitle">{representation}</p>
                  {participants.map((participant, index) => (
                    <div key={index}>
                      <p>{participant.nombre}</p>
                      <p>{participant.apellido}</p>
                      <p>{participant.dni}</p>
                      <p>{participant.enRepresentacionde}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <div>
<p className="subtitle">Fecha</p>
<p>{selectedProduct.fecha}</p>
<p className="subtitle">Interes</p>
<p>{selectedProduct.interes}</p>
<p className="subtitle">Sintesis</p>
<p>{selectedProduct.sintesis}</p>
<p className="subtitle">Motivo</p>
<p>{selectedProduct.motivo}</p>
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditoriasVIew;

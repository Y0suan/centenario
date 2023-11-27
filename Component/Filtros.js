import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuditoriasVIew from './AuditoriasVIew';

const Filtros = () => {
  const [products, setProducts] = useState([]);
  const [allParticipants, setAllParticipants] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product').then(response => {
      setProducts(response.data);
      setFilteredProducts(response.data); // Inicialmente, mostrar todos los productos
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);

  useEffect(() => {
    const participants = products.reduce((acc, product) => {
      if (Array.isArray(product.participants)) {
        product.participants.forEach(participant => {
          acc.push(participant);
        });
      }
      return acc;
    }, []);
    setAllParticipants(participants);
  }, [products]);

  const handleParticipantChange = (participantName) => {
    setSelectedParticipant(participantName);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = products.filter(product => product.fecha.includes(searchDate));
    setFilteredProducts(filtered);
  };

  return (
    <div className='cont'>
      <div className='filtros'>
        <h2>Navegacion</h2>
        <div>
          <label className='labelSubtitle'>Fecha</label>
          <form onSubmit={handleSearch}>
            <input
              className='input-secondari'
              type="date"
              name="field1"
              placeholder="Campo 1"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            <button className='btn-primary' type="submit">Buscar</button>
          </form>
        </div>
        <div>
          <div>
            <label className='labelSubtitle'>Seleccionar participante</label>
            <form className='option-cont'>
              {allParticipants.map((participant, index) => (
                <input
                  className='option'
                  key={index}
                  type="submit"
                  value={`${participant.nombre} ${participant.apellido}`}
                  onClick={() => handleParticipantChange(`${participant.nombre} ${participant.apellido}`)}
                />
              ))}
            </form>
          </div>
        </div>
      </div>
      <AuditoriasVIew products={filteredProducts}></AuditoriasVIew>
    </div>
  );
};

export default Filtros;

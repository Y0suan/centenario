import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Filtros from './Filtros';
import AuditoriasVIew from './AuditoriasVIew';

const StyledHeader = styled.div`
background-image: linear-gradient(6deg, rgba(12,10,92,0.7287289915966386) 0%, rgba(6,14,70,0.7287289915966386) 100%), url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Posadas_-_Centro_-_Casa_de_Gobierno_de_Misiones.JPG/1024px-Posadas_-_Centro_-_Casa_de_Gobierno_de_Misiones.JPG');
width: 100%;
height: 70vh;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 740px) {
height  :auto ;
padding-bottom: 2rem;
padding-top: 2rem;
}
`



const Header = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  
  useEffect(() => {
    axios.get('/api/product')
      .then(resonse => {
        setProducts(response.data);
        console.log('Resultados iniciales:', response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/product?search=${searchQuery}`);
      setSearchResults(response.data);
      setProducts([]); // Reinicia los productos para mostrar los resultados de la búsqueda
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };


  return (
    <div>
    <StyledHeader>
      
    <h1>Registro Único de Audiencias de Gestión de Intereses</h1>
        <form className='formHeader' onSubmit={handleSearch}>
          <input
            type="text"
            name="searchQuery"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className='btn-primary' type="submit">
            Buscar
          </button>
        </form>

  


      <button className="btn-secondari" onClick={toggleForm}>
Personalizá tu búsqueda
      </button>
      <form style={{ display: showForm ? 'block' : 'none' }}>
        {/* Aquí tus campos de formulario */}
        {/* Por ejemplo: */}
        <div className='filtrosHeader' >
        <label>Fecha</label>
        <input className='input-secondari' type="date" name="field1" placeholder="Campo 1" />
        </div>
        <div className='filtrosHeader'>
          <label>Motivo</label>
        <input className='input-secondari' type="text" name="field2" placeholder="Motivo de la audiencia" />
        </div>
        {/* <button className="btn-primary" type="submit">
          Enviar
        </button> */}
      </form>
    </StyledHeader>
    <div className='contResult'>
        {/* Envía los resultados de la búsqueda al componente Filtros */}
        <Filtros  searchResults={searchResults} />
      </div>
    </div>
  )
}

export default Header
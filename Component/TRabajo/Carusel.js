import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const CaruselGrande = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      category: 'Ayuda alimentaria',
      title: 'Apoyo a comedores comunitarios',
      description: 'Colabora con la alimentación de familias necesitadas',
      imageUrl: 'https://images.unsplash.com/photo-1615897570582-285ffe259530?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      category: 'Deporte infantil',
      title: 'Patrocinio de equipos de fútbol infantil',
      description: 'Apoya el desarrollo deportivo y la inclusión de niños.',
      imageUrl: 'https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/406466938_767954891811303_2265025529112782216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHfKX4nDYFWhu2X9KoGlVANTkDHZTuV8QlOQMdlO5XxCbDfbNvrcUifkcynXUrIA1UInKHpibGYwMpHfPc7s13M&_nc_ohc=AYT1zE-hFLQAX-K3A5o&_nc_oc=AQmlp8fa1NCZ88ieWLKGn1TsYX8HsH086UNYlwpa5cH3FyDpgsve662Ah-4DdEpnkyY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfAn6q4tFEdaItS_VOd0LxsShnJM_QjmC7L5H__D5opfug&oe=65D9E8A7',
    },
    {
      category: 'Economía regional',
      title: 'Apoyo a productores locales',
      description: 'Contribuye al crecimiento de la economía de nuestra zona.',
      imageUrl: 'https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/406466938_767954891811303_2265025529112782216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHfKX4nDYFWhu2X9KoGlVANTkDHZTuV8QlOQMdlO5XxCbDfbNvrcUifkcynXUrIA1UInKHpibGYwMpHfPc7s13M&_nc_ohc=AYT1zE-hFLQAX-K3A5o&_nc_oc=AQmlp8fa1NCZ88ieWLKGn1TsYX8HsH086UNYlwpa5cH3FyDpgsve662Ah-4DdEpnkyY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfAn6q4tFEdaItS_VOd0LxsShnJM_QjmC7L5H__D5opfug&oe=65D9E8A7', // Reemplaza con tu imagen
    },
    {
        category: 'Educación',
        title: 'Gestión de becas y créditos',
        description: 'Promovemos el acceso a la educación mediante becas y créditos.',
        imageUrl: 'https://via.placeholder.com/500', // Reemplaza con tu imagen
    },
    {
        category: 'Cultura',
        title: 'Promoción de actividades culturales',
        description: 'Fomentamos el arte y la cultura en nuestra comunidad.',
        imageUrl: 'https://via.placeholder.com/500', // Reemplaza con tu imagen
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Cambiar de diapositiva cada 5 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  const handleTransition = () => {
    return {
      transition: 'transform 0.5s ease',
      transform: `translateX(-${currentIndex * 20}%)`, // Ancho de cada tarjeta
    };
  };

  return (
    <div className='Carusel'>
      <div className='ContCarusel' style={handleTransition()}>
        {items.map((item, index) => (
          <div
            key={index}
            className='CardCarusel'
            style={{ backgroundImage: `linear-gradient(
                6deg,
                rgba(44, 43, 46, 0.3) 0%,
                rgba(65, 65, 68, 0.338) 100%
              ), url(${item.imageUrl})` }}
          >
            <h4>{item.category}</h4>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link className='btnPrimary bntperson' href='/'>Dona Ahora</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaruselGrande;

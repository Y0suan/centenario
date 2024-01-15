import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import { useRouter } from 'next/router';
import Link from 'next/link';

moment.locale('es');

const localizer = momentLocalizer(moment);

const calendarStyles = {
  container: {
    maxWidth: '100%',
    margin: '0',
    padding: '20px',
  },
  heading: {
    color: '#333',
    textAlign: 'center',
  },
  dateCell: {
    borderBottom: '1px solid #ddd',
  },
  calendar: {
    // Agrega estilos específicos del calendario si es necesario
  },
};

const customMessages = {
  today: 'Hoy',
  previous: 'Anterior',
  next: 'Siguiente',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  allDay: 'Todo el día',
  showMore: total => `+ Ver más (${total})`,
};


const EventPoint = ({ event }) => {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);

  const handleEventClick = () => {
    // Redirige a la página de detalles del evento al hacer clic
    router.push(`/product/${event.id}`); // Ajusta la ruta según tu estructura de URL
  };

  const handleShowMoreClick = (e) => {
    e.preventDefault();
    // Toggle para mostrar u ocultar los detalles del evento
    setShowDetails(!showDetails);
  };

  const handleHideDetailsClick = (e) => {
    e.preventDefault();
    // Oculta los detalles del evento al hacer clic en "Cerrar"
    setShowDetails(false);
  };

  const colors = ['rgba(1, 161, 255, 1)', 'rgba(0, 205, 84, 1)', 'rgba(255, 159, 0, 1)'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div>
      <a href="#" onClick={showDetails ? handleHideDetailsClick : handleShowMoreClick}>
        {/* <div style={{ backgroundColor: randomColor, width: '10px', height: '10px', borderRadius: '50%' }} /> */}
        <h4 className='btnCalendar' style={{ backgroundColor: randomColor}} >{showDetails ? 'Cerrar' : 'Ver mas'}</h4>
      </a>
      {showDetails && (
        <div>
          {/* <p>Detalles del evento:</p>
          <ul>
            <li>Fecha: {moment(event.start).format('LL')}</li>
            <li>Hora: {moment(event.start).format('LT')}</li>
            <li>Descripción: {event.description}</li>
          </ul> */}
        </div>
      )}
    </div>
  );
};

const CalendarPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al recuperar los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectSlot = (slotInfo) => {
    // Al seleccionar un slot en el calendario, actualiza la fecha seleccionada
    setSelectedDate(slotInfo.start);
  };

  const events = products.map(product => ({
    id: product._id,
    title: product.title,
    start: new Date(product.fecha),
    end: new Date(product.fecha),
    description: product.description,
  }));

  return (
    <div style={calendarStyles.container} className='calendario'>
      <h1 className='tituloPrincipal' style={calendarStyles.heading}>
        Calendario de Eventos
      </h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={calendarStyles.calendar}
        messages={customMessages}
        dayFormat={'dddd'}
        components={{
          eventWrapper: EventPoint,
        }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onView={() => setSelectedDate(null)} // Limpiar la fecha seleccionada al cambiar de vista
      />

      {selectedDate && (
        <div className='EventDelDia'>
          <h2>Eventos para el {moment(selectedDate).format('LL')}</h2>
          <ul>
            {events
              .filter(event => moment(event.start).isSame(selectedDate, 'day'))
              .map(filteredEvent => (
                <li><Link href={(`/product/${filteredEvent.id}`)} key={filteredEvent.id}>
                  - {filteredEvent.title} 
                </Link>
                </li> 
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;

import React, { useState } from 'react';
import Modal from 'react-modal';

const EventPoint = ({ event, onSelectEvent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = () => {
    onSelectEvent(event);
    setIsModalOpen(true);
  };

  const colors = ['rgba(1, 161, 255, 1)', 'rgba(0, 205, 84, 1)', 'rgba(255, 159, 0, 1)'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div>
      <div style={{ backgroundColor: randomColor, width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer' }} onClick={handleEventClick} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Detalles del evento"
      >
        {/* Renderiza los detalles del evento en el modal */}
        {/* Puedes usar el mismo contenido que en la parte inferior de CalendarPage.js */}
      </Modal>
    </div>
  );
};

export default EventPoint;

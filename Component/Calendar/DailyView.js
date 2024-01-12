import React from 'react';

const DailyView = ({ selectedEvent }) => {
  return (
    <div>
      <h2>Detalle del evento</h2>
      {selectedEvent && (
        <div>
          <h3>{selectedEvent.title}</h3>
          <p>Descripción: {selectedEvent.description}</p>
          {/* Otros detalles del evento */}
        </div>
      )}
    </div>
  );
};

export default DailyView;

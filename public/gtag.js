export const GA_MEASUREMENT_ID = 'G-H0EHX8H1FP'; // Reemplaza con tu ID de seguimiento

export const GA_DEBUG_MODE = true; // Puedes ajustar esto según tus necesidades

export const GA_TRACKING_ID = `UA-${GA_MEASUREMENT_ID}-1`;

// Inicializar gtag.js
export const initGA = () => {
  if (!window.GA_INITIALIZED) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, { 'debug_mode': GA_DEBUG_MODE });
    window.GA_INITIALIZED = true;
  }
};

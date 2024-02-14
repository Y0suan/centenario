// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false; // Esto es para solucionar problemas de compatibilidad de tailwindcss
    }
    return config;
  },
  future: {
    webpack5: true, // Esto es para usar webpack 5, si es necesario
  },
};

// utils.js

export const generateUniqueCode = () => {
    // Générer un code d'accès unique aléatoire (exemple simple)
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  };
  
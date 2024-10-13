import React from 'react';

const FormListar = ({ listarPets }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); listarPets(); }}>
      <h2 className="text-2xl font-bold mb-4">Listar Pets</h2>
      <button type="submit" className="btn btn-primary">Listar Todos os Pets</button>
    </form>
  );
};

export default FormListar;

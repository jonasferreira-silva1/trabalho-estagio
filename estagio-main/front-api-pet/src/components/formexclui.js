import React, { useState } from 'react';

const FormExcluir = ({ listarPets }) => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/pet/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error('Erro ao excluir o pet');

      alert("Pet excluído com sucesso!");
      listarPets();
      setId('');
    } catch (error) {
      alert(`Erro ao excluir o pet: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Excluir Pet</h2>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">ID do Pet:</label>
        <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} required className="form-control" />
      </div>
      <button type="submit" className="btn btn-danger">Excluir</button>
    </form>
  );
};

export default FormExcluir;

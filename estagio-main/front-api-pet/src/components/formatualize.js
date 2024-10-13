import React, { useState } from 'react';

const FormAtualizar = ({ listarPets }) => {
  const [formData, setFormData] = useState({ id: '', nome: '', raca: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/pet/atualizar/${formData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: formData.nome, raca: formData.raca }),
      });

      if (!response.ok) throw new Error('Erro ao atualizar o pet');

      alert("Pet atualizado com sucesso!");
      listarPets();
      setFormData({ id: '', nome: '', raca: '' });
    } catch (error) {
      alert(`Erro ao atualizar o pet: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Atualizar Pet</h2>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">ID do Pet:</label>
        <input type="number" id="id" name="id" value={formData.id} onChange={handleChange} required className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Novo Nome:</label>
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="raca" className="form-label">Nova Raça:</label>
        <input type="text" id="raca" name="raca" value={formData.raca} onChange={handleChange} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Atualizar</button>
    </form>
  );
};

export default FormAtualizar;

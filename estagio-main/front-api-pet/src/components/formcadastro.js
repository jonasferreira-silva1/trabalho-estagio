import React, { useState } from 'react';

const FormCadastrar = ({ listarPets }) => {
  const [formData, setFormData] = useState({ nome: '', raca: '', historicoDoPet: '', sexo: 'M' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z]+$/.test(formData.raca)) {
      alert("A raça só deve conter letras.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/pet/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro ao cadastrar o pet');

      const data = await response.json();
      alert(`Pet cadastrado com sucesso: Nome: ${data.nome}, Histórico: ${data.historicoDoPet}, Sexo: ${data.sexo}`);
      listarPets();
      setFormData({ nome: '', raca: '', historicoDoPet: '', sexo: 'M' });
    } catch (error) {
      alert(`Erro ao cadastrar o pet: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Cadastrar Pet</h2>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome:</label>
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="raca" className="form-label">Raça:</label>
        <input type="text" id="raca" name="raca" value={formData.raca} onChange={handleChange} required className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="historicoDoPet" className="form-label">Histórico:</label>
        <input type="text" id="historicoDoPet" name="historicoDoPet" value={formData.historicoDoPet} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="sexo" className="form-label">Sexo:</label>
        <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required className="form-select">
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
  );
};

export default FormCadastrar;

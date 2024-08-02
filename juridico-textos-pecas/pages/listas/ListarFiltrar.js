import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import ListaDocumentos from './ListaDocumentos'; // Componente adaptado

export default function ListarFiltrar() {
  const [filtros, setFiltros] = useState({
    tipo: '',
    numeroProcesso: '',
    tribunal: '',
    partes: '',
    dataInicial: '',
    dataFinal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-5 bg-blue-500 rounded shadow-lg w-full h-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-4">Filtros:</h1>
        <input
          type="text"
          placeholder="Tipo de Documento"
          name="tipo"
          value={filtros.tipo}
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Número do Processo"
          name="numeroProcesso"
          value={filtros.numeroProcesso}
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Tribunal"
          name="tribunal"
          value={filtros.tribunal}
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Partes Envolvidas"
          name="partes"
          value={filtros.partes}
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        />

        <div className="flex space-x-2"> {/* Campos de data em linha */}
          <input 
            type="date"
            placeholder="Data Inicial"
            name="dataInicial"
            value={filtros.dataInicial}
            onChange={handleChange}
            className="px-3 py-2 border rounded mb-2"
          />
          <input 
            type="date"
            placeholder="Data Final"
            name="dataFinal"
            value={filtros.dataFinal}
            onChange={handleChange}
            className="px-3 py-2 border rounded mb-2"
          />
        </div>

        <ListaDocumentos filtros={filtros} /> 
      </div>
    </div>
  );
}

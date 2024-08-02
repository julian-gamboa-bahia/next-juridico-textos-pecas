import { useState, useEffect } from 'react';
import Documento from '../componentes/Documento'; // Componente para exibir cada documento

const ListaDocumentos = ({ filtros }) => {
  const [documentos, setDocumentos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams(filtros).toString(); // Converte filtros em query string
        const response = await fetch(`/api/documentos?${queryParams}`);
        const data = await response.json();
        setDocumentos(data);
      } catch (error) {
        console.error('Erro ao buscar documentos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filtros]); // Executa quando os filtros mudam

  return (
    <div className="container mx-auto py-8">
      {/* ... (mensagem de carregamento e erro) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {documentos.map((documento) => (
          <div key={documento.id} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
            <Documento 
  id={documento.id}
  tipo={documento.tipo}
  numeroProcesso={documento.numeroProcesso}
  tribunal={documento.tribunal}
  partes={documento.partes}
  data={documento.data}
/>
          </div>
        ))}
      </div>
      {/* ... (mensagem de nenhum resultado) */}
    </div>
  );

};

export default ListaDocumentos;
import Link from 'next/link';

function Documento({ id, tipo, numeroProcesso, tribunal, partes, data }) {
  // Formatação básica da data (opcional)
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR'); 

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{tipo}</h2>
      <p className="text-gray-600">Processo: {numeroProcesso}</p>
      <p className="text-gray-600">Tribunal: {tribunal}</p>
      <p className="text-gray-600">Partes: {partes}</p>
      <p className="text-gray-600">Data: {dataFormatada}</p> {/* Data formatada */}
      <Link href={`/detalhes/DetalhesDocumentos?id=${id}`}>
        <button aria-label={`Ver detalhes do documento ${tipo} - ${numeroProcesso}`} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Detalhes
        </button>
      </Link>
    </div>
  );
}

export default Documento;

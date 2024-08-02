import Link from 'next/link';

function Documento({ id, tipo, numeroProcesso, tribunal, partes, data }) {
  return (
    <div className="p-4 bg-white rounded shadow-lg w-full flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mt-4">{tipo}</h2>
      <p className="text-gray-500">Processo: {numeroProcesso}</p>
      {/* ... (outras informações) */}
      <Link href={`/detalhes/DetalhesDocumentos?id=${id}`} target="_blank" rel="noopener noreferrer">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Detalhes
        </button>
      </Link>
    </div>
  );
}

export default Documento;

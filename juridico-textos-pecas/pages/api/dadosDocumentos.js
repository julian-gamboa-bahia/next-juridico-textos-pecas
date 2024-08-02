/**
 * Array de documentos jurídicos com seus detalhes.
 *
 * @type {Array<Object>}
 */
const documentos = [
  {
    id: 1,
    tipo: 'Sentença',
    numeroProcesso: '0012345-67.2023.8.02.0001',
    tribunal: 'Tribunal de Justiça de São Paulo',
    partes: 'João da Silva x Maria Souza',
    data: '2023-08-01',
    url: 'https://exemplo.com/sentenca1.pdf'
  },
  {
    id: 2,
    tipo: 'Acórdão',
    numeroProcesso: '0023456-78.2022.8.02.0002',
    tribunal: 'Superior Tribunal de Justiça',
    partes: 'Empresa A x Empresa B',
    data: '2022-12-15',
    url: 'https://exemplo.com/acordao2.pdf'
  },
  {
    id: 3,
    tipo: 'Petição Inicial',
    numeroProcesso: '0034567-89.2024.8.02.0003',
    tribunal: 'Tribunal Regional Federal da 3ª Região',
    partes: 'José Santos x União',
    data: '2024-05-10',
    url: 'https://exemplo.com/peticao3.pdf'
  },
  // ... (adicione mais documentos conforme necessário)
];
  
export default documentos;


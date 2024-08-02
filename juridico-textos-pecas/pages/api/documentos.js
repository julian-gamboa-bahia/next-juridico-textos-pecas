import documentos from './dadosDocumentos';

export default function handler(req, res) {
  const { id, tipo, numeroProcesso, tribunal, partes, dataInicial, dataFinal } = req.query;
  let documentosFiltrados = [...documentos];

  if (id) {
    documentosFiltrados = documentosFiltrados.filter(documento => documento.id === parseInt(id));
  }

  if (tipo) {
    documentosFiltrados = documentosFiltrados.filter(documento => documento.tipo.toLowerCase().includes(tipo.toLowerCase()));
  }

  if (numeroProcesso) {
    documentosFiltrados = documentosFiltrados.filter(documento => documento.numeroProcesso.toLowerCase().includes(numeroProcesso.toLowerCase()));
  }

  if (tribunal) {
    documentosFiltrados = documentosFiltrados.filter(documento => documento.tribunal.toLowerCase().includes(tribunal.toLowerCase()));
  }

  if (partes) {
    documentosFiltrados = documentosFiltrados.filter(documento => documento.partes.toLowerCase().includes(partes.toLowerCase()));
  }

  if (dataInicial) {
    documentosFiltrados = documentosFiltrados.filter(documento => new Date(documento.data) >= new Date(dataInicial));
  }

  if (dataFinal) {
    documentosFiltrados = documentosFiltrados.filter(documento => new Date(documento.data) <= new Date(dataFinal));
  }

  res.status(200).json(documentosFiltrados);
}

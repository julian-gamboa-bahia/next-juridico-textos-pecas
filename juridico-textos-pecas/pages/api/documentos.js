import documentos from './dadosDocumentos';

export default function handler(req, res) {
  const { tipo, numeroProcesso, tribunal, partes } = req.query;
  let documentosFiltrados = [...documentos];

  if (tipo) {
    documentosFiltrados = documentosFiltrados.filter(doc => doc.tipo.toLowerCase().includes(tipo.toLowerCase()));
  }
  // ... (filtros para numeroProcesso, tribunal e partes)

  res.status(200).json(documentosFiltrados);
}



import detalhes from './dadosDetalhesDocumentos';

export default function handler(req, res) {
  const { id } = req.query;
  let documentosFiltrados = [...detalhes];

  if (id) {
    documentosFiltrados = documentosFiltrados.filter(doc => doc.id === parseInt(id));
    if (documentosFiltrados.length > 0) {
      res.status(200).json(documentosFiltrados);
    } else {
      res.status(404).json([]);
    }
  } else {
    res.status(400).json({ error: 'Missing required query parameters. (Falta o parâmetro "id")' });
  }
}

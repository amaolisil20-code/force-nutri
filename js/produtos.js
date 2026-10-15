// Lista de produtos exibidos no site.
// Para adicionar a foto: coloque o arquivo em img/produtos/suplementos/ ou img/produtos/tenis/
// e escreva o caminho no campo "foto". Sem foto, o card mostra um espaço reservado.
// Fotos recomendadas: quadradas (1000x1000), fundo branco, .jpg ou .webp.

window.FORCE_PRODUTOS = [
  // ---------- SUPLEMENTOS ----------
  { categoria: 'suplementos', tag: 'Whey',       nome: '[NOME DO PRODUTO]', preco: '[R$ 00,00]', foto: '' },
  { categoria: 'suplementos', tag: 'Creatina',   nome: '[NOME DO PRODUTO]', preco: '[R$ 00,00]', foto: '' },
  { categoria: 'suplementos', tag: 'Pré-treino', nome: '[NOME DO PRODUTO]', preco: '[R$ 00,00]', foto: '' },
  { categoria: 'suplementos', tag: 'Vitaminas',  nome: '[NOME DO PRODUTO]', preco: '[R$ 00,00]', foto: '' },

  // ---------- TÊNIS ----------
  { categoria: 'tenis', tag: 'Corrida', nome: '[MODELO DO TÊNIS]', preco: '[R$ 00,00]', foto: '' },
  { categoria: 'tenis', tag: 'Treino',  nome: '[MODELO DO TÊNIS]', preco: '[R$ 00,00]', foto: '' },
  { categoria: 'tenis', tag: 'Casual',  nome: '[MODELO DO TÊNIS]', preco: '[R$ 00,00]', foto: '' },
  { categoria: 'tenis', tag: 'Corrida', nome: '[MODELO DO TÊNIS]', preco: '[R$ 00,00]', foto: '' }

  // Exemplo preenchido:
  // { categoria: 'suplementos', tag: 'Whey', nome: 'Whey Protein 900g', preco: 'R$ 149,90', foto: 'img/produtos/suplementos/whey-900g.jpg' },
];

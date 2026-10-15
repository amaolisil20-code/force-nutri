// Lista de produtos exibidos no site.
// Para trocar a foto: coloque o arquivo em img/produtos/suplementos/ ou img/produtos/tenis/
// e escreva o caminho no campo "foto". As fotos atuais (img/fotos/) são ilustrativas.
// Fotos recomendadas: quadradas (1000x1000), .jpg ou .webp.
// Preço vazio ('') mostra "Consulte o valor".

window.FORCE_PRODUTOS = [
  // ---------- SUPLEMENTOS ----------
  { categoria: 'suplementos', tag: 'Whey',       nome: 'Whey Protein',  preco: '', foto: 'img/fotos/sup-whey.jpg' },
  { categoria: 'suplementos', tag: 'Creatina',   nome: 'Creatina',      preco: '', foto: 'img/fotos/sup-creatina.jpg' },
  { categoria: 'suplementos', tag: 'Pré-treino', nome: 'Pré-treino',    preco: '', foto: 'img/fotos/sup-pre.jpg' },
  { categoria: 'suplementos', tag: 'Vitaminas',  nome: 'Vitaminas',     preco: '', foto: 'img/fotos/sup-vitaminas.jpg' },

  // ---------- TÊNIS ----------
  { categoria: 'tenis', tag: 'Corrida', nome: 'Tênis de corrida', preco: '', foto: 'img/fotos/tenis-corrida.jpg' },
  { categoria: 'tenis', tag: 'Treino',  nome: 'Tênis de treino',  preco: '', foto: 'img/fotos/tenis-treino.jpg' },
  { categoria: 'tenis', tag: 'Casual',  nome: 'Tênis casual',     preco: '', foto: 'img/fotos/tenis-casual.jpg' },
  { categoria: 'tenis', tag: 'Leve',    nome: 'Tênis leve',       preco: '', foto: 'img/fotos/tenis-leve.jpg' }

  // Exemplo preenchido:
  // { categoria: 'suplementos', tag: 'Whey', nome: 'Whey Protein 900g', preco: 'R$ 149,90', foto: 'img/produtos/suplementos/whey-900g.jpg' },
];

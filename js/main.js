(function () {
  const cfg = window.FORCE_CONFIG || {};
  const produtos = window.FORCE_PRODUTOS || [];

  function linkWhatsApp(texto) {
    const numero = (cfg.whatsapp || '').replace(/\D/g, '');
    const msg = encodeURIComponent(texto || cfg.mensagemPadrao || '');
    return numero ? `https://wa.me/${numero}?text=${msg}` : '#contato';
  }

  function el(tag, classe, texto) {
    const n = document.createElement(tag);
    if (classe) n.className = classe;
    if (texto) n.textContent = texto;
    return n;
  }

  function cardProduto(p) {
    const card = el('article', 'produto');

    const foto = el('div', 'produto-foto');
    if (p.foto) {
      const img = el('img');
      img.src = p.foto;
      img.alt = p.nome;
      img.loading = 'lazy';
      foto.appendChild(img);
    } else {
      foto.textContent = 'Foto do produto';
    }

    const info = el('div', 'produto-info');
    info.appendChild(el('span', 'produto-tag', p.tag));
    info.appendChild(el('h3', '', p.nome));
    info.appendChild(el('p', 'preco', p.preco));

    const botao = el('a', 'btn-pedir', p.categoria === 'tenis' ? 'Consultar numeração' : 'Pedir no WhatsApp');
    botao.href = linkWhatsApp(`Olá! Tenho interesse em: ${p.nome} (${p.preco})`);
    if (botao.href.indexOf('wa.me') !== -1) { botao.target = '_blank'; botao.rel = 'noopener'; }
    info.appendChild(botao);

    card.append(foto, info);
    return card;
  }

  document.querySelectorAll('.grade-produtos').forEach((grade) => {
    const cat = grade.dataset.categoria;
    produtos.filter((p) => p.categoria === cat).forEach((p) => grade.appendChild(cardProduto(p)));
  });

  document.querySelectorAll('.js-whatsapp').forEach((a) => {
    a.href = linkWhatsApp();
    if (a.href.indexOf('wa.me') !== -1) { a.target = '_blank'; a.rel = 'noopener'; } else { a.removeAttribute('target'); }
  });
})();

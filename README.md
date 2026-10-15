# Force Nutri — Landing Page

Landing page da **Force Nutri** (suplementos e tênis). Site estático em HTML + CSS + JS puro, sem build e sem dependências.

## Estrutura

```
index.html                  página
css/style.css               visual (cores e fontes no topo, em :root)
js/config.js                número do WhatsApp e mensagem padrão
js/produtos.js              lista de produtos (nome, preço, categoria, foto)
js/main.js                  monta os cards e os links do WhatsApp
img/logo.png                logo
img/produtos/suplementos/   fotos dos suplementos
img/produtos/tenis/         fotos dos tênis
img/fotos/                  fotos ilustrativas (Unsplash) — troque pelas suas quando tiver
```

## Como adicionar as fotos dos produtos

1. Salve a foto em `img/produtos/suplementos/` ou `img/produtos/tenis/`
   - Nome sem espaço e sem acento: `whey-900g.jpg`, `tenis-corrida-azul.jpg`
   - Ideal: quadrada (1000×1000), fundo branco, `.jpg` ou `.webp`, até ~300 KB
2. Em `js/produtos.js`, preencha o produto:
   ```js
   { categoria: 'suplementos', tag: 'Whey', nome: 'Whey Protein 900g', preco: 'R$ 149,90', foto: 'img/produtos/suplementos/whey-900g.jpg' },
   ```
3. Para as fotos grandes das categorias, salve `img/categoria-suplementos.jpg` e `img/categoria-tenis.jpg`.

## WhatsApp

Em `js/config.js`, troque `[NUMERO]` pelo número com DDI e DDD, só números (ex.: `5534999999999`).
Os botões "Pedir no WhatsApp" já abrem a conversa com o nome e o preço do produto.

## Rodar localmente

Abra o `index.html` no navegador, ou:

```bash
npx serve .
```

## Publicar

Site estático: pode ser hospedado de graça no **Render (Static Site)**, Vercel, Netlify ou GitHub Pages, conectando este repositório.
No Render: *New → Static Site* → escolher o repo → Build command vazio → Publish directory `.`

## Pendências

- [ ] Nomes e preços reais em `js/produtos.js` (hoje: "Consulte o valor")
- [ ] Número do WhatsApp
- [ ] Fotos e preços dos produtos
- [ ] (Opcional) endereço, cidade e CNPJ no rodapé
- [ ] Logo em melhor resolução (PNG/SVG)

## Link de teste

Publicado na Vercel (projeto `force-nutri`): https://force-nutri.vercel.app

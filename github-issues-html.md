# 📋 50 Issues — HTML

---

## 🟢 HTML — SIMPLES

---

### Issue 1 — Página de Rastreamento de Pedido

**Título:**

```
Criar página de rastreamento de pedido com código de envio
```

**Labels:** `html` `simples` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar a página `order-tracking.html` onde o usuário informa o código do pedido e visualiza o status de entrega.

## A página deve incluir

- Campo de input para inserção do código do pedido
- Botão **Rastrear**
- Área de resultado com status do pedido (placeholder estático)
- Link para abrir suporte em caso de problemas

## Critérios de conclusão

- [ ] Estrutura HTML semântica
- [ ] Input com label acessível e placeholder explicativo
- [ ] Área de resultado inicialmente oculta (display: none)
- [ ] Layout responsivo e consistente com o projeto
```

---

### Issue 2 — Seção de Produtos em Destaque

**Título:**

```
Adicionar seção de produtos em destaque na página inicial
```

**Labels:** `html` `simples` `ecommerce`

**Corpo:**

```markdown
## Descrição

Inserir na `index.html` uma seção dedicada a exibir produtos em destaque ou mais vendidos.

## A página deve incluir

- Título da seção "Produtos em Destaque"
- Grid com pelo menos 4 cards de produto
- Badge de destaque em cada card
- Botão "Ver todos os produtos" ao final da seção

## Critérios de conclusão

- [ ] Uso de `<section>` com `aria-labelledby`
- [ ] Cards com imagem, nome e preço
- [ ] Layout em grid responsivo (2 colunas mobile, 4 desktop)
- [ ] Imagens com atributo `alt` descritivo
```

---

### Issue 3 — Footer Expandido com Mapa do Site

**Título:**

```
Expandir o footer com mapa do site e links organizados por categoria
```

**Labels:** `html` `simples` `navegacao`

**Corpo:**

```markdown
## Descrição

Ampliar o `<footer>` do projeto com colunas de links organizados por seção da loja.

## A página deve incluir

- Coluna "Institucional": Sobre, Blog, Carreiras, Contato
- Coluna "Ajuda": FAQ, Rastreamento, Trocas, Segurança
- Coluna "Minha Conta": Login, Cadastro, Pedidos, Favoritos
- Linha inferior com copyright e política de privacidade

## Critérios de conclusão

- [ ] Uso de `<nav>` com `aria-label` para cada coluna
- [ ] Links com `href` preenchidos ou `#`
- [ ] Layout de colunas responsivo (1 coluna mobile, 4 desktop)
- [ ] Copyright com ano atual
```

---

### Issue 4 — Banner de Cookies

**Título:**

```
Criar banner de aviso de cookies com opção de aceitar ou recusar
```

**Labels:** `html` `simples` `lgpd`

**Corpo:**

```markdown
## Descrição

Implementar um banner fixo de cookieconsent na parte inferior da página em conformidade com a LGPD.

## A página deve incluir

- Texto explicativo sobre o uso de cookies
- Botão **Aceitar todos**
- Botão **Apenas essenciais**
- Link para a política de privacidade

## Critérios de conclusão

- [ ] Banner posicionado na parte inferior da tela
- [ ] Estrutura com `role="dialog"` e `aria-live`
- [ ] Botões com ação clara e descritiva
- [ ] Oculto por padrão se o usuário já consentiu (comentário no HTML)
```

---

### Issue 5 — Seção de Estatísticas da Empresa

**Título:**

```
Adicionar seção de números e estatísticas da empresa na home
```

**Labels:** `html` `simples` `institucional`

**Corpo:**

```markdown
## Descrição

Criar bloco visual com dados quantitativos que reforçam a credibilidade da empresa.

## A página deve incluir

- 4 cards com métricas: ex. Clientes atendidos, Produtos disponíveis, Anos de mercado, Avaliações positivas
- Ícone representativo para cada métrica
- Número em destaque e descrição abaixo
- Fundo diferenciado para contrastar com o restante da página

## Critérios de conclusão

- [ ] Uso de `<dl>`, `<dt>` e `<dd>` ou `<figure>` para semântica
- [ ] Ícones com `aria-hidden="true"`
- [ ] Layout responsivo em 2 colunas mobile e 4 desktop
- [ ] Números legíveis com contraste adequado
```

---

### Issue 6 — Página de Política de Privacidade

**Título:**

```
Criar página de política de privacidade em conformidade com a LGPD
```

**Labels:** `html` `simples` `lgpd`

**Corpo:**

```markdown
## Descrição

Criar a página `privacy-policy.html` com o conteúdo completo da política de privacidade do projeto.

## A página deve incluir

- Índice com links âncora para cada seção
- Seções: Coleta de dados, Uso, Compartilhamento, Direitos do usuário, Contato
- Data da última atualização visível
- E-mail ou formulário de contato do DPO

## Critérios de conclusão

- [ ] Âncoras funcionais no índice
- [ ] Texto organizado com headings hierárquicos
- [ ] Layout legível com largura máxima de leitura (~65ch)
- [ ] Link de volta para a home
```

---

### Issue 7 — Página de Termos de Uso

**Título:**

```
Criar página de termos de uso com estrutura de seções
```

**Labels:** `html` `simples` `legal`

**Corpo:**

```markdown
## Descrição

Criar a página `terms.html` com os termos e condições de uso da plataforma.

## A página deve incluir

- Índice com links internos para cada cláusula
- Seções: Aceitação, Uso da Plataforma, Responsabilidades, Pagamentos, Cancelamentos
- Versão e data de vigência visíveis
- Botão de impressão da página

## Critérios de conclusão

- [ ] Heading hierárquico h1 > h2 > h3 correto
- [ ] Âncoras internas funcionais
- [ ] Botão de impressão com `window.print()` ou link `#`
- [ ] Footer com link para política de privacidade
```

---

### Issue 8 — Seção "Como Funciona"

**Título:**

```
Adicionar seção 'Como Funciona' com etapas visuais na home
```

**Labels:** `html` `simples` `institucional`

**Corpo:**

```markdown
## Descrição

Inserir na `index.html` uma seção que explica o processo de compra em etapas simples.

## A página deve incluir

- 3 a 4 etapas com número identificador, ícone e texto descritivo
- Linha ou seta conectando as etapas visualmente
- Título da seção e subtítulo descritivo
- CTA ao final convidando o usuário a começar

## Critérios de conclusão

- [ ] Uso de `<ol>` para representar a ordem das etapas
- [ ] Ícones com `aria-hidden="true"`
- [ ] Layout em linha (desktop) e coluna (mobile)
- [ ] CTA com link para produtos ou cadastro
```

---

### Issue 9 — Seção de Parceiros/Marcas

**Título:**

```
Adicionar seção de logos de parceiros e marcas na home
```

**Labels:** `html` `simples` `institucional`

**Corpo:**

```markdown
## Descrição

Criar uma seção visual com logos das marcas parceiras ou fornecedoras.

## A página deve incluir

- Entre 5 e 8 logos em linha
- Título da seção: "Nossas Marcas" ou "Parceiros"
- Logos em escala de cinza com hover colorido
- Links opcionais para a página de cada marca

## Critérios de conclusão

- [ ] Imagens com `alt` descritivo (nome da marca)
- [ ] Layout em flexbox centralizado
- [ ] Adaptação para 2 ou 3 por linha em mobile
- [ ] Logos com tamanho uniforme
```

---

### Issue 10 — Página de Resultados de Busca

**Título:**

```
Criar página de resultados de busca com feedback de quantidade encontrada
```

**Labels:** `html` `simples` `busca`

**Corpo:**

```markdown
## Descrição

Criar a página `search.html` que exibe os resultados de pesquisa com o termo buscado e a contagem.

## A página deve incluir

- Título dinâmico: "X resultados para 'termo'"
- Campo de busca pré-preenchido com o termo
- Grid de cards de produto (placeholder)
- Mensagem de nenhum resultado quando aplicável

## Critérios de conclusão

- [ ] Termo de busca exibido destacado no título
- [ ] Quantidade de resultados informada
- [ ] Estado de resultado vazio com sugestões
- [ ] Campo de busca com `role="search"` e `aria-label`
```

---

### Issue 11 — Seção de Benefícios

**Título:**

```
Adicionar seção de benefícios e diferenciais da loja na home
```

**Labels:** `html` `simples` `institucional`

**Corpo:**

```markdown
## Descrição

Criar bloco na `index.html` com ícones e textos destacando os principais benefícios da loja.

## A página deve incluir

- 4 benefícios: ex. Frete grátis, Troca fácil, Pagamento seguro, Suporte 24h
- Ícone e texto curto por benefício
- Layout horizontal em desktop

## Critérios de conclusão

- [ ] Layout responsivo (2x2 mobile, 4x1 desktop)
- [ ] Ícones com `aria-hidden="true"`
- [ ] Texto de cada benefício conciso (máximo 2 linhas)
- [ ] Seção separada visualmente (ex: fundo levemente distinto)
```

---

### Issue 12 — Tabela Comparativa de Planos

**Título:**

```
Criar tabela comparativa de planos ou produtos com destaque para o recomendado
```

**Labels:** `html` `simples` `conteudo`

**Corpo:**

```markdown
## Descrição

Criar um bloco de comparação de planos usando tabela HTML semântica.

## A página deve incluir

- 3 colunas de planos: Básico, Pro e Enterprise
- Linhas com features e checkmark ou ✗ indicando disponibilidade
- Coluna do plano recomendado visualmente destacada
- Botão de CTA em cada coluna

## Critérios de conclusão

- [ ] Uso correto de `<table>`, `<thead>`, `<tbody>` e `<th scope>`
- [ ] Acessível para leitores de tela
- [ ] Responsivo (scroll horizontal em telas pequenas)
- [ ] Coluna destaque com `aria-label="Recomendado"`
```

---

### Issue 13 — Seção de Categorias na Home

**Título:**

```
Criar seção de navegação por categorias de produtos na página inicial
```

**Labels:** `html` `simples` `navegacao`

**Corpo:**

```markdown
## Descrição

Adicionar na `index.html` uma seção de acesso rápido às categorias de produtos com imagem e nome.

## A página deve incluir

- Grid com 4 a 6 categorias
- Imagem representativa e nome de cada categoria
- Link para a página de produtos filtrada por categoria
- Efeito de hover descritivo (via CSS class)

## Critérios de conclusão

- [ ] Links com `href` apontando para `products.html?categoria=X`
- [ ] Imagens com `alt` contendo o nome da categoria
- [ ] Layout em grid 2x2 mobile e 3x2 ou 6x1 desktop
- [ ] Tags `<article>` ou `<figure>` para semântica adequada
```

---

### Issue 14 — Banner Promocional na Hero

**Título:**

```
Adicionar banner de promoção temporária sobre a hero section
```

**Labels:** `html` `simples` `marketing`

**Corpo:**

```markdown
## Descrição

Inserir acima do header ou dentro da hero section um banner fino de promoção com prazo ou código.

## A página deve incluir

- Texto da promoção (ex: "Use o cupom SAVE10 e ganhe 10% off")
- Botão ou link discreto de fechar
- Countdown opcional até o fim da promoção

## Critérios de conclusão

- [ ] Banner com `role="banner"` correto
- [ ] Botão fechar com `aria-label="Fechar promoção"`
- [ ] Texto legível em mobile (sem overflow)
- [ ] Estrutura não quebra o layout do header
```

---

### Issue 15 — Página de Reviews de Produto

**Título:**

```
Criar seção de avaliações de clientes dentro da página de detalhe do produto
```

**Labels:** `html` `simples` `ecommerce`

**Corpo:**

```markdown
## Descrição

Expandir a `product-detail.html` com uma seção de reviews escritos por compradores.

## A página deve incluir

- Nota geral com estrelas (ex: 4.3/5)
- Breakdown por nota (barra de progresso por estrela)
- Lista de reviews com: nome, data, estrelas e texto
- Botão "Escrever avaliação" que abre formulário

## Critérios de conclusão

- [ ] Estrutura com `<article>` por review
- [ ] Estrelas com `aria-label="X de 5 estrelas"`
- [ ] Data formatada com `<time datetime="...">`
- [ ] Formulário de avaliação com campos: nota, título e texto
```

---

### Issue 16 — Indicador de Estoque Baixo

**Título:**

```
Adicionar indicador visual de estoque baixo nos cards de produto
```

**Labels:** `html` `simples` `ecommerce`

**Corpo:**

```markdown
## Descrição

Exibir uma mensagem de alerta nos cards quando o produto tem poucas unidades disponíveis.

## A página deve incluir

- Texto "Últimas X unidades" abaixo do preço quando estoque < 5
- Ícone de alerta ou cor de destaque na mensagem
- Estado "Esgotado" quando estoque = 0, com botão desabilitado

## Critérios de conclusão

- [ ] Classe `.low-stock` e `.out-of-stock` definidas no HTML
- [ ] Botão de compra com `disabled` quando esgotado
- [ ] Texto de `aria-label` atualizado para indicar disponibilidade
- [ ] Sem layout shift ao exibir o indicador
```

---

### Issue 17 — Seção de Perguntas do Produto

**Título:**

```
Adicionar seção de perguntas e respostas na página de detalhe do produto
```

**Labels:** `html` `simples` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar na `product-detail.html` uma seção de Q&A onde compradores podem visualizar dúvidas frequentes do produto.

## A página deve incluir

- Lista de perguntas e respostas existentes
- Campo para enviar nova pergunta
- Indicação de quem respondeu (ex: "Loja" ou "Comprador verificado")
- Link "Ver mais perguntas" para expandir a lista

## Critérios de conclusão

- [ ] Uso de `<details>` e `<summary>` para cada par de Q&A
- [ ] Formulário de envio de pergunta com campo de texto e botão
- [ ] Nome do respondente em `<cite>` quando aplicável
- [ ] Layout consistente com o restante da página do produto
```

---

## 🟡 HTML — INTERMEDIÁRIO

---

### Issue 18 — Landing Page de Promoção

**Título:**

```
Criar landing page dedicada para campanha promocional
```

**Labels:** `html` `intermediario` `marketing`

**Corpo:**

```markdown
## Descrição

Criar a página `promo.html` como landing page focada em conversão para uma campanha específica.

## A página deve incluir

- Hero com headline, subtítulo e CTA principal
- Countdown até o fim da promoção
- Grid de produtos em promoção com desconto visível
- Formulário de captura de e-mail
- Seção de depoimentos relacionados à promoção

## Critérios de conclusão

- [ ] Sem header/footer completos (página focada em conversão)
- [ ] Countdown com elemento `<time>` semântico
- [ ] Meta tags OG customizadas para compartilhamento
- [ ] CTA em múltiplos pontos da página
```

---

### Issue 19 — Microdata de Produto Schema.org

**Título:**

```
Adicionar marcação Schema.org de produto na página de detalhe
```

**Labels:** `html` `intermediario` `seo`

**Corpo:**

```markdown
## Descrição

Implementar microdata ou JSON-LD com Schema.org Product na `product-detail.html` para rich results no Google.

## A página deve incluir

- Propriedades: name, image, description, sku, brand, offers
- Markup de avaliações com aggregateRating
- Disponibilidade mapeada para schema:InStock / schema:OutOfStock
- JSON-LD inserido no `<head>` da página

## Critérios de conclusão

- [ ] Validado sem erros no Google Rich Results Test
- [ ] Preço com currency em BRL
- [ ] AggregateRating com ratingValue e reviewCount
- [ ] Nenhuma informação falsa ou fabricada no markup
```

---

### Issue 20 — Tabs de Produto

**Título:**

```
Implementar sistema de abas (tabs) na página de detalhe do produto
```

**Labels:** `html` `intermediario` `ux`

**Corpo:**

```markdown
## Descrição

Organizar as informações complementares do produto em abas: Descrição, Especificações, Avaliações e Envio.

## A página deve incluir

- 4 abas com conteúdo distinto
- Tab ativa visualmente diferenciada
- Conteúdo de cada tab em painel correspondente
- Navegação por teclado entre as abas

## Critérios de conclusão

- [ ] ARIA: `role="tablist"`, `role="tab"`, `role="tabpanel"`
- [ ] `aria-selected` e `aria-controls` configurados
- [ ] Navegação por setas esquerda/direita entre tabs
- [ ] Apenas o painel ativo visível no DOM
```

---

### Issue 21 — Página de Artigo do Blog

**Título:**

```
Criar template de página de detalhe de artigo do blog
```

**Labels:** `html` `intermediario` `conteudo`

**Corpo:**

```markdown
## Descrição

Criar a página `blog-post.html` com estrutura completa para exibição de um artigo.

## A página deve incluir

- Título do artigo, autor, data e tempo de leitura
- Imagem de capa com caption
- Corpo do artigo com headings, parágrafos e listas
- Sidebar com artigos relacionados e categorias
- Botões de compartilhamento social

## Critérios de conclusão

- [ ] Uso de `<article>`, `<header>`, `<main>` e `<aside>`
- [ ] Autor com `rel="author"` e data com `<time>`
- [ ] Imagem de capa com `figcaption`
- [ ] Breadcrumb de navegação no topo
```

---

### Issue 22 — Formulário de Busca Avançada

**Título:**

```
Criar formulário de busca avançada com múltiplos filtros
```

**Labels:** `html` `intermediario` `busca`

**Corpo:**

```markdown
## Descrição

Criar um componente de busca expandido com filtros de categoria, faixa de preço e avaliação mínima.

## A página deve incluir

- Campo de texto principal
- Select de categoria
- Range de preço mínimo e máximo
- Seletor de avaliação mínima (estrelas)
- Botão **Buscar** e link **Limpar filtros**

## Critérios de conclusão

- [ ] Formulário com `method="get"` para bookmarkability
- [ ] Todos os campos com `label` acessível
- [ ] Fieldset com legend para agrupar filtros relacionados
- [ ] Botão de limpar reseta todos os campos
```

---

### Issue 23 — Cabeçalho Fixo com Comportamento no Scroll

**Título:**

```
Adaptar o header para ter comportamento visual diferente após scroll
```

**Labels:** `html` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Modificar o `header` para aceitar uma classe CSS que reduz seu tamanho após o usuário rolar a página.

## A página deve incluir

- Estrutura do header preparada para receber classe `.scrolled`
- Logo em tamanho normal e reduzido definidos via classes
- Atributo `data-scrolled` para ser controlado via JS
- Skip link acessível antes do header

## Critérios de conclusão

- [ ] Skip link com `href="#main-content"` visível ao focar
- [ ] Classe `.scrolled` documentada com comentário no HTML
- [ ] Header com `position: sticky` e `z-index` adequado
- [ ] Logo acessível com `alt` contendo o nome do projeto
```

---

### Issue 24 — Tabela de Medidas

**Título:**

```
Criar modal ou seção de tabela de medidas para produtos de vestuário
```

**Labels:** `html` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Adicionar na `product-detail.html` um elemento de guia de tamanhos para produtos de roupa ou calçado.

## A página deve incluir

- Botão "Guia de Tamanhos" que abre o conteúdo
- Tabela com colunas: Tamanho, Busto, Cintura, Quadril ou equivalente
- Instruções de como tirar as medidas
- Tabela de conversão (BR, EUA, EU)

## Critérios de conclusão

- [ ] Tabela com `<caption>` descritivo
- [ ] `<th scope="col">` e `<th scope="row">` corretos
- [ ] Acessível sem JavaScript (detalhes sobre o produto)
- [ ] Responsiva com scroll horizontal em mobile
```

---

### Issue 25 — Seção de Produtos Relacionados

**Título:**

```
Adicionar seção de produtos relacionados na página de detalhe
```

**Labels:** `html` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar na `product-detail.html` uma seção horizontal com produtos da mesma categoria ou complementares.

## A página deve incluir

- Título "Você também pode gostar"
- Carrossel ou row de 4 a 6 cards de produto
- Botão "Ver mais" para ir à listagem completa da categoria
- Cards com imagem, nome, preço e botão de adicionar ao carrinho

## Critérios de conclusão

- [ ] Seção marcada com `<section aria-label="Produtos relacionados">`
- [ ] Cards com links para suas respectivas páginas de detalhe
- [ ] Scroll horizontal em mobile sem quebrar layout
- [ ] Imagens com `loading="lazy"`
```

---

### Issue 26 — Timeline de Pedido

**Título:**

```
Criar página de acompanhamento de pedido com timeline de status
```

**Labels:** `html` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar a página `order-status.html` com uma timeline visual indicando o progresso do pedido.

## A página deve incluir

- Etapas: Pedido confirmado → Em separação → Despachado → Saiu para entrega → Entregue
- Step ativo visualmente destacado
- Data e hora de cada etapa concluída
- Informações do pedido: número, itens, endereço de entrega

## Critérios de conclusão

- [ ] Uso de `<ol>` para representar a sequência de etapas
- [ ] Etapa ativa com `aria-current="step"`
- [ ] Datas com `<time datetime="...">`
- [ ] Responsivo e legível em mobile
```

---

### Issue 27 — Formulário de Avaliação de Produto

**Título:**

```
Criar formulário de avaliação de produto com rating por estrelas
```

**Labels:** `html` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Implementar em `product-detail.html` um formulário completo para o cliente avaliar o produto.

## A página deve incluir

- Seletor de nota de 1 a 5 com estrelas clicáveis
- Campo de título da avaliação
- Textarea para o comentário
- Upload opcional de foto do produto em uso
- Checkbox confirmando que o usuário é comprador verificado

## Critérios de conclusão

- [ ] Stars usando `<input type="radio">` com labels estilizados
- [ ] Upload com `accept="image/*"` e tamanho máximo indicado
- [ ] Todos os campos com `label` associado por `for`/`id`
- [ ] Botão de envio com `type="submit"` explícito
```

---

### Issue 28 — Página de Mapa do Site

**Título:**

```
Criar página de sitemap HTML para navegação e SEO
```

**Labels:** `html` `intermediario` `seo`

**Corpo:**

```markdown
## Descrição

Criar a página `sitemap.html` com links organizados para todas as seções e páginas do projeto.

## A página deve incluir

- Grupos de links por área: Institucional, Produtos, Conta, Ajuda
- Subgrupos com links para páginas específicas
- Data da última atualização do sitemap
- Link para o `sitemap.xml` para bots

## Critérios de conclusão

- [ ] Uso de `<nav>` com `aria-label="Mapa do site"`
- [ ] Links organizados em listas aninhadas
- [ ] Todos os links verificados e com `href` correto
- [ ] Página indexável pelo Google (sem `noindex`)
```

---

### Issue 29 — Seção de Comparação de Planos

**Título:**

```
Criar página de comparação entre planos de assinatura
```

**Labels:** `html` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar a página `pricing.html` com comparação detalhada entre planos de assinatura da loja.

## A página deve incluir

- Toggle mensal/anual no topo com desconto para anual
- 3 cards de plano: Grátis, Pro, Enterprise
- Lista de features por plano com ícones de sim/não
- Botão de CTA com cor distinta por plano

## Critérios de conclusão

- [ ] Toggle com `<input type="checkbox">` acessível
- [ ] Plano recomendado com `aria-label` e destaque visual
- [ ] Preços com conteúdo dinâmico via `data-monthly` e `data-annual`
- [ ] FAQ de planos ao final da página
```

---

### Issue 30 — Indicador de Progresso em Formulário

**Título:**

```
Adicionar barra de progresso visual em formulário de múltiplas etapas
```

**Labels:** `html` `intermediario` `ux`

**Corpo:**

```markdown
## Descrição

Inserir no formulário de checkout ou cadastro um indicador de progresso que mostra em qual etapa o usuário está.

## A página deve incluir

- Steps numerados (1, 2, 3) com label de cada etapa
- Step atual visualmente ativo
- Steps concluídos com ícone de check
- Porcentagem de progresso indicada textualmente

## Critérios de conclusão

- [ ] Uso de `<ol>` com `aria-label="Etapas do formulário"`
- [ ] Step ativo com `aria-current="step"`
- [ ] `<progress>` ou elemento equivalente acessível
- [ ] Responsivo em todas as telas
```

---

### Issue 31 — Modal de Confirmação de Remoção

**Título:**

```
Criar modal de confirmação antes de remover item do carrinho
```

**Labels:** `html` `intermediario` `ux`

**Corpo:**

```markdown
## Descrição

Implementar um modal de confirmação exibido ao clicar em "Remover" em qualquer item do carrinho.

## A página deve incluir

- Título do modal: "Remover item do carrinho?"
- Nome do produto sendo removido
- Botão **Confirmar remoção** e botão **Cancelar**
- Opção "Mover para favoritos" como alternativa

## Critérios de conclusão

- [ ] `role="dialog"`, `aria-modal="true"` e `aria-labelledby` configurados
- [ ] Foco inicial no botão de cancelar
- [ ] Fechamento com tecla ESC
- [ ] Overlay escuro com clique para fechar
```

---

### Issue 32 — Accordion de Informações de Envio

**Título:**

```
Adicionar accordion de detalhes de envio e devolução na página do produto
```

**Labels:** `html` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar na `product-detail.html` um accordion com informações de frete, prazo e política de devolução.

## A página deve incluir

- Seções: Calcular Frete (com campo CEP), Prazos de entrega, Política de devolução
- Cada seção expansível/colapsável
- Ícone de seta rotacionando no open/close
- Link para página completa de FAQ ao final

## Critérios de conclusão

- [ ] Uso de `<details>` e `<summary>` nativos do HTML
- [ ] Campo de CEP com `type="text"` e `inputmode="numeric"`
- [ ] Link de FAQ com `target="_blank"` e `rel="noopener"`
- [ ] Primeiro item aberto por padrão com atributo `open`
```

---

### Issue 33 — Login com Provedores Sociais

**Título:**

```
Adicionar botões de autenticação social na página de login
```

**Labels:** `html` `intermediario` `auth`

**Corpo:**

```markdown
## Descrição

Expandir a página de login com opções de autenticação via Google, Facebook e Apple.

## A página deve incluir

- Botões com logo do provedor: "Continuar com Google", "Continuar com Facebook"
- Separador visual entre login social e formulário tradicional
- Texto de consentimento abaixo dos botões sociais
- Link "O que é isso?" com explicação sobre autenticação social

## Critérios de conclusão

- [ ] Botões com ícone SVG e texto descritivo
- [ ] Separador com `role="separator"` e `aria-hidden`
- [ ] `rel="noopener noreferrer"` em links externos
- [ ] Estrutura não duplica campos já existentes no formulário
```

---

### Issue 34 — Seção de Histórico de Pedidos

**Título:**

```
Criar seção de histórico de pedidos na página de perfil do usuário
```

**Labels:** `html` `intermediario` `auth`

**Corpo:**

```markdown
## Descrição

Desenvolver o bloco de pedidos anteriores dentro de `profile.html` com listagem e filtros básicos.

## A página deve incluir

- Tabela ou lista de pedidos com: número, data, valor e status
- Filtro por status: Todos, Em andamento, Entregue, Cancelado
- Botão "Ver detalhes" por pedido
- Paginação ou botão "Carregar mais"

## Critérios de conclusão

- [ ] Status representado com badge colorido e texto
- [ ] Tabela com `<caption>` e cabeçalhos acessíveis
- [ ] Filtros com `<select>` ou botões de filtro acessíveis
- [ ] Link de "Ver detalhes" com href para página de status do pedido
```

---

## 🔴 HTML — COMPLEXO

---

### Issue 35 — Dashboard do Vendedor

**Título:**

```
Criar página de dashboard para vendedores com métricas e gestão de produtos
```

**Labels:** `html` `complexo` `admin`

**Corpo:**

```markdown
## Descrição

Criar a página `seller-dashboard.html` com visão geral de vendas, produtos e pedidos do vendedor.

## A página deve incluir

- Sidebar de navegação lateral com links para seções
- Cards de métricas: Vendas do mês, Pedidos pendentes, Produtos ativos, Receita
- Tabela de últimos pedidos recebidos
- Gráfico placeholder (elemento HTML sem JS real)
- Seção de ações rápidas: Adicionar produto, Ver estoque, Sacar

## Critérios de conclusão

- [ ] Layout de duas colunas: sidebar + conteúdo principal
- [ ] `<nav>` com `aria-label="Menu do vendedor"`
- [ ] Uso de `<main>`, `<aside>` e `<header>` corretos
- [ ] Cards com `role="region"` e `aria-label` descritivo
- [ ] Responsivo: sidebar colapsada em mobile
```

---

### Issue 36 — Template de E-mail HTML

**Título:**

```
Criar template de e-mail transacional HTML para confirmação de pedido
```

**Labels:** `html` `complexo` `email`

**Corpo:**

```markdown
## Descrição

Criar o arquivo `email-order-confirmation.html` como template de e-mail transacional compatível com os principais clientes de e-mail.

## A página deve incluir

- Layout baseado em tabelas (compatibilidade com clientes de e-mail antigos)
- Header com logo e nome da loja
- Detalhes do pedido: itens, quantidades e preços
- Endereço de entrega e prazo estimado
- Botão CTA "Rastrear Pedido"
- Footer com links para descadastramento e política de privacidade

## Critérios de conclusão

- [ ] Estilos inline (não em `<style>` externo)
- [ ] Largura máxima de 600px
- [ ] Imagens com `alt` completo (e-mails podem bloquear imagens)
- [ ] Testado no Litmus Email Previewer ou equivalente
- [ ] Links absolutos (sem caminhos relativos)
```

---

### Issue 37 — Onboarding de Novo Usuário

**Título:**

```
Criar fluxo de onboarding para novos usuários após o cadastro
```

**Labels:** `html` `complexo` `ux`

**Corpo:**

```markdown
## Descrição

Criar a página `onboarding.html` com um wizard guiado que personaliza a experiência do novo usuário.

## A página deve incluir

- Etapa 1: Preferências de categorias (checkboxes visuais)
- Etapa 2: Informações de perfil adicionais (foto, bio)
- Etapa 3: Configurações de notificação
- Etapa 4: Tour rápido das funcionalidades
- Botão "Pular" em todas as etapas e botão "Concluir" na última

## Critérios de conclusão

- [ ] Cada etapa em um `<section>` com `aria-label` único
- [ ] Indicador de progresso (1 de 4, 2 de 4...)
- [ ] Botão de voltar entre etapas
- [ ] Checkboxes com imagem + label estilizado
- [ ] Estado de conclusão com mensagem de boas-vindas
```

---

### Issue 38 — Programa de Fidelidade

**Título:**

```
Criar página de programa de fidelidade com pontos e recompensas
```

**Labels:** `html` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar a página `loyalty.html` apresentando o programa de pontos da loja com saldo, histórico e catálogo de recompensas.

## A página deve incluir

- Card com saldo atual de pontos e nível do usuário
- Barra de progresso para o próximo nível
- Histórico de pontuação (tabela: data, descrição, pontos +/-)
- Catálogo de recompensas disponíveis para resgate
- FAQ do programa no rodapé da página

## Critérios de conclusão

- [ ] `<progress>` com `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- [ ] Tabela de histórico com `<caption>` descritivo
- [ ] Recompensas em grid de cards com botão de resgate
- [ ] Botão de resgate desabilitado se pontos insuficientes
- [ ] Nível com badge visual e descrição dos benefícios
```

---

### Issue 39 — Página de Administração de Produtos

**Título:**

```
Criar página de administração de produtos com listagem, busca e ações
```

**Labels:** `html` `complexo` `admin`

**Corpo:**

```markdown
## Descrição

Criar a página `admin-products.html` para gerenciar o catálogo de produtos da loja.

## A página deve incluir

- Tabela com: imagem thumbnail, nome, SKU, preço, estoque e status
- Paginação e seletor de itens por página
- Filtros: category, status (ativo/inativo), faixa de preço
- Ações em massa: ativar, desativar, excluir selecionados
- Botão de adicionar novo produto

## Critérios de conclusão

- [ ] Checkbox na primeira coluna para seleção individual e global
- [ ] Barra de ações em massa ativada ao selecionar pelo menos 1 item
- [ ] Paginação acessível com `aria-label`
- [ ] Tabela responsiva com scroll horizontal em mobile
- [ ] Filtros em formulário com `method="get"`
```

---

### Issue 40 — Comparação de Produtos

**Título:**

```
Criar página de comparação lado a lado de dois ou mais produtos
```

**Labels:** `html` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar a página `compare.html` onde o usuário visualiza dois ou mais produtos em colunas lado a lado.

## A página deve incluir

- Linha de imagens de cada produto no topo
- Linhas de atributos: Preço, Marca, Material, Avaliação, Estoque
- Destaque visual na coluna do produto "melhor" por atributo
- Botão de remover produto da comparação em cada coluna
- CTA "Adicionar ao Carrinho" em cada coluna

## Critérios de conclusão

- [ ] Uso de `<table>` com `<colgroup>` para larguras iguais
- [ ] `<th scope="row">` em cada atributo
- [ ] Atributo "melhor valor" com `aria-label="Melhor opção neste critério"`
- [ ] Máximo de 4 colunas de produto; mínimo de 2
- [ ] Responsivo com scroll horizontal em mobile
```

---

### Issue 41 — Wizard de Personalização de Produto

**Título:**

```
Criar wizard de personalização de produto com seleção de atributos
```

**Labels:** `html` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar um fluxo multi-etapas para que o usuário configure o produto antes de adicionar ao carrinho.

## A página deve incluir

- Etapa 1: Seleção de cor com swatches visuais
- Etapa 2: Escolha de tamanho com tabela de medidas inline
- Etapa 3: Inserção de personalização (ex: gravação/texto)
- Etapa 4: Resumo antes de adicionar ao carrinho
- Preview do produto atualizado a cada etapa

## Critérios de conclusão

- [ ] Cada etapa como `<fieldset>` com `<legend>` descritivo
- [ ] Swatches de cor implementados com `<input type="radio">` ocultos + label estilizado
- [ ] Resumo final com todos os atributos selecionados
- [ ] Botão "Adicionar ao Carrinho" apenas na etapa final
- [ ] Botões Anterior/Próximo com estados disabled corretos
```

---

### Issue 42 — Sistema de Avaliação Multi-Critério

**Título:**

```
Criar formulário de avaliação de produto com múltiplos critérios
```

**Labels:** `html` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Expandir o formulário de avaliação para coletar nota em múltiplos critérios além da nota geral.

## A página deve incluir

- Nota por critério: Qualidade, Custo-benefício, Entrega, Embalagem (1-5 estrelas cada)
- Campo de pontos positivos e pontos negativos separados
- Upload de até 3 fotos
- Checkbox "Compraria novamente"
- Indicação se o usuário recomendaria o produto

## Critérios de conclusão

- [ ] Cada critério em `<fieldset>` com `<legend>` próprio
- [ ] Input file para fotos com `multiple` e preview via CSS
- [ ] Todos os grupos de radio com nome (`name`) único por critério
- [ ] Formulário com `novalidate` para controle via JS futuro
- [ ] Layout clean e fácil de preencher em mobile
```

---

### Issue 43 — Landing Page com Countdown

**Título:**

```
Criar landing page de lançamento de produto com countdown e captura de leads
```

**Labels:** `html` `complexo` `marketing`

**Corpo:**

```markdown
## Descrição

Criar a página `launch.html` para um produto ainda não lançado, com expectativa e captação de interessados.

## A página deve incluir

- Hero com imagem do produto (blurred/teaser), headline e subheadline
- Countdown com dias, horas, minutos e segundos
- Formulário de captura de e-mail "Avise-me no lançamento"
- Seção de preview de features do produto
- Contador de interessados cadastrados

## Critérios de conclusão

- [ ] Countdown com `<time>` e valores em `<span>` com `aria-label`
- [ ] Formulário com `action` e `method="post"` estruturado
- [ ] Meta tags OG e Twitter Card configuradas
- [ ] Página sem header/footer padrão (foco na conversão)
- [ ] Design responsivo com imagem de fundo adaptável
```

---

### Issue 44 — Página de Afiliados

**Título:**

```
Criar página de programa de afiliados com dashboard e links rastreáveis
```

**Labels:** `html` `complexo` `marketing`

**Corpo:**

```markdown
## Descrição

Criar a página `affiliates.html` com painel de desempenho e ferramentas para afiliados da loja.

## A página deve incluir

- Métricas: Cliques, Conversões, Comissão pendente, Comissão paga
- Campo com link de afiliado copiável
- Tabela de comissões por período
- Galeria de banners para divulgação (com link de download)
- Formulário de saque com dados bancários

## Critérios de conclusão

- [ ] Link copiável com botão "Copiar" e `data-clipboard-target`
- [ ] Tabela de comissões com totalizador no rodapé
- [ ] Banners em diferentes tamanhos (300x250, 728x90)
- [ ] Formulário de saque com campos obrigatórios e validação HTML5
- [ ] Sidebar com dicas de como aumentar as conversões
```

---

### Issue 45 — Formulário de Cotação Multi-Etapas

**Título:**

```
Criar formulário de solicitação de cotação em múltiplas etapas para B2B
```

**Labels:** `html` `complexo` `b2b`

**Corpo:**

```markdown
## Descrição

Criar a página `quote.html` com wizard de cotação para clientes corporativos.

## A página deve incluir

- Etapa 1: Dados da empresa (CNPJ, razão social, segmento)
- Etapa 2: Seleção dos produtos e quantidades desejadas
- Etapa 3: Endereço de entrega e prazo desejado
- Etapa 4: Dados do responsável e canal de contato
- Etapa 5: Revisão completa e envio

## Critérios de conclusão

- [ ] CNPJ com `inputmode="numeric"` e máscara indicada no `placeholder`
- [ ] Etapa 2 com buscador de produto e campo de quantidade
- [ ] Indicador de progresso acessível com `role="progressbar"`
- [ ] Revisão final listando todos os campos preenchidos
- [ ] Botão de envio com texto "Solicitar Cotação"
```

---

### Issue 46 — Página de Assinatura Recorrente

**Título:**

```
Criar página de assinatura de produto recorrente com ciclo e benefícios
```

**Labels:** `html` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar a página `subscribe.html` para que o usuário configure e ative uma assinatura de produto.

## A página deve incluir

- Seletor de frequência: semanal, quinzenal, mensal
- Preview de desconto conforme frequência selecionada
- Resumo do custo por ciclo e data estimada do próximo envio
- Opção de pausar, alterar ou cancelar assinatura existente
- FAQ da assinatura ao final

## Critérios de conclusão

- [ ] Frequência com `<input type="radio">` em `<fieldset>`
- [ ] Desconto calculado e exibido dinamicamente (placeholder JS)
- [ ] Data de próximo envio com `<time>`
- [ ] Botões de gerência com confirmações antes de cancelar
- [ ] Seção de FAQ com `<details>` e `<summary>`
```

---

### Issue 47 — Manifest PWA e Splash Screen

**Título:**

```
Criar estrutura HTML e manifest para transformar o projeto em PWA instalável
```

**Labels:** `html` `complexo` `pwa`

**Corpo:**

```markdown
## Descrição

Preparar as páginas HTML com as meta tags e referências necessárias para que o projeto possa ser instalado como PWA.

## A página deve incluir

- Link para `manifest.json` no `<head>`
- Meta tags `theme-color` e `apple-mobile-web-app-capable`
- Ícones em múltiplas resoluções (192px, 512px)
- Splash screen via meta tags para iOS
- `<noscript>` com mensagem informativa

## Critérios de conclusão

- [ ] `manifest.json` com name, short_name, icons, start_url, display
- [ ] Meta viewport correto para PWA
- [ ] Service Worker registrado no HTML (comentário placeholder)
- [ ] Testado no Lighthouse com score PWA > 80
- [ ] Ícones com `purpose: "any maskable"`
```

---

### Issue 48 — Página de Indicação de Amigos

**Título:**

```
Criar página de programa de indicação com geração de link pessoal
```

**Labels:** `html` `complexo` `marketing`

**Corpo:**

```markdown
## Descrição

Criar a página `referral.html` do programa de "Indique um amigo" com regras, link pessoal e histórico.

## A página deve incluir

- Explicação do programa: como funciona, benefícios para quem indica e para o indicado
- Área de geração e cópia do link pessoal
- Campo de e-mail para convite direto (envio de vários e-mails)
- Histórico de indicações: nome, status e bônus obtido
- Regras do programa em accordion

## Critérios de conclusão

- [ ] Link pessoal em campo readonly com botão "Copiar"
- [ ] Campo de múltiplos e-mails com separação por vírgula ou Enter
- [ ] Tabela de histórico com status colorido por badge
- [ ] Regras em `<details>` / `<summary>` acessível
- [ ] Meta tags configuradas para compartilhamento do link
```

---

### Issue 49 — Página de Erro 500

**Título:**

```
Criar página de erro interno do servidor (500) com opções de recuperação
```

**Labels:** `html` `complexo` `ux`

**Corpo:**

```markdown
## Descrição

Criar a página `500.html` amigável que é exibida quando ocorre um erro interno no servidor.

## A página deve incluir

- Ilustração ou ícone relacionado ao erro
- Mensagem clara sem jargões técnicos
- Código de erro exibido para suporte (referência)
- Botões: Tentar novamente, Voltar para a home, Contatar suporte
- Campo oculto com ID de rastreamento do erro (placeholder)

## Critérios de conclusão

- [ ] Mensagem empática e tranquilizadora
- [ ] Botão "Tentar novamente" com `onclick="location.reload()"`
- [ ] Links de suporte com `mailto:` ou para página de contato
- [ ] Código de erro com `role="alert"` para leitores de tela
- [ ] Design consistente com o projeto mas sem depender de assets externos
```

---

### Issue 50 — Página de Gestão de Endereços

**Título:**

```
Criar página de gerenciamento completo de endereços salvos do usuário
```

**Labels:** `html` `complexo` `auth`

**Corpo:**

```markdown
## Descrição

Criar a página `addresses.html` com CRUD completo de endereços cadastrados pelo usuário.

## A página deve incluir

- Listagem de endereços salvos em cards
- Indicação visual do endereço padrão
- Formulário de adição de novo endereço (campos completos)
- Botões de editar e excluir por endereço
- Modal de confirmação de exclusão

## Critérios de conclusão

- [ ] Formulário completo: CEP, rua, número, complemento, bairro, cidade, estado
- [ ] CEP com `type="text"`, `inputmode="numeric"`, `maxlength="9"`
- [ ] Endereço padrão com `aria-label="Endereço padrão"`
- [ ] Modal de exclusão com `role="alertdialog"`
- [ ] Botão "Definir como padrão" em cada endereço não-padrão
```

---

_50 issues — HTML (17 simples · 17 intermediário · 16 complexo)_

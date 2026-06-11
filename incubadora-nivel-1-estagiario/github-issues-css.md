# 📋 50 Issues — CSS

---

## 🟢 CSS — SIMPLES

---

### Issue 1 — Variantes de Botão

**Título:**

```
Criar variantes de botão: outlined, ghost e danger
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Expandir os estilos de botão do projeto com novas variantes além do botão primário padrão.

## Deve incluir

- `.btn-outlined`: borda sólida, fundo transparente
- `.btn-ghost`: sem borda, fundo transparente, apenas texto colorido
- `.btn-danger`: vermelho para ações destrutivas
- Hover e focus visíveis em todas as variantes

## Critérios de conclusão

- [ ] Todas as variantes baseadas em variáveis CSS do projeto
- [ ] Tamanho e espaçamento idênticos ao botão padrão
- [ ] Cada variante com estado `disabled` estilizado
- [ ] Contraste adequado (WCAG AA) em todas as variantes
```

---

### Issue 2 — Paleta de Cores Documentada

**Título:**

```
Documentar e organizar a paleta de cores completa com variáveis CSS
```

**Labels:** `css` `simples` `design-system`

**Corpo:**

```markdown
## Descrição

Centralizar e documentar todas as cores do projeto como variáveis CSS no arquivo `variables.css`.

## Deve incluir

- Cores primárias, secundárias e neutras
- Variáveis semânticas: `--color-success`, `--color-error`, `--color-warning`, `--color-info`
- Escala de cinza de 50 a 900
- Comentários agrupando as variáveis por categoria

## Critérios de conclusão

- [ ] Sem cores hardcoded fora das variáveis
- [ ] Nomenclatura consistente (`--color-[categoria]-[tonalidade]`)
- [ ] Cores com valores HEX e comentário de uso recomendado
- [ ] Escala de cinza completa e usável em textos e fundos
```

---

### Issue 3 — Zebra Striping em Tabelas

**Título:**

```
Estilizar tabelas com zebra striping e hover nas linhas
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar estilo padrão para tabelas do projeto com alternância de cor nas linhas e feedback de hover.

## Deve incluir

- Linhas pares com fundo levemente diferenciado
- Hover na linha com cor de destaque sutil
- Borda inferior em cada linha `<tr>`
- Cabeçalho `<thead>` com fundo de cor primária e texto branco

## Critérios de conclusão

- [ ] Zebra com `:nth-child(even)`
- [ ] Cores baseadas em variáveis CSS do projeto
- [ ] Contraste adequado no cabeçalho
- [ ] Responsivo com classe `.table-responsive` para scroll horizontal
```

---

### Issue 4 — Utilitários de Espaçamento

**Título:**

```
Criar classes utilitárias de margin e padding baseadas em escala
```

**Labels:** `css` `simples` `utilities`

**Corpo:**

```markdown
## Descrição

Gerar um conjunto de classes utilitárias de espaçamento para uso rápido nos templates HTML.

## Deve incluir

- Classes `.m-{n}` e `.p-{n}` de 0 a 8 (baseadas em múltiplos de 4px ou 8px)
- Variantes direcionais: `.mt-`, `.mb-`, `.ml-`, `.mr-`, `.mx-`, `.my-`
- Classe `.m-auto` e `.mx-auto` para centralização
- Escala baseada em variável CSS `--spacing-base`

## Critérios de conclusão

- [ ] Escala definida com variáveis CSS
- [ ] Classes geradas sem duplicação de código (quando possível)
- [ ] Documentadas com comentário de valores no CSS
- [ ] Não sobrepõem estilos de componentes já existentes
```

---

### Issue 5 — Links com Underline Animado

**Título:**

```
Estilizar links de texto com underline animado deslizante
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar uma classe reutilizável de link com animação de sublinhado deslizante ao hover.

## Deve incluir

- Underline crescendo da esquerda para a direita no hover
- Retrocedendo da direita para a esquerda ao sair do hover
- Cor do underline baseada na cor primária do projeto
- Transição de 0.3s com ease

## Critérios de conclusão

- [ ] Implementado via pseudo-elemento `::after`
- [ ] Sem underline nativo (`text-decoration: none`)
- [ ] Focusable com outline visível para acessibilidade
- [ ] Compatível com textos em múltiplas linhas
```

---

### Issue 6 — Loading em Botão

**Título:**

```
Criar estado de loading visível dentro dos botões de ação
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Implementar um indicador visual de carregamento que aparece dentro do botão enquanto uma ação está em andamento.

## Deve incluir

- Spinner pequeno substituindo ou acompanhando o texto
- Classe `.btn-loading` aplicada ao botão
- Botão com `pointer-events: none` no estado loading
- Tamanho do spinner proporcional ao botão

## Critérios de conclusão

- [ ] Spinner criado com `border` e `@keyframes` (sem imagem)
- [ ] Botão não muda de tamanho ao entrar no estado loading
- [ ] Cor do spinner com contraste adequado sobre o fundo do botão
- [ ] Estado removido ao concluir a ação (via remoção da classe)
```

---

### Issue 7 — Estilo Padrão de Cards

**Título:**

```
Definir estilo base de card reutilizável com variações de elevação
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar a classe `.card` como componente base com variações de sombra/elevação.

## Deve incluir

- `.card`: fundo branco, border-radius e sombra leve
- `.card-elevated`: sombra mais pronunciada
- `.card-flat`: sem sombra, apenas borda fina
- Padding interno padrão e sem overflow de imagem

## Critérios de conclusão

- [ ] Sombras baseadas em variáveis CSS
- [ ] `border-radius` consistente com o design system
- [ ] `.card img` com `border-radius` no topo para cards com imagem
- [ ] Não quebra layouts de grid existentes
```

---

### Issue 8 — Utilitários de Visibilidade

**Título:**

```
Criar classes utilitárias de visibilidade e display responsivo
```

**Labels:** `css` `simples` `utilities`

**Corpo:**

```markdown
## Descrição

Adicionar classes utilitárias para mostrar e ocultar elementos em diferentes breakpoints.

## Deve incluir

- `.hidden`: display none em todos os tamanhos
- `.sr-only`: visível apenas para leitores de tela
- `.hide-mobile`: oculto em telas < 768px
- `.hide-desktop`: oculto em telas >= 768px
- `.show-mobile` e `.show-desktop` correspondentes

## Critérios de conclusão

- [ ] `.sr-only` com clip-path adequado (não usar `display:none`)
- [ ] Classes não usam `!important` desnecessariamente
- [ ] Breakpoints alinhados com os do restante do projeto
- [ ] Documentadas com comentário de uso
```

---

### Issue 9 — Estilos de Listas

**Título:**

```
Estilizar listas ordenadas e não ordenadas com marcadores personalizados
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar estilos padronizados para listas `<ul>` e `<ol>` dentro do conteúdo editorial do projeto.

## Deve incluir

- Marcadores de `<ul>` substituídos por SVG ou símbolo customizado
- Numeração estilizada em `<ol>` com cor primária
- Espaçamento entre itens consistente
- Suporte a lista aninhada com recuo adequado

## Critérios de conclusão

- [ ] Estilos aplicados via classe `.list-styled`
- [ ] Marcadores com cor primária do projeto
- [ ] Listas aninhadas até 2 níveis com recuo visual claro
- [ ] Reset de margens para listas de navegação (`.list-reset`)
```

---

### Issue 10 — Estilo de Blockquote

**Título:**

```
Estilizar blockquotes com borda lateral e estilo tipográfico
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar estilo visual para elementos `<blockquote>` usados em artigos de blog e depoimentos.

## Deve incluir

- Borda esquerda grossa na cor primária
- Texto em itálico e levemente maior que o corpo
- Cor de fundo sutil diferenciando do conteúdo ao redor
- Atribuição de autor com estilo diferenciado

## Critérios de conclusão

- [ ] Borda com `border-left` e cor de variável CSS
- [ ] Padding interno balanceado em todos os lados
- [ ] `cite` estilizado com cor secundária e não-itálico
- [ ] Responsivo sem overflow em mobile
```

---

### Issue 11 — Tags e Chips

**Título:**

```
Criar componente de tag/chip com variações de cor e ação
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Implementar o componente `.tag` para categorias, filtros ativos e labels em geral.

## Deve incluir

- `.tag`: estilo base com padding, border-radius arredondado e fundo sutil
- `.tag-primary`, `.tag-success`, `.tag-warning`, `.tag-error` com cores semânticas
- `.tag-removable`: com botão × interno
- `.tag-sm` e `.tag-lg` para variações de tamanho

## Critérios de conclusão

- [ ] Border-radius totalmente arredondado (pill shape)
- [ ] Cores de fundo com opacidade para não competir com o conteúdo
- [ ] Botão × com `line-height: 1` alinhado verticalmente
- [ ] Hover sutil em tags clicáveis
```

---

### Issue 12 — Tooltips CSS

**Título:**

```
Criar tooltips com CSS puro utilizando atributos data
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Implementar tooltips informativos que aparecem no hover sem uso de JavaScript.

## Deve incluir

- Tooltip posicionado acima do elemento alvo por padrão
- Variações de posição: top, bottom, left, right via classes
- Texto do tooltip via atributo `data-tooltip`
- Animação de fade-in suave

## Critérios de conclusão

- [ ] Implementado via pseudo-elementos `::before` e `::after`
- [ ] Acessível com `aria-label` ou `title` no HTML
- [ ] Z-index acima dos outros elementos
- [ ] Não ultrapassa os limites da viewport
```

---

### Issue 13 — Estilos para Impressão

**Título:**

```
Implementar estilos de @media print para páginas do projeto
```

**Labels:** `css` `simples` `acessibilidade`

**Corpo:**

```markdown
## Descrição

Criar regras de CSS para impressão que ocultam elementos desnecessários e otimizam o layout impresso.

## Deve incluir

- Ocultar: header, footer, sidebar, botões de UI, banners
- Mostrar URLs de links após o texto (`a::after`)
- Forçar fundo branco e texto preto
- Quebras de página adequadas para `<article>` e `<section>`

## Critérios de conclusão

- [ ] `@media print` separado no arquivo `utilities.css`
- [ ] URLs absolutas exibidas com `content: " (" attr(href) ")"`
- [ ] Fontes legíveis em tamanho de impressão (mínimo 12pt)
- [ ] Nenhum conteúdo importante cortado na margem
```

---

### Issue 14 — Ícones SVG Inline Estilizáveis

**Título:**

```
Criar sistema de estilização de ícones SVG inline com variáveis CSS
```

**Labels:** `css` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Padronizar o uso de ícones SVG inline no projeto, permitindo controle de cor e tamanho via CSS.

## Deve incluir

- Classe `.icon` com `width`, `height` e `fill: currentColor`
- Tamanhos: `.icon-sm` (16px), `.icon-md` (24px), `.icon-lg` (32px)
- Ícone inline herdando a cor do texto pai automaticamente
- `aria-hidden="true"` definido como padrão nos ícones decorativos

## Critérios de conclusão

- [ ] `fill: currentColor` para herdar cor do contexto
- [ ] Tamanhos definidos com variáveis CSS
- [ ] Nenhuma cor hardcoded dentro do SVG inline
- [ ] `vertical-align: middle` para alinhamento com texto
```

---

### Issue 15 — Bordas Arredondadas Utilitárias

**Título:**

```
Criar classes utilitárias para controle de border-radius
```

**Labels:** `css` `simples` `utilities`

**Corpo:**

```markdown
## Descrição

Adicionar classes de border-radius reutilizáveis para padronizar o arredondamento de elementos no projeto.

## Deve incluir

- `.rounded-none`: 0
- `.rounded-sm`: 4px
- `.rounded`: 8px
- `.rounded-lg`: 16px
- `.rounded-full`: 9999px (pill)
- `.rounded-top`, `.rounded-bottom`, `.rounded-left`, `.rounded-right`

## Critérios de conclusão

- [ ] Valores baseados em variáveis CSS (`--radius-sm`, etc.)
- [ ] Classes direcionais aplicando apenas os cantos corretos
- [ ] Não conflitam com border-radius de componentes existentes
- [ ] Documentadas com comentários no arquivo `utilities.css`
```

---

### Issue 16 — Estilo de Textarea

**Título:**

```
Estilizar textarea com resize limitado e contagem de caracteres visual
```

**Labels:** `css` `simples` `forms`

**Corpo:**

```markdown
## Descrição

Criar estilo padronizado para elementos `<textarea>` do projeto.

## Deve incluir

- `resize: vertical` apenas (sem resize horizontal)
- Altura mínima e máxima definidas
- Borda e fundo consistentes com os `<input>` do projeto
- Estilo de contador de caracteres posicionado no canto inferior direito

## Critérios de conclusão

- [ ] `resize: vertical` aplicado
- [ ] `min-height` e `max-height` com variáveis CSS
- [ ] Contador de caracteres alinhado com `position: relative` no wrapper
- [ ] Foco visual igual ao dos outros campos do formulário
```

---

### Issue 17 — Tabela de Preços

**Título:**

```
Estilizar tabela de preços de produtos com destaque para o valor principal
```

**Labels:** `css` `simples` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar estilo para a exibição de preços de produtos com preço original, desconto e preço final.

## Deve incluir

- Preço original com `text-decoration: line-through` e cor cinza
- Percentual de desconto em badge colorida
- Preço final em destaque com fonte grande e cor primária
- Preço parcelado em fonte menor abaixo

## Critérios de conclusão

- [ ] Hierarquia visual clara entre os três valores
- [ ] Badge de desconto com cores da variável `--color-success`
- [ ] Tamanhos de fonte proporcionais e baseados em variáveis
- [ ] Layout não quebra em nomes de produto longos
```

---

## 🟡 CSS — INTERMEDIÁRIO

---

### Issue 18 — Animação de Menu Dropdown

**Título:**

```
Criar animação de abertura e fechamento para menus dropdown
```

**Labels:** `css` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Implementar transições suaves de abertura para menus dropdown e submenus de navegação.

## Deve incluir

- Abertura com `transform: scaleY(0)` para `scaleY(1)` com `transform-origin: top`
- Fade de opacidade simultâneo
- Transição total de 0.2s
- Sombra de profundidade no dropdown aberto

## Critérios de conclusão

- [ ] Animação não causa layout shift
- [ ] Dropdown não visível para leitores de tela quando fechado (`visibility: hidden`)
- [ ] Compatível com menus acionados por hover e por foco (teclado)
- [ ] Z-index maior que o conteúdo da página
```

---

### Issue 19 — Checkbox e Radio Customizados

**Título:**

```
Estilizar checkbox e radio buttons com design customizado mantendo acessibilidade
```

**Labels:** `css` `intermediario` `forms`

**Corpo:**

```markdown
## Descrição

Substituir o visual padrão de checkboxes e radio buttons pelo design do projeto sem perder acessibilidade.

## Deve incluir

- Checkbox com ícone de check animado ao marcar
- Radio com ponto central preenchido ao selecionar
- Estado de foco com outline visível
- Estado desabilitado com opacidade reduzida

## Critérios de conclusão

- [ ] Input original oculto com `position: absolute; opacity: 0`
- [ ] Label estilizado via `input + label` ou `input:checked + label`
- [ ] Foco no input refletido no visual da label
- [ ] `cursor: pointer` na label, `cursor: not-allowed` no disabled
```

---

### Issue 20 — Glassmorphism em Cards

**Título:**

```
Aplicar efeito glassmorphism em cards de destaque
```

**Labels:** `css` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Criar variante `.card-glass` com efeito de vidro fosco para uso em seções com fundo de imagem ou gradiente.

## Deve incluir

- `backdrop-filter: blur(12px)` para o efeito de vidro
- Fundo semitransparente com `rgba`
- Borda fina com cor clara semitransparente
- Sombra sutil para separar do fundo

## Critérios de conclusão

- [ ] Fallback para navegadores sem suporte a `backdrop-filter`
- [ ] Contraste de texto adequado sobre fundo borrado
- [ ] Border com `rgba` para efeito mais natural
- [ ] Performance testada sem travamentos em animação de scroll
```

---

### Issue 21 — Layout Masonry

**Título:**

```
Implementar layout masonry com CSS Grid para galeria de imagens
```

**Labels:** `css` `intermediario` `layout`

**Corpo:**

```markdown
## Descrição

Criar o layout de grade irregular (masonry) para a galeria de imagens usando CSS Grid.

## Deve incluir

- Colunas de largura igual com linhas de altura automática
- Itens com alturas variadas preenchendo o espaço vertical
- Gap uniforme entre itens
- Adaptação para 1, 2 e 3 colunas conforme breakpoint

## Critérios de conclusão

- [ ] Implementado com `grid-template-rows: masonry` ou `grid-row: span N`
- [ ] Sem `float` ou JavaScript para posicionamento
- [ ] Imagens com `object-fit: cover` sem distorção
- [ ] Layout consistente em Chrome, Firefox e Safari
```

---

### Issue 22 — Transição de Página

**Título:**

```
Criar animação de transição de entrada e saída entre páginas
```

**Labels:** `css` `intermediario` `animacao`

**Corpo:**

```markdown
## Descrição

Implementar animação de fade-in ao carregar qualquer página do projeto.

## Deve incluir

- Fade-in do `<body>` de opacidade 0 para 1 em 0.4s
- Classe `.page-enter` para controle da animação
- Animação de saída ao clicar em links internos (via classe + JS futuro)
- `prefers-reduced-motion` desativando a animação

## Critérios de conclusão

- [ ] Animação de entrada via `@keyframes`
- [ ] Nenhum flash branco antes da animação iniciar
- [ ] Media query `prefers-reduced-motion: reduce` respeitada
- [ ] Sem impacto na performance de carregamento da página
```

---

### Issue 23 — Progress Bar Animada

**Título:**

```
Criar componente de progress bar animada com variações de cor
```

**Labels:** `css` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Implementar barra de progresso reutilizável para dashboards, formulários e upload de arquivos.

## Deve incluir

- Classe `.progress-bar` como container
- Barra interna com largura definida via variável CSS inline ou atributo `style`
- Animação de preenchimento da esquerda para a direita
- Variações de cor: `.progress-success`, `.progress-warning`, `.progress-error`

## Critérios de conclusão

- [ ] `role="progressbar"` com `aria-valuenow` (definido no HTML)
- [ ] Efeito shimmer opcional via `@keyframes`
- [ ] Altura configurável via variável CSS
- [ ] Arredondamento consistente com design system
```

---

### Issue 24 — Efeito de Typing/Cursor

**Título:**

```
Criar animação de texto digitando com cursor piscante em CSS puro
```

**Labels:** `css` `intermediario` `animacao`

**Corpo:**

```markdown
## Descrição

Implementar o efeito de "texto sendo digitado" para headlines de destaque usando apenas CSS.

## Deve incluir

- Texto revelado progressivamente com `width` animado
- Cursor piscante `|` ao lado do texto
- Fonte monoespaçada para consistência visual
- Loop da animação configurável

## Critérios de conclusão

- [ ] `overflow: hidden` + `white-space: nowrap` para revelar o texto
- [ ] Cursor com `border-right` animado por `@keyframes`
- [ ] Classe `.typing-effect` isolada e reutilizável
- [ ] `prefers-reduced-motion` desabilitando o efeito
```

---

### Issue 25 — Sticky Sidebar

**Título:**

```
Implementar sidebar fixa durante o scroll em páginas de produto e blog
```

**Labels:** `css` `intermediario` `layout`

**Corpo:**

```markdown
## Descrição

Criar comportamento de sidebar que acompanha o scroll dentro de seu container pai.

## Deve incluir

- `position: sticky` com `top` calculado para não sobrepor o header
- Altura máxima com `max-height` e `overflow-y: auto`
- Comportamento correto em conteúdo principal mais curto que a sidebar
- Desativado em mobile (sidebar volta ao fluxo normal)

## Critérios de conclusão

- [ ] `position: sticky` sem JavaScript para o comportamento básico
- [ ] `top` com valor baseado na altura do header via variável CSS
- [ ] Sidebar não ultrapassa o footer em páginas curtas
- [ ] Em mobile, exibida abaixo do conteúdo principal
```

---

### Issue 26 — Efeito de Tilt 3D no Hover

**Título:**

```
Adicionar efeito de inclinação 3D perspectiva ao passar o mouse nos cards
```

**Labels:** `css` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Criar variante `.card-tilt` com leve efeito de perspectiva 3D ao fazer hover.

## Deve incluir

- `transform: perspective(600px) rotateY(5deg)` no hover
- Sombra deslocada no sentido da inclinação
- Transição suave de 0.3s
- Retorno à posição original ao sair do hover

## Critérios de conclusão

- [ ] `transform-style: preserve-3d` no container
- [ ] Inclinação aplicada via CSS puro (sem JS)
- [ ] Efeito desativado com `prefers-reduced-motion`
- [ ] Não altera o layout dos elementos vizinhos
```

---

### Issue 27 — Indicador de Progresso de Formulário

**Título:**

```
Estilizar indicador de progresso no topo de formulários multi-etapas
```

**Labels:** `css` `intermediario` `forms`

**Corpo:**

```markdown
## Descrição

Criar o estilo do componente de etapas para formulários com múltiplas fases (checkout, cadastro).

## Deve incluir

- Steps com número ou ícone, linha conectora e label abaixo
- Estado: pendente, ativo e concluído (com check)
- Linha conectora que fica preenchida conforme o progresso
- Responsivo com steps menores em mobile

## Critérios de conclusão

- [ ] Estados via classes `.step-pending`, `.step-active`, `.step-done`
- [ ] Linha conectora com `::after` pseudo-elemento
- [ ] Cores baseadas em variáveis CSS do projeto
- [ ] Labels ocultas em mobile para economizar espaço
```

---

### Issue 28 — Modo de Alto Contraste

**Título:**

```
Implementar suporte a modo de alto contraste via media query
```

**Labels:** `css` `intermediario` `acessibilidade`

**Corpo:**

```markdown
## Descrição

Adaptar o projeto para o modo de alto contraste do sistema operacional usando `prefers-contrast`.

## Deve incluir

- Bordas mais espessas em inputs, botões e cards
- Remoção de gradientes e sombras
- Texto com contraste de no mínimo 7:1 (WCAG AAA)
- Ícones com contornos visíveis mesmo sem cor

## Critérios de conclusão

- [ ] `@media (prefers-contrast: more)` aplicado
- [ ] Sem dependência de cor como único indicador de estado
- [ ] Botões e links distinguíveis sem cor
- [ ] Testado no Windows High Contrast Mode
```

---

### Issue 29 — Reveal ao Scroll CSS

**Título:**

```
Implementar animação de reveal de elementos ao entrar na viewport
```

**Labels:** `css` `intermediario` `animacao`

**Corpo:**

```markdown
## Descrição

Criar animações de entrada para seções da página que são ativadas quando o elemento fica visível.

## Deve incluir

- Classes `.reveal-fade`, `.reveal-slide-up`, `.reveal-slide-left`
- Estado inicial com `opacity: 0` e deslocamento
- Estado final com `opacity: 1` e posição original
- Transição de 0.5s com `ease-out`

## Critérios de conclusão

- [ ] Estado inicial aplicado por padrão; final via classe `.is-visible`
- [ ] Classe `.is-visible` adicionada via JS (Intersection Observer)
- [ ] `prefers-reduced-motion` desativando as animações
- [ ] `will-change: transform, opacity` para otimização de GPU
```

---

### Issue 30 — Timeline Vertical

**Título:**

```
Criar estilo de timeline vertical para histórico e progresso de eventos
```

**Labels:** `css` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Implementar o componente `.timeline` para uso em páginas de pedido, histórico de conta e blog.

## Deve incluir

- Linha vertical central conectando os itens
- Marcador (dot ou ícone) em cada item da timeline
- Card de conteúdo ao lado da linha
- Items alinhados alternadamente em desktop (zig-zag) e à direita em mobile

## Critérios de conclusão

- [ ] Linha com `::before` pseudo-elemento no container
- [ ] Marcador com `position: absolute` centrado na linha
- [ ] Layout alternado via `:nth-child(odd/even)` em desktop
- [ ] Responsivo sem quebra visual em 320px
```

---

### Issue 31 — Notificações Toast Posicionadas

**Título:**

```
Criar sistema de toasts posicionados com variações de tipo e dismiss
```

**Labels:** `css` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Implementar o estilo dos componentes de notificação toast que aparecem no canto da tela.

## Deve incluir

- 4 tipos: success, error, warning, info com ícone e cor correspondentes
- Posição: canto superior ou inferior direito
- Botão de fechar opcional
- Animação de entrada por baixo e saída por cima

## Critérios de conclusão

- [ ] Container de toasts com `position: fixed` e z-index alto
- [ ] Animação de entrada/saída com `@keyframes`
- [ ] Toasts empilhados com gap adequado
- [ ] Cores e ícones baseados em variáveis CSS
```

---

### Issue 32 — Animação de Confete

**Título:**

```
Criar animação de confete em CSS puro para tela de sucesso
```

**Labels:** `css` `intermediario` `animacao`

**Corpo:**

```markdown
## Descrição

Implementar uma animação de partículas de confete caindo para celebrar ações bem-sucedidas.

## Deve incluir

- Múltiplos elementos com posições e rotações aleatórias via nth-child
- Animação de queda com variação de velocidade
- Cores variadas usando variáveis CSS
- Ativado por classe `.confetti-active` no container

## Critérios de conclusão

- [ ] Partículas criadas apenas com CSS (sem canvas ou JS para o visual)
- [ ] `position: fixed` cobrindo toda a viewport
- [ ] `pointer-events: none` para não bloquear interações
- [ ] Desativado com `prefers-reduced-motion`
```

---

### Issue 33 — Estilo de Blocos de Código

**Título:**

```
Estilizar elementos de código inline e blocos de código para seção de blog
```

**Labels:** `css` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Criar estilos padronizados para exibição de código em artigos de blog e documentação interna do projeto.

## Deve incluir

- `<code>` inline com fundo escuro, fonte monoespaçada e padding lateral
- `<pre><code>` com tema de syntax highlight via CSS puro (sem biblioteca)
- Numeração de linhas via `counter-reset` e `counter-increment`
- Botão "Copiar" posicionado no canto superior direito do bloco

## Critérios de conclusão

- [ ] Fonte monoespaçada com fallback: `monospace` stack
- [ ] Contraste adequado entre texto e fundo do bloco de código
- [ ] Scroll horizontal quando o código ultrapassa a largura do container
- [ ] Botão de copiar com `position: absolute` sem sair do fluxo do bloco
```

---

### Issue 34 — Grid com Áreas Nomeadas

**Título:**

```
Criar layout de página com CSS Grid areas nomeadas para template de produto
```

**Labels:** `css` `intermediario` `layout`

**Corpo:**

```markdown
## Descrição

Refatorar o layout da `product-detail.html` usando `grid-template-areas` para maior legibilidade.

## Deve incluir

- Áreas: `header`, `gallery`, `info`, `actions`, `related`, `footer`
- Layout desktop com galeria à esquerda e info à direita
- Layout mobile com áreas empilhadas verticalmente
- Alteração de layout por media query usando os mesmos nomes de área

## Critérios de conclusão

- [ ] `grid-template-areas` claramente definido no CSS
- [ ] Sem uso de margens negativas ou hacks de posicionamento
- [ ] Cada área cobrindo a região correta em desktop e mobile
- [ ] Comentários no CSS explicando o template de cada breakpoint
```

---

## 🔴 CSS — COMPLEXO

---

### Issue 35 — Design Tokens Completos

**Título:**

```
Criar sistema completo de design tokens com variáveis CSS hierárquicas
```

**Labels:** `css` `complexo` `design-system`

**Corpo:**

```markdown
## Descrição

Estruturar todas as decisões de design do projeto como tokens hierárquicos para criar base sólida de design system.

## Deve incluir

- Tokens primitivos: cores brutas, tamanhos base, fontes
- Tokens semânticos: `--color-button-primary-bg`, `--text-heading-1-size`
- Tokens de componente: `--card-shadow`, `--input-border-radius`
- Documentação interna via comentários CSS agrupados

## Critérios de conclusão

- [ ] 3 camadas de tokens claramente separadas no arquivo
- [ ] Tokens semânticos referenciando apenas tokens primitivos
- [ ] Tokens de componente referenciando apenas tokens semânticos
- [ ] Nenhuma propriedade usando valor hardcoded fora dos tokens primitivos
- [ ] Tokens documentados com comentários de contexto de uso
```

---

### Issue 36 — Sistema de Animações com Custom Properties

**Título:**

```
Criar sistema reutilizável de animações controlado por CSS custom properties
```

**Labels:** `css` `complexo` `animacao`

**Corpo:**

```markdown
## Descrição

Implementar um conjunto de animações reutilizáveis onde duração, delay e easing são controlados por variáveis CSS.

## Deve incluir

- Variáveis: `--animation-duration-fast`, `--animation-duration-base`, `--animation-easing-bounce`
- Animações prontas: fade, slide-up, slide-down, scale-in, flip-in
- Classe `.animated` como base + modificadores (`.animate-fade-in`)
- Integração com `prefers-reduced-motion`

## Critérios de conclusão

- [ ] `@keyframes` reutilizáveis sem duplicações
- [ ] `animation-fill-mode: both` em todos os efeitos
- [ ] Delay configurável via `--animation-delay` inline nos elementos
- [ ] Todas as animações desabilitadas com `prefers-reduced-motion`
- [ ] Performance: uso de `transform` e `opacity` exclusivamente
```

---

### Issue 37 — Modo Daltônico

**Título:**

```
Implementar filtros CSS para modos de acessibilidade visual (daltonismo)
```

**Labels:** `css` `complexo` `acessibilidade`

**Corpo:**

```markdown
## Descrição

Criar filtros de cor CSS que simulam e compensam diferentes tipos de daltonismo para tornar o projeto mais acessível.

## Deve incluir

- Filtros para Deuteranopia, Protanopia e Tritanopia via `filter`
- Toggle acessível no header para ativar o modo
- Aplicado via `data-colorblind="deuteranopia"` no `<html>`
- Informações de UI nunca dependentes apenas de cor

## Critérios de conclusão

- [ ] Filtros `hue-rotate` e `saturate` ajustados por tipo
- [ ] Preferência salva em localStorage (JS)
- [ ] Ícones e padrões como alternativa à cor em elementos críticos
- [ ] Testado com Coblis Color Blindness Simulator
- [ ] Toggle com estado `aria-pressed` correto
```

---

### Issue 38 — CSS Container Queries

**Título:**

```
Refatorar componentes de card para usar CSS Container Queries
```

**Labels:** `css` `complexo` `layout`

**Corpo:**

```markdown
## Descrição

Converter os componentes de card do projeto de media queries de viewport para container queries.

## Deve incluir

- `container-type: inline-size` nos wrappers dos cards
- Regras `@container` para layout de 1, 2 e 3 colunas
- Variação de card compacto (sem descrição) em containers estreitos
- Variação de card expandido (com descrição) em containers largos

## Critérios de conclusão

- [ ] Nenhum media query de viewport nos componentes de card
- [ ] Cards responsivos ao container, não à viewport
- [ ] Compatibilidade verificada com Chrome, Safari e Firefox atuais
- [ ] Fallback comportável para browsers sem suporte
- [ ] Layout correto em sidebar, grid de 2 e grid de 4 colunas
```

---

### Issue 39 — Sistema de Ícones via CSS mask-image

**Título:**

```
Criar sistema de ícones CSS usando mask-image para colorização dinâmica
```

**Labels:** `css` `complexo` `ui`

**Corpo:**

```markdown
## Descrição

Implementar sistema de ícones sem SVG inline, usando `mask-image` com sprites SVG para controle de cor via CSS.

## Deve incluir

- Sprite SVG com todos os ícones do projeto
- Classe `.icon-[nome]` para seleção do ícone via `mask-position`
- Cor do ícone controlada por `background-color`
- Tamanhos via variáveis CSS

## Critérios de conclusão

- [ ] Nenhum SVG inline no HTML
- [ ] Cor de qualquer ícone alterável com uma linha de CSS
- [ ] `aria-hidden="true"` definido nos usos decorativos
- [ ] Fallback definido para browsers sem suporte a `mask-image`
- [ ] Sprite otimizado com `viewBox` correto por ícone
```

---

### Issue 40 — Animação de Morphing de Ícones

**Título:**

```
Criar animação de transição (morphing) entre dois ícones SVG
```

**Labels:** `css` `complexo` `animacao`

**Corpo:**

```markdown
## Descrição

Implementar transição visual fluida entre dois estados de ícone (ex: hamburger → X, play → pause) usando CSS.

## Deve incluir

- Ícone hamburger → X ao abrir menu mobile
- Play → Pause no player/carousel
- Heart outline → Heart filled ao favoritar
- Transição via `@keyframes` e transformações de `path`

## Critérios de conclusão

- [ ] Morphing implementado com CSS transitions ou `clip-path`
- [ ] `aria-label` atualizado junto com a mudança visual
- [ ] Reversível: volta ao estado original ao desfazer a ação
- [ ] Desativado com `prefers-reduced-motion`
- [ ] Não depende de biblioteca de animação SVG
```

---

### Issue 41 — Grid Fluido com clamp()

**Título:**

```
Criar sistema de grid totalmente fluido sem breakpoints usando CSS clamp()
```

**Labels:** `css` `complexo` `layout`

**Corpo:**

```markdown
## Descrição

Implementar um sistema de grid que se adapta fluidamente ao tamanho da tela sem necessidade de media queries.

## Deve incluir

- `grid-template-columns: repeat(auto-fill, minmax(clamp(200px, 25vw, 300px), 1fr))`
- Tamanhos de fonte fluidos com `clamp()` para títulos e corpo
- Padding e gaps fluidos sem breakpoints
- Documentação dos cálculos de `clamp()` nos comentários

## Critérios de conclusão

- [ ] Nenhum media query para o sistema de grid
- [ ] Colunas adaptando de 1 (mobile) a 4 (widescreen) fluidamente
- [ ] Gaps proporcionais ao tamanho do container
- [ ] Testado em 320px, 768px, 1280px e 1920px
- [ ] Compatível com Chrome, Firefox e Safari atuais
```

---

### Issue 42 — Text Gradient Animado

**Título:**

```
Implementar efeito de texto com gradiente animado para headlines
```

**Labels:** `css` `complexo` `ui`

**Corpo:**

```markdown
## Descrição

Criar efeito visual de gradiente em movimento para textos de destaque como headlines e CTAs.

## Deve incluir

- Gradiente com 3 ou mais cores da paleta do projeto
- Animação de movimento do gradiente via `background-position`
- Classe `.text-gradient-animated` reutilizável
- Versão estática `.text-gradient` para uso sem animação

## Critérios de conclusão

- [ ] Uso de `background-clip: text` e `color: transparent`
- [ ] Gradiente com tamanho `200% 200%` para permitir movimento
- [ ] `@keyframes` com alternância suave de posição
- [ ] `prefers-reduced-motion` usando apenas a versão estática
- [ ] Fallback de cor sólida para browsers sem suporte a `background-clip: text`
```

---

### Issue 43 — Layout Split Screen

**Título:**

```
Criar layout split screen responsivo para páginas de login e landing
```

**Labels:** `css` `complexo` `layout`

**Corpo:**

```markdown
## Descrição

Implementar layout dividido em duas metades iguais (ou assimétricas) para páginas de autenticação e promos.

## Deve incluir

- Layout 50%/50% com imagem de um lado e formulário do outro
- Variante assimétrica 40%/60%
- Lado da imagem com `object-fit: cover` e overlay de cor
- Em mobile: imagem oculta ou acima do formulário

## Critérios de conclusão

- [ ] Implementado com CSS Grid de duas colunas
- [ ] Imagem com `position: sticky` para acompanhar scroll do formulário
- [ ] Padding interno do formulário proporcional ao espaço disponível
- [ ] Transição de layout em breakpoint específico
- [ ] Sem JavaScript para o comportamento do layout
```

---

### Issue 44 — Efeito Neon/Glow

**Título:**

```
Implementar efeito neon e glow em elementos interativos para modo dark
```

**Labels:** `css` `complexo` `ui`

**Corpo:**

```markdown
## Descrição

Criar variantes de componentes com efeito neon/glow para uso exclusivo no modo dark do projeto.

## Deve incluir

- `box-shadow` em camadas para simular brilho em botões
- Text shadow suave em headings especiais
- Border brilhante animada em inputs com foco
- Efeito de pulse no glow de CTA principal

## Critérios de conclusão

- [ ] Efeitos aplicados apenas dentro de `[data-theme="dark"]`
- [ ] múltiplas camadas de `box-shadow` com cores translúcidas
- [ ] Pulse animado com `@keyframes` suave
- [ ] `prefers-reduced-motion` desabilitando o pulse
- [ ] Contraste de texto ainda adequado sobre o glow
```

---

### Issue 45 — Sistema de Sombras por Elevação

**Título:**

```
Criar sistema de elevação (elevation) com sombras progressivas
```

**Labels:** `css` `complexo` `design-system`

**Corpo:**

```markdown
## Descrição

Implementar um sistema de z-elevation com sombras progressivas inspirado no Material Design.

## Deve incluir

- 6 níveis de elevação: `--elevation-0` a `--elevation-5`
- Sombras com múltiplas camadas em cada nível
- Classes utilitárias `.elevation-{n}` para aplicação
- Cores de sombra adaptadas para modo claro e escuro

## Critérios de conclusão

- [ ] Cada nível com 2-3 camadas de `box-shadow`
- [ ] Sombras com offsets e blur proporcionais ao nível
- [ ] Tokens de cor da sombra diferentes para dark mode
- [ ] Hover elevando o componente automaticamente via `.hover-elevate`
- [ ] Documentado com comentários de quando usar cada nível
```

---

### Issue 46 — CSS Scroll-Driven Animations

**Título:**

```
Implementar animações guiadas pelo scroll usando CSS scroll-driven animations
```

**Labels:** `css` `complexo` `animacao`

**Corpo:**

```markdown
## Descrição

Usar a API CSS de scroll-driven animations para criar efeitos vinculados ao progresso de rolagem da página.

## Deve incluir

- Barra de progresso de leitura no topo da página
- Elementos de hero com parallax via `@scroll-timeline`
- Fade-in de seções vinculado ao scroll
- Efeito de reveal no header ao rolar para cima

## Critérios de conclusão

- [ ] Implementado com `animation-timeline: scroll()` ou `view()`
- [ ] Fallback para browsers sem suporte (sem quebra de layout)
- [ ] Nenhum JavaScript para os efeitos de scroll
- [ ] `prefers-reduced-motion` desativando as animações
- [ ] Performance testada sem jank em dispositivos médios
```

---

### Issue 47 — Animação de Ondas no Hero

**Título:**

```
Criar animação de ondas animadas no final da seção hero
```

**Labels:** `css` `complexo` `ui`

**Corpo:**

```markdown
## Descrição

Implementar efeito de ondas animadas SVG/CSS na transição entre a hero section e o conteúdo abaixo.

## Deve incluir

- 2 a 3 camadas de ondas com velocidades diferentes
- Cores das ondas baseadas na paleta do projeto
- Animação de movimento horizontal via `@keyframes`
- Responsivo em todos os viewports

## Critérios de conclusão

- [ ] Ondas criadas com SVG `path` ou `clip-path` poligonal
- [ ] Camadas se movendo em velocidades e direções diferentes
- [ ] Nenhuma imagem estática (efeito 100% em código)
- [ ] `prefers-reduced-motion` congelando a animação
- [ ] Nenhum overflow horizontal gerado pela animação
```

---

### Issue 48 — Cards Stacked com Interação

**Título:**

```
Criar efeito de cards empilhados que se expandem no hover
```

**Labels:** `css` `complexo` `ui`

**Corpo:**

```markdown
## Descrição

Implementar um conjunto de cards sobrepostos que se abrem em leque ao passar o mouse no container.

## Deve incluir

- 3 a 5 cards empilhados com leve rotação e offset cada
- Hover no container abre os cards em leque ou linha
- Cada card com conteúdo diferente (imagem ou cor)
- Animação de abertura e fechamento suave

## Critérios de conclusão

- [ ] Posicionamento com `position: absolute` e `nth-child` para offset
- [ ] Abertura com `transform: rotate` e `translateX` no hover do pai
- [ ] Cada card com `transition` com `delay` incremental por nth-child
- [ ] Acessível com navegação por teclado entre os cards
- [ ] `prefers-reduced-motion` desativando a animação de leque
```

---

### Issue 49 — Modo de Leitura Focada

**Título:**

```
Criar modo de leitura focada para artigos de blog
```

**Labels:** `css` `complexo` `acessibilidade`

**Corpo:**

```markdown
## Descrição

Implementar um modo de leitura que maximiza o conteúdo e minimiza distrações para artigos de blog.

## Deve incluir

- Ocultar sidebar, header completo e footer ao ativar o modo
- Fonte maior e line-height aumentado para conforto de leitura
- Largura máxima do texto em ~65 caracteres
- Toggle visível de ativar/desativar o modo de leitura

## Critérios de conclusão

- [ ] Ativado via classe `body.reading-mode`
- [ ] Transição suave entre modos (0.3s)
- [ ] Botão de toggle fixo e sempre visível
- [ ] Tema claro forçado no modo de leitura (independente do dark mode)
- [ ] Barra de progresso de leitura visível no modo ativo
```

---

### Issue 50 — Escala de Espaçamento Musical

**Título:**

```
Criar sistema de espaçamento baseado em escala harmônica (razão áurea ou musical)
```

**Labels:** `css` `complexo` `design-system`

**Corpo:**

```markdown
## Descrição

Implementar uma escala de espaçamento matemática com proporções harmônicas para criar ritmo visual consistente.

## Deve incluir

- Escala baseada em razão de 1.5 (perfeita quinta) ou razão áurea (1.618)
- 8 a 10 tokens de espaçamento gerados a partir de uma base de 4px ou 8px
- Classes utilitárias para margin e padding baseadas nessa escala
- Documentação da escala com valores calculados

## Critérios de conclusão

- [ ] Escala definida como tokens CSS com valor e nome descritivo
- [ ] Cada token com comentário do valor em px calculado
- [ ] Substituição das classes de espaçamento existentes (migration)
- [ ] Demonstração de aplicação em pelo menos um componente
- [ ] Nenhum valor de espaçamento fora da escala definida
```

---

_50 issues — CSS (17 simples · 17 intermediário · 16 complexo)_

# 📋 50 Issues — JavaScript

---

## 🟢 JavaScript — SIMPLES

---

### Issue 1 — Compartilhamento de Produto

**Título:**

```
Implementar funcionalidade de compartilhamento de produto via Web Share API
```

**Labels:** `javascript` `simples` `ux`

**Corpo:**

```markdown
## Descrição

Adicionar botão de compartilhamento de produto que usa a Web Share API em dispositivos compatíveis.

## Deve incluir

- Clique no botão dispara `navigator.share()` com título, texto e URL
- Fallback: copiar URL para clipboard se Web Share API não estiver disponível
- Toast de confirmação após compartilhar ou copiar
- Botão com ícone de compartilhamento

## Critérios de conclusão

- [ ] `navigator.share` verificado com `if ('share' in navigator)`
- [ ] Fallback usando `navigator.clipboard.writeText()`
- [ ] Toast de feedback com mensagem adequada para cada caso
- [ ] Botão acessível com aria-label descritivo
```

---

### Issue 2 — Tooltip Dinâmico

**Título:**

```
Implementar tooltips dinâmicos via JavaScript com posicionamento inteligente
```

**Labels:** `javascript` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar tooltips que aparecem ao hover ou foco em elementos com `data-tooltip`, com posicionamento automático.

## Deve incluir

- Leitura do texto via atributo `data-tooltip`
- Posicionamento automático detectando bordas da viewport
- Delay de 300ms para aparecer
- Descarte imediato ao sair do elemento

## Critérios de conclusão

- [ ] Tooltip criado dinamicamente no DOM e removido após uso
- [ ] Verificação de overflow de viewport para inverter posição
- [ ] Acessível via `role="tooltip"` e `aria-describedby`
- [ ] Funciona em elementos com foco por teclado
```

---

### Issue 3 — Copiar para Clipboard

**Título:**

```
Criar função reutilizável de cópia para clipboard com feedback visual
```

**Labels:** `javascript` `simples` `ux`

**Corpo:**

```markdown
## Descrição

Implementar uma função utilitária que copia texto para o clipboard e exibe feedback ao usuário.

## Deve incluir

- Função `copyToClipboard(text)` usando `navigator.clipboard.writeText`
- Botão de copiar em campos de código, links e cupons
- Ícone do botão muda de "copiar" para "check" após cópia
- Mensagem de sucesso em tooltip ou toast

## Critérios de conclusão

- [ ] `async/await` com `try/catch`
- [ ] Ícone de check removido automaticamente após 2 segundos
- [ ] Fallback com `document.execCommand('copy')` para browsers legados
- [ ] Acessível: resultado anunciado com `aria-live`
```

---

### Issue 4 — Lazy Loading de Imagens

**Título:**

```
Implementar lazy loading de imagens com Intersection Observer
```

**Labels:** `javascript` `simples` `performance`

**Corpo:**

```markdown
## Descrição

Criar sistema de carregamento tardio de imagens para melhorar o tempo de carregamento inicial da página.

## Deve incluir

- Imagens com `data-src` ao invés de `src` direto
- Intersection Observer detectando quando a imagem entra na viewport
- Troca de `data-src` para `src` ao entrar no range
- Classe de fade-in ao carregar

## Critérios de conclusão

- [ ] `rootMargin: "200px"` para pré-carregar antes de entrar na tela
- [ ] Fallback para browsers sem Intersection Observer
- [ ] `loading="lazy"` nativo como complemento
- [ ] Observer desconectado após o carregamento da imagem
```

---

### Issue 5 — Countdown Regressivo

**Título:**

```
Criar countdown regressivo para promoções com atualização em tempo real
```

**Labels:** `javascript` `simples` `marketing`

**Corpo:**

```markdown
## Descrição

Implementar um contador regressivo que mostra dias, horas, minutos e segundos até o fim de uma promoção.

## Deve incluir

- Data alvo configurável via atributo `data-countdown-date`
- Exibição atualizada a cada segundo com `setInterval`
- Exibição de "Promoção encerrada" ao atingir zero
- Formatação com zero à esquerda (ex: "07" ao invés de "7")

## Critérios de conclusão

- [ ] `setInterval` limpo com `clearInterval` ao chegar a zero
- [ ] Cálculo correto de dias, horas, minutos e segundos
- [ ] Acessível com `aria-live="polite"` para anunciar mudanças
- [ ] Funciona com múltiplos countdowns na mesma página
```

---

### Issue 6 — Accordion de FAQ em JavaScript

**Título:**

```
Implementar accordion de FAQ com JavaScript para controle de abertura exclusiva
```

**Labels:** `javascript` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar um accordion controlado por JS onde apenas um item pode estar aberto por vez.

## Deve incluir

- Clique no header de um item abre e fecha o painel
- Abrir um item fecha automaticamente os demais
- Animação de altura via JS para transição suave
- Estado inicial configurável por atributo HTML

## Critérios de conclusão

- [ ] `aria-expanded` atualizado a cada abertura/fechamento
- [ ] Altura animada com `max-height` calculada via JS
- [ ] Funciona com teclado (Enter e Space)
- [ ] Método de "abrir apenas um" pode ser configurado para permitir múltiplos
```

---

### Issue 7 — Tabs Dinâmicas

**Título:**

```
Implementar navegação por tabs dinâmica com troca de painel via JavaScript
```

**Labels:** `javascript` `simples` `ui`

**Corpo:**

```markdown
## Descrição

Criar o comportamento de tabs onde clicar em uma aba exibe o painel correspondente.

## Deve incluir

- Clique em aba ativa o painel e desativa os demais
- Hash da URL atualizado com o id da aba ativa
- Aba correta ativada ao carregar a página com hash na URL
- Navegação por teclado: setas para trocar de aba

## Critérios de conclusão

- [ ] `aria-selected`, `aria-controls` e `tabindex` atualizados corretamente
- [ ] URL com `#tab-nome` para compartilhamento direto
- [ ] Setas esquerda/direita navegam entre tabs (ARIA pattern)
- [ ] Painel inativo com `hidden` ou `display: none`
```

---

### Issue 8 — Scroll Suave para Âncoras

**Título:**

```
Implementar scroll suave para todos os links de âncora da página
```

**Labels:** `javascript` `simples` `ux`

**Corpo:**

```markdown
## Descrição

Interceptar cliques em links `href="#secao"` e realizar scroll animado até o destino.

## Deve incluir

- `scrollIntoView({ behavior: 'smooth' })` ou `window.scrollTo` com offset
- Offset para compensar header fixo
- Foco movido para o elemento destino após o scroll
- Desativação com `prefers-reduced-motion`

## Critérios de conclusão

- [ ] Offset calculado a partir da altura real do header
- [ ] Foco no elemento destino para acessibilidade
- [ ] Funcionamento com qualquer link `[href^="#"]`
- [ ] Scroll instantâneo quando `prefers-reduced-motion: reduce`
```

---

### Issue 9 — Zoom na Imagem do Produto

**Título:**

```
Implementar zoom na imagem do produto ao passar o mouse
```

**Labels:** `javascript` `simples` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar efeito de zoom/lupa na imagem principal do produto ao mover o mouse sobre ela.

## Deve incluir

- Lupa seguindo o cursor mostrando detalhe ampliado
- Imagem ampliada exibida em container separado ou inline
- Desativado em mobile (touch)
- Comportamento correto em imagens com diferentes proporções

## Critérios de conclusão

- [ ] Posição do cursor calculada com `getBoundingClientRect`
- [ ] Zoom desativado em `(pointer: coarse)` — touch devices
- [ ] Container de zoom com `overflow: hidden`
- [ ] Imagem de alta resolução para o zoom via `data-zoom-src`
```

---

### Issue 10 — Formatação de Moeda

**Título:**

```
Criar utilitário de formatação de moeda em BRL com Intl.NumberFormat
```

**Labels:** `javascript` `simples` `utils`

**Corpo:**

```markdown
## Descrição

Implementar função utilitária para formatar valores monetários de forma consistente no projeto.

## Deve incluir

- Função `formatCurrency(value, currency = 'BRL')` usando `Intl.NumberFormat`
- Suporte a múltiplas moedas parametrizável
- Versão compacta: `formatCurrencyCompact(value)` para K e M
- Uso em todos os pontos de exibição de preço no projeto

## Critérios de conclusão

- [ ] `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`
- [ ] Tratamento de valores inválidos (NaN, null, undefined)
- [ ] Versão compacta: acima de 1000 → "R$ 1,2K"
- [ ] Exportada como módulo ES6 em `utils.js`
```

---

### Issue 11 — Notificação de Inatividade

**Título:**

```
Implementar notificação de sessão inativa após período sem interação
```

**Labels:** `javascript` `simples` `ux`

**Corpo:**

```markdown
## Descrição

Criar aviso ao usuário quando ele fica inativo por um tempo determinado, com opção de manter a sessão.

## Deve incluir

- Inatividade detectada após 5 minutos sem interação
- Modal com aviso "Você ainda está aí?" e contagem regressiva de 60s
- Botões: "Continuar" (mantém sessão) e "Sair" (logout)
- Timer resetado a qualquer evento: click, keypress, mousemove, scroll

## Critérios de conclusão

- [ ] Eventos escutados com `addEventListener` em múltiplos tipos
- [ ] Timer limpo ao atingir inatividade e reiniciado na interação
- [ ] Modal com foco preso enquanto aberto
- [ ] Logout executa lógica de limpeza (localStorage, redirect)
```

---

### Issue 12 — Detecção de Conexão Offline

**Título:**

```
Implementar detecção e notificação de conexão offline/online
```

**Labels:** `javascript` `simples` `ux`

**Corpo:**

```markdown
## Descrição

Notificar o usuário quando a conexão com a internet é perdida ou restaurada.

## Deve incluir

- Banner de aviso quando `navigator.onLine === false`
- Escuta dos eventos `offline` e `online` no `window`
- Banner removido ao recuperar conexão
- Mensagem diferente para offline e para quando volta online

## Critérios de conclusão

- [ ] Verificação inicial do status ao carregar a página
- [ ] Banner com `aria-live="assertive"` para anúncio imediato
- [ ] Botão "Tentar novamente" que realiza `fetch` de verificação
- [ ] Estado de offline impedindo ações de envio de formulário
```

---

### Issue 13 — Impressão de Página

**Título:**

```
Implementar botão de impressão com pré-visualização de conteúdo formatado
```

**Labels:** `javascript` `simples` `ux`

**Corpo:**

```markdown
## Descrição

Criar funcionalidade de impressão de páginas específicas (pedido, nota fiscal, etc.) via JavaScript.

## Deve incluir

- Botão "Imprimir" chamando `window.print()`
- Opção de imprimir apenas uma seção específica da página
- Adição e remoção temporária de classe `.print-only` no elemento alvo
- Remoção da classe após `afterprint` event

## Critérios de conclusão

- [ ] Evento `window.onafterprint` para limpar classes temporárias
- [ ] Somente o conteúdo relevante visível na impressão
- [ ] Botão de impressão oculto na impressão (via CSS)
- [ ] Feedback visual ao clicar (não fica parecendo botão quebrado)
```

---

### Issue 14 — Highlight de Termos na Busca

**Título:**

```
Destacar visualmente os termos buscados nos resultados de pesquisa
```

**Labels:** `javascript` `simples` `busca`

**Corpo:**

```markdown
## Descrição

Implementar destaque (highlight) do termo pesquisado dentro dos títulos e descrições dos resultados exibidos.

## Deve incluir

- Termo buscado envolto em `<mark>` nos textos dos resultados
- Case insensitive e compatível com caracteres acentuados
- Remoção do destaque ao limpar a busca
- Não quebrar estrutura HTML existente ao inserir `<mark>`

## Critérios de conclusão

- [ ] Uso de `regex` com flag `gi` para case-insensitive
- [ ] Operação em cópia do texto, não no DOM original diretamente
- [ ] `<mark>` com ARIA label quando necessário para contexto
- [ ] Performance: não re-renderizar o DOM inteiro em cada tecla
```

---

### Issue 15 — Gerador de Slug

**Título:**

```
Criar função utilitária de geração de slug a partir de texto
```

**Labels:** `javascript` `simples` `utils`

**Corpo:**

```markdown
## Descrição

Implementar função para converter títulos e nomes em slugs de URL amigáveis.

## Deve incluir

- Conversão de espaços em hífens
- Remoção de caracteres especiais
- Normalização de acentos via `normalize('NFD')`
- Tudo em minúsculas e sem hífens duplos

## Critérios de conclusão

- [ ] `normalize('NFD').replace(/[\u0300-\u036f]/g, '')` para acentos
- [ ] Tratamento de múltiplos espaços e hífens consecutivos
- [ ] Resultado sem hífen no início ou fim
- [ ] Exportada como função pura em `utils.js` e testável
```

---

### Issue 16 — Auto-save de Rascunho

**Título:**

```
Implementar auto-save de formulários para prevenir perda de dados
```

**Labels:** `javascript` `simples` `forms`

**Corpo:**

```markdown
## Descrição

Salvar automaticamente o conteúdo digitado em formulários no localStorage para recuperação em caso de reload.

## Deve incluir

- Salvamento a cada 30 segundos e ao mudar de campo
- Indicador visual "Rascunho salvo às HH:MM"
- Recuperação automática ao retornar à página
- Botão "Descartar rascunho" para limpar os dados salvos

## Critérios de conclusão

- [ ] Chave no localStorage baseada no `id` do formulário
- [ ] Salvamento de todos os campos: text, select, textarea e radio/checkbox
- [ ] Rascunho descartado após envio com sucesso
- [ ] Alerta de recuperação de rascunho ao carregar a página
```

---

### Issue 17 — Breadcrumb Dinâmico

**Título:**

```
Gerar breadcrumb dinamicamente com base na URL da página
```

**Labels:** `javascript` `simples` `navegacao`

**Corpo:**

```markdown
## Descrição

Criar módulo JavaScript que lê o caminho da URL e gera automaticamente o breadcrumb na página.

## Deve incluir

- Leitura de `window.location.pathname`
- Mapeamento de segmentos da URL para nomes legíveis
- Geração de elementos `<li>` com links clicáveis
- Último item sem link (página atual)

## Critérios de conclusão

- [ ] Mapeamento de URL configurável (ex: `{ 'products': 'Produtos' }`)
- [ ] `aria-current="page"` no último item
- [ ] Funciona em múltiplos níveis de profundidade
- [ ] Estrutura gerada em `<nav aria-label="breadcrumb"><ol>...</ol></nav>`
```

---

## 🟡 JavaScript — INTERMEDIÁRIO

---

### Issue 18 — Paginação Dinâmica

**Título:**

```
Implementar paginação dinâmica de produtos sem reload de página
```

**Labels:** `javascript` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar sistema de paginação que carrega e exibe produtos por página sem recarregar o navegador.

## Deve incluir

- Botões de página numérica e anterior/próximo
- Página ativa destacada visualmente
- URL atualizada com `?page=N` via `history.pushState`
- Scroll para o topo da listagem ao mudar de página

## Critérios de conclusão

- [ ] Estado da página restaurado ao usar botão Voltar do browser
- [ ] Número de itens por página configurável
- [ ] Loading state durante a "requisição" (modo mock)
- [ ] Paginação acessível com `aria-label` em cada botão de página
```

---

### Issue 19 — Sistema de Notificações Toast

**Título:**

```
Criar módulo de notificações toast reutilizável com fila e auto-dismiss
```

**Labels:** `javascript` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Desenvolver um módulo de toasts com API simples para uso em todo o projeto.

## Deve incluir

- API: `Toast.show({ type, message, duration })`
- Tipos: `success`, `error`, `warning`, `info`
- Fila de toasts (máximo 3 simultâneos)
- Auto-dismiss configurável com barra de progresso visual
- Botão de fechar manual

## Critérios de conclusão

- [ ] Módulo exportado como singleton
- [ ] Fila respeitada: novo toast espera se há 3 visíveis
- [ ] `role="status"` ou `role="alert"` conforme o tipo
- [ ] Barra de progresso animada usando CSS transition
- [ ] Funciona em qualquer arquivo que importar o módulo
```

---

### Issue 20 — Drag and Drop de Itens

**Título:**

```
Implementar drag and drop para reordenar itens de lista sem bibliotecas
```

**Labels:** `javascript` `intermediario` `ux`

**Corpo:**

```markdown
## Descrição

Criar funcionalidade de arrastar e soltar para reordenar listas (ex: favoritos, itens do carrinho).

## Deve incluir

- Drag nativo com HTML5 Drag and Drop API
- Indicador visual do item sendo arrastado (opacidade)
- Placeholder indicando onde o item será solto
- Persistência da nova ordem em localStorage

## Critérios de conclusão

- [ ] Eventos: `dragstart`, `dragover`, `drop`, `dragend`
- [ ] Indicador de drop com linha ou highlight entre itens
- [ ] Alternativa de acessibilidade: botões de mover para cima/baixo
- [ ] Ordem salva corretamente no localStorage após soltar
```

---

### Issue 21 — Galeria com Lightbox

**Título:**

```
Criar galeria de imagens com lightbox fullscreen e navegação
```

**Labels:** `javascript` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Implementar galeria de imagens que ao clicar abre em lightbox com zoom e navegação entre fotos.

## Deve incluir

- Clique em thumbnail abre lightbox com imagem ampliada
- Navegação por setas (anterior/próximo) e por teclado
- Exibição do número atual (ex: "3 / 8")
- Fechar com botão ×, tecla ESC e clique fora

## Critérios de conclusão

- [ ] `role="dialog"` e `aria-modal` no lightbox
- [ ] Foco preso dentro do lightbox enquanto aberto
- [ ] Imagem de alta resolução carregada via `data-full-src` no clique
- [ ] Swipe para navegar em dispositivos touch
```

---

### Issue 22 — Autopreenchimento de Endereço via CEP

**Título:**

```
Implementar preenchimento automático de campos de endereço ao digitar o CEP
```

**Labels:** `javascript` `intermediario` `forms`

**Corpo:**

```markdown
## Descrição

Ao preencher o CEP no formulário de endereço, buscar automaticamente os dados via API ViaCEP.

## Deve incluir

- Chamada à API `https://viacep.com.br/ws/{cep}/json/` ao sair do campo
- Preenchimento automático de rua, bairro, cidade e estado
- Loading indicator no campo durante a requisição
- Mensagem de erro se CEP inválido ou não encontrado

## Critérios de conclusão

- [ ] Fetch com `try/catch` para tratar erros de rede
- [ ] CEP validado localmente (8 dígitos) antes de fazer a requisição
- [ ] Campos preenchidos ficam editáveis (pré-preenchidos, não bloqueados)
- [ ] Foco movido para o campo "Número" após preenchimento automático
```

---

### Issue 23 — Consentimento de Cookies

**Título:**

```
Implementar sistema de consentimento de cookies com gerenciamento de preferências
```

**Labels:** `javascript` `intermediario` `lgpd`

**Corpo:**

```markdown
## Descrição

Criar módulo de cookie consent com interface de aceite granular e persistência da escolha.

## Deve incluir

- Banner com "Aceitar todos", "Apenas essenciais" e "Personalizar"
- Modal de personalização com toggles por categoria (analytics, marketing, funcional)
- Preferências salvas em cookie `cookie_consent` com expiração de 1 ano
- Re-exibição do banner se o cookie de consentimento expirar

## Critérios de conclusão

- [ ] Nenhum cookie não-essencial ativado antes do consentimento
- [ ] Estado de cada categoria persistido e legível
- [ ] Banner com `role="dialog"` e foco inicial no primeiro botão
- [ ] Botão de rever preferências no footer sempre visível
```

---

### Issue 24 — Exportação para CSV

**Título:**

```
Implementar exportação de dados em formato CSV no painel do usuário
```

**Labels:** `javascript` `intermediario` `utils`

**Corpo:**

```markdown
## Descrição

Criar função para exportar listas de dados (pedidos, favoritos) como arquivo CSV para download.

## Deve incluir

- Função `exportToCSV(data, filename)` genérica e reutilizável
- Geração de cabeçalho com os nomes das propriedades
- Tratamento de valores com vírgulas e aspas (escape correto)
- `BOM` UTF-8 para compatibilidade com Excel

## Critérios de conclusão

- [ ] `'data:text/csv;charset=utf-8,\uFEFF'` como prefixo do Blob
- [ ] Valores com vírgulas envolvidos em aspas duplas
- [ ] Aspas duplas internas escapadas como `""`
- [ ] Download via `<a download>` criado dinamicamente e removido após uso
```

---

### Issue 25 — Avaliação por Estrelas Interativa

**Título:**

```
Criar componente de avaliação por estrelas interativo com hover e seleção
```

**Labels:** `javascript` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Implementar seletor de nota com estrelas que reage ao hover e mantém o estado selecionado.

## Deve incluir

- 5 estrelas que preenchem progressivamente ao hover
- Clique fixa a nota selecionada
- Possibilidade de alterar a nota ao clicar novamente
- Valor numérico enviado ao formulário via input hidden

## Critérios de conclusão

- [ ] `input[type="hidden"]` atualizado com o valor selecionado
- [ ] `aria-label` das estrelas descrevendo a nota (ex: "3 de 5 estrelas")
- [ ] Acessível via teclado com setas e Enter
- [ ] Estado de hover não persiste após sair do componente
```

---

### Issue 26 — Comparador de Produtos

**Título:**

```
Implementar funcionalidade de seleção e comparação de até 3 produtos
```

**Labels:** `javascript` `intermediario` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar sistema de comparação onde o usuário seleciona produtos via checkbox e são redirecionados para a página de comparação.

## Deve incluir

- Checkbox em cada card de produto
- Barra fixa no rodapé com produtos selecionados (thumbnails)
- Máximo de 3 produtos selecionáveis simultaneamente
- Botão "Comparar" redireciona para `compare.html?ids=1,2,3`

## Critérios de conclusão

- [ ] Aviso ao tentar selecionar mais de 3 produtos
- [ ] Botão "Comparar" desabilitado com menos de 2 produtos
- [ ] Seleção persistida em sessionStorage
- [ ] Barra de comparação acessível com `aria-live`
```

---

### Issue 27 — Cache de Requisições

**Título:**

```
Implementar módulo de cache para requisições fetch com TTL configurável
```

**Labels:** `javascript` `intermediario` `performance`

**Corpo:**

```markdown
## Descrição

Criar camada de cache em memória para evitar requisições repetidas dentro de uma mesma sessão.

## Deve incluir

- Cache em Map com chave pela URL
- TTL (time-to-live) configurável por requisição
- Invalidação automática ao expirar o TTL
- Método `cache.clear()` para invalidação manual

## Critérios de conclusão

- [ ] Armazenamento como `{ data, timestamp }` em Map
- [ ] Comparação de `Date.now() - timestamp > ttl` para expiração
- [ ] Suporte a requisições GET apenas (POST não cacheável)
- [ ] Exportado como módulo ES6 singleton
```

---

### Issue 28 — Web Share API e Fallback

**Título:**

```
Criar módulo de compartilhamento com fallback para redes sociais
```

**Labels:** `javascript` `intermediario` `ux`

**Corpo:**

```markdown
## Descrição

Implementar compartilhamento de conteúdo com detecção de suporte à Web Share API e fallback com links para redes sociais.

## Deve incluir

- Tentativa de `navigator.share()` em browsers compatíveis
- Fallback com popup de links: WhatsApp, Twitter/X, Facebook e E-mail
- Modal de fallback com os botões de rede social
- Tracking de qual método foi utilizado (via `data-share-method`)

## Critérios de conclusão

- [ ] `navigator.canShare()` verificado antes de `navigator.share()`
- [ ] Links de cada rede com URL, título e texto corretos
- [ ] Links abertos em `window.open()` com dimensões específicas
- [ ] Modal acessível com `role="dialog"` e foco correto
```

---

### Issue 29 — Undo/Redo de Ações

**Título:**

```
Implementar funcionalidade de desfazer e refazer ações no carrinho
```

**Labels:** `javascript` `intermediario` `ux`

**Corpo:**

```markdown
## Descrição

Criar sistema de undo/redo para ações do carrinho (remover item, alterar quantidade) com histórico em pilha.

## Deve incluir

- Pilha de ações: `undoStack` e `redoStack`
- Botão ou toast "Desfazer" após ação destrutiva
- Atalho `Ctrl+Z` para desfazer
- Máximo de 10 ações no histórico

## Critérios de conclusão

- [ ] Cada ação armazenada com tipo e dados necessários para reverter
- [ ] `redo` recria a ação desfeita
- [ ] undo/redo com atalho de teclado detectado via `keydown`
- [ ] Botão "Desfazer" visível por 5 segundos após a ação
```

---

### Issue 30 — Counter Animation

**Título:**

```
Animar números contadores ao entrar na viewport
```

**Labels:** `javascript` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Criar animação de contagem progressiva para números na seção de estatísticas da home.

## Deve incluir

- Números contando de 0 até o valor final ao entrar na viewport
- Duração configurável via `data-duration`
- Easing de aceleração/desaceleração
- Formatação numérica (ponto separador de milhares)

## Critérios de conclusão

- [ ] Intersection Observer para iniciar o contador
- [ ] `requestAnimationFrame` para a animação suave
- [ ] `prefers-reduced-motion` exibindo o valor final diretamente
- [ ] Formatação com `Intl.NumberFormat` para separadores corretos
```

---

### Issue 31 — Detector de Scroll Infinito

**Título:**

```
Implementar infinite scroll para carregar mais produtos automaticamente
```

**Labels:** `javascript` `intermediario` `ux`

**Corpo:**

```markdown
## Descrição

Criar mecanismo de carregamento automático de produtos ao atingir o final da listagem.

## Deve incluir

- Sentinel element no final da lista monitorado pelo Intersection Observer
- Carregamento de novos itens ao sentinel entrar na viewport
- Skeleton loading durante o carregamento
- Botão "Carregar mais" como alternativa acessível

## Critérios de conclusão

- [ ] Sentinel com `rootMargin: "300px"` para carregar antes do fim
- [ ] Loading state enquanto aguarda "resposta da API" (mock)
- [ ] Observer desconectado quando todos os produtos forem carregados
- [ ] Botão alternativo funcional para usuários com JavaScript limitado
```

---

### Issue 32 — Feedback de Formulário Animado

**Título:**

```
Criar animações de feedback visual nos campos de formulário durante validação
```

**Labels:** `javascript` `intermediario` `forms`

**Corpo:**

```markdown
## Descrição

Adicionar microinterações visuais nos campos de formulário ao validar (sucesso, erro, loading).

## Deve incluir

- Ícone de check verde animado ao validar com sucesso
- Ícone de erro vermelho com shake animation em campos inválidos
- Spinner no campo durante verificação async (ex: e-mail disponível)
- Transição de borda colorida entre estados

## Critérios de conclusão

- [ ] Estados controlados por classes: `.field-valid`, `.field-invalid`, `.field-loading`
- [ ] Animação de shake via `@keyframes` (CSS) ativada por classe JS
- [ ] Feedback de sucesso removido ao editar o campo novamente
- [ ] `aria-invalid` atualizado conforme o estado
```

---

### Issue 33 — Filtro de Tabela com Ordenação

**Título:**

```
Implementar filtro por coluna e ordenação clicável em tabelas de dados
```

**Labels:** `javascript` `intermediario` `ui`

**Corpo:**

```markdown
## Descrição

Tornar as tabelas de dados do projeto filtráveis e ordenáveis sem recarregar a página.

## Deve incluir

- Input de busca que filtra as linhas da tabela em tempo real
- Clique no cabeçalho da coluna ordena por aquela coluna (asc/desc)
- Indicador visual de coluna ativa e direção de ordenação
- Contagem de resultados visíveis atualizada

## Critérios de conclusão

- [ ] Filtro com debounce de 200ms
- [ ] Ordenação alternando entre asc e desc a cada clique
- [ ] `aria-sort="ascending"` ou `"descending"` no `<th>` ativo
- [ ] Linhas ocultas com `display: none` (não removidas do DOM)
```

---

### Issue 34 — Gerenciamento de Estado de Formulário

**Título:**

```
Criar módulo de estado de formulário com validação reativa
```

**Labels:** `javascript` `intermediario` `forms`

**Corpo:**

```markdown
## Descrição

Implementar gerenciamento de estado centralizado para formulários complexos com validação reativa.

## Deve incluir

- Objeto de estado com valores de todos os campos
- Validação executada ao alterar cada campo (onChange)
- Objeto de erros atualizado em tempo real
- Botão de submit habilitado apenas quando o formulário é válido

## Critérios de conclusão

- [ ] Estado imutável: cada atualização cria novo objeto
- [ ] Regras de validação configuráveis por campo
- [ ] `isValid` calculado a partir do objeto de erros
- [ ] Re-render apenas dos campos afetados pela mudança
```

---

## 🔴 JavaScript — COMPLEXO

---

### Issue 35 — Módulo de Analytics Interno

**Título:**

```
Implementar módulo de analytics interno para rastrear eventos da loja
```

**Labels:** `javascript` `complexo` `analytics`

**Corpo:**

```markdown
## Descrição

Criar um sistema de rastreamento de eventos personalizado para coletar dados de comportamento do usuário na loja.

## Deve incluir

- API: `Analytics.track(eventName, properties)`
- Rastreamento de: page_view, product_view, add_to_cart, purchase
- Armazenamento local das últimas N sessões (localStorage)
- Modo debug que exibe eventos no console

## Critérios de conclusão

- [ ] Arquivo de configuração separando ambientes (dev/prod)
- [ ] Fila de eventos com flush periódico (mock de envio)
- [ ] Propriedades de contexto automáticas: URL, timestamp, userAgent
- [ ] Modo debug ativado por `localStorage.setItem('analytics_debug', '1')`
- [ ] Nenhum dado pessoal identificável armazenado sem consentimento
```

---

### Issue 36 — Sistema de Internacionalização (i18n)

**Título:**

```
Implementar sistema de internacionalização para suporte a múltiplos idiomas
```

**Labels:** `javascript` `complexo` `i18n`

**Corpo:**

```markdown
## Descrição

Criar sistema de tradução de strings da interface para PT-BR e EN-US com troca dinâmica de idioma.

## Deve incluir

- Arquivos de tradução em JSON por idioma
- Função `t('key', { interpolation })` para obter traduções
- Troca de idioma sem reload via atualização do DOM
- Suporte a pluralização (ex: "1 item" vs "2 itens")
- Fallback para PT-BR quando a chave não existir em outro idioma

## Critérios de conclusão

- [ ] Traduções carregadas dinamicamente via `import()` ou fetch
- [ ] Idioma detectado via `navigator.language` e salvo em localStorage
- [ ] Atributo `lang` do `<html>` atualizado ao trocar idioma
- [ ] Datas e números formatados com `Intl` baseado no idioma ativo
- [ ] Strings com pluralização suportando 2 formas (singular/plural)
```

---

### Issue 37 — PWA com Service Worker

**Título:**

```
Implementar Service Worker para cache offline e instalação como PWA
```

**Labels:** `javascript` `complexo` `pwa`

**Corpo:**

```markdown
## Descrição

Criar Service Worker que habilita navegação offline, cache de assets e ativação do prompt de instalação do PWA.

## Deve incluir

- Cache de assets estáticos (HTML, CSS, JS, imagens) no install
- Estratégia Cache First para assets, Network First para API
- Background sync para ações realizadas offline
- Prompt de instalação personalizado (A2HS)

## Critérios de conclusão

- [ ] `install` e `activate` events com gerenciamento de versão de cache
- [ ] Fallback offline para páginas essenciais
- [ ] `fetch` event com estratégia adaptada por tipo de recurso
- [ ] Prompt de instalação exibido após 2 visitas
- [ ] Update automático do Service Worker com `skipWaiting`
```

---

### Issue 38 — Engine de Recomendação

**Título:**

```
Criar engine de recomendação de produtos baseada no histórico de navegação
```

**Labels:** `javascript` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Desenvolver sistema de recomendações baseado em comportamento do usuário, sem API externa.

## Deve incluir

- Registro de produtos visualizados em localStorage (últimos 10)
- Registro de categorias mais acessadas com peso
- Algoritmo de scoring: visualizações recentes + categorias favoritas
- Exibição de "Recomendados Para Você" na home e sidebar

## Critérios de conclusão

- [ ] Score calculado pela frequência e recência de acesso
- [ ] Produtos já comprados excluídos das recomendações
- [ ] Fallback para produtos mais vendidos sem histórico
- [ ] Recomendações atualizadas a cada nova visualização
- [ ] Máximo de 8 recomendações exibidas por vez
```

---

### Issue 39 — Sistema de A/B Testing

**Título:**

```
Implementar sistema simples de A/B testing para testar variações de UI
```

**Labels:** `javascript` `complexo` `marketing`

**Corpo:**

```markdown
## Descrição

Criar módulo para dividir usuários em grupos de teste e controle, exibindo diferentes variações de UI.

## Deve incluir

- Atribuição aleatória de usuário a variante A ou B
- Variant ID persistido em localStorage para consistência
- API: `ABTest.getVariant('experiment_name')` retornando 'A' ou 'B'
- Rastreamento de conversões por variante

## Critérios de conclusão

- [ ] Distribuição 50/50 por padrão, configurável
- [ ] Experimentos configurados em objeto com nome e variantes
- [ ] Variante não muda entre sessões do mesmo usuário
- [ ] Modo de força de variante via `?ab_variant=B` na URL (dev)
- [ ] Log de experimento no módulo de analytics (issue #35)
```

---

### Issue 40 — Motor de Busca Full-Text

**Título:**

```
Implementar busca full-text em produtos sem dependências externas
```

**Labels:** `javascript` `complexo` `busca`

**Corpo:**

```markdown
## Descrição

Criar motor de busca client-side que pesquisa em múltiplos campos de produto com pontuação de relevância.

## Deve incluir

- Normalização de texto: lowercase, remoção de acentos, tokenização
- Busca em: nome, descrição, categoria e tags de produto
- Pontuação por campo: nome > tags > categoria > descrição
- Destacamento dos termos encontrados nos resultados

## Critérios de conclusão

- [ ] Índice invertido gerado na inicialização do módulo
- [ ] Busca retornando resultados ordenados por score
- [ ] Suporte a busca multi-termo (todos os termos devem ocorrer)
- [ ] Performance < 50ms para catálogo de 1000 produtos
- [ ] Resultado vazio com sugestões de termos próximos
```

---

### Issue 41 — Sincronização entre Abas

**Título:**

```
Implementar sincronização do carrinho entre abas com BroadcastChannel
```

**Labels:** `javascript` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Garantir que o estado do carrinho e favoritos seja sincronizado em tempo real entre múltiplas abas do browser.

## Deve incluir

- Canal `BroadcastChannel` para eventos de carrinho
- Atualização do contador de itens em todas as abas ao adicionar
- Remoção sincronizada entre abas
- Fallback via `StorageEvent` para browsers sem BroadcastChannel

## Critérios de conclusão

- [ ] Detecção de suporte com `'BroadcastChannel' in window`
- [ ] Mensagens tipadas: `{ type: 'cart_update', payload: [...] }`
- [ ] Aba que origina o evento não reprocessa a mensagem
- [ ] Reconexão automática se a aba ficou inativa
- [ ] Teste de funcionamento em 3 abas simultâneas
```

---

### Issue 42 — Virtual Scroll

**Título:**

```
Implementar virtual scroll para renderizar listas longas de forma eficiente
```

**Labels:** `javascript` `complexo` `performance`

**Corpo:**

```markdown
## Descrição

Criar componente de virtual scrolling que renderiza apenas os itens visíveis de listas com centenas de entradas.

## Deve incluir

- Renderização apenas dos itens dentro e próximos da viewport
- Placeholder de altura para os itens fora da viewport
- Scroll suave sem layout shift
- Suporte a itens com alturas fixas e variáveis

## Critérios de conclusão

- [ ] Cálculo dinâmico dos itens visíveis baseado em `scrollTop`
- [ ] Buffer de 5 itens acima e abaixo do viewport
- [ ] Performance: 60fps com lista de 10.000 itens
- [ ] Acessível: leitores de tela percebem o conteúdo completo
- [ ] Funciona corretamente com busca e filtros ativos
```

---

### Issue 43 — Editor de Imagem com Canvas

**Título:**

```
Criar editor de imagem básico com filtros e crop usando Canvas API
```

**Labels:** `javascript` `complexo` `utils`

**Corpo:**

```markdown
## Descrição

Implementar editor client-side para upload e edição básica de foto de perfil do usuário.

## Deve incluir

- Crop interativo com seleção de área
- Filtros: brilho, contraste, saturação e escala de cinza
- Preview em tempo real das alterações
- Exportação do resultado como base64/blob

## Critérios de conclusão

- [ ] `<canvas>` com a imagem carregada via FileReader
- [ ] Sliders de filtro atualizando o canvas em tempo real
- [ ] Crop com mouse drag: mousedown, mousemove, mouseup
- [ ] Download da imagem editada via `canvas.toBlob()`
- [ ] Limite de tamanho de arquivo (max 5MB) verificado no upload
```

---

### Issue 44 — Sistema de Hotkeys

**Título:**

```
Implementar sistema global de atalhos de teclado configurável
```

**Labels:** `javascript` `complexo` `ux`

**Corpo:**

```markdown
## Descrição

Criar módulo de hotkeys que permite definir atalhos de teclado globais e locais por componente.

## Deve incluir

- API: `Hotkeys.register('ctrl+k', callback, { scope })`
- Atalhos padrões: `Ctrl+K` (abrir busca), `Escape` (fechar modais), `?` (exibir lista de atalhos)
- Modal de ajuda com todos os atalhos registrados
- Desativação de atalhos quando o foco está em um input

## Critérios de conclusão

- [ ] Single listener no `document` com roteamento por atalho
- [ ] Escopo: atalhos locais só funcionam com certo componente aberto
- [ ] Normalização de teclas (maiúsculas, plataforma Mac vs Windows)
- [ ] Modal de ayuda acessível com `role="dialog"`
- [ ] Nenhum conflito com atalhos nativos do navegador
```

---

### Issue 45 — Calculadora de Frete

**Título:**

```
Implementar calculadora de frete com múltiplas transportadoras e prazos
```

**Labels:** `javascript` `complexo` `ecommerce`

**Corpo:**

```markdown
## Descrição

Criar módulo que simula cotação de frete com diferentes opções de entrega baseadas no CEP.

## Deve incluir

- Input de CEP com validação e busca de endereço (ViaCEP)
- Retorno de 3 a 4 opções de frete (mock): Econômico, Padrão, Expresso
- Cálculo de prazo em dias úteis excluindo finais de semana e feriados
- Seleção de opção e persistência no carrinho

## Critérios de conclusão

- [ ] Array de feriados nacionais para cálculo de dias úteis
- [ ] Preços e prazos variando por distância (mock baseado no CEP)
- [ ] Loading state durante a "consulta de frete"
- [ ] Opção selecionada salva no estado do carrinho
- [ ] Resultado acessível com `aria-live` para leitores de tela
```

---

### Issue 46 — Monitoramento de Performance

**Título:**

```
Criar módulo de monitoramento de performance da página com Web Vitals
```

**Labels:** `javascript` `complexo` `performance`

**Corpo:**

```markdown
## Descrição

Implementar coleta e visualização de métricas de performance usando as APIs nativas do browser.

## Deve incluir

- Coleta de LCP, FID/INP, CLS e TTFB via `PerformanceObserver`
- Painel de debug de performance (visível apenas em dev)
- Alertas no console quando métricas ultrapassam limites recomendados
- Envio das métricas para o módulo de analytics (issue #35)

## Critérios de conclusão

- [ ] `PerformanceObserver` para `largest-contentful-paint`, `layout-shift` e `longtask`
- [ ] Thresholds baseados nos limites Core Web Vitals do Google
- [ ] Painel de debug ativado por `?debug_perf=1`
- [ ] Nenhum impacto de performance do próprio módulo de monitoramento
- [ ] Modo de produção com envio silencioso (sem logs)
```

---

### Issue 47 — Live Chat Simulado

**Título:**

```
Criar widget de live chat simulado com estados e histórico de mensagens
```

**Labels:** `javascript` `complexo` `ux`

**Corpo:**

```markdown
## Descrição

Desenvolver widget de chat ao vivo com interface completa, respostas automáticas e histórico persistido.

## Deve incluir

- Botão flutuante abre janela de chat
- Histórico de mensagens da sessão em localStorage
- Respostas automáticas baseadas em palavras-chave (FAQ bot)
- Estados do agente: online, ausente, digitando...
- Envio por Enter com Shift+Enter para nova linha

## Critérios de conclusão

- [ ] `role="log"` no container de mensagens com `aria-live="polite"`
- [ ] Scroll automático para a última mensagem
- [ ] Indicador "digitando" com timeout antes da resposta automática
- [ ] Histórico carregado ao reabrir o chat
- [ ] Botão de fechar com limpeza de histórico opcional
```

---

### Issue 48 — Sistema de Permissões por Roles

**Título:**

```
Implementar sistema de controle de acesso baseado em roles no frontend
```

**Labels:** `javascript` `complexo` `auth`

**Corpo:**

```markdown
## Descrição

Criar módulo de permissões que controla a exibição de elementos UI e execução de ações baseado no role do usuário.

## Deve incluir

- Roles: `guest`, `customer`, `seller`, `admin`
- Configuração de permissões por recurso e ação (ex: `products.create`)
- Diretiva HTML: `data-permission="products.create"` oculta elementos sem permissão
- Verificação via API: `Permissions.can('products.create')`

## Critérios de conclusão

- [ ] Mapa de permissões por role em arquivo de configuração separado
- [ ] Role do usuário lido do sessionStorage/JWT parse
- [ ] Elementos sem permissão removidos ou ocultados após DOMContentLoaded
- [ ] `Permissions.can()` retornando Promise para verificações assíncronas
- [ ] Roles herdáveis: admin tem todas as permissões de customer e seller
```

---

### Issue 49 — Fila de Envio de Formulários

**Título:**

```
Criar módulo de envio de formulário com fila, retry automático e offline support
```

**Labels:** `javascript` `complexo` `forms`

**Corpo:**

```markdown
## Descrição

Implementar mecanismo robusto de envio de formulários que persiste tentativas falhas e as reenvia ao recuperar conexão.

## Deve incluir

- Fila de envios pendentes em localStorage
- Retry automático com backoff exponencial (1s, 2s, 4s, 8s)
- Envio de itens da fila ao recuperar conexão (evento `online`)
- Status de cada item: `pending`, `sending`, `sent`, `failed`

## Critérios de conclusão

- [ ] Fila processada em ordem FIFO
- [ ] Máximo de 5 tentativas por item antes de marcar como falho
- [ ] UI informando o usuário sobre itens pendentes na fila
- [ ] Items da fila removidos com sucesso após confirmação de envio
- [ ] Fila não cresce indefinidamente (limite de 20 itens)
```

---

### Issue 50 — Gerenciador de Estado Global

**Título:**

```
Implementar gerenciador de estado global reativo sem dependências externas
```

**Labels:** `javascript` `complexo` `arquitetura`

**Corpo:**

```markdown
## Descrição

Criar um store centralizado e reativo para gerenciar o estado global da aplicação (carrinho, usuário, UI).

## Deve incluir

- `Store.get(key)`, `Store.set(key, value)`, `Store.subscribe(key, callback)`
- Reatividade: callbacks registrados são chamados ao mudar o estado
- Persistência opcional: `Store.persist(key)` sincroniza com localStorage
- Sistema de actions para mudanças complexas de estado

## Critérios de conclusão

- [ ] Implementado com Proxy para intercepção de mudanças
- [ ] `subscribe` retorna função de `unsubscribe`
- [ ] Imutabilidade: `set` cria novo objeto, não muta o existente
- [ ] DevTools mode: log de todas as mutações com timestamp
- [ ] Performance: subscribers chamados de forma assíncrona com microtask queue
```

---

_50 issues — JavaScript (17 simples · 17 intermediário · 16 complexo)_

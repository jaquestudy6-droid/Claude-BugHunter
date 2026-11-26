# 📊 Módulo 09 — Anúncios pagos

> **Mundo 4 · Dados & Crescimento** · ⏱ ~3h30 · 🎯 Meta: entender como funcionam os anúncios em redes e planejar/testar uma campanha com método  
> **Pré-requisitos:** Módulos 01–08 · **XP:** 100

> ⚠️ **Aviso:** interfaces e nomes de recursos de anúncios mudam com muita frequência (ex.: automação "Advantage+" da Meta). Aprenda **os princípios** aqui e confirme a **tela atual** na Central de Ajuda oficial / Meta Blueprint / Skillshop.

---

## 🗺️ Mapa do módulo

1. Por que (e quando) anunciar
2. Como funciona o leilão de anúncios
3. Estrutura de campanha: Campanha → Conjunto → Anúncio
4. Os 6 objetivos de campanha
5. Públicos: amplo, interesses, personalizados, semelhantes
6. Pixel, API de conversões e privacidade
7. Criativo: o novo "targeting"
8. Orçamento, fase de aprendizado e otimização
9. Métricas e leitura de resultados
10. Erros comuns · Políticas
11. Outras plataformas de anúncio
12. 🔬 Laboratório · 🎮 Mini-jogo · ⚔️ Chefe final

---

## 1️⃣ Por que (e quando) anunciar

| Orgânico | Pago |
|---|---|
| "De graça" (custa tempo e criatividade) | Custa dinheiro |
| Alcance **imprevisível** | Alcance **controlável** |
| Constrói relacionamento e autoridade | **Escala** o que já funciona |
| Segmentação limitada | **Segmentação** e testes mais precisos |

**Quando anunciar?** Quando você já tem: (1) uma **oferta clara**, (2) **conteúdo que funciona organicamente**, (3) um **destino** que converte (site, WhatsApp, perfil) e (4) **forma de medir**. Anúncio **amplifica**; não "conserta" produto ruim ou oferta confusa.

> 💡 **Estratégia saudável:** teste conteúdos organicamente → **impulsione/anuncie os vencedores** → meça → repita.

---

## 2️⃣ Como funciona o leilão de anúncios

Quando uma pessoa abre o app, ocorre um **leilão de atenção** em milissegundos. Em termos simples (modelo conceitual), vence o anúncio com maior **"valor total"**, que combina:

```
VALOR TOTAL  ≈  LANCE (quanto você topa pagar)
              ×  TAXA DE AÇÃO ESTIMADA (chance de a pessoa agir)
              +  QUALIDADE / RELEVÂNCIA (experiência do usuário)
```

**Consequências práticas:**
- **Anúncio relevante e bom** pode vencer mesmo com lance menor.
- **Criativo ruim** = o sistema prevê baixa ação → você paga **mais** por resultado.
- **Mais concorrência** (datas como Black Friday) = **CPM mais alto**.

*(Esta é uma simplificação didática; cada plataforma tem detalhes próprios.)*

---

## 3️⃣ Estrutura de campanha (Meta como exemplo)

```
CAMPANHA  → define o OBJETIVO ("o que quero que aconteça?")
   └── CONJUNTO DE ANÚNCIOS → define PÚBLICO, ORÇAMENTO, PROGRAMAÇÃO, POSICIONAMENTOS
          └── ANÚNCIO → define CRIATIVO (imagem/vídeo), TEXTO, DESTINO (link/WhatsApp/perfil), CTA
```

**Analogia da viagem:** campanha = **destino**; conjunto = **passageiros e orçamento**; anúncio = **o carro que leva a mensagem**.

> Estruturas de TikTok Ads, LinkedIn Ads e Google Ads são parecidas (campanha → grupo → anúncio).

---

## 4️⃣ Os 6 objetivos de campanha (Meta)

| Objetivo | Para quê | Otimiza para… | Exemplo |
|---|---|---|---|
| **Reconhecimento** | Ser lembrado | Alcance/memorização | Lançar marca/produto |
| **Tráfego** | Levar visitas | Cliques/visitas à página | Atrair para o site/blog |
| **Engajamento** | Interações | Mensagens, curtidas, visualizações de vídeo | Conversas no WhatsApp/DM |
| **Cadastros (Leads)** | Coletar contatos | Formulários/cadastros | Inscrição em evento |
| **Promoção do app** | Instalar/usar app | Instalações/eventos | App de delivery |
| **Vendas** | Compra/conversão | Eventos de compra/conversão | E-commerce |

> 🎯 **A plataforma otimiza para o que você pede.** Pedir "tráfego" e esperar "vendas" é erro clássico: ela trará **cliques**, não necessariamente compradores.

---

## 5️⃣ Públicos

| Tipo | O que é | Quando usar |
|---|---|---|
| **Amplo (broad)** | Só localização/idade/idioma; deixa o sistema encontrar | Com bons criativos e pixel/dados; a tendência das plataformas é dar mais autonomia à automação |
| **Interesses/comportamentos** | Pessoas que demonstram interesse em temas | Início, nichos claros |
| **Personalizado (custom)** | Quem **já interagiu**: visitou o site, assistiu vídeos, engajou no perfil, lista de clientes (com consentimento) | **Remarketing** |
| **Semelhante (lookalike)** | Pessoas parecidas com seus melhores clientes | Escalar com base em dados de qualidade |

**Remarketing:** reimpactar quem **já demonstrou interesse** (ex.: viu o produto e não comprou). Normalmente tem **melhor custo por resultado** que público frio — mas é pequeno; precisa de topo de funil alimentando.

> 🏷️ **Respeite a privacidade:** listas de clientes só com **base legal/consentimento** (LGPD).

---

## 6️⃣ Pixel, API de conversões e privacidade

- **Pixel:** trecho de código no site que informa à plataforma **o que as pessoas fazem** (visualizou produto, adicionou ao carrinho, comprou).
- **API de conversões:** envia eventos **do servidor** (mais robusto contra bloqueios de rastreamento).
- Por que importa: **o algoritmo de anúncios aprende com seus eventos** de conversão. Sem dados, ele "voa às cegas".
- **Privacidade:** mudanças no sistema do iPhone (App Tracking Transparency, 2021), bloqueadores de anúncio e leis como a **LGPD** limitam o rastreamento. Por isso, **consentimento (cookies)** e **dados próprios (first-party)** são cada vez mais importantes.

---

## 7️⃣ Criativo: o novo "targeting"

Com segmentação mais ampla, **o criativo vira o filtro**: ele "chama" as pessoas certas e afasta as erradas.

### O que testar em criativos
- **Gancho** (primeiros 3 s) · **Formato** (vídeo, carrossel, imagem, UGC)
- **Ângulo/mensagem** (dor, prova social, benefício, comparação, humor)
- **Oferta** (desconto, bônus, garantia) · **CTA**

### Método 3×3 (simples e poderoso)
```
3 mensagens/ângulos  ×  3 formatos/ganchos  =  9 variações pequenas
```
Rode com orçamento baixo → **identifique vencedores** → **escale** os melhores, **elimine** os piores.

### Anúncio que "parece orgânico"
Em feeds de vídeo curto, anúncios nativos (gravados no celular, com pessoa real, ritmo rápido) costumam rodar melhor que comerciais "de TV". *(Teste no seu nicho.)*

### Recursos de parceria
Plataformas permitem **anunciar a partir de posts de criadores** (ex.: "anúncios de parceria" na Meta, "Spark Ads" no TikTok) — combina prova social com distribuição paga (módulo 10).

---

## 8️⃣ Orçamento, aprendizado e otimização

- **Orçamento diário × vitalício:** diário = gasto médio por dia; vitalício = total para o período.
- **Fase de aprendizado:** o sistema precisa de um **volume mínimo de eventos de otimização** (por exemplo, na Meta, algo da ordem de **~50 eventos em ~7 dias** por conjunto — confira a regra atual) para estabilizar. **Mudanças grandes e frequentes** reiniciam o aprendizado.
- **Regra de paciência:** evite alterar tudo todo dia. Dê **dados suficientes** antes de decidir.
- **Teste pequeno antes de escalar:** valide o criativo e a oferta com orçamento controlado.
- **Escalar:** aumente orçamento **gradualmente** (ex.: +20%) e acompanhe CPA/ROAS.

---

## 9️⃣ Métricas e leitura de resultados

| Métrica | Pergunta |
|---|---|
| **CPM** | Quanto custa "entrar no leilão"? (sobe com concorrência e público estreito) |
| **CTR (link)** | O criativo chama a atenção e gera clique? |
| **CPC** | Quanto custa cada clique? |
| **Taxa de conversão** da página | A página/oferta convence? |
| **CPA / CPL** | Quanto custa cada resultado? |
| **ROAS** | O retorno bruto compensa? (compare com sua **margem**) |
| **Frequência** | Estou "cansando" as pessoas? (valores muito altos indicam saturação) |

**Raciocínio em cadeia (diagnóstico):**
```
CPM alto?  → público/concorrência/criativo
CTR baixo? → criativo/mensagem
Cliques bons, conversão baixa? → página, oferta, preço, rastreamento
Frequência alta + resultados caindo? → fadiga de criativo → renove
```

---

## 🔟 Erros comuns · Políticas

### Erros comuns
1. Objetivo errado para a meta · 2. Sem pixel/rastreamento · 3. Público pequeno demais ou sobreposto
4. Mudar tudo a cada dia · 5. Um único criativo · 6. Ignorar a **página de destino**
7. Anunciar sem **oferta clara** · 8. Não acompanhar **margem** (ROAS "bonito" que dá prejuízo)
9. **"Impulsionar" sem estratégia** (botão rápido, pouco controle) · 10. Resultados sem atribuição realista.

### Políticas e ética
- Plataformas têm **políticas de anúncios** (categorias restritas: saúde, finanças, política/sociais, conteúdo adulto, promessas enganosas, antes/depois com alegações, etc.).
- **Não prometa** o que não pode cumprir. Evite **dark patterns** e urgência falsa.
- **Anúncios sociais/políticos** têm regras específicas (autorização, rótulos).
- Contas reprovadas repetidamente podem ser restringidas — **leia as políticas**.

---

## 1️⃣1️⃣ Outras plataformas de anúncio

| Plataforma | Força |
|---|---|
| **Meta Ads** (Facebook/Instagram/WhatsApp) | Escala, segmentação, formatos variados |
| **TikTok Ads** | Vídeo nativo, descoberta, público jovem/adulto |
| **YouTube/Google Ads** | **Intenção de busca** (Google) + vídeo (YouTube) |
| **LinkedIn Ads** | **B2B**, segmentação por cargo/empresa (custo maior) |
| **Pinterest Ads** | Inspiração/planejamento de compra |
| **X Ads** | Tempo real, nichos engajados |

---

## 🔬 Laboratório 9 — Campanha no papel (sem gastar nada)

1. Escolha um negócio (real ou fictício) e **uma oferta**.
2. Defina o **objetivo** e a **métrica principal** (ex.: CPA ≤ R$ 25).
3. Descreva **público** (frio) e **remarketing**.
4. Crie **9 variações** (3 ângulos × 3 ganchos) em texto (títulos e primeiras frases).
5. Defina **orçamento de teste** (valor fictício), duração e **critério de decisão** ("se após X, CPA > Y, pausar").
6. Monte o **plano de rastreamento** (UTM, pixel, cupom).

*(Se quiser praticar com a interface real, explore o Gerenciador de Anúncios até a etapa de revisão **sem publicar**; e assista a tutoriais da lista de vídeos.)*

---

## 🎮 Mini-jogo — Diagnóstico de campanha

**Caso:** CPM R$ 40 (alto), CTR 0,4% (baixo), CPC R$ 10, frequência 5. O que você faz?

<details><summary>👀 Resposta</summary>

CPM alto + CTR baixo + frequência alta → **público saturado e criativo fraco/cansado**. Ações: **renovar criativos** (novos ganchos/ângulos), **ampliar o público** (ou reduzir sobreposição), **testar formatos nativos**, rever objetivo/oferta. Só depois de melhorar o CTR vale mexer em orçamento.
</details>

---

## ⚔️ Chefe final do Módulo 09

**1.** Qual a estrutura de uma campanha? **2.** Por que escolher o objetivo "Tráfego" e esperar vendas é um erro? **3.** O que é remarketing? **4.** Para que servem pixel/API de conversões? **5.** O que significa dizer que "o criativo é o novo targeting"?

<details><summary>👀 Respostas-modelo</summary>

1. Campanha (objetivo) → Conjunto (público/orçamento) → Anúncio (criativo/texto/destino).
2. A plataforma otimiza para o que você pede: tráfego traz cliques, não necessariamente compradores.
3. Impactar novamente quem já interagiu/visitou/mostrou interesse.
4. Informar à plataforma os eventos (visitas, compras) para medir e permitir que o algoritmo otimize.
5. Com público amplo, a mensagem/criativo é que atrai as pessoas certas e afasta as erradas.
</details>

---

## 📺 Vídeos · ✅ Checklist · ➡️ Próximo

- Vídeos: [`../videos/curadoria-de-videos.md`](../videos/curadoria-de-videos.md#módulo-09)
- [ ] Li a aula · [ ] Fiz o Laboratório 9 · [ ] Joguei o mini-jogo · [ ] Chefe final ≥ 70% · [ ] Marquei no [progresso.md](../progresso.md)

➡️ **Próximo:** [Módulo 10 — Influenciadores & social commerce](10-influenciadores-e-social-commerce.md)

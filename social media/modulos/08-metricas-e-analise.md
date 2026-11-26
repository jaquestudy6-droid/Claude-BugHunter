# 📊 Módulo 08 — Métricas e análise

> **Mundo 4 · Dados & Crescimento** · ⏱ ~3h · 🎯 Meta: ler números, diagnosticar problemas e transformar dados em decisões  
> **Pré-requisitos:** Módulos 01–07 · **XP:** 100

---

## 🗺️ Mapa do módulo

1. Por que medir (e o que *não* medir)
2. O dicionário das métricas
3. Fórmulas com exemplos numéricos
4. Métricas por objetivo (funil)
5. Vaidade vs. acionável
6. Benchmarks: comparar com quem?
7. Rastreamento: UTM, cupom e atribuição
8. Diagnóstico: sintoma → causa → ação
9. Experimentos (testes A/B)
10. Relatórios e dashboards
11. 🔬 Laboratório · 🎮 Mini-jogos · ⚔️ Chefe final

---

## 1️⃣ Por que medir

> **Sem dados, você tem opinião. Com dados, você tem hipótese. Com experimentos, você tem aprendizado.**

**Analogia do painel do carro:** velocímetro, combustível e temperatura não dizem *para onde* ir (isso é estratégia), mas avisam **se você está indo bem** e **se algo vai quebrar**.

Princípio: **toda métrica deve provocar uma decisão.** Se um número muda e você não faria nada de diferente, ele é decoração.

---

## 2️⃣ O dicionário das métricas

### 👀 Distribuição (quantos viram)
| Métrica | Significado |
|---|---|
| **Alcance (reach)** | Nº de **pessoas únicas** que viram |
| **Impressões** | Nº **total de exibições** (a mesma pessoa pode ver várias vezes) |
| **Frequência** | Impressões ÷ alcance (média de vezes por pessoa) |
| **Visualizações (views)** | Contagem de reproduções (definições variam entre redes!) |

> ⚠️ **Definições mudam por plataforma.** Ex.: no YouTube, "impressão" refere-se a quantas vezes a *miniatura* foi exibida; em outras redes, "visualização" pode contar poucos segundos de reprodução. Sempre leia o glossário oficial de métricas da rede.

### ⏱️ Atenção (como viram)
| Métrica | Significado |
|---|---|
| **Tempo médio assistido / duração média de visualização** | Quanto tempo as pessoas ficam |
| **Retenção (curva)** | % da audiência que permanece a cada instante |
| **Taxa de conclusão** | % que assistiu até o fim |
| **Replays** | Pessoas que reviram |

### 💬 Interação (como reagiram)
Curtidas · Comentários · **Compartilhamentos/envios** · **Salvamentos** · Respostas a Stories · Cliques em adesivos.

### 🖱️ Ação (o que fizeram)
Cliques no link · Visitas ao perfil · Novos seguidores/inscritos · Mensagens iniciadas · Cadastros · Compras.

### 💰 Negócio (o que isso rendeu)
**CPM** (custo por mil impressões) · **CPC** (custo por clique) · **CPL** (custo por lead) · **CPA/CAC** (custo por aquisição/cliente) · **Taxa de conversão** · **ROAS** (retorno sobre investimento em anúncios) · **LTV** (valor do cliente ao longo do tempo).

---

## 3️⃣ Fórmulas com exemplos numéricos

### 3.1 Taxa de engajamento (ER)
Existem **variações**. Defina uma e use sempre a mesma.

- **ER por alcance** = (interações ÷ alcance) × 100
- **ER por seguidores** = (interações ÷ seguidores) × 100
- **ER por impressões/visualizações** = (interações ÷ impressões ou views) × 100

*Interações* = curtidas + comentários + salvamentos + compartilhamentos (defina o que entra e mantenha).

**Exemplo:** post com 120 curtidas + 15 comentários + 40 salvamentos + 25 compartilhamentos = **200 interações**.  
Alcance = 5.000 · Seguidores = 8.000
- ER por alcance = 200 ÷ 5.000 × 100 = **4,0%**
- ER por seguidores = 200 ÷ 8.000 × 100 = **2,5%**

### 3.2 CTR (taxa de cliques)
**CTR** = (cliques ÷ impressões) × 100  
Ex.: 300 cliques ÷ 20.000 impressões = **1,5%**

### 3.3 Métricas de custo
- **CPM** = (gasto ÷ impressões) × 1.000 → R$ 200 ÷ 50.000 × 1.000 = **R$ 4,00**
- **CPC** = gasto ÷ cliques → R$ 200 ÷ 400 = **R$ 0,50**
- **CPL** = gasto ÷ leads → R$ 200 ÷ 20 = **R$ 10,00**
- **CPA** = gasto ÷ vendas → R$ 200 ÷ 10 = **R$ 20,00**
- **ROAS** = receita ÷ gasto → R$ 1.000 ÷ R$ 200 = **5,0×** (cada R$ 1 investido gerou R$ 5 de receita)
  > ⚠️ ROAS **não é lucro**: considere custo do produto, impostos, frete, comissões.

### 3.4 Frequência e retenção
- **Frequência** = impressões ÷ alcance → 60.000 ÷ 20.000 = **3,0**
- **Retenção média** = duração média assistida ÷ duração do vídeo → 12 s ÷ 30 s = **40%**

### 3.5 Crescimento líquido
**Crescimento líquido de seguidores** = novos − que deixaram de seguir.  
**Taxa de crescimento** = (novos líquidos ÷ seguidores no início) × 100.

> 🧮 No jogo interativo há uma **Calculadora de Métricas** para praticar.

---

## 4️⃣ Métricas por objetivo (funil)

| Objetivo | Métricas principais | Pergunta-chave |
|---|---|---|
| **Awareness** | Alcance, impressões, visualizações, novos seguidores, share of voice | Quantas pessoas **certas** nos viram? |
| **Consideração** | Tempo assistido, salvamentos, compartilhamentos, cliques, visitas ao perfil | Quem **se interessou de verdade**? |
| **Conversão** | Leads, vendas, CPA, taxa de conversão, ROAS | Quanto **custou** conseguir cada resultado? |
| **Retenção/advocacy** | Recompra, NPS, UGC, respostas, menções espontâneas | Quem **volta e recomenda**? |

---

## 5️⃣ Vaidade vs. acionável

| Vaidade 🎈 | Acionável 🔧 |
|---|---|
| Número total de seguidores | Seguidores **ativos** que engajam e convertem |
| Curtidas sozinhas | Salvamentos, compartilhamentos, cliques |
| Visualizações brutas | Retenção + ação após ver |
| "Alcance" sem público-alvo | Alcance **qualificado** (no público certo) |

**Teste:** "Se este número dobrar, meu negócio melhora?" e "Que decisão eu tomo com ele?"

---

## 6️⃣ Benchmarks: comparar com quem?

- **Não existe "engajamento bom" universal.** Varia por rede, formato, nicho, tamanho da conta e definição da métrica.
- Compare, nesta ordem: **(1) com você mesmo** (últimos 3–6 meses) · **(2) com contas parecidas** · **(3) com relatórios do setor** (com cuidado).
- Contas **menores** costumam ter taxas **maiores** — não compare uma conta de 5 mil com uma de 5 milhões.
- Tendência > número isolado: **está melhorando ou piorando?**

---

## 7️⃣ Rastreamento: UTM, cupom e atribuição

### UTMs (parâmetros no link)
```
https://seusite.com.br/oferta?utm_source=instagram&utm_medium=social&utm_campaign=lancamento-nov
```
- `utm_source` → **origem** (instagram, tiktok, newsletter)
- `utm_medium` → **meio** (social, cpc, email)
- `utm_campaign` → **campanha**
- (opcionais) `utm_content` (variação do criativo), `utm_term`

Com isso, ferramentas como **Google Analytics (GA4)** mostram **de onde vieram** os visitantes e as conversões.

### Outras formas de rastrear
- **Cupons exclusivos** por criador/campanha.
- **Pergunta no checkout/cadastro:** "Como nos conheceu?".
- **WhatsApp:** mensagem pré-preenchida com código ("Vim do Instagram").
- **Pixel/API de conversões** para anúncios (módulo 09).

### Atribuição: a verdade incômoda
O caminho da compra é **bagunçado**: a pessoa vê um Reels, busca no Google, vê um anúncio, conversa com amigo e só então compra. Parte do impacto das redes é **"dark social"** (compartilhamentos privados, DMs, grupos) e **invisível** para ferramentas. Por isso:
- Use **várias fontes** (cliques + cupom + pesquisa de origem).
- Acompanhe **tendências** (aumento de buscas pelo nome da marca após campanhas).
- **Não** culpe nem glorifique uma única métrica.

---

## 8️⃣ Diagnóstico: sintoma → causa provável → ação

| Sintoma | Causa provável | O que testar |
|---|---|---|
| **Muitas impressões, baixo CTR** | Capa/título/thumbnail fracos; público errado | Nova capa/título, teste A/B de miniatura |
| **Bom CTR, baixa retenção** | Promessa do gancho **não** entregue; começo lento | Alinhar gancho e conteúdo; cortar introdução |
| **Alta retenção, baixo alcance** | Conteúdo bom, mas pouco "compartilhável" ou tema/nicho confuso | Reforçar CTA de envio, ajustar ângulo/tema, testar horários e formatos |
| **Muitas curtidas, poucos cliques/vendas** | Conteúdo de entretenimento sem ponte para a oferta | Incluir conteúdo de meio/fundo de funil, CTA claro |
| **Muitos cliques, poucas conversões** | Problema na **página de destino**, oferta ou preço | Melhorar landing page, velocidade, prova social |
| **Seguidores sobem, engajamento cai** | Audiência errada, viralização fora do nicho, seguidores falsos | Reforçar pilares, revisar público, limpar contas inativas (com critério) |
| **Alcance caiu de repente** | Mudança de formato, queda de consistência, mudança na plataforma, violação | Checar status da conta, comparar formatos, revisar últimas mudanças |
| **Muitos comentários negativos** | Expectativa quebrada ou crise | Ler os comentários, responder (ROTA), acionar plano de crise se necessário |

> 🩺 **Jogue o "Médico de Perfis"** no jogo interativo para treinar esses diagnósticos.

---

## 9️⃣ Experimentos (testes A/B)

### Estrutura de uma hipótese
> **Se** eu [mudança específica], **então** [métrica] vai [subir/cair em X], **porque** [razão].

### Regras de ouro
1. **Mude uma variável por vez** (gancho, capa, horário, formato, CTA…).
2. Defina a **métrica de sucesso** antes.
3. Tenha **amostra suficiente** — poucos posts não provam nada; tenha cuidado com conclusões de 1 caso.
4. **Registre** tudo (data, hipótese, resultado, aprendizado) em um *log de experimentos*.
5. Repita o que funcionou; **teste a mesma hipótese em outro contexto** antes de generalizar.

### Exemplo
*Hipótese:* "Se eu começar os vídeos com o resultado final (em vez da explicação), a **retenção aos 3 s** vai subir, porque o espectador vê o benefício primeiro." → Publicar 5 vídeos de cada estilo e comparar.

---

## 🔟 Relatórios e dashboards

### Estrutura de um bom relatório mensal
1. **Resumo executivo** (3–5 linhas: o que aconteceu e o que significa)
2. **Resultados vs. metas** (tabela simples, com setas ▲▼ vs. mês anterior)
3. **Top 3 e Bottom 3 conteúdos** (e por quê)
4. **Aprendizados** (o que funcionou, o que não)
5. **Próximos passos** (decisões e experimentos para o próximo mês)
6. **Anexos** (dados detalhados)

> Um relatório de 1 página com **decisões** vale mais que 30 páginas de gráficos.

### Dashboard simples (planilha)
Colunas: **data · rede · formato · pilar · gancho · alcance · tempo médio · compartilhamentos · salvamentos · comentários · cliques · observações**. Pinte os melhores e piores, **compare padrões**.

📄 Modelo: `templates/relatorio-mensal.md`.

---

## 🔬 Laboratório 8 — Seu painel de controle

1. Monte uma **planilha** com as colunas acima e preencha com **10 conteúdos** reais (seus ou de um perfil que você gerencie).
2. Calcule **ER por alcance** e **ER por seguidores** para cada um.
3. Identifique **top 3 / bottom 3** e escreva **3 hipóteses** do porquê.
4. Crie **1 link com UTM** para sua bio e teste no navegador.
5. Escreva um **relatório de 1 página** seguindo a estrutura acima.

---

## 🎮 Mini-jogo 1 — Qual é a métrica?

1. "Quantas pessoas **diferentes** viram o post?" 2. "Quantas **vezes** o post foi exibido ao todo?" 3. "Quanto paguei por 1.000 exibições?" 4. "Que parcela das exibições virou clique?"

<details><summary>👀 Respostas</summary>1 → Alcance · 2 → Impressões · 3 → CPM · 4 → CTR</details>

## 🎮 Mini-jogo 2 — Mini-diagnóstico

Um vídeo teve **200 mil impressões**, **CTR 0,6%** e retenção de **70%**. Qual o provável problema e o que fazer?

<details><summary>👀 Resposta</summary>

CTR baixo com ótima retenção → quem **clica** gosta, mas **poucos clicam**: embalagem (título/capa/thumbnail) fraca ou público de exibição pouco qualificado. **Ação:** testar nova capa/título; manter o conteúdo.
</details>

---

## ⚔️ Chefe final do Módulo 08

**1.** Diferença entre alcance e impressões? **2.** Calcule ER por alcance: 90 curtidas, 10 comentários, 30 salvamentos, 20 compartilhamentos, alcance 6.000. **3.** O que é ROAS e por que não é lucro? **4.** Cite 3 formas de rastrear origem de vendas. **5.** Por que mudar uma variável por vez em testes?

<details><summary>👀 Respostas-modelo</summary>

1. Alcance = pessoas únicas; impressões = total de exibições (inclui repetições).
2. Interações = 90+10+30+20 = 150 → 150 ÷ 6.000 × 100 = **2,5%**.
3. Receita ÷ gasto em anúncios; não considera custos do produto, impostos, frete etc.
4. UTM, cupom exclusivo, pergunta "como nos conheceu", mensagem pré-preenchida no WhatsApp, pixel.
5. Para saber qual mudança causou o efeito; mudar várias coisas juntas impede concluir.
</details>

---

## 📺 Vídeos · ✅ Checklist · ➡️ Próximo

- Vídeos: [`../videos/curadoria-de-videos.md`](../videos/curadoria-de-videos.md#módulo-08)
- [ ] Li a aula · [ ] Fiz o Laboratório 8 · [ ] Joguei os mini-jogos · [ ] Chefe final ≥ 70% · [ ] Marquei no [progresso.md](../progresso.md)

➡️ **Próximo:** [Módulo 09 — Anúncios pagos](09-anuncios-pagos.md)

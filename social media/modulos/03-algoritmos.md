# 🌱 Módulo 03 — Como funcionam os algoritmos

> **Mundo 1 · Fundamentos** · ⏱ ~2h30 · 🎯 Meta: entender *por que* um conteúdo é (ou não) distribuído — sem superstição  
> **Pré-requisitos:** Módulos 01–02 · **XP:** 100

---

## 🗺️ Mapa do módulo

1. O que é "o algoritmo" (analogia do bibliotecário)
2. O funil de recomendação em 5 etapas
3. Dois "mundos": grafo social vs. grafo de interesses
4. Os sinais que as plataformas observam
5. O que as próprias plataformas disseram (fontes oficiais)
6. O ciclo de teste em ondas (por que vídeos "explodem" depois)
7. Mitos e verdades
8. Efeitos colaterais: atenção, bolhas e bem-estar
9. 🔬 Laboratório · 🎮 Mini-jogos · ⚔️ Chefe final

---

## 1️⃣ O que é "o algoritmo"

**Algoritmo** = uma receita passo a passo para resolver um problema. O problema aqui:

> *"Existem milhões de conteúdos possíveis. Cada pessoa tem poucos minutos. Qual conteúdo mostrar para quem, e em qual ordem?"*

### 🧑‍🏫 A analogia do bibliotecário superdotado

Imagine uma biblioteca com **bilhões de livros** e um bibliotecário que observa o que cada visitante pega, devolve, lê até o fim, comenta e recomenda a amigos. A cada visita, ele **empurra para a frente da estante** os livros que *provavelmente* aquele visitante vai gostar.

- O bibliotecário **não tem opinião sobre você**; tem **previsões** baseadas em comportamento.
- Ele **não é uma só regra**: são muitos modelos (e dezenas de sinais) trabalhando juntos.
- Ele **quer o que a plataforma quer**: que as pessoas voltem e fiquem satisfeitas (e vejam anúncios).

> 💡 **Não existe "O" algoritmo.** Existem sistemas **diferentes** em cada área do app (Feed, Stories, Reels, Explorar, Busca, Notificações…), cada um com objetivos e sinais próprios.

---

## 2️⃣ O funil de recomendação em 5 etapas

Quase todos os sistemas de recomendação seguem uma lógica parecida:

```
1. INVENTÁRIO     →  2. PREVISÃO        →  3. RANKING       →  4. REGRAS &           →  5. APRENDIZADO
(candidatos)         (o que a pessoa         (ordenar pela        DIVERSIDADE             (feedback)
                      provavelmente faz?)     "pontuação")        (filtros, políticas)
```

| Etapa | O que acontece | Exemplo |
|---|---|---|
| **1. Inventário** | Seleciona milhares de conteúdos *candidatos* para aquela pessoa, naquele momento | Posts recentes de quem você segue + vídeos de contas que você não segue mas pode gostar |
| **2. Previsão** | Modelos estimam a **probabilidade** de ações: assistir até o fim? curtir? comentar? enviar para alguém? pular rápido? | "Chance de enviar este Reels a um amigo: 8%" |
| **3. Ranking** | Combina as previsões em uma **pontuação** e ordena | Vídeo A (pontuação 0,82) vem antes do B (0,41) |
| **4. Regras & diversidade** | Remove conteúdo proibido/de baixa qualidade, evita repetir a mesma conta ou tema, aplica políticas | Não mostrar 5 vídeos seguidos do mesmo criador |
| **5. Aprendizado** | Observa o que a pessoa **realmente** fez e ajusta | Você pulou em 1 segundo? Sinal negativo |

> 🔑 **Ideia-chave:** o sistema não "decide" se seu conteúdo é bom. Ele **prevê** como **pessoas reais** vão reagir — e **aprende com a reação delas**. Quem "treina" o algoritmo é a audiência.

---

## 3️⃣ Dois "mundos": grafo social vs. grafo de interesses

| | **Grafo social** | **Grafo de interesses** |
|---|---|---|
| Lógica | "Mostre o que **quem eu sigo** publica" | "Mostre o que **eu vou gostar**, venha de quem vier" |
| Exemplos | Feed clássico do Facebook/Instagram, Stories | TikTok "Para você", Reels/Explorar, YouTube Shorts, recomendações do YouTube |
| Quem mais importa | Relacionamento com seguidores | **Qualidade do conteúdo** e relevância para cada pessoa |
| Para crescer | Fidelizar seguidores | **Ser descoberto** por não-seguidores |

Hoje as plataformas **misturam** os dois. Por isso você precisa de **conteúdo para quem já te segue** (aprofundar) **e para quem ainda não te conhece** (atrair).

---

## 4️⃣ Os sinais que as plataformas observam

Pense em sinais como **"pistas" que o sistema usa para prever satisfação**:

### 🟢 Sinais positivos (em geral)
| Sinal | O que revela |
|---|---|
| **Tempo assistido / retenção** | A pessoa realmente se interessou? Viu até o fim? **Reviu?** |
| **Compartilhamento / envio por mensagem** | "Isso vale a pena mostrar a alguém" — um dos sinais mais fortes de valor |
| **Salvamento** | "Quero voltar nisso" (utilidade) |
| **Comentários** (especialmente conversas) | Geram interação real |
| **Curtidas** | Sinal mais fraco individualmente, mas ainda útil, sobretudo entre seguidores |
| **Seguir a partir do conteúdo** | "Quero mais disso" |
| **Visita ao perfil / cliques** | Interesse no criador |

### 🔴 Sinais negativos
| Sinal | O que revela |
|---|---|
| **Pular nos primeiros segundos** | Gancho fraco ou conteúdo irrelevante |
| **"Não tenho interesse" / ocultar / silenciar / deixar de seguir** | Feedback explícito |
| **Denúncias** | Possível violação de regras |
| **Baixa qualidade técnica** (áudio ruim, vídeo borrado, conteúdo reciclado com marca d'água) | Pode reduzir recomendação |
| **Clickbait que não entrega** | Alto clique + abandono rápido |

### Contexto também conta
Histórico da pessoa, relação com o criador, assunto, idioma, localização, horário, dispositivo, recência.

---

## 5️⃣ O que as próprias plataformas disseram

> 🧭 Princípio: **priorize fontes oficiais**; trate o resto como hipótese.

### YouTube (fonte oficial: "How YouTube Works")
A própria empresa explica que seu sistema de recomendação aprende com **muitos sinais**, entre eles: **histórico de exibição**, **histórico de pesquisas**, **inscrições**, **curtidas/descurtidas**, feedback **"Não tenho interesse"/"Não recomendar canal"** e **pesquisas de satisfação**. O vídeo que você está assistindo é o principal sinal para o próximo vídeo sugerido, enquanto a **página inicial** usa muito o histórico. Para temas informativos, também considera **autoridade e reputação** do canal.  
🔗 [youtube.com/howyoutubeworks/recommendations](https://www.youtube.com/howyoutubeworks/recommendations/)

### Instagram
- Em 2021, Adam Mosseri (chefe do Instagram) publicou o artigo *"Shedding more light on how Instagram works"* explicando que **cada parte do app (Feed, Stories, Explorar, Reels) tem seu próprio ranking** e que o sistema prevê a probabilidade de interações.
  🔗 [about.instagram.com/pt-br/blog/announcements/shedding-more-light-on-how-instagram-works](https://about.instagram.com/pt-br/blog/announcements/shedding-more-light-on-how-instagram-works)
- Em declarações públicas posteriores, Mosseri citou como três sinais de ranking mais importantes: **tempo de exibição**, **curtidas por alcance** e **envios (compartilhamento por mensagem) por alcance** — com **envios** especialmente importantes para alcançar **não-seguidores**. ⚠️ A *ordem exata de peso* aparece de formas diferentes em resumos de terceiros; trate como orientação, não como fórmula.

### TikTok
Descrições públicas e guias de criadores indicam um **teste inicial**: o vídeo é mostrado a um pequeno grupo com interesse provável; se a reação é forte (retenção, compartilhamentos etc.), é **ampliado em ondas**. Consulte o *Creator Portal* / Central de Ajuda do TikTok para o texto oficial atual.

> ⚠️ **Sobre blogs e vídeos que dão "porcentagens exatas" de cada sinal:** na maioria dos casos são **inferências de terceiros**. Use como hipótese para **testar**, não como verdade.

---

## 6️⃣ O ciclo de teste em ondas

Por que às vezes um vídeo "dorme" por dias e depois explode? Porque a distribuição funciona como **audição de talentos**:

```
Onda 1 → mostra para 100–500 pessoas parecidas com seu público ideal
        ↓  (retenção ok? compartilhamentos? cliques?)
Onda 2 → se foi bem, mostra para milhares
        ↓
Onda 3 → se continua bem, milhões… (ou desacelera)
```

**Analogia da pizzaria:** a pizzaria faz uma pizza nova e oferece a fatia a **10 clientes da vizinhança**. Se **todos terminam e pedem outra**, ela passa a vender para o bairro todo. Se deixam metade no prato, ela guarda a receita.

### O que isso ensina
1. **Os primeiros segundos importam muito** (a primeira onda decide se haverá segunda).
2. **Conteúdo para a pessoa certa** vale mais que "conteúdo para todos".
3. **Consistência de nicho** ajuda o sistema a saber *para quem* mostrar.
4. **Vídeos antigos podem ressurgir** (por isso não apague o que "não deu certo" sem analisar).

### O ciclo da viralização (modelo mental)
**Gancho** → *retenção* → **compartilhamento** → novo público → *mais gancho…*

---

## 7️⃣ Mitos e verdades (jogue com seus amigos!)

| # | Afirmação | Veredito | Por quê |
|---|---|---|---|
| 1 | "Existe um horário mágico para postar." | ❌ Mito (em grande parte) | O melhor horário é quando **seu** público está ativo; use os dados do seu perfil. Qualidade pesa mais |
| 2 | "Hashtags com milhões de posts ajudam a viralizar." | ❌ Mito | Hashtags servem para **contexto/tema**; poucas e relevantes. Não são "botões de alcance" |
| 3 | "Quem posta todo dia sempre cresce." | ⚠️ Parcial | Consistência ajuda, mas **qualidade e relevância** pesam mais que quantidade |
| 4 | "Comprar seguidores aumenta o alcance." | ❌ Mito (e prejudica) | Seguidores falsos não interagem → derrubam engajamento e podem violar regras |
| 5 | "As primeiras horas são importantes." | ✅ Em parte | O desempenho inicial influencia a expansão — mas conteúdos podem ressurgir |
| 6 | "Colocar link na legenda derruba o alcance." | ⚠️ Depende | Cada plataforma trata links de forma diferente; teste e use alternativas (link na bio, DM, comentário) |
| 7 | "O algoritmo me persegue/odeia." | ❌ Quase sempre não | Alcance cai por motivos explicáveis: gancho, nicho, formato, baixa retenção, mudanças da plataforma |
| 8 | "Shadowban existe: me escondem em segredo." | ⚠️ Cuidado | Plataformas dizem que não "escondem contas por punição secreta", mas **conteúdo que viola diretrizes de recomendação pode deixar de ser recomendado**. Verifique o *Status da conta* no app |
| 9 | "Reutilizar vídeo do TikTok com marca d'água funciona igual." | ❌ Mito | Plataformas tendem a priorizar conteúdo original/nativo |
| 10 | "Engajamento = curtidas." | ❌ Mito | Compartilhamentos, salvamentos e tempo assistido costumam ser **mais informativos** |

---

## 8️⃣ Efeitos colaterais: atenção, bolhas e bem-estar

Sistemas otimizados para **engajamento** podem:
- **Reforçar bolhas** (mostrar mais do que você já gosta),
- **Amplificar conteúdo emocional/polarizador**, porque emoção prende atenção,
- Criar **hábitos de rolagem infinita** (*infinite scroll*, recompensa variável).

Isso gera debates sérios sobre ética e saúde digital. O documentário *The Social Dilemma* (2020) popularizou essas críticas — é um **ponto de vista forte**, útil para refletir, e deve ser assistido com **senso crítico** (leia também outras opiniões). Voltaremos a esse tema no [Módulo 11](11-crises-etica-lei-seguranca.md).

> 🧠 **Para criadores e marcas:** dá para ser eficaz **sem manipular**. Entregar valor, clareza e emoção honesta constrói confiança — que dura mais que picos de atenção.

---

## 🔬 Laboratório 3 — Experimento de 7 dias (cientista de feed)

**Objetivo:** sentir o algoritmo na prática, mudando **uma variável por vez**.

1. Escolha **uma ideia** de conteúdo e produza **3 versões** do **gancho** (mesmo corpo, 3 aberturas diferentes).
2. Publique em dias diferentes (ou em contas/formatos comparáveis).
3. Anote para cada uma: **alcance, tempo médio assistido (ou retenção), compartilhamentos, salvamentos, comentários**.
4. Responda: qual gancho reteve mais? Por quê? O que isso diz sobre seu público?
5. Escreva sua **hipótese** para o próximo teste: *"Se eu [mudança], então [métrica] vai [subir/cair] porque [razão]."*

📄 Use `templates/diario-de-estudos.md` para registrar.

---

## 🎮 Mini-jogo 1 — "Você é o algoritmo!"

Quatro vídeos foram testados com 100 pessoas cada. **Qual você expandiria primeiro? E qual descartaria?**

| Vídeo | % que assistiu até o fim | Envios p/ amigos (por 100) | Curtidas (por 100) | "Não tenho interesse" (por 100) |
|---|:-:|:-:|:-:|:-:|
| A | 65% | 9 | 8 | 1 |
| B | 30% | 2 | 20 | 6 |
| C | 80% | 1 | 3 | 0 |
| D | 55% | 12 | 5 | 2 |

<details><summary>👀 Resposta comentada</summary>

- **Expandir primeiro: A e D.** Ambos têm retenção alta **e** muitos envios (sinal forte de valor). D tem menos curtidas, mas envios altíssimos — ótimo para atingir **não-seguidores**.
- **C** tem retenção excelente, mas quase ninguém compartilha: conteúdo "agradável", porém pouco "compartilhável". Vale expandir *depois*, ou melhorar o CTA/ângulo.
- **B** tem muitas curtidas, mas baixa retenção e muito feedback negativo: provável **clickbait** (promete e não entrega). **Descartar/rever.**

*(Este é um modelo didático. Plataformas reais usam muitos mais sinais e pesos que você não vê.)*
</details>

## 🎮 Mini-jogo 2 — Mito ou verdade? (rodada rápida)

Responda **M** (mito) ou **V** (verdade):
1. Comprar seguidores ajuda o algoritmo. 2. Compartilhamentos são sinais valiosos. 3. Tem um horário que funciona para todos os perfis. 4. Os primeiros segundos influenciam a expansão do vídeo.

<details><summary>👀 Respostas</summary>1 → M · 2 → V · 3 → M · 4 → V</details>

---

## ⚔️ Chefe final do Módulo 03

**1.** Por que "o algoritmo" é uma simplificação?  
**2.** Qual a diferença entre grafo social e grafo de interesses? Por que isso importa para crescer?  
**3.** Cite 3 sinais positivos e 2 negativos.  
**4.** O que são "ondas de teste" e que lição prática elas trazem?  
**5.** Por que blogs que dão "pesos exatos" dos sinais merecem cautela?

<details><summary>👀 Respostas-modelo</summary>

1. Porque há vários sistemas (Feed, Stories, Reels, Busca…), cada um com objetivos e sinais próprios; não é uma única regra.
2. Grafo social = vê quem você segue; grafo de interesses = vê o que provavelmente vai gostar. No segundo, é possível crescer sendo descoberto por não-seguidores, então o conteúdo precisa funcionar para quem **ainda não te conhece**.
3. Positivos: retenção/tempo assistido, compartilhamentos/envios, salvamentos. Negativos: pular rápido, "não tenho interesse", denúncias.
4. O conteúdo é testado com um grupo pequeno e ampliado se a reação for boa. Lição: gancho/primeiros segundos e relevância para o público certo decidem a expansão.
5. Porque as plataformas raramente divulgam pesos; a maioria são inferências de terceiros e mudam com o tempo. Use como hipótese a testar.
</details>

---

## 📺 Vídeos · ✅ Checklist · ➡️ Próximo

- Vídeos: [`../videos/curadoria-de-videos.md`](../videos/curadoria-de-videos.md#módulo-03)
- [ ] Li a aula · [ ] Fiz o Laboratório 3 · [ ] Joguei os mini-jogos · [ ] Chefe final ≥ 70% · [ ] Marquei no [progresso.md](../progresso.md)

➡️ **Próximo:** [Módulo 04 — Estratégia](04-estrategia.md)

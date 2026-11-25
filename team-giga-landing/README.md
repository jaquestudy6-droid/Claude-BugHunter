# Team Giga — Landing page (Parte 1: Hero)

Landing page de agendamento para o coach Pedro Giga / Team Giga. Feita por partes; esta é a **primeira dobra (hero)**.
HTML/CSS/JS puro, sem build e sem dependências (as fontes são self-hosted).

## Ver no navegador

```bash
cd team-giga-landing
python3 -m http.server 8000      # abra http://localhost:8000
```

- `?intro=0` pula a abertura da barra (útil pra testar/compartilhar).
- Clicar/tocar/teclar durante a abertura pula direto pro site.
- `prefers-reduced-motion` e navegador sem JS: a página já nasce aberta, sem animação.

## O que tem no hero

| Peça | Como funciona |
|---|---|
| **Abertura** | A barra com anilhas cai do topo, quica, o impacto treme a tela, solta onda de choque + pó de magnésio e a cortina se abre a partir do eixo da barra. ~2 s no total. |
| **Chão** | A barra fica deitada de ponta a ponta da tela (sem sobras nas laterais) sobre a faixa em movimento. |
| **Foto** | `coach-duotone.webp` = a 1ª foto convertida em duotone preto/azul, sangrando pra direita e pra baixo. |
| **Logo** | `logo-team-giga.webp` = a logo recortada em círculo, transparente. |
| **CTA** | Botão "Agendar minha avaliação" (+ "Agendar" no menu) apontando para `#agendar`. **O formulário não está no hero**: entra na próxima seção. |

Paleta (inspirada no layout de referência): preto `#02060c` + azuis `#0b2f5e → #1d6fd1 → #4aa3ff → #cfe6ff`.
Tipografia: **Big Shoulders Display** (títulos, atlética/industrial) + **Sora** (texto e UI).

## Pontos para o cliente revisar (placeholders)

- **Textos**: título, subtítulo, chips e faixa são sugestões. Nenhum número, depoimento ou promessa foi inventado.
- **Nome "Pedro Giga"** foi deduzido do @pedro_g1ga / Team Giga. Confirmar grafia.
- **Foto**: assumi que a 1ª foto enviada é do coach. Para trocar, gere outra com o mesmo tratamento e substitua `assets/img/coach-duotone.webp`.
- **Instagram**: o card aponta para `instagram.com/pedro_g1ga`. O perfil `@teampedrogiga` ainda não foi usado.
- `href="#agendar"`: aponta para a seção do formulário (próxima parte).
- `og:image` (`assets/img/og-cover.webp`) está com caminho relativo; no deploy, trocar pela URL absoluta do domínio para a prévia de link funcionar no WhatsApp/redes.

## Estrutura

```
index.html
css/hero.css       # estilos + estados da abertura
js/hero.js         # sequência da abertura (Web Animations API) + parallax do mouse
assets/fonts/      # Big Shoulders Display + Sora (woff2, variáveis)
assets/img/        # logo e foto tratadas
```

## Notas técnicas

- A cortina e a barra usam só `transform`/`opacity` (rodam na GPU). Não há `backdrop-filter` nem blend modes no hero, de propósito: custavam caro em celular.
- O hero cabe em `100svh` de 320×568 até 2560×1080; sem rolagem horizontal. Em celular deitado (hero mais alto que a janela) a abertura é pulada.
- Para mudar a duração da abertura, ajuste `DELAY`, `DROP` e `OPEN` no topo da seção "Abertura" de `js/hero.js`.

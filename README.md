**# SaúdeMapa Salvador

Aplicação web de visualização de unidades de saúde e análise de zonas críticas de cobertura em Salvador (BA).

## 🚀 Tecnologias adotadas

- HTML5 + CSS3
- JavaScript ES6
- Leaflet.js (mapas interativos)
- CartoDB / OpenStreetMap (tiles de mapa)
- GeoJSON (dados geoespaciais)
- Estrutura de dados local (arrays `unidades`, `distritos`)

## 📁 Estrutura de arquivos

- `index.html` - interface principal, controles de filtro, legendas e popups.
- `app.js` - lógica de renderização do mapa, filtros, isovalores, cálculo crítico e camadas de distritos.
- `mapa-saude-salvador.css` - estilos visuais, painéis e responsividade.
- `mapa-saude/unidades-saude-salvador.geojson` - dataset de unidades de saúde com coordenadas e distrito.

## 💡 Recursos implementados

1. Modo Unidades:
   - Exibição de hospitais, UPAs, UBS/USF, policlínicas, maternidades, CAPS e outros.
   - Filtro por tipo e busca por nome/bairro.
   - Filtro por nível de complexidade: Primário, Secundário, Terciário.
   - Painel de detalhes ao clicar em unidade.

2. Modo Isovalores:
   - Cálculo e visualização de métricas por distrito: densidade, cobertura, urgência, especialidade, saúde mental, materno-infantil.
   - Círculos de cores/raio proporcional e legenda.

3. Demarcação de Distritos:
   - Ativação de retângulos de fronteira (bounds) por distrito e tooltip.

4. Zonas Críticas:
   - Modelo com pesos para cobertura ESF, leitos e densidade.
   - Score crítico calculado por distrito (baixo = ruim, alto = bom).
   - Overlay em vermelho para distritos com score ≤ 30 (críticos).
   - Relatório dinâmico mostrando ranking de distritos e distribuição por complexidade.

## ▶️ Instalação e execução local

1. Copie o repositório para sua máquina:

```bash
git clone <repo-url>
cd <repositor-y>
```

2. Abra `index.html` diretamente no navegador (sem backend necessário).

3. Recomendações:

- Para evitar bloqueio de CORS em alguns navegadores, use um servidor local simples:

```bash
# Python 3
python -m http.server 8000
```

Acesse `http://localhost:8000/index.html`.

## ⚙️ Como usar

- Use os botões na barra superior para alternar modos:
  - `Unidades` - lista e filtros de unidades.
  - `Isovalores` - mapa de intensidade por distrito.
  - `Demarcações` - fronteiras de distrito.
  - `Relatório Crítico` - painel com pesos e tabela de score.
  - `Zonas Críticas` - ativa camada vermelha por threshold.

- Ajuste pesos no relatório crítico e veja o mapa reagir em tempo real.
- Ajuste threshold para definir quais distritos aparecem como críticos.
- Filtre unidades por tipo (hospital, UPA, etc.) e nível de complexidade (primário, secundário, terciário).
- Score crítico: baixo = ruim (cobertura baixa, poucos leitos, baixa densidade), alto = bom.

## 📐 Memorial de Cálculo do Score de Zona Crítica

### Conceito geral
O **score crítico** avalia a qualidade de cobertura de saúde de cada distrito sanitário. Um score **baixo** indica críticidade (problemas), enquanto um score **alto** indica boa situação.

### Componentes do cálculo

O model utiliza três componentes principais:

#### 1. **Gap de Cobertura ESF (Estratégia Saúde da Família)**
```
coberturaFalta = 100 - cobertura_esf(%)
```
- Representa a **falta de cobertura** (em %).
- Exemplo: se cobertura = 45%, então coberturaFalta = 55.

#### 2. **Gap de Leitos SUS**
```
leitos_por_mil = (leitos_sus / população) × 1000
leitosGap = max(0, 1 - min(leitos_por_mil / 6.5, 1)) × 100
```
- Compara leitos disponíveis com **referência de 6.5 leitos/1000 habitantes**.
- Exemplo: 
  - Se distrito tem 2 leitos/1k → leitosGap = 69 (gap alto, ruim)
  - Se distrito tem 7 leitos/1k → leitosGap = 0 (situação boa)

#### 3. **Gap de Densidade de Unidades**
```
densidade = total_unidades / área_km²
densidadeGap = max(0, 1 - min(densidade / densidade_máxima, 1)) × 100
```
- Avalia **distribuição geográfica** das unidades.
- Exemplo:
  - Se max density = 2 un/km² e distrito = 0.5 un/km² → densidadeGap = 75 (crítico)
  - Se max density = 2 un/km² e distrito = 1.8 un/km² → densidadeGap = 10 (bom)

### Fórmula do Score de Criticidade

```
scoreRuim = (w_cobertura × coberturaFalta + w_leitos × leitosGap + w_densidade × densidadeGap) 
            × (100 / (w_cobertura + w_leitos + w_densidade))

score_final = 100 - scoreRuim
```

**Pesos padrão:**
- w_cobertura = 45% (mais importante)
- w_leitos = 30%
- w_densidade = 25%

Os pesos **são ajustáveis** via sliders no painel "Relatório Crítico".

### Interpretação do Score

| Score | Status | Cor | Significado |
|-------|--------|-----|------------|
| 0-30 | Crítica | 🔴 Vermelho | Distrito com cobertura ruim, urgência de investimento |
| 31-60 | Média | 🟠 Laranja | Situação intermediária, melhorias necessárias |
| 61-100 | Boa | 🟢 Verde | Boa cobertura e distribuição |

### Exemplo Prático

**Distrito X:**
- Cobertura ESF = 35% → coberturaFalta = 65
- Leitos/1k = 1.5 (ref: 6.5) → leitosGap = 77
- Densidade = 0.8 un/km² (max: 2.0) → densidadeGap = 60

**Cálculo com pesos padrão (45%, 30%, 25%):**
```
scoreRuim = (45×65 + 30×77 + 25×60) / 100 = (2925 + 2310 + 1500) / 100 = 67.35
score_final = 100 - 67.35 = 32.65 ≈ 33 (Crítica/Média)
```

### Limiar de Criticidade

Distritos com **score ≤ 30** são considerados **críticos** e aparecem no mapa com overlay vermelho.

### Aplicação no Relatório

O relatório crítico exibe:
- Ranking de distritos (ordenados por score crescente = piores primeiro)
- Distribuição de distritos críticos por **nível de complexidade** (primário, secundário, terciário)
- Componentes individuais (cobertura, leitos/1k, densidade)
- Permite ajustar pesos para cenários diferentes

## 🧩 Personalizações possíveis

- substituir `distritos` por GeoJSON com polígonos reais
- https://experience.arcgis.com/experience/e4e944eec8714681940f01e06cc10783/page/In%C3%ADcio
- https://www.arcgis.com/apps/mapviewer/index.html?webmap=a1026f40bae447f6bdca3906f5c8d312
- adicionar dados de sistema de saúde em tempo real (API)
- integrar clusters de mapa e zoom em região crítica

## 📌 Observações

- O projeto é uma aplicação front-end estática, ideal para protótipos e painéis de planejamento local.
- Use dados atualizados para maior precisão ou conecte a API de dados pública de saúde.
- Níveis de complexidade baseados no SUS: Primário (UBS, policlínicas), Secundário (hospitais gerais, UPAs), Terciário (especializados, oncologia).- O relatório crítico inclui estatísticas de distribuição de distritos críticos por nível de complexidade.**

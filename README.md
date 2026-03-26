# SaúdeMapa Salvador

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
   - Painel de detalhes ao clicar em unidade.

2. Modo Isovalores:
   - Cálculo e visualização de métricas por distrito: densidade, cobertura, urgência, especialidade, saúde mental, materno-infantil.
   - Círculos de cores/raio proporcional e legenda.

3. Demarcação de Distritos:
   - Ativação de retângulos de fronteira (bounds) por distrito e tooltip.

4. Zonas Críticas:
   - Modelo com pesos para cobertura ESF, leitos e densidade.
   - Score crítico calculado por distrito.
   - Overlay em vermelho para distritos com score acima de threshold configurável.
   - Relatório dinâmico mostrando ranking de distritos.

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

## 🧩 Personalizações possíveis

- substituir `distritos` por GeoJSON com polígonos reais
- adicionar dados de sistema de saúde em tempo real (API)
- integrar clusters de mapa e zoom em região crítica

## 📌 Observações

- O projeto é uma aplicação front-end estática, ideal para protótipos e painéis de planejamento local.
- Use dados atualizados para maior precisão ou conecte a API de dados pública de saúde.

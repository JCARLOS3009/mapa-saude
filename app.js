
// ─── TIPO CONFIG ──────────────────────────────────────────────────────────────
const typeConfig = {
  hospital:               { color: '#ff6b6b', emoji: '🏥', label: 'Hospital',            group: 'hospital', complexidade: 'secundario' },
  hospital_especializado: { color: '#74c0fc', emoji: '🏨', label: 'Hosp. Especializado',  group: 'hospital_especializado', complexidade: 'secundario' },
  hospital_psiquiatrico:  { color: '#74c0fc', emoji: '🧠', label: 'Hosp. Psiquiátrico',   group: 'hospital_especializado', complexidade: 'secundario' },
  upa:                    { color: '#ffa94d', emoji: '🚑', label: 'UPA 24h',              group: 'upa', complexidade: 'secundario' },
  ubs:                    { color: '#4dabf7', emoji: '⚕️', label: 'UBS / USF',            group: 'ubs', complexidade: 'primario' },
  policlinica:            { color: '#9b72ff', emoji: '🔬', label: 'Policlínica',           group: 'policlinica', complexidade: 'primario' },
  maternidade:            { color: '#f783ac', emoji: '👶', label: 'Maternidade',           group: 'maternidade', complexidade: 'secundario' },
  caps:                   { color: '#63e6be', emoji: '🧩', label: 'CAPS',                 group: 'caps', complexidade: 'primario' },
  instituto:              { color: '#a9e34b', emoji: '🔭', label: 'Instituto',             group: 'instituto', complexidade: 'terciario' },
  centro_especializado:   { color: '#74c0fc', emoji: '🩺', label: 'Centro Especializado', group: 'outros', complexidade: 'secundario' },
  oncologia:              { color: '#ff8787', emoji: '🎗️', label: 'Oncologia',             group: 'outros', complexidade: 'terciario' },
  transplantes:           { color: '#ffd43b', emoji: '💉', label: 'Transplantes',          group: 'outros', complexidade: 'terciario' },
  reabilitacao:           { color: '#69db7c', emoji: '♿', label: 'Reabilitação',          group: 'outros', complexidade: 'terciario' },
  hemoterapia:            { color: '#ff6b6b', emoji: '🩸', label: 'Hemoterapia',           group: 'outros', complexidade: 'terciario' },
  farmacia:               { color: '#69db7c', emoji: '💊', label: 'Farmácia',              group: 'outros', complexidade: 'primario' },
  laboratorio:            { color: '#ffd43b', emoji: '🧪', label: 'Laboratório',           group: 'outros', complexidade: 'primario' },
  fundacao:               { color: '#adb5bd', emoji: '🏛️', label: 'Fundação',              group: 'outros', complexidade: 'primario' },
  nucleo:                 { color: '#adb5bd', emoji: '📡', label: 'Núcleo',                group: 'outros', complexidade: 'primario' },
  regulacao:              { color: '#adb5bd', emoji: '📋', label: 'Regulação',             group: 'outros', complexidade: 'primario' },
  secretaria:             { color: '#adb5bd', emoji: '🏢', label: 'Secretaria',            group: 'outros', complexidade: 'primario' },
  administracao:          { color: '#adb5bd', emoji: '🏢', label: 'Administração',         group: 'outros', complexidade: 'primario' },
  servico:                { color: '#adb5bd', emoji: '🔧', label: 'Serviço',               group: 'outros', complexidade: 'primario' },
  unidade_movel:          { color: '#ffa94d', emoji: '🚐', label: 'Unidade Móvel',         group: 'outros', complexidade: 'primario' },
};

function getCfg(tipo) {
  return typeConfig[tipo] || { color: '#adb5bd', emoji: '🏥', label: tipo, group: 'outros' };
}

// ─── DADOS DE UNIDADES ────────────────────────────────────────────────────────
const unidades = [
  { id: 1,  cnes: "0400475",  nome: "ADAB",                                                          tipo: "administracao",   bairro: "Ondina",          endereco: "Av. Adhemar de Barros, 967",                         telefone: "(71) 3194-2000", distrito: "Barra/Rio Verm.",      sus: false, link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400400475", lat: -13.003921, lng: -38.507342 },
  { id: 2,  cnes: "4031415",  nome: "CEDAP – Centro Especializado em Diagnóstico, Assistência e Pesquisa", tipo: "centro_especializado", bairro: "Garcia", endereco: "R. Comendador José Alves Ferreira, 240",          telefone: "(71) 3116-8888", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927404031415", lat: -12.991245, lng: -38.513412 },
  { id: 3,  cnes: "2385236",  nome: "Centro Estadual de Prevenção e Reabilitação da Pessoa com Deficiência", tipo: "reabilitacao", bairro: "Ondina",      endereco: "Av. Adhemar de Barros, s/n",                         telefone: "(71) 3117-0300", distrito: "Barra/Rio Verm.",      sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402385236", lat: -13.006452, lng: -38.507841 },
  { id: 4,  cnes: "6354580",  nome: "Central Estadual de Regulação",                                 tipo: "regulacao",        bairro: "CAB",             endereco: "4ª Av. Centro Adm. da Bahia, 400",                   telefone: "(71) 3115-4100", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927406354580", lat: -12.949021, lng: -38.432585 },
  { id: 5,  cnes: "7570538",  nome: "Central Estadual de Transplantes da Bahia",                     tipo: "transplantes",     bairro: "Horto Florestal", endereco: "R. Waldemar Falcão, 123",                            telefone: "(71) 3115-3194", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927407570538", lat: -12.989252, lng: -38.488344 },
  { id: 6,  cnes: "0430463",  nome: "Central Farmacêutica do Estado da Bahia – CEFARBA",             tipo: "farmacia",         bairro: "Simões Filho",    endereco: "Via Urbana, 1618 (CIA)",                             telefone: "(71) 3394-1420", distrito: "RMS",                  sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400430463", lat: -12.791245, lng: -38.401245 },
  { id: 7,  cnes: "7095341",  nome: "CAPS – Gregório de Matos",                                      tipo: "caps",             bairro: "Garcia",          endereco: "Pç. Conselheiro Almeida Couto, s/n",                 telefone: "(71) 3117-6900", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927407095341", lat: -12.977461, lng: -38.503461 },
  { id: 8,  cnes: "2498049",  nome: "CEDEBA – Centro de Diabetes e Endocrinologia da Bahia",         tipo: "centro_especializado", bairro: "Brotas",      endereco: "Av. ACM, s/n (HGE)",                                 telefone: "(71) 3103-6000", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402498049", lat: -13.001925, lng: -38.493922 },
  { id: 9,  cnes: "2470845",  nome: "CIATOX – Centro de Informações e Assistência Toxicológica",     tipo: "centro_especializado", bairro: "Brotas",      endereco: "Av. Vasco da Gama, s/n (HGE)",                       telefone: "0800 284 4343",  distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402470845", lat: -13.001925, lng: -38.493922 },
  { id: 10, cnes: "0003972",  nome: "Centro de Parto Humanizado João Batista Caribé",                tipo: "maternidade",      bairro: "Coutos",          endereco: "Av. Afrânio Peixoto, s/n",                           telefone: "(71) 3117-8025", distrito: "Subúrbio Ferroviário", sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003972", lat: -12.871030, lng: -38.479540 },
  { id: 11, cnes: "4148398",  nome: "Centro Estadual de Referência – Doença Falciforme",             tipo: "centro_especializado", bairro: "Garcia",      endereco: "R. Comendador José Alves Ferreira, s/n",             telefone: "(71) 3116-8888", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927404148398", lat: -12.991245, lng: -38.513412 },
  { id: 12, cnes: "2557894",  nome: "CEREST – Centro Estadual de Referência em Saúde do Trabalhador",tipo: "centro_especializado", bairro: "Canela",      endereco: "R. Pedro Lessa, 123",                                telefone: "(71) 3116-5000", distrito: "Barra/Rio Verm.",      sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402557894", lat: -12.994215, lng: -38.517842 },
  { id: 13, cnes: "0003921",  nome: "CICAN",                                                         tipo: "oncologia",        bairro: "Brotas",          endereco: "Av. Vasco da Gama, s/n",                             telefone: "(71) 3116-5400", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003921", lat: -13.001925, lng: -38.493922 },
  { id: 14, cnes: "0007609",  nome: "CIMEB – Centro de Infusões e Medicamentos Especializados",      tipo: "centro_especializado", bairro: "Boa Vista de Brotas", endereco: "Av. Laurindo Régis, s/n",                    telefone: "(71) 3116-8888", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400007609", lat: -12.984154, lng: -38.500720 },
  { id: 15, cnes: "0005398",  nome: "CREASI",                                                        tipo: "centro_especializado", bairro: "Iguatemi",    endereco: "Av. Antônio Carlos Magalhães, s/n",                   telefone: "(71) 3103-6126", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400005398", lat: -12.983759, lng: -38.468359 },
  { id: 16, cnes: "3490971",  nome: "CTMO – Centro de Transplante de Medula Óssea",                  tipo: "transplantes",     bairro: "Pau Miúdo",       endereco: "R. Marquês de Maricá, s/n",                          telefone: "(71) 3117-7500", distrito: "Liberdade",            sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927403490971", lat: -12.951576, lng: -38.455246 },
  { id: 17, cnes: "5741920",  nome: "FAMAR – Farmácia Ambulatorial de Medicamentos Respiratórios",   tipo: "farmacia",         bairro: "Brotas",          endereco: "Av. Vasco da Gama, s/n",                             telefone: "(71) 3116-5400", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927405741920", lat: -13.001925, lng: -38.493922 },
  { id: 18, cnes: "9911936",  nome: "FESF – Fundação Estatal Saúde da Família da Bahia",             tipo: "fundacao",         bairro: "CAB",             endereco: "Av. Luiz Viana Filho, 445",                          telefone: "(71) 3417-3500", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927409911936", lat: -12.948215, lng: -38.431245 },
  { id: 19, cnes: "0006149",  nome: "Fundação HEMOBA",                                               tipo: "hemoterapia",      bairro: "Vasco da Gama",   endereco: "Ladeira do Hospital Geral, s/n",                     telefone: "(71) 3116-6000", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400006149", lat: -13.001925, lng: -38.493922 },
  { id: 20, cnes: "0003875",  nome: "Hospital Ana Nery",                                             tipo: "hospital",         bairro: "Caixa D'Água",    endereco: "R. Saldanha Marinho, s/n",                           telefone: "(71) 3117-2000", distrito: "Lib./Pau Miúdo",       sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003875", lat: -12.955431, lng: -38.496582 },
  { id: 21, cnes: "0106496",  nome: "Hospital de Campanha COVID-19 – Fonte Nova",                    tipo: "hospital",         bairro: "Nazaré",          endereco: "Ladeira da Fonte das Pedras, s/n",                   telefone: "(71) 3052-1925", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400106496", lat: -12.978939, lng: -38.504192 },
  { id: 22, cnes: "6595197",  nome: "Hospital do Subúrbio",                                          tipo: "hospital",         bairro: "Periperi",        endereco: "R. das Pedrinhas, s/n",                              telefone: "(71) 3218-3900", distrito: "Subúrbio Ferroviário", sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927406595197", lat: -12.873200, lng: -38.468241 },
  { id: 23, cnes: "0003980",  nome: "Hospital Eládio Lasserre",                                      tipo: "hospital",         bairro: "Águas Claras",    endereco: "R. Prof. José Maria de Magalhães Neto, s/n",         telefone: "(71) 3402-5350", distrito: "Cajazeiras",           sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003980", lat: -12.905663, lng: -38.411690 },
  { id: 24, cnes: "2799073",  nome: "Hospital Especializado Dom Rodrigo de Menezes",                 tipo: "hospital_especializado", bairro: "Águas Claras", endereco: "Rua Coronel Azevedo Setor II Cajaz 2, s/n",        telefone: "(71) 3117-2140", distrito: "Pau da Lima",          sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402799073", lat: -12.922469, lng: -38.413736 },
  { id: 25, cnes: "0005436",  nome: "Hospital Especializado Mário Leal",                             tipo: "hospital_especializado", bairro: "IAPI",        endereco: "R. Conde de Porto Alegre, s/n",                      telefone: "(71) 3116-4100", distrito: "Lib./Pau Miúdo",       sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400005436", lat: -12.964724, lng: -38.484218 },
  { id: 26, cnes: "0004065",  nome: "Hospital Especializado Octávio Mangabeira",                     tipo: "hospital_especializado", bairro: "Pau Miúdo",   endereco: "Pç. Conselheiro Almeida Couto, s/n",                 telefone: "(71) 3117-2512", distrito: "Liberdade",            sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004065", lat: -12.951508, lng: -38.487823 },
  { id: 27, cnes: "0106526",  nome: "Hospital Estadual 2 de Julho",                                  tipo: "hospital",         bairro: "Trobogy",         endereco: "R. Mocambo, s/n",                                    telefone: "(71) 3507-6450", distrito: "Pau da Lima",          sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400106526", lat: -12.930491, lng: -38.397664 },
  { id: 28, cnes: "0003778",  nome: "Hospital Estadual da Mulher",                                   tipo: "hospital",         bairro: "Roma",            endereco: "R. do Uruguay, 27",                                  telefone: "(71) 3034-5000", distrito: "Cidade Baixa",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003778", lat: -12.937011, lng: -38.506602 },
  { id: 29, cnes: "0004294",  nome: "Hospital Geral do Estado",                                      tipo: "hospital",         bairro: "Brotas",          endereco: "Av. Vasco da Gama, s/n",                             telefone: "(71) 3117-2015", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004294", lat: -13.001925, lng: -38.493922 },
  { id: 30, cnes: "0004073",  nome: "Hospital Geral Ernesto Simões Filho",                           tipo: "hospital",         bairro: "Pau Miúdo",       endereco: "R. Marquês de Maricá, s/n",                          telefone: "(71) 3117-2512", distrito: "Liberdade",            sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004073", lat: -12.951508, lng: -38.487823 },
  { id: 31, cnes: "0003859",  nome: "Hospital Geral Roberto Santos",                                 tipo: "hospital",         bairro: "Cabula",          endereco: "R. Direta do Saboeiro, s/n",                         telefone: "(71) 3117-7500", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003859", lat: -12.951576, lng: -38.455246 },
  { id: 32, cnes: "0004286",  nome: "Hospital Juliano Moreira",                                      tipo: "hospital_psiquiatrico", bairro: "Narandiba",   endereco: "Av. Edgard Santos, s/n",                             telefone: "(71) 3103-3900", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004286", lat: -12.943125, lng: -38.441258 },
  { id: 33, cnes: "2493845",  nome: "Hospital Manoel Victorino",                                     tipo: "hospital",         bairro: "Nazaré",          endereco: "Pç. Conselheiro Almeida Couto, 400",                 telefone: "(71) 3117-1000", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402493845", lat: -12.977461, lng: -38.503461 },
  { id: 34, cnes: "4982150",  nome: "Hospital Mont Serrat",                                          tipo: "hospital",         bairro: "Mont Serrat",     endereco: "R. Rio de Janeiro, 01",                              telefone: "(71) 3045-3100", distrito: "Itapagipe",            sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927404982150", lat: -12.928876, lng: -38.517316 },
  { id: 35, cnes: "4446321",  nome: "Hospital Ortopédico do Estado da Bahia",                        tipo: "hospital_especializado", bairro: "CABULA",      endereco: "AVENIDA SILVEIRA MARTINS, s/n",                      telefone: "(71) 3115-4180", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927404446321", lat: -12.962459, lng: -38.474239 },
  { id: 36, cnes: "0004987",  nome: "Hospital Professor Carvalho Luz",                               tipo: "hospital",         bairro: "Nazaré",          endereco: "R. J. J. Seabra, s/n",                               telefone: "(71) 3117-1000", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004987", lat: -12.976008, lng: -38.504958 },
  { id: 37, cnes: "0131350",  nome: "Hospital Santa Clara",                                          tipo: "hospital",         bairro: "Itaigara",        endereco: "Av. Antônio Carlos Magalhães, 376",                   telefone: "(71) 3135-7490", distrito: "Pituba",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400131350", lat: -13.001600, lng: -38.468200 },
  { id: 38, cnes: "0005428",  nome: "Instituto Couto Maia",                                          tipo: "instituto",        bairro: "Cajazeiras",      endereco: "R. Recanto da Lagoa, s/n",                           telefone: "(71) 3117-2000", distrito: "Cajazeiras",           sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400005428", lat: -12.895315, lng: -38.375624 },
  { id: 39, cnes: "0003794",  nome: "Instituto de Perinatologia da Bahia",                           tipo: "instituto",        bairro: "Vila Matos",      endereco: "R. Conselheiro Pedro Luiz, s/n",                     telefone: "(71) 3116-2000", distrito: "Rio Vermelho",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003794", lat: -13.011425, lng: -38.490124 },
  { id: 40, cnes: "0004162",  nome: "LACEN – Laboratório Central de Saúde Pública Prof. Gonçalo Muniz", tipo: "laboratorio", bairro: "Horto Florestal", endereco: "R. Waldemar Falcão, 123",                            telefone: "(71) 3116-5900", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004162", lat: -12.989252, lng: -38.488344 },
  { id: 41, cnes: "0003840",  nome: "Maternidade Albert Sabin",                                      tipo: "maternidade",      bairro: "Cajazeiras",      endereco: "Estr. do Coqueiro Grande, s/n",                      telefone: "(71) 3253-5350", distrito: "Cajazeiras",           sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003840", lat: -12.906660, lng: -38.375250 },
  { id: 42, cnes: "0004731",  nome: "Maternidade Climério de Oliveira",                              tipo: "maternidade",      bairro: "Nazaré",          endereco: "R. do Limoeiro, 137",                                telefone: "(71) 3283-9200", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004731", lat: -12.975480, lng: -38.503950 },
  { id: 43, cnes: "0004081",  nome: "Maternidade Maria da Conceição de Jesus",                       tipo: "maternidade",      bairro: "Coutos",          endereco: "Av. Afrânio Peixoto, 1492",                          telefone: "(71) 3307-8602", distrito: "Subúrbio Ferroviário", sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004081", lat: -12.871030, lng: -38.479540 },
  { id: 44, cnes: "3956369",  nome: "Maternidade Professor José Maria de Magalhães Neto",            tipo: "maternidade",      bairro: "Pau Miúdo",       endereco: "R. Marquês de Maricá, s/n",                          telefone: "(71) 3255-0810", distrito: "Liberdade",            sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927403956369", lat: -12.951150, lng: -38.487840 },
  { id: 45, cnes: "0004170",  nome: "Maternidade Tsylla Balbino",                                    tipo: "maternidade",      bairro: "Baixa de Quintas",endereco: "Ladeira Quintas dos Lázaros, s/n",                   telefone: "(71) 3116-2068", distrito: "Lib./Pau Miúdo",       sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004170", lat: -12.963490, lng: -38.494790 },
  { id: 46, cnes: "7613881",  nome: "Núcleo de Telessaúde do Estado da Bahia",                       tipo: "nucleo",           bairro: "CAB",             endereco: "4ª Avenida, 400",                                    telefone: "(71) 3115-3194", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927407613881", lat: -12.944710, lng: -38.424591 },
  { id: 47, cnes: "4031407",  nome: "Núcleo Regional de Saúde Leste – Salvador Sede",                tipo: "nucleo",           bairro: "Centro",          endereco: "Rua Carlos Gomes, 266",                              telefone: "(71) 3116-9333", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927404031407", lat: -12.979969, lng: -38.515033 },
  { id: 48, cnes: "2942208", nome: "Policlínica de Escada", tipo: "policlinica", bairro: "Escada", endereco: "Av. Afrânio Peixoto, s/n", telefone: "0800 071 5353", distrito: "Subúrbio Ferroviário", sus: true, link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402942208", lat: -12.883532639661233, lng: -38.48261449882826 },
  { id: 49, cnes: "2942585",  nome: "Policlínica de Narandiba",                                      tipo: "policlinica",      bairro: "Narandiba",       endereco: "Av. Edgard Santos, s/n",                             telefone: "0800 071 5353",  distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927402942585", lat: -12.962459, lng: -38.474239 },
  { id: 50, cnes: "7106521",  nome: "Secretaria da Saúde do Estado da Bahia",                        tipo: "secretaria",       bairro: "CAB",             endereco: "4ª Av. Centro Adm. da Bahia, 400",                   telefone: "(71) 3115-4180", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927407106521", lat: -12.949021, lng: -38.432585 },
  { id: 51, cnes: "9709037",  nome: "Serviço de Verificação de Óbito de Salvador e RMS",             tipo: "servico",          bairro: "Garcia",          endereco: "Av. Centenário (Complexo IML), s/n",                 telefone: "(71) 3116-4601", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927409709037", lat: -12.990426, lng: -38.508546 },
  { id: 52, cnes: "0007587",  nome: "Unidade de Emergência Mãe Hilda Jitolu",                        tipo: "upa",              bairro: "Liberdade",       endereco: "Rua Direta do Curuzu, s/n",                          telefone: "(71) 3117-6950", distrito: "Liberdade",            sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400007587", lat: -12.948216, lng: -38.490741 },
  { id: 53, cnes: "0004456",  nome: "Unidade de Emergência Prof. Hosanah d'Oliveira",                tipo: "upa",              bairro: "Federação",       endereco: "R. Caquende, s/n",                                   telefone: "(71) 3283-8386", distrito: "Brotas",               sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400004456", lat: -12.994647, lng: -38.503612 },
  { id: 54, cnes: "0005363",  nome: "UPA 24h – São Caetano",                                         tipo: "upa",              bairro: "São Caetano",     endereco: "R. Eng. Austricliano, s/n",                          telefone: "(71) 3233-1498", distrito: "São Caetano/Valéria",  sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400005363", lat: -12.932971, lng: -38.486241 },
  { id: 55, cnes: "0003913",  nome: "Unidade de Emergência Gercino Coelho",                          tipo: "upa",              bairro: "Pirajá",          endereco: "Rua 8 de Novembro, s/n",                             telefone: "(71) 3117-2589", distrito: "São Caetano/Valéria",  sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927400003913", lat: -12.915729, lng: -38.455648 },
  { id: 56, cnes: "9401520",  nome: "Unidade Móvel do Hospital da Mulher",                           tipo: "unidade_movel",    bairro: "Roma",            endereco: "R. do Uruguay, 27",                                  telefone: "(71) 3034-5005", distrito: "Cidade Baixa",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927409401520", lat: -12.937011, lng: -38.506602 },
  { id: 57, cnes: "6995160",  nome: "UPA de Roma",                                                   tipo: "upa",              bairro: "Roma",            endereco: "R. de Santa Rita, s/n",                              telefone: "(71) 3116-2917", distrito: "Cidade Baixa",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927406995160", lat: -12.937864, lng: -38.506251 },
  { id: 58, cnes: "7596871",  nome: "UPA 24h Cabula (Arraial do Retiro)",                            tipo: "upa",              bairro: "Cabula",          endereco: "R. Silveira Martins, s/n",                           telefone: "(71) 3233-1498", distrito: "Cabula/Beiru",         sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927407596871", lat: -12.957128, lng: -38.451427 },
  { id: 59, cnes: "7112548",  nome: "VIVER – Serviço de Atenção a Pessoas em Situação de Violência Sexual", tipo: "servico", bairro: "Garcia",          endereco: "Av. Centenário (Ed. IML), s/n",                      telefone: "(71) 3117-6700", distrito: "Centro Histórico",     sus: true,  link: "https://cnes2.datasus.gov.br/Mod_Conjunto.asp?VCo_Unidade=2927407112548", lat: -12.990426, lng: -38.508546 },
];

// ─── DADOS DE DISTRITOS SANITÁRIOS ───────────────────────────────────────────
// Cada distrito tem coordenadas do centroide, população estimada e dados de atendimento
const distritos = [
  {
    id: 'brotas',
    nome: 'Brotas',
    centroide: [-12.990, -38.490],
    populacao: 195000,
    area_km2: 19.4,
    // Dados de atendimento (estimados baseados em unidades do CNES)
    atendimentos_mes: 38400,
    leitos_sus: 620,
    cobertura_esf: 68,   // % cobertura Estratégia Saúde da Família
    upas: 1,
    hospitais: 3,
    especialistas: 8,
    caps_unidades: 0,
    maternidades: 0,
    cor: '#ff6b6b',
    // Polígono aproximado (bounds do distrito)
    bounds: [[-13.020, -38.520], [-12.965, -38.460]]
  },
  {
    id: 'centro_historico',
    nome: 'Centro Histórico',
    centroide: [-12.980, -38.510],
    populacao: 112000,
    area_km2: 8.2,
    atendimentos_mes: 29500,
    leitos_sus: 490,
    cobertura_esf: 52,
    upas: 0,
    hospitais: 4,
    especialistas: 9,
    caps_unidades: 1,
    maternidades: 2,
    bounds: [[-12.998, -38.535], [-12.960, -38.490]]
  },
  {
    id: 'cabula_beiru',
    nome: 'Cabula/Beiru',
    centroide: [-12.953, -38.448],
    populacao: 320000,
    area_km2: 28.6,
    atendimentos_mes: 51200,
    leitos_sus: 720,
    cobertura_esf: 74,
    upas: 1,
    hospitais: 2,
    especialistas: 5,
    caps_unidades: 0,
    maternidades: 0,
    bounds: [[-12.985, -38.480], [-12.920, -38.410]]
  },
  {
    id: 'liberdade',
    nome: 'Liberdade',
    centroide: [-12.951, -38.487],
    populacao: 245000,
    area_km2: 13.1,
    atendimentos_mes: 44100,
    leitos_sus: 550,
    cobertura_esf: 61,
    upas: 1,
    hospitais: 3,
    especialistas: 3,
    caps_unidades: 0,
    maternidades: 2,
    bounds: [[-12.975, -38.510], [-12.925, -38.460]]
  },
  {
    id: 'cajazeiras',
    nome: 'Cajazeiras',
    centroide: [-12.897, -38.380],
    populacao: 280000,
    area_km2: 31.5,
    atendimentos_mes: 33800,
    leitos_sus: 280,
    cobertura_esf: 48,
    upas: 0,
    hospitais: 2,
    especialistas: 2,
    caps_unidades: 0,
    maternidades: 1,
    bounds: [[-12.930, -38.420], [-12.860, -38.340]]
  },
  {
    id: 'suburbio',
    nome: 'Subúrbio Ferroviário',
    centroide: [-12.872, -38.478],
    populacao: 370000,
    area_km2: 42.3,
    atendimentos_mes: 29200,
    leitos_sus: 210,
    cobertura_esf: 38,
    upas: 0,
    hospitais: 1,
    especialistas: 1,
    caps_unidades: 0,
    maternidades: 2,
    bounds: [[-12.910, -38.520], [-12.830, -38.440]]
  },
  {
    id: 'sao_caetano',
    nome: 'São Caetano/Valéria',
    centroide: [-12.927, -38.472],
    populacao: 198000,
    area_km2: 24.8,
    atendimentos_mes: 22400,
    leitos_sus: 180,
    cobertura_esf: 44,
    upas: 2,
    hospitais: 0,
    especialistas: 1,
    caps_unidades: 0,
    maternidades: 0,
    bounds: [[-12.955, -38.505], [-12.895, -38.440]]
  },
  {
    id: 'pau_da_lima',
    nome: 'Pau da Lima',
    centroide: [-12.928, -38.408],
    populacao: 175000,
    area_km2: 22.4,
    atendimentos_mes: 19800,
    leitos_sus: 160,
    cobertura_esf: 42,
    upas: 0,
    hospitais: 2,
    especialistas: 1,
    caps_unidades: 0,
    maternidades: 0,
    bounds: [[-12.950, -38.440], [-12.905, -38.375]]
  },
  {
    id: 'barra_rio_verm',
    nome: 'Barra/Rio Vermelho',
    centroide: [-13.005, -38.507],
    populacao: 142000,
    area_km2: 11.7,
    atendimentos_mes: 26100,
    leitos_sus: 310,
    cobertura_esf: 55,
    upas: 0,
    hospitais: 0,
    especialistas: 6,
    caps_unidades: 0,
    maternidades: 0,
    bounds: [[-13.025, -38.530], [-12.985, -38.480]]
  },
  {
    id: 'cidade_baixa',
    nome: 'Cidade Baixa/Itapagipe',
    centroide: [-12.937, -38.507],
    populacao: 168000,
    area_km2: 14.2,
    atendimentos_mes: 18900,
    leitos_sus: 220,
    cobertura_esf: 50,
    upas: 2,
    hospitais: 2,
    especialistas: 2,
    caps_unidades: 0,
    maternidades: 1,
    bounds: [[-12.960, -38.530], [-12.910, -38.485]]
  },
  {
    id: 'pituba',
    nome: 'Pituba/Costa Azul',
    centroide: [-13.001, -38.462],
    populacao: 128000,
    area_km2: 12.9,
    atendimentos_mes: 14700,
    leitos_sus: 130,
    cobertura_esf: 35,
    upas: 0,
    hospitais: 1,
    especialistas: 2,
    caps_unidades: 0,
    maternidades: 0,
    bounds: [[-13.020, -38.490], [-12.980, -38.435]]
  },
  {
    id: 'rio_vermelho',
    nome: 'Rio Vermelho',
    centroide: [-13.009, -38.492],
    populacao: 97000,
    area_km2: 8.5,
    atendimentos_mes: 11200,
    leitos_sus: 95,
    cobertura_esf: 29,
    upas: 0,
    hospitais: 0,
    especialistas: 2,
    caps_unidades: 0,
    maternidades: 1,
    bounds: [[-13.025, -38.510], [-12.995, -38.472]]
  },
];

// Converte bounds lat/lng em GeoJSON (lng/lat) para polígonos mais precisos
function boundsToGeoJSON(d) {
  if (!d.bounds || d.bounds.length !== 2) return null;
  const [[latMin, lngMin], [latMax, lngMax]] = d.bounds;
  return {
    type: 'Feature',
    properties: { id: d.id, nome: d.nome },
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [lngMin, latMin],
        [lngMax, latMin],
        [lngMax, latMax],
        [lngMin, latMax],
        [lngMin, latMin]
      ]]
    }
  };
}

async function loadDistrictsGeoJSON() {
  try {
    const response = await fetch('mapa-saude/distritos-sanitarios.geojson');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!data.features || !Array.isArray(data.features)) throw new Error('GeoJSON inválido');

    const lookupNome = {};
    distritos.forEach(d => lookupNome[d.nome.toLowerCase()] = d);

    data.features.forEach(feature => {
      const featureNome = (feature.properties?.nome || feature.properties?.NOME || '').toString().toLowerCase();
      if (feature.properties?.id) {
        const dist = distritos.find(d => d.id === feature.properties.id);
        if (dist) dist.geojson = feature;
      }
      if (!lookupNome[featureNome]) return;
      lookupNome[featureNome].geojson = feature;
    });

    console.info('GeoJSON de distritos carregado (mapa).');
  } catch (error) {
    console.warn('GeoJSON distritos não carregado, usando bounds como fallback:', error.message);
  }
}

// Adiciona GeoJSON automaticamente caso não tenha
// (ou se não existir arquivo externo, usa bounds aproximado)
distritos.forEach(d => {
  if (!d.geojson) {
    const feature = boundsToGeoJSON(d);
    if (feature) d.geojson = feature;
  }
});

// ─── MÉTRICAS DE ISOVALOR ─────────────────────────────────────────────────────
const metricas = {
  densidade: {
    label: '🏗️ Densidade de Unidades',
    unidade: 'un/km²',
    calcular: (d) => {
      const total = unidades.filter(u => normalizaDistrito(u.distrito) === d.id).length;
      return +(total / d.area_km2).toFixed(2);
    },
    desc: 'Unidades de saúde por km²'
  },
  cobertura: {
    label: '👥 Cobertura Populacional',
    unidade: '%',
    calcular: (d) => d.cobertura_esf,
    desc: '% de cobertura pela Estratégia Saúde da Família'
  },
  urgencia: {
    label: '🚨 Urgência / Emergência',
    unidade: 'pts',
    calcular: (d) => {
      // Score: UPAs x 40 + Hospitais x 25 + leitos/população*1000
      return Math.min(100, Math.round(d.upas * 40 + d.hospitais * 25 + (d.leitos_sus / d.populacao) * 1000));
    },
    desc: 'Score de capacidade de atendimento de urgência'
  },
  especialidade: {
    label: '🔬 Serviços Especializados',
    unidade: 'pts',
    calcular: (d) => {
      const esp = unidades.filter(u => normalizaDistrito(u.distrito) === d.id &&
        ['centro_especializado','hospital_especializado','oncologia','transplantes','reabilitacao','hemoterapia','instituto'].includes(u.tipo)
      ).length;
      return Math.min(100, esp * 12 + d.especialistas * 6);
    },
    desc: 'Score de oferta de serviços especializados'
  },
  saude_mental: {
    label: '🧠 Saúde Mental',
    unidade: 'pts',
    calcular: (d) => {
      const caps = unidades.filter(u => normalizaDistrito(u.distrito) === d.id &&
        ['caps','hospital_psiquiatrico'].includes(u.tipo)
      ).length;
      return Math.min(100, d.caps_unidades * 50 + caps * 50);
    },
    desc: 'Score de cobertura em saúde mental (CAPS e serviços)'
  },
  materno_infantil: {
    label: '👶 Materno-Infantil',
    unidade: 'pts',
    calcular: (d) => {
      const mats = unidades.filter(u => normalizaDistrito(u.distrito) === d.id &&
        ['maternidade'].includes(u.tipo)
      ).length;
      return Math.min(100, mats * 30 + d.maternidades * 25 + (d.cobertura_esf * 0.3));
    },
    desc: 'Score de serviços materno-infantis'
  }
};

// Modelo crítico customizável
const criticalModel = {
  pesoCobertura: 0.45,
  pesoLeitos: 0.30,
  pesoDensidade: 0.25,
};

function computeCriticalScore(d) {
  const maxLeitos1k = 6.5; // referência: leitos por 1k habitantes esperada para área saudável
  const density = metricas.densidade.calcular(d);
  const maxDensity = Math.max(...distritos.map(dist => metricas.densidade.calcular(dist)), 1);

  const coberturaFalta = 100 - d.cobertura_esf;
  const leitos1k = (d.leitos_sus / d.populacao) * 1000;
  const leitosGap = Math.max(0, 1 - Math.min(leitos1k / maxLeitos1k, 1)) * 100;
  const densityGap = Math.max(0, 1 - Math.min(density / maxDensity, 1)) * 100;

  const scoreRuim = (
    criticalModel.pesoCobertura * coberturaFalta +
    criticalModel.pesoLeitos * leitosGap +
    criticalModel.pesoDensidade * densityGap
  ) * (100 / (criticalModel.pesoCobertura + criticalModel.pesoLeitos + criticalModel.pesoDensidade));

  // Inverter: score baixo = ruim
  return Math.min(100, Math.max(0, Math.round(100 - scoreRuim)));
}

function updateCriticalModel() {
  const wCoverage = Number(document.getElementById('wCoverage').value);
  const wLeitos = Number(document.getElementById('wLeitos').value);
  const wDensity = Number(document.getElementById('wDensity').value);

  document.getElementById('wCoverageValue').textContent = wCoverage;
  document.getElementById('wLeitosValue').textContent = wLeitos;
  document.getElementById('wDensityValue').textContent = wDensity;

  const total = wCoverage + wLeitos + wDensity || 1;
  criticalModel.pesoCobertura = wCoverage / total;
  criticalModel.pesoLeitos = wLeitos / total;
  criticalModel.pesoDensidade = wDensity / total;

  if (criticalMode) {
    drawCriticalAreas();
  }

  // Atualizar relatório se estiver aberto
  if (document.getElementById('criticalReportPanel').classList.contains('visible')) {
    renderCriticalReport();
  }
}

function toggleCriticalReport() {
  const panel = document.getElementById('criticalReportPanel');
  panel.classList.toggle('visible');
  document.getElementById('btnCriticalReport').classList.toggle('active');
  if (panel.classList.contains('visible')) {
    renderCriticalReport();
  }
}

function renderCriticalReport() {
  const content = document.getElementById('criticalReportContent');
  const report = distritos.map(d => {
    const score = computeCriticalScore(d);
    const status = score <= 30 ? 'Crítica' : score <= 60 ? 'Média' : 'Boa';
    const badge = score <= 30 ? 'badge-high' : score <= 60 ? 'badge-medium' : 'badge-low';
    return {
      nome: d.nome,
      cobertura: d.cobertura_esf,
      leitos1k: ((d.leitos_sus / d.populacao) * 1000).toFixed(2),
      densidade: metricas.densidade.calcular(d).toFixed(2),
      score,
      status,
      badge
    };
  }).sort((a, b) => a.score - b.score); // Ordenar por score crescente (baixo primeiro = pior)

  const rows = report.map(r => `
    <tr>
      <td>${r.nome}</td>
      <td>${r.cobertura}%</td>
      <td>${r.leitos1k}</td>
      <td>${r.densidade}</td>
      <td><span class="badge ${r.badge}">${r.score}</span></td>
      <td>${r.status}</td>
    </tr>
  `).join('');

  // Estatísticas por complexidade
  const complexStats = { primario: { total: 0, critico: 0 }, secundario: { total: 0, critico: 0 }, terciario: { total: 0, critico: 0 } };
  distritos.forEach(d => {
    const unidadesDist = unidades.filter(u => normalizaDistrito(u.distrito) === d.id);
    const complexidades = unidadesDist.map(u => getCfg(u.tipo).complexidade);
    const complexSet = new Set(complexidades);
    complexSet.forEach(comp => {
      if (complexStats[comp]) {
        complexStats[comp].total++;
        if (computeCriticalScore(d) <= 30) complexStats[comp].critico++;
      }
    });
  });

  const complexHtml = Object.entries(complexStats).map(([comp, stats]) => 
    `<div>• ${comp.charAt(0).toUpperCase() + comp.slice(1)}: ${stats.total} distritos, ${stats.critico} críticos</div>`
  ).join('');

  const criticalCount = report.filter(r => r.score <= 30).length;

  content.innerHTML = `
    <p>Modelo crítico atual (normalizado):
    Cobertura ESF × ${Math.round(criticalModel.pesoCobertura*100)}%,
    Leitos × ${Math.round(criticalModel.pesoLeitos*100)}%,
    Densidade × ${Math.round(criticalModel.pesoDensidade*100)}%.</p>
    <p>Zonas críticas (score ≤ 30) : ${criticalCount} distritos.</p>
    <p><strong>Distribuição por complexidade:</strong></p>
    ${complexHtml}
    <div style="max-height:250px;overflow:auto;">
      <table>
        <thead>
          <tr><th>Distrito</th><th>cobertura</th><th>leitos/1k</th><th>densidade</th><th>score</th><th>situação</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// Normaliza o campo distrito da unidade para o id do distrito
function normalizaDistrito(str) {
  const map = {
    'Brotas': 'brotas',
    'Centro Histórico': 'centro_historico',
    'Cabula/Beiru': 'cabula_beiru',
    'Liberdade': 'liberdade',
    'Lib./Pau Miúdo': 'liberdade',
    'Cajazeiras': 'cajazeiras',
    'Subúrbio Ferroviário': 'suburbio',
    'Subúrbio': 'suburbio',
    'São Caetano/Valéria': 'sao_caetano',
    'Pau da Lima': 'pau_da_lima',
    'Barra/Rio Verm.': 'barra_rio_verm',
    'Cidade Baixa': 'cidade_baixa',
    'Itapagipe': 'cidade_baixa',
    'Pituba': 'pituba',
    'Rio Vermelho': 'rio_vermelho',
    'CAB': 'cabula_beiru',
    'RMS': 'suburbio',
  };
  return map[str] || 'outros';
}

// ─── CONTAGENS HEADER ─────────────────────────────────────────────────────────
const typeToGroup = {};
Object.entries(typeConfig).forEach(([tipo, cfg]) => { typeToGroup[tipo] = cfg.group; });

const counts = {};
unidades.forEach(u => {
  const g = typeToGroup[u.tipo] || 'outros';
  counts[g] = (counts[g]||0)+1;
});
document.getElementById('countHospital').textContent = counts.hospital || 0;
document.getElementById('countUpa').textContent      = counts.upa || 0;
document.getElementById('countUbs').textContent      = counts.ubs || 0;
document.getElementById('countPoli').textContent     = (counts.policlinica||0) + (counts.maternidade||0);

// ─── MAPA ─────────────────────────────────────────────────────────────────────
const map = L.map('map', { zoomControl: true }).setView([-12.9716, -38.5016], 12);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO', subdomains: 'abcd', maxZoom: 19
}).addTo(map);

// ─── ESTADO ───────────────────────────────────────────────────────────────────
let viewMode       = 'unidades'; // 'unidades' | 'isovalor'
let currentMetric  = 'densidade';
let activeFilters  = new Set(['hospital','upa','ubs','policlinica','maternidade','caps','hospital_especializado','instituto','outros']);
let activeComplexities = new Set(['primario', 'secundario', 'terciario']);
let criticalThreshold = 30; // Score máximo para considerar crítico (baixo = ruim)
let searchQuery    = '';
let selectedId     = null;
let criticalMode   = false;
let criticalLayers = [];
const markers      = {};
let isoLayers      = [];   // Leaflet layers do isovalor

// ─── ÍCONES ───────────────────────────────────────────────────────────────────
function makeIcon(tipo) {
  const cfg = getCfg(tipo);
  const html = `<div style="
    width:34px;height:34px;
    background:${cfg.color};
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    display:flex;align-items:center;justify-content:center;
    border:2px solid rgba(255,255,255,0.35);
    box-shadow:0 3px 10px rgba(0,0,0,0.45);
  "><span style="transform:rotate(45deg);font-size:14px;">${cfg.emoji}</span></div>`;
  return L.divIcon({ html, className:'', iconSize:[34,34], iconAnchor:[17,34], popupAnchor:[0,-34] });
}

// ─── MARKERS ──────────────────────────────────────────────────────────────────
unidades.forEach(u => {
  const cfg = getCfg(u.tipo);
  if (!u.lat || !u.lng || isNaN(u.lat) || isNaN(u.lng)) return;

  const marker = L.marker([u.lat, u.lng], { icon: makeIcon(u.tipo) });
  marker.bindPopup(`
    <div class="l-popup-type" style="color:${cfg.color}">${cfg.label}</div>
    <div class="l-popup-name">${u.nome}</div>
    <div class="l-popup-addr">📍 ${u.endereco} — ${u.bairro}</div>
    ${u.link ? `<div style="margin-top:8px;"><a href="${u.link}" target="_blank" style="color:#40c057;font-size:12px;font-weight:600;">🔗 Acessar Link</a></div>` : ''}
  `);
  marker.on('click', () => showPanel(u.id));
  markers[u.id] = marker;
  marker.addTo(map);
});

// ─── ISOVALOR: COR POR SCORE ──────────────────────────────────────────────────
// Gradiente: baixo = azul escuro → médio = verde → alto = vermelho
function scoreToColor(score, min, max) {
  const t = max === min ? 0.5 : (score - min) / (max - min);
  if (t < 0.25) {
    // azul escuro → azul claro
    const f = t / 0.25;
    return interpolateColor('#0d1b2a', '#1565c0', f);
  } else if (t < 0.5) {
    const f = (t - 0.25) / 0.25;
    return interpolateColor('#1565c0', '#38d169', f);
  } else if (t < 0.75) {
    const f = (t - 0.5) / 0.25;
    return interpolateColor('#38d169', '#ffd43b', f);
  } else {
    const f = (t - 0.75) / 0.25;
    return interpolateColor('#ffd43b', '#ff6b6b', f);
  }
}

function interpolateColor(c1, c2, t) {
  const r1 = parseInt(c1.slice(1,3),16), g1 = parseInt(c1.slice(3,5),16), b1 = parseInt(c1.slice(5,7),16);
  const r2 = parseInt(c2.slice(1,3),16), g2 = parseInt(c2.slice(3,5),16), b2 = parseInt(c2.slice(5,7),16);
  const r = Math.round(r1 + (r2-r1)*t);
  const g = Math.round(g1 + (g2-g1)*t);
  const b = Math.round(b1 + (b2-b1)*t);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

// ─── ISOVALOR: RENDERIZAR ─────────────────────────────────────────────────────
function renderIsovalor() {
  // Limpa layers anteriores
  isoLayers.forEach(l => map.removeLayer(l));
  isoLayers = [];

  const metrica = metricas[currentMetric];
  const scores  = distritos.map(d => ({ d, score: metrica.calcular(d) }));
  const vals    = scores.map(s => s.score);
  const minVal  = Math.min(...vals);
  const maxVal  = Math.max(...vals);

  scores.forEach(({ d, score }) => {
    const cor = scoreToColor(score, minVal, maxVal);

    // Círculo proporcional ao score no centroide
    const raio = 1200 + (score - minVal) / (maxVal - minVal || 1) * 4800;

    const circle = L.circle(d.centroide, {
      radius: raio,
      color: cor,
      fillColor: cor,
      fillOpacity: 0.38,
      weight: 2,
      opacity: 0.7,
    });

    // Tooltip com dado
    const tooltipHtml = `
      <div class="iso-tooltip">
        <div class="iso-tooltip-name">${d.nome}</div>
        <div class="iso-tooltip-val" style="color:${cor}">${score} <span style="font-size:12px;font-weight:400;">${metrica.unidade}</span></div>
        <div class="iso-tooltip-metric">${metrica.desc}</div>
      </div>`;

    circle.bindTooltip(tooltipHtml, { sticky: true, opacity: 1, className: '' });
    circle.on('click', () => showDistrictPanel(d.id, score, cor));
    circle.addTo(map);
    isoLayers.push(circle);

    // Label no centro
    const label = L.divIcon({
      html: `<div style="
        font-family:'Syne',sans-serif;
        font-weight:800;
        font-size:13px;
        color:${cor};
        text-shadow:0 0 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7);
        white-space:nowrap;
        pointer-events:none;
        text-align:center;
      ">${score}<span style="font-size:9px;opacity:.7"> ${metrica.unidade}</span><br>
      <span style="font-size:9px;font-weight:600;opacity:.75;font-family:'DM Sans',sans-serif;">${d.nome}</span></div>`,
      className: '', iconSize: [140, 36], iconAnchor: [70, 18]
    });
    const lblMarker = L.marker(d.centroide, { icon: label, interactive: false, zIndexOffset: 500 });
    lblMarker.addTo(map);
    isoLayers.push(lblMarker);
  });

  renderDistrictList(scores, minVal, maxVal);
}

// ─── ÁREAS CRÍTICAS ──────────────────────────────────────────────────────────
function drawCriticalAreas() {
  clearCriticalAreas();

  const critScores = distritos.map(d => ({ d, score: computeCriticalScore(d) }));
  const maxScore = Math.max(...critScores.map(s => s.score), 1);

  critScores.forEach(({ d, score }) => {
    if (score > criticalThreshold) return; // Só desenhar se score <= threshold (baixo = ruim)

    const color = score < 20 ? '#D32F2F' : score < 30 ? '#FF5722' : '#FFC107';

    const style = {
      color: color,
      fillColor: color,
      fillOpacity: 0.32,
      weight: 2,
      dashArray: '6,3',
      opacity: 0.75
    };

    const popupHtml = `
      <strong>${d.nome}</strong><br>
      <strong>Score Crítico:</strong> ${score}/100 (baixo = ruim)<br>
      <strong>Cobertura ESF:</strong> ${d.cobertura_esf}%<br>
      <strong>Leitos/1k:</strong> ${((d.leitos_sus/d.populacao)*1000).toFixed(2)}<br>
      <strong>Densidade:</strong> ${metricas.densidade.calcular(d)} un/km²
    `;

    if (d.geojson) {
      const layer = L.geoJSON(d.geojson, {
        style,
        onEachFeature(feature, layer) {
          layer.bindPopup(popupHtml);
          layer.on('click', () => showDistrictPanel(d.id, score, color));
          layer.on('mouseover', () => layer.setStyle({ fillOpacity: 0.45 }));
          layer.on('mouseout', () => layer.setStyle({ fillOpacity: 0.32 }));
        }
      }).addTo(map);
      criticalLayers.push(layer);
    } else {
      const circle = L.circle(d.centroide, {
        radius: 1200 + (score / maxScore) * 6000,
        ...style
      }).addTo(map);
      circle.bindPopup(popupHtml);
      circle.on('click', () => showDistrictPanel(d.id, score, color));
      criticalLayers.push(circle);
    }
  });
}


function clearCriticalAreas() {
  criticalLayers.forEach(layer => map.removeLayer(layer));
  criticalLayers = [];
}

function toggleCriticalAreas() {
  criticalMode = !criticalMode;
  document.getElementById('btnCritical').classList.toggle('active', criticalMode);

  if (criticalMode) drawCriticalAreas();
  else clearCriticalAreas();
}

// ─── PAINEL DISTRITO ──────────────────────────────────────────────────────────
function showDistrictPanel(distId, score, cor) {
  const d = distritos.find(x => x.id === distId);
  if (!d) return;

  const unidadesDistrito = unidades.filter(u => normalizaDistrito(u.distrito) === distId);
  const metrica = metricas[currentMetric];

  document.getElementById('dpName').textContent = d.nome;
  document.getElementById('dpName').style.color = cor;

  const metricsHtml = `
    <div class="dmetric">
      <div class="dmetric-label">População</div>
      <div class="dmetric-value" style="color:${cor}">${(d.populacao/1000).toFixed(0)}k</div>
      <div class="dmetric-sub">habitantes estimados</div>
    </div>
    <div class="dmetric">
      <div class="dmetric-label">${metrica.label.replace(/^[^\s]+ /,'')}</div>
      <div class="dmetric-value" style="color:${cor}">${score} <span style="font-size:13px">${metrica.unidade}</span></div>
      <div class="dmetric-sub">${metrica.desc.slice(0,30)}...</div>
    </div>
    <div class="dmetric">
      <div class="dmetric-label">Leitos SUS</div>
      <div class="dmetric-value" style="color:${cor}">${d.leitos_sus}</div>
      <div class="dmetric-sub">${((d.leitos_sus/d.populacao)*1000).toFixed(1)} por mil hab.</div>
    </div>
    <div class="dmetric">
      <div class="dmetric-label">Cobertura ESF</div>
      <div class="dmetric-value" style="color:${cor}">${d.cobertura_esf}%</div>
      <div class="dmetric-sub">Saúde da Família</div>
    </div>
    <div class="dmetric">
      <div class="dmetric-label">Atend./mês</div>
      <div class="dmetric-value" style="color:${cor}">${(d.atendimentos_mes/1000).toFixed(1)}k</div>
      <div class="dmetric-sub">estimativa SUS</div>
    </div>
    <div class="dmetric">
      <div class="dmetric-label">Unidades</div>
      <div class="dmetric-value" style="color:${cor}">${unidadesDistrito.length}</div>
      <div class="dmetric-sub">no distrito</div>
    </div>
  `;
  document.getElementById('dpMetrics').innerHTML = metricsHtml;

  const unitsHtml = unidadesDistrito.map(u => {
    const cfg = getCfg(u.tipo);
    return `<div class="dp-unit-row">
      <span class="dp-unit-emoji">${cfg.emoji}</span>
      <span class="dp-unit-name">${u.nome}</span>
    </div>`;
  }).join('') || '<div class="dp-unit-row"><span style="color:var(--muted)">Nenhuma unidade estadual mapeada</span></div>';

  document.getElementById('dpUnits').innerHTML = unitsHtml;
  document.getElementById('districtPanel').classList.add('visible');
}

function closeDistrictPanel() {
  document.getElementById('districtPanel').classList.remove('visible');
}

// ─── LISTA DE DISTRITOS (SIDEBAR ISO) ────────────────────────────────────────
function renderDistrictList(scores, minVal, maxVal) {
  const list = document.getElementById('districtList');
  const sorted = [...scores].sort((a, b) => b.score - a.score);
  const metrica = metricas[currentMetric];

  list.innerHTML = sorted.map(({ d, score }) => {
    const cor = scoreToColor(score, minVal, maxVal);
    const pct = maxVal === minVal ? 50 : Math.round(((score - minVal) / (maxVal - minVal)) * 100);
    const unidadesNo = unidades.filter(u => normalizaDistrito(u.distrito) === d.id).length;

    return `
      <div class="district-card" onclick="showDistrictPanel('${d.id}', ${score}, '${cor}')">
        <div class="district-card-header">
          <div class="district-name">${d.nome}</div>
          <span class="district-score-label" style="color:${cor}">${score} ${metrica.unidade}</span>
        </div>
        <div class="district-score-bar-wrap">
          <div class="district-score-bar" style="width:${pct}%;background:${cor}"></div>
        </div>
        <div class="district-pills" style="margin-top:6px">
          <div class="district-pill">🏥 ${unidadesNo} unid.</div>
          <div class="district-pill">👥 ${(d.populacao/1000).toFixed(0)}k hab.</div>
          <div class="district-pill">🛏️ ${d.leitos_sus} leitos</div>
          <div class="district-pill">📈 ESF ${d.cobertura_esf}%</div>
        </div>
      </div>`;
  }).join('');
}

// ─── TROCA DE MODO ────────────────────────────────────────────────────────────
function setViewMode(mode) {
  viewMode = mode;

  document.getElementById('btnUnidades').classList.toggle('active', mode === 'unidades');
  document.getElementById('btnIsovalor').classList.toggle('active', mode === 'isovalor');

  document.getElementById('sidebarUnidades').classList.toggle('hidden', mode !== 'unidades');
  document.getElementById('sidebarIsovalor').classList.toggle('hidden', mode !== 'isovalor');

  // Fecha painéis abertos
  closePanel();
  closeDistrictPanel();

  if (mode === 'isovalor') {
    // Esconde markers de unidades
    Object.values(markers).forEach(m => { if (map.hasLayer(m)) map.removeLayer(m); });
    map.closePopup();
    renderIsovalor();
  } else {
    // Remove isovalor layers
    isoLayers.forEach(l => map.removeLayer(l));
    isoLayers = [];
    // Renderiza markers de unidades conforme filtros atuais
    renderList();
  }

  if (criticalMode) {
    drawCriticalAreas();
  }
}

// ─── TROCA DE MÉTRICA ─────────────────────────────────────────────────────────
function setMetric(btn, metric) {
  currentMetric = metric;
  document.querySelectorAll('.iso-metric-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  closeDistrictPanel();
  renderIsovalor();
}

// ─── PAINEL LATERAL UNIDADE ───────────────────────────────────────────────────
function showPanel(id) {
  const u = unidades.find(x => x.id === id);
  if (!u) return;
  const cfg = getCfg(u.tipo);
  selectedId = id;

  document.getElementById('pType').textContent    = cfg.label;
  document.getElementById('pType').style.color    = cfg.color;
  document.getElementById('pName').textContent    = u.nome;
  document.getElementById('pAddr').textContent    = u.endereco;
  document.getElementById('pBairro').textContent  = u.bairro;
  document.getElementById('pPhone').textContent   = u.telefone || '—';
  document.getElementById('pPhoneRow').style.display   = u.telefone ? 'flex' : 'none';
  document.getElementById('pDistrito').textContent = 'Distrito Sanitário ' + u.distrito;
  document.getElementById('pMapsLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.nome + ' Salvador Bahia')}`;

  const extLink  = document.getElementById('pExternalLink');
  const linkRow  = document.getElementById('pLinkRow');
  if (u.link) {
    extLink.href          = u.link;
    extLink.style.display = 'inline-flex';
    linkRow.style.display = 'flex';
    document.getElementById('pLinkLabel').textContent = u.link;
  } else {
    extLink.style.display = 'none';
    linkRow.style.display = 'none';
  }

  const fichaLink = document.getElementById('pFichaLink');
  if (u.fichaUrl) {
    fichaLink.href = u.fichaUrl;
    fichaLink.style.display = 'inline-flex';
  } else {
    fichaLink.style.display = 'none';
  }

  document.getElementById('infoPanel').classList.add('visible');

  document.querySelectorAll('.unit-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById('card-' + id);
  if (card) { card.classList.add('active'); card.scrollIntoView({ block:'nearest', behavior:'smooth' }); }

  map.setView([u.lat, u.lng], 15, { animate: true });
  if (markers[id]) markers[id].openPopup();
}

function closePanel() {
  document.getElementById('infoPanel').classList.remove('visible');
  selectedId = null;
}

// ─── LISTA UNIDADES ───────────────────────────────────────────────────────────
function renderList() {
  const list = document.getElementById('unitsList');
  const q    = searchQuery.toLowerCase();

  const filtered = unidades.filter(u => {
    const group = typeToGroup[u.tipo] || 'outros';
    if (!activeFilters.has(group)) return false;
    const cfg = getCfg(u.tipo);
    if (!activeComplexities.has(cfg.complexidade)) return false;
    if (q && !u.nome.toLowerCase().includes(q) && !u.bairro.toLowerCase().includes(q) && !getCfg(u.tipo).label.toLowerCase().includes(q)) return false;
    return true;
  });

  document.getElementById('visibleCount').textContent = filtered.length;

  if (viewMode === 'unidades') {
    unidades.forEach(u => {
      if (!markers[u.id]) return;
      const show = filtered.some(f => f.id === u.id);
      if (show)  { if (!map.hasLayer(markers[u.id])) markers[u.id].addTo(map); }
      else       { if (map.hasLayer(markers[u.id]))  map.removeLayer(markers[u.id]); }
    });
  }

  if (filtered.length === 0) {
    list.innerHTML = `<div class="no-results"><div class="big">🔍</div>Nenhuma unidade encontrada</div>`;
    return;
  }

  list.innerHTML = filtered.map(u => {
    const cfg = getCfg(u.tipo);
    return `
      <div class="unit-card ${selectedId===u.id?'active':''}" id="card-${u.id}" onclick="showPanel(${u.id}); map.closePopup();">
        <div class="card-top">
          <div class="card-icon" style="background:${cfg.color}22; color:${cfg.color}">${cfg.emoji}</div>
          <div class="card-info">
            <span class="card-type-badge" style="background:${cfg.color}22; color:${cfg.color}">${cfg.label}</span>
            <div class="card-name">${u.nome}</div>
            <div class="card-address">📍 ${u.bairro} · ${u.endereco}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ─── FILTROS ─────────────────────────────────────────────────────────────────
function toggleFilter(btn) {
  const tipo = btn.dataset.type;
  if (activeFilters.has(tipo)) {
    if (activeFilters.size <= 1) return;
    activeFilters.delete(tipo);
    btn.classList.remove('active');
  } else {
    activeFilters.add(tipo);
    btn.classList.add('active');
  }
  renderList();
}

function toggleComplexity(btn) {
  const comp = btn.dataset.complexity;
  if (activeComplexities.has(comp)) {
    if (activeComplexities.size <= 1) return;
    activeComplexities.delete(comp);
    btn.classList.remove('active');
  } else {
    activeComplexities.add(comp);
    btn.classList.add('active');
  }
  renderList();
}

// ─── BUSCA ────────────────────────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value;
  if (viewMode === 'unidades') renderList();
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
async function init() {
  await loadDistrictsGeoJSON();
  renderList();
  updateCriticalModel();
}

init();

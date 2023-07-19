"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("processes", [
      {
        processId: "ME001",
        description: "AOCS Ca-5a-40",
        search: "ACIDEZ",
      },
      {
        processId: "ME002",
        description: "AOCS Ca-2b-38",
        search: "HUMEDAD",
      },
      {
        processId: "ME003",
        description: "AOCS Ca-2c-25",
        search: "HUMEDAD",
      },
      {
        processId: "ME004",
        description: "INEN ISO 8851-1",
        search: "HUMEDAD",
      },
      {
        processId: "ME005",
        description: "AOCS Ca-3a-46",
        search: "IMPUREZAS",
      },
      {
        processId: "ME006",
        description: "CENTRIFUGA",
        search: "IMPUREZAS",
      },
      {
        processId: "ME007",
        description: "SENSORIAL",
        search: "ABOLLADURAS",
      },
      {
        processId: "ME008",
        description: "ASTM D1894",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME009",
        description: "MA-901",
        search: "ALTURA",
      },
      {
        processId: "ME010",
        description: "PORIM P2.9",
        search: "DOBI",
      },
      {
        processId: "ME011",
        description: "CONSISTOMETRO BOSTWICK",
        search: "CONSISTENCIA",
      },
      {
        processId: "ME012",
        description: "AOCS Cc-13e-92",
        search: "COLOR",
      },
      {
        processId: "ME013",
        description: "AOCS Cc-03-25",
        search: "PUNTO FUSION",
      },
      {
        processId: "ME014",
        description: "AOCS Cd-08-53",
        search: "INDICE",
      },
      {
        processId: "ME015",
        description: "AOCS Cc-9a-48",
        search: "PUNTO HUMO",
      },
      {
        processId: "ME016",
        description: "AOCS Cc-11-53",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME017",
        description: "AOCS Cc-12-59",
        search: "TITULO",
      },
      {
        processId: "ME018",
        description: "AOCS Cd-01-25",
        search: "INDICE",
      },
      {
        processId: "ME019",
        description: "AOAC 960.29",
        search: "CLORUROS",
      },
      {
        processId: "ME020",
        description: "ASTM D279-02",
        search: "MIGRACION",
      },
      {
        processId: "ME021",
        description: "TIRILLAS PH",
        search: "PH",
      },
      {
        processId: "ME022",
        description: "AOCS G-07-56",
        search: "PH",
      },
      {
        processId: "ME023",
        description: "INEN 389",
        search: "PH",
      },
      {
        processId: "ME024",
        description: "AOCS Cc-7-25",
        search: "INDICE",
      },
      {
        processId: "ME025",
        description: "AOCS Cc-10b-25",
        search: "DENSIDAD",
      },
      {
        processId: "ME026",
        description: "AOCS Ca-12-55",
        search: "FOSFORO",
      },
      {
        processId: "ME027",
        description: "NTE INEN 1403:2013",
        search: "FUNCIONAL",
      },
      {
        processId: "ME028",
        description: "JAOCS Vol.59",
        search: "CERAS",
      },
      {
        processId: "ME029",
        description: "COLORIMETRIA",
        search: "NIQUEL",
      },
      {
        processId: "ME030",
        description: "AOCS Cd-18-90",
        search: "INDICE",
      },
      {
        processId: "ME031",
        description: "AOCS Cd-03-25",
        search: "SAPONIFICACION",
      },
      {
        processId: "ME032",
        description: "AOCS Da-14-48",
        search: "INDICE",
      },
      {
        processId: "ME033",
        description: "AOCS Ca-6b-53",
        search: "INSAPONIFICABLE",
      },
      {
        processId: "ME034",
        description: "NTE INEN 190",
        search: "RESISTENCIA",
      },
      {
        processId: "ME035",
        description: "AOCS Da-2a-48",
        search: "METHANOL",
      },
      {
        processId: "ME036",
        description: "AOCS Ea-6-51",
        search: "GLICERINA",
      },
      {
        processId: "ME037",
        description: "INEN ISO 8851-3",
        search: "GRASA TOTAL",
      },
      {
        processId: "ME038",
        description: "AOAC 950.54",
        search: "GRASA TOTAL",
      },
      {
        processId: "ME039",
        description: "ASTM D3808-01",
        search: "ADHERENCIA",
      },
      {
        processId: "ME040",
        description: "INEN 164",
        search: "HUMEDAD",
      },
      {
        processId: "ME041",
        description: "AOCS Cc-9b-55 / Cc-9c-95",
        search: "PUNTO INFLAMACION",
      },
      {
        processId: "ME042",
        description: "METODO INTERNO",
        search: "VARIOS",
      },
      {
        processId: "ME043",
        description: "AOCS Ca-2e-84",
        search: "HUMEDAD",
      },
      {
        processId: "ME044",
        description: "HUNTER LAB",
        search: "COLOR",
      },
      {
        processId: "ME045",
        description: "ESPECTROFOTOMETRIA",
        search: "HIERRO",
      },
      {
        processId: "ME046",
        description: "GRINDOMETRO / MICROMETRO",
        search: "TAMAÑO",
      },
      {
        processId: "ME047",
        description: "DENSIMETRO",
        search: "DENSIDAD",
      },
      {
        processId: "ME048",
        description: "DESTILACION",
        search: "CONCENTRACION",
      },
      {
        processId: "ME049",
        description: "NFPA",
        search: "EMBOBINADO",
      },
      {
        processId: "ME050",
        description: "GRAVIMETRIA",
        search: "IMPUREZAS",
      },
      {
        processId: "ME051",
        description: "ASTM F904-98",
        search: "FUERZA",
      },
      {
        processId: "ME052",
        description: "MECCAB-001",
        search: "GRAMAJE",
      },
      {
        processId: "ME053",
        description: "MECCAB-002",
        search: "ALTURA",
      },
      {
        processId: "ME054",
        description: "ASTM D882",
        search: "ELONGACION",
      },
      {
        processId: "ME055",
        description: "PRD.CCA.95",
        search: "DIMENSIONALES",
      },
      {
        processId: "ME056",
        description: "MECCAB-007",
        search: "FUELLE",
      },
      {
        processId: "ME057",
        description: "AOCS Cc-13j-97",
        search: "COLOR",
      },
      {
        processId: "ME058",
        description: "NTE INEN 1160",
        search: "HUMEDAD",
      },
      {
        processId: "ME059",
        description: "PICNOMETRO",
        search: "DENSIDAD",
      },
      {
        processId: "ME060",
        description: "INEN NTE ISO 2173 (BrixOmetro)",
        search: "GRADOS BRIX",
      },
      {
        processId: "ME061",
        description: "AOCS Ce-1h-05",
        search: "ACIDOS GRASOS",
      },
      {
        processId: "ME062",
        description: "AOCS Cd-11b-91",
        search: "DGS",
      },
      {
        processId: "ME063",
        description: "MECCAB-011",
        search: "ABSORCION",
      },
      {
        processId: "ME064",
        description: "ASTM D3776",
        search: "GRAMAJE",
      },
      {
        processId: "ME065",
        description: "AOCS Cd-12b-92",
        search: "PERIODO INDUCCION",
      },
      {
        processId: "ME066",
        description: "AOCS Cd-16b-93",
        search: "SOLIDOS",
      },
      {
        processId: "ME067",
        description: "PRD.CCA.94",
        search: "FUNCIONALES",
      },
      {
        processId: "ME068",
        description: "ME-CCPQ02",
        search: "COLORACION",
      },
      {
        processId: "ME069",
        description: "LOVIBOND COMPARADOR 2000",
        search: "COLOR",
      },
      {
        processId: "ME070",
        description: "MA 138",
        search: "HIERRO",
      },
      {
        processId: "ME071",
        description: "NOM-060.88",
        search: "DIMENSIONALES",
      },
      {
        processId: "ME072",
        description: "ISO 17190-4-2001",
        search: "HUMEDAD",
      },
      {
        processId: "ME073",
        description: "ME-CCGE-01",
        search: "ALTURA",
      },
      {
        processId: "ME074",
        description: "TAPPI T412",
        search: "HUMEDAD",
      },
      {
        processId: "ME075",
        description: "KARL FISHER",
        search: "HUMEDAD",
      },
      {
        processId: "ME076",
        description: "NTE INEN 1529",
        search: "MOHOS",
      },
      {
        processId: "ME077",
        description: "AOCS Ca 6c-65",
        search: "INSAPONIFICABLE",
      },
      {
        processId: "ME078",
        description: "AOCS Ce 1b-89",
        search: "ACIDOS GRASOS",
      },
      {
        processId: "ME079",
        description: "NTE INEN 340",
        search: "GRADO ALCOHOLICO",
      },
      {
        processId: "ME080",
        description: "CROMATOGRAFICO",
        search: "FURFURAL",
      },
      {
        processId: "ME081",
        description: "AOAC 997.02",
        search: "MOHOS",
      },
      {
        processId: "ME082",
        description: "AOAC 989.14",
        search: "SALMONELLA",
      },
      {
        processId: "ME083",
        description: "AOAC 998.09",
        search: "SALMONELLA",
      },
      {
        processId: "ME084",
        description: "DANISCO",
        search: "PERIODO INDUCCION",
      },
      {
        processId: "ME085",
        description: "PANTONE",
        search: "COLOR",
      },
      {
        processId: "ME086",
        description: "AOAC 989.10",
        search: "COLIFORMES",
      },
      {
        processId: "ME087",
        description: "OXIDOGRAFO",
        search: "OXIDOGRAFO",
      },
      {
        processId: "ME088",
        description: "TESTO",
        search: "TESTO",
      },
      {
        processId: "ME089",
        description: "AOCS Cd-18-50",
        search: "ANISIDINA",
      },
      {
        processId: "ME090",
        description: "(GC/ECD)/(GC/MS/MS SCREEN)",
        search: "CROMATOGRAFO",
      },
      {
        processId: "ME091",
        description: "AOCS Ca-11-55",
        search: "CENIZAS",
      },
      {
        processId: "ME092",
        description: "AOAC 981.12",
        search: "PH",
      },
      {
        processId: "ME093",
        description: "AOCS Bc-5a-49",
        search: "CENIZAS",
      },
      {
        processId: "ME094",
        description: "CUBAN TESTER",
        search: "CONSISTENCIA",
      },
      {
        processId: "ME095",
        description: "ISO 3960",
        search: "PEROXIDO",
      },
      {
        processId: "ME096",
        description: "LAB. EXTERNO",
        search: "LAB. EXTERNO",
      },
      {
        processId: "ME097",
        description: "MA 231",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME098",
        description: "NTE INEN 244",
        search: "MALLA",
      },
      {
        processId: "ME099",
        description: "ME-CCPT-01",
        search: "CODIFICADO",
      },
      {
        processId: "ME100",
        description: "NTE INEN 2037",
        search: "CAPACIDAD",
      },
      {
        processId: "ME101",
        description: "NTE INEN 2041",
        search: "CAPACIDAD",
      },
      {
        processId: "ME102",
        description: "NTE INEN 2237",
        search: "HUMEDAD",
      },
      {
        processId: "ME103",
        description: "NTE INEN 2352",
        search: "SELLADO",
      },
      {
        processId: "ME104",
        description: "NTE INEN 2353",
        search: "FUERZA",
      },
      {
        processId: "ME105",
        description: "PERDIDA PESO",
        search: "HUMEDAD",
      },
      {
        processId: "ME106",
        description: "NTE INEN 254",
        search: "OXIDO",
      },
      {
        processId: "ME107",
        description: "NTE INEN ISO 16212",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME108",
        description: "NTE INEN ISO 18416",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME109",
        description: "CONTEO",
        search: "CONTEO",
      },
      {
        processId: "ME110",
        description: "NO SE PUEDE UTILIZAR EN RDL",
        search: "-",
      },
      {
        processId: "ME111",
        description: "PRD.CCA.19",
        search: "MATERIAL",
      },
      {
        processId: "ME112",
        description: "NTE INEN ISO 22717",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME113",
        description: "AOCS Gc-06-40",
        search: "TITULO",
      },
      {
        processId: "ME114",
        description: "AOCS Cd-8b-90",
        search: "INDICE",
      },
      {
        processId: "ME115",
        description: "CLOROX COLOMBIA - 42406.015-4",
        search: "APARIENCIA",
      },
      {
        processId: "ME116",
        description: "CLOROX COLOMBIA - 42407.003-9",
        search: "OLOR",
      },
      {
        processId: "ME117",
        description: "NTE INEN 1947",
        search: "HIDROXIDO",
      },
      {
        processId: "ME118",
        description: "AOCS K-12-55",
        search: "FOSFORO",
      },
      {
        processId: "ME119",
        description: "AOAC 925.10",
        search: "EXTRACTO",
      },
      {
        processId: "ME120",
        description: "MICROMETRO",
        search: "DIAMETRO",
      },
      {
        processId: "ME121",
        description: "CALCULO",
        search: "DEFECTOS",
      },
      {
        processId: "ME122",
        description: "TITRIMETRICO",
        search: "OXIDO",
      },
      {
        processId: "ME123",
        description: "AOAC 958.01",
        search: "OXIDO",
      },
      {
        processId: "ME124",
        description: "LAB. EXTERNO ACRED",
        search: "LAB. EXTERNO",
      },
      {
        processId: "ME125",
        description: "AOCS Cc-11-54",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME126",
        description: "AOCS Bc-3-49",
        search: "GRASA TOTAL",
      },
      {
        processId: "ME127",
        description: "MAI-046",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME128",
        description: "AOCS Ce-1h-07",
        search: "INDICE",
      },
      {
        processId: "ME129",
        description: "AOCS Cc-13g-94",
        search: "COLOR",
      },
      {
        processId: "ME130",
        description: "AOCS Ca-6a-40",
        search: "INSAPONIFICABLE",
      },
      {
        processId: "ME131",
        description: "AOCS Cc-17-95",
        search: "JABON",
      },
      {
        processId: "ME132",
        description: "AOCS Cd-1d-92",
        search: "INDICE",
      },
      {
        processId: "ME133",
        description: "ASTM D287-82",
        search: "GRADOS API",
      },
      {
        processId: "ME134",
        description: "AOCS Ce-1-62",
        search: "ACIDOS GRASOS",
      },
      {
        processId: "ME135",
        description: "AOCS Ce1c-89",
        search: "ACIDOS GRASOS",
      },
      {
        processId: "ME136",
        description: "AOCS Ca-17-01",
        search: "AZUFRE",
      },
      {
        processId: "ME137",
        description: "METODO TRITRIMETRICO FENOLICO",
        search: "OXIDO",
      },
      {
        processId: "ME138",
        description: "AOCS Ba 3-38",
        search: "MATERIA GRASA",
      },
      {
        processId: "ME139",
        description: "AOCS G-03-53 (Modificado)",
        search: "MATERIA GRASA",
      },
      {
        processId: "ME140",
        description: "NTE INEN 1494",
        search: "HUMEDAD",
      },
      {
        processId: "ME141",
        description: "AOCS Ca-9f-57",
        search: "PERDIDA",
      },
      {
        processId: "ME142",
        description: "AOCS Ca-9a-52",
        search: "PERDIDA",
      },
      {
        processId: "ME143",
        description: "AOCS Ca-2b-38/Ca-3a-46",
        search: "HUMEDAD-IMPUREZAS",
      },
      {
        processId: "ME144",
        description: "AOCS G 5-40",
        search: "INSAPONIFICABLE",
      },
      {
        processId: "ME145",
        description: "MECCAB-016",
        search: "COLOR",
      },
      {
        processId: "ME146",
        description: "MA-417",
        search: "ENTEROBACTERIAS",
      },
      {
        processId: "ME147",
        description: "MECCAB-005",
        search: "REPETICION",
      },
      {
        processId: "ME148",
        description: "MECCAB-013",
        search: "ANCHO",
      },
      {
        processId: "ME149",
        description: "MECCAB-008",
        search: "DISTANCIA",
      },
      {
        processId: "ME150",
        description: "MECCAB-017",
        search: "DISTANCIA",
      },
      {
        processId: "ME151",
        description: "AOCS Ch 04-91",
        search: "CLOROFILAS",
      },
      {
        processId: "ME152",
        description: "AOCS G 1-40",
        search: "ACEITE NEUTRO",
      },
      {
        processId: "ME153",
        description: "IN-TOCA-010",
        search: "PESO",
      },
      {
        processId: "ME154",
        description: "AOCS Cc-06-25",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME155",
        description: "ASTM D613",
        search: "CETANO",
      },
      {
        processId: "ME156",
        description: "AOCS Ce-6-69",
        search: "METIL ESTERES",
      },
      {
        processId: "ME157",
        description: "ASTM D2709",
        search: "HUMEDAD",
      },
      {
        processId: "ME158",
        description: "ASTM D2500",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME159",
        description: "ASTM D-7501",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME160",
        description: "EN 14110",
        search: "METANOL",
      },
      {
        processId: "ME161",
        description: "EN 14112",
        search: "PERIODO INDUCCION",
      },
      {
        processId: "ME162",
        description: "AOCS Ea 8-58",
        search: "HUMEDAD",
      },
      {
        processId: "ME163",
        description: "IUPAC III.A.4",
        search: "CENIZAS",
      },
      {
        processId: "ME164",
        description: "AOCS Ea-7-95",
        search: "DENSIDAD",
      },
      {
        processId: "ME165",
        description: "IUPAC III.A.6",
        search: "MONG",
      },
      {
        processId: "ME166",
        description: "IT05-015",
        search: "TELA",
      },
      {
        processId: "ME167",
        description: "HPLC",
        search: "ANTIOXIDANTE",
      },
      {
        processId: "ME168",
        description: "MA-139",
        search: "ANTIOXIDANTE",
      },
      {
        processId: "ME169",
        description: "MA-147",
        search: "ANTIOXIDANTE",
      },
      {
        processId: "ME170",
        description: "AOCS Ch-06-91",
        search: "ESTEROLES",
      },
      {
        processId: "ME171",
        description: "AOCS Cc-13d-55",
        search: "CLOROFILAS",
      },
      {
        processId: "ME172",
        description: "PORIM P2.6",
        search: "CAROTENOS",
      },
      {
        processId: "ME173",
        description: "QWI-QC-EU-50-3102",
        search: "FUNCIONALES",
      },
      {
        processId: "ME174",
        description: "MAI-059",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME175",
        description: "NIR",
        search: "METHANOL",
      },
      {
        processId: "ME176",
        description: "ASTM D664",
        search: "ACIDEZ",
      },
      {
        processId: "ME177",
        description: "ASTM 1126-92",
        search: "CALCIO",
      },
      {
        processId: "ME178",
        description: "WPS: IM-QC34-43",
        search: "AEROBIOS",
      },
      {
        processId: "ME179",
        description: "USP 813",
        search: "REFRACCION",
      },
      {
        processId: "ME180",
        description: "ME-CCGE-02",
        search: "VOLUMEN",
      },
      {
        processId: "ME181",
        description: "BALANZA HALOGENA",
        search: "HUMEDAD",
      },
      {
        processId: "ME182",
        description: "STANDARD METHODS 2120 C.",
        search: "COLOR",
      },
      {
        processId: "ME183",
        description: "ASTM F2100-11",
        search: "PRESION",
      },
      {
        processId: "ME184",
        description: "E376.2 A.4500-S2-D I 10530 DIN 38405",
        search: "SULFURO",
      },
      {
        processId: "ME185",
        description: "AOCS Ca-2b-38/Ca-6a-40",
        search: "MIU",
      },
      {
        processId: "ME186",
        description: "MA-151",
        search: "PH",
      },
      {
        processId: "ME187",
        description: "DIR 220",
        search: "CLARIDAD",
      },
      {
        processId: "ME188",
        description: "DEFAULT. ISCC 205 Sec. 3.1",
        search: "GHG",
      },
      {
        processId: "ME189",
        description: "ASTM D-1298",
        search: "GRADOS API",
      },
      {
        processId: "ME190",
        description: "ASTM D-1160",
        search: "DESTILACION",
      },
      {
        processId: "ME191",
        description: "ASTM D-93",
        search: "PUNTO INFLAMACION",
      },
      {
        processId: "ME192",
        description: "ASTM D-445",
        search: "VISCOSIDAD",
      },
      {
        processId: "ME193",
        description: "ASTM D-4530 / D-189",
        search: "CARBON",
      },
      {
        processId: "ME194",
        description: "ASTM D-6584",
        search: "GLICERINA",
      },
      {
        processId: "ME195",
        description: "ASTM D-4951",
        search: "FOSFORO",
      },
      {
        processId: "ME196",
        description: "EN 14538 UOP-389",
        search: "CALCIO",
      },
      {
        processId: "ME197",
        description: "EN 14538 UOP-391",
        search: "SODIO",
      },
      {
        processId: "ME198",
        description: "ASTM D-130",
        search: "COBRE",
      },
      {
        processId: "ME199",
        description: "ASTM D-5453 / D-2622 / D-4294",
        search: "SULFURO",
      },
      {
        processId: "ME200",
        description: "ASTM D-874",
        search: "CENIZAS",
      },
      {
        processId: "ME201",
        description: "ASTM D-6371",
        search: "ESTABILIDAD",
      },
      {
        processId: "ME202",
        description: "STANDARD METHODS 5520 D",
        search: "ACEITE",
      },
      {
        processId: "ME203",
        description: "AOCS Da-4a-48",
        search: "ALCALINIDAD",
      },
      {
        processId: "ME204",
        description: "VISUAL",
        search: "DESEMPEÑO",
      },
      {
        processId: "ME205",
        description: "STANDARD METHODS 4500-Cl",
        search: "CLORUROS",
      },
      {
        processId: "ME206",
        description: "MEDIANTE EQUPIO ULTRAMETER II",
        search: "CONDUCTIVIDAD",
      },
      {
        processId: "ME207",
        description: "STANDART METHODS 5210-D",
        search: "DEMANDA BIOQUIMICA",
      },
      {
        processId: "ME208",
        description: "STANDART METHODS 5220-D",
        search: "DEMANDA QUIMICA",
      },
      {
        processId: "ME209",
        description: "STANDARD METHODS 2340-C-EDTA",
        search: "DUREZA",
      },
      {
        processId: "ME210",
        description: "PRD.CCA.92",
        search: "FUNCIONAL",
      },
      {
        processId: "ME211",
        description: "GC - ECD MI-078",
        search: "CROMATOGRAFIA",
      },
      {
        processId: "ME212",
        description: "VOLUMETRIA",
        search: "FOSFONATOS",
      },
      {
        processId: "ME213",
        description: "AOCS Ja-10-87",
        search: "VISCOSIDAD",
      },
      {
        processId: "ME214",
        description: "VISCOSIMETRO",
        search: "VISCOSIDAD",
      },
      {
        processId: "ME215",
        description: "STANDARD METHODS 4500-H-B",
        search: "PH",
      },
      {
        processId: "ME216",
        description: "NTE INEN ISO 4833",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME217",
        description: "APHA 4500-Si E y DIN 38 405 D21",
        search: "SILICE",
      },
      {
        processId: "ME218",
        description: "NTE INEN -ISO 21528-2",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME219",
        description: "NTE INEN -ISO 6579",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME220",
        description: "AOAC PTM 121301",
        search: "MICROBIOLOGICOS",
      },
      {
        processId: "ME221",
        description: "STANDART METHODS 4500-SO32- B.",
        search: "SULFITOS",
      },
      {
        processId: "ME222",
        description: "AOCS Cd 21-91",
        search: "BENZOPIRENO",
      },
      {
        processId: "ME223",
        description: "IT.CCA.13",
        search: "ALTURA",
      },
      {
        processId: "ME224",
        description: "NTE INEN ISO 7027",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME225",
        description: "AOCS Cj-03-99",
        search: "VISCOSIDAD",
      },
      {
        processId: "ME226",
        description: "VOLUMETRICO (INEN AGUA)",
        search: "CLORUROS",
      },
      {
        processId: "ME227",
        description: "UNE-EN ISO 9308-1",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME228",
        description: "AOAC 938.06",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME229",
        description: "MA-158",
        search: "HUMEDAD",
      },
      {
        processId: "ME230",
        description: "NTE INEN 3167",
        search: "PH",
      },
      {
        processId: "ME231",
        description: "AOCS G-03-53",
        search: "GRASA TOTAL",
      },
      {
        processId: "ME232",
        description: "NTE INEN 818",
        search: "HUMEDAD",
      },
      {
        processId: "ME233",
        description: "AOCS Ch-5-91",
        search: "COEFICIENTE",
      },
      {
        processId: "ME234",
        description: "COI/T.15/NC NO 3",
        search: "OLIVA",
      },
      {
        processId: "ME235",
        description: "ME-CCPQ-01",
        search: "AMONIACO",
      },
      {
        processId: "ME236",
        description: "USP 854",
        search: "ESPECTROFOTOMETRIA",
      },
      {
        processId: "ME237",
        description: "USP 841",
        search: "DENSIDAD",
      },
      {
        processId: "ME238",
        description: "MAI-036",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME239",
        description: "PH-METRO",
        search: "PH",
      },
      {
        processId: "ME240",
        description: "MAI-037",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME241",
        description: "STANDARD METHODS",
        search: "SOLIDOS",
      },
      {
        processId: "ME242",
        description: "MA-230",
        search: "ESPECTROFOTOMETRIA",
      },
      {
        processId: "ME243",
        description: "MEDICION ELECTRICA",
        search: "SOLIDOS",
      },
      {
        processId: "ME244",
        description: "INEN NTE ISO750",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME245",
        description: "NTE INEN-ISO 11294",
        search: "HUMEDAD",
      },
      {
        processId: "ME246",
        description: "USP 831",
        search: "INDICE",
      },
      {
        processId: "ME247",
        description: "AOCS Da-23-56",
        search: "GLICERINA",
      },
      {
        processId: "ME248",
        description: "AOCS Dd-4-60",
        search: "ACEITE",
      },
      {
        processId: "ME249",
        description: "ACH-158",
        search: "COLOR",
      },
      {
        processId: "ME250",
        description: "ACH-157",
        search: "COLOR",
      },
      {
        processId: "ME251",
        description: "AOAC OMA 2003.08",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME252",
        description: "AOAC OMA 990.12",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME253",
        description: "AOAC OMA 2003.01",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME254",
        description: "AOAC OMA 2016.01",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME255",
        description: "AOAC OMA 2003.07",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME256",
        description: "NTE INEN ISO / IEC15423",
        search: "LECTURA",
      },
      {
        processId: "ME257",
        description: "FTIR",
        search: "FTIR",
      },
      {
        processId: "ME258",
        description: "NTE INEN ISO 21149",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME259",
        description: "NTE INEN ISO 21150",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME260",
        description: "NTE INEN ISO 22718",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME261",
        description: "NTC 4833",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME262",
        description: "NTE INEN 821",
        search: "ALCALINIDAD",
      },
      {
        processId: "ME263",
        description: "BAM FDA",
        search: "MOHOS",
      },
      {
        processId: "ME264",
        description: "HIDROMETRO",
        search: "DENSIDAD",
      },
      {
        processId: "ME265",
        description: "CLOROX COLOMBIA - T-SGC-001-4",
        search: "PH",
      },
      {
        processId: "ME266",
        description: "CLOROX COLOMBIA - 42001.020-1",
        search: "DENSIDAD",
      },
      {
        processId: "ME267",
        description: "CLOROX COLOMBIA - T-TSO-006-1",
        search: "PEROXIDO",
      },
      {
        processId: "ME268",
        description: "CLOROX COLOMBIA - 132734",
        search: "OXIGENO",
      },
      {
        processId: "ME269",
        description: "USP 912",
        search: "VISCOSIDAD",
      },
      {
        processId: "ME270",
        description: "CLOROX COLOMBIA - 132735",
        search: "PERDIDA",
      },
      {
        processId: "ME271",
        description: "MAI-038",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME272",
        description: "USP 616",
        search: "DENSIDAD",
      },
      {
        processId: "ME273",
        description: "NTE INEN 816",
        search: "INSOLUBLE",
      },
      {
        processId: "ME274",
        description: "NTE INEN 817",
        search: "INSOLUBLE",
      },
      {
        processId: "ME275",
        description: "NTE INEN 822",
        search: "ACIDEZ",
      },
      {
        processId: "ME276",
        description: "NTE INEN 823",
        search: "GRASA TOTAL",
      },
      {
        processId: "ME277",
        description: "NTE INEN 830",
        search: "FOSFATOS",
      },
      {
        processId: "ME278",
        description: "NTE INEN 833",
        search: "MATERIA ACTIVA",
      },
      {
        processId: "ME279",
        description: "NTC 2533",
        search: "MATERIA ACTIVA",
      },
      {
        processId: "ME280",
        description: "AOCS Da-09-48",
        search: "CLORUROS",
      },
      {
        processId: "ME281",
        description: "AOCS Da-08-48",
        search: "ALCALINIDAD",
      },
      {
        processId: "ME282",
        description: "AOCS Da-13-48",
        search: "TITULO",
      },
      {
        processId: "ME283",
        description: "MAI-058",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME284",
        description: "AOCS Cc-16-60",
        search: "PENETRABILIDAD",
      },
      {
        processId: "ME285",
        description: "MAI-035",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME286",
        description: "MAI-043",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME287",
        description: "MAI-044",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME288",
        description: "MA-229",
        search: "ARENILLA",
      },
      {
        processId: "ME289",
        description: "DIR-220",
        search: "CLARIDAD",
      },
      {
        processId: "ME290",
        description: "MAI-052",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME291",
        description: "MA-802",
        search: "NIQUEL",
      },
      {
        processId: "ME292",
        description: "TITULACION/UMA 0112",
        search: "CONCENTRACION",
      },
      {
        processId: "ME293",
        description: "INS-CCPQ-01",
        search: "COLOR",
      },
      {
        processId: "ME294",
        description: "FARMEN - MCQ00120",
        search: "OXIGENO",
      },
      {
        processId: "ME295",
        description: "IO-MI-090",
        search: "HABILAC",
      },
      {
        processId: "ME296",
        description: "TAPPI T 410",
        search: "GRAMAJE",
      },
      {
        processId: "ME297",
        description: "AOAC 2002.11",
        search: "MOHOS",
      },
      {
        processId: "ME298",
        description: "NTE INEN 49",
        search: "HUMEDAD",
      },
      {
        processId: "ME299",
        description: "NTE INEN 51",
        search: "CLORUROS",
      },
      {
        processId: "ME300",
        description: "AOAC OMA 991.14",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME301",
        description: "ASTM D3774-18",
        search: "ANCHO",
      },
      {
        processId: "ME302",
        description: "AOAC 923.03",
        search: "CENIZAS",
      },
      {
        processId: "ME303",
        description: "MA-157",
        search: "HUMEDAD",
      },
      {
        processId: "ME304",
        description: "MA-409",
        search: "AEROBIOS",
      },
      {
        processId: "ME305",
        description: "MA-439",
        search: "MOHOS",
      },
      {
        processId: "ME306",
        description: "MA-407",
        search: "COLIFORMES",
      },
      {
        processId: "ME307",
        description: "MA-423",
        search: "SALMONELLA",
      },
      {
        processId: "ME308",
        description: "PORIM P2.15",
        search: "COEFICIENTE EXTINCION",
      },
      {
        processId: "ME309",
        description: "NTE INEN ISO 604",
        search: "COMPRESION",
      },
      {
        processId: "ME310",
        description: "MA-081",
        search: "COLD TEST",
      },
      {
        processId: "ME311",
        description: "RTE INEN 284",
        search: "PESO",
      },
      {
        processId: "ME312",
        description: "ISO 7932",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME313",
        description: "AOAC OMA 2016.08",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME314",
        description: "CMMEF 5th ed ch. 23",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME315",
        description: "AOAC OMA 2015.13",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME316",
        description: "AOAC OMA 2018.13",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME317",
        description: "MI-025",
        search: "TBHQ",
      },
      {
        processId: "ME318",
        description: "MAI-061",
        search: "HIERRO",
      },
      {
        processId: "ME319",
        description: "NTE INEN 2238",
        search: "DIMENSIONALES",
      },
      {
        processId: "ME320",
        description: "AOCS Ce-6-86",
        search: "ANTIOXIDANTE",
      },
      {
        processId: "ME321",
        description: "NTE INEN 977",
        search: "CLORO",
      },
      {
        processId: "ME322",
        description: "NTE INEN 974",
        search: "DUREZA",
      },
      {
        processId: "ME323",
        description: "MAI-060",
        search: "SOLIDOS",
      },
      {
        processId: "ME324",
        description: "ESTANDAR METODOS 9215D",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME325",
        description: "NTE INEN ISO 16266",
        search: "MICROORGANISMOS",
      },
      {
        processId: "ME326",
        description: "MAI-051",
        search: "COLOR",
      },
      {
        processId: "ME327",
        description: "CLOROX COLOMBIA - 42001.003-3",
        search: "GRANULOMETRIA",
      },
      {
        processId: "ME328",
        description: "NTE INEN-ISO 10523",
        search: "PH",
      },
      {
        processId: "ME329",
        description: "Reglamento CEE No:2568/ 91",
        search: "INDICE",
      },
      {
        processId: "ME330",
        description: "COI/T.20/Doc. No 19/Rev. 5 2019",
        search: "COEFICIENTE",
      },
      {
        processId: "ME331",
        description: "ASTM D 2063 2012",
        search: "TORQUE",
      },
      {
        processId: "ME332",
        description: "ASTM D 4541",
        search: "ADHERENCIA",
      },
      {
        processId: "ME333",
        description: "ASTM D-1709",
        search: "IMPACTO  ",
      },
      {
        processId: "ME334",
        description: "ASTM D2911",
        search: "ALTURA",
      },
      {
        processId: "ME335",
        description: "ASTM D2911M - 16",
        search: "DIAMETRO",
      },
      {
        processId: "ME336",
        description: "ASTM D3078",
        search: "HERMETICIDAD ",
      },
      {
        processId: "ME337",
        description: "ASTM D3330",
        search: "ADHERENCIA",
      },
      {
        processId: "ME338",
        description: "ASTM D3359-02",
        search: "ADHERENCIA",
      },
      {
        processId: "ME339",
        description: "ASTM F1319",
        search: "ADHERENCIA",
      },
      {
        processId: "ME340",
        description: "ASTMD 374",
        search: "ESPESOR",
      },
      {
        processId: "ME341",
        description: "INEN 1397",
        search: "HUMEDAD ",
      },
      {
        processId: "ME342",
        description: "NTC 1773:1998",
        search: "ALTURA",
      },
      {
        processId: "ME343",
        description: "NTC 5511:2007",
        search: "GENERAL EMPAQUE",
      },
      {
        processId: "ME344",
        description: "ASTMD 4321",
        search: "PESO",
      },
      {
        processId: "ME345",
        description: "COVENIN 790:2000",
        search: "DIMENSIONALES",
      },
      {
        processId: "ME346",
        description: "INEN 1398",
        search: "GRAMAJE",
      },
      {
        processId: "ME347",
        description: "INEN 448:1984-04",
        search: "HERMETICIDAD ",
      },
      {
        processId: "ME348",
        description: "INEN 448:1984-05",
        search: "PESO",
      },
      {
        processId: "ME349",
        description: "NTC 1155",
        search: "SOLIDEZ COLOR",
      },
      {
        processId: "ME350",
        description: "WHO-PCDD/F-TEQ/G FAT",
        search: "DIOXINAS",
      },
      {
        processId: "ME351",
        description: "NTC 1869",
        search: "DIMENSIONALES",
      },
      {
        processId: "ME352",
        description: "AOCS Ah 1-72",
        search: "AFLATOXINAS",
      },
      {
        processId: "ME353",
        description: "MA-208",
        search: "CRACKING",
      },
      {
        processId: "ME354",
        description: "NTE INEN ISO 4593",
        search: "ESPESOR",
      },
      {
        processId: "ME355",
        description: "42406.015-4",
        search: "COLOR",
      },
      {
        processId: "ME356",
        description: "AOCS Cc-10a-25",
        search: "DENSIDAD",
      },
      {
        processId: "ME357",
        description: "MA-141",
        search: "HUMEDAD",
      },
      {
        processId: "ME358",
        description: "MA-219",
        search: "HUMEDAD",
      },
      {
        processId: "ME359",
        description: "MA-801",
        search: "HIERRO",
      },
      {
        processId: "ME360",
        description: "ME-CCPQ-02",
        search: "FISICO QUIMICOS",
      },
      {
        processId: "ME361",
        description: "NTE INEN - ISO 3167",
        search: "PROBETAS PLASTICAS",
      },
      {
        processId: "ME362",
        description: "STANDARD METHODS 2130 B.",
        search: "TURBIDEZ",
      },
      {
        processId: "ME363",
        description: "COA PROVEEDOR",
        search: "COA PROVEEDOR",
      },
      {
        processId: "ME364",
        description: "COA PRODUCTOS TERCEROS",
        search: "COA PROVEEDOR",
      },
      {
        processId: "ME365",
        description: "ASTM D 2732",
        search: "ENCOGIMIENTO",
      },
      {
        processId: "ME366",
        description: "ASTM F1249",
        search: "PERMEABILIDAD",
      },
      {
        processId: "ME367",
        description: "ASTM D3985",
        search: "PERMEABILIDAD",
      },
      {
        processId: "ME368",
        description: "MAI-039",
        search: "ASPECTO",
      },
      {
        processId: "ME369",
        description: "MAI-040",
        search: "COLOR",
      },
      {
        processId: "ME370",
        description: "MAI-041",
        search: "OLOR",
      },
      {
        processId: "ME371",
        description: "MAI-071",
        search: "HUMEDAD",
      },
      {
        processId: "ME372",
        description: "MAI-072",
        search: "PEROXIDO",
      },
      {
        processId: "ME373",
        description: "MAI-073",
        search: "AMONIACO",
      },
      {
        processId: "ME374",
        description: "MAI-074",
        search: "ACIDO CITRICO",
      },
      {
        processId: "ME375",
        description: "MAI-075",
        search: "OXIGENO ACTIVO",
      },
      {
        processId: "ME376",
        description: "MAI-076",
        search: "PRUEBA MECHON",
      },
      {
        processId: "ME377",
        description: "MAI-077",
        search: "MONOETANOLAMINA",
      },
      {
        processId: "ME378",
        description: "MAI-078",
        search: "PRUEBA COLORACION",
      },
      {
        processId: "ME379",
        description: "MAI-079",
        search: "CONSISTENCIA",
      },
      {
        processId: "ME380",
        description: "MAS 100 NT",
        search: "AEROBIOS MESOFILOS",
      },
      {
        processId: "ME381",
        description: "GRAVIMÉTRICO",
        search: "MICROBIOLOGICOS",
      },
      {
        processId: "ME382",
        description: "SMEWW 9215B",
        search: "AEROBIOS MESOFILOS",
      },
      {
        processId: "ME383",
        description: "AOAC-RI-030601",
        search: "LISTERIA AMBIENTAL",
      },
      {
        processId: "ME384",
        description: "SMEWW 9222B",
        search: "COLIFORMES TOTALES",
      },
      {
        processId: "ME385",
        description: "SMEWW 9222D ",
        search: "COLIFORMES TOTALES",
      },
      {
        processId: "ME386",
        description: "USP 1116",
        search: "AEROBIOS MESOFILOS",
      },
      {
        processId: "ME387",
        description: "AOAC OMA 2014.05",
        search: "MOHOS",
      },
      {
        processId: "ME388",
        description: "GC-FID",
        search: "CROMATOGRAFIA ",
      },
      {
        processId: "ME389",
        description: "MA-152",
        search: "COLOR",
      },
      {
        processId: "ME390",
        description: "ISO 21527-1",
        search: "MOHOS",
      },
      {
        processId: "ME391",
        description: "ISO 659-1",
        search: "SALMONELLA",
      },
      {
        processId: "ME392",
        description: "AOCS Cd 26-96",
        search: "BENZOPIRENOS",
      },
      {
        processId: "ME393",
        description: "MAI-065",
        search: "PESO",
      },
      {
        processId: "ME394",
        description: "MAI-066",
        search: "ELASTICIDAD RESISTENCIA",
      },
      {
        processId: "ME395",
        description: "NTE INEN ISO 12625-6",
        search: "GRAMAJE",
      },
      {
        processId: "ME396",
        description: "AOCS Cc-3a-63",
        search: "INDICE DE ACIDEZ",
      },
      {
        processId: "ME397",
        description: "MAI-111",
        search: "DENSIDAD",
      },
      {
        processId: "ME398",
        description: "CLOROX COLOMBIA - DIR # 156253",
        search: "HIERRO",
      },
      {
        processId: "ME399",
        description: "CONTROL DE PLANTA",
        search: "PLANTA",
      },
      {
        processId: "ME400",
        description: "MA-135",
        search: "PH",
      },
      {
        processId: "ME401",
        description: "NTE-INEN-EN-71-3:2000",
        search: "METALES PESADOS",
      },
      {
        processId: "ME402",
        description: "NTE-INEN-EN-1186-3",
        search: "MIGRACION GLOBAL",
      },
      {
        processId: "ME403",
        description: "MAI-069",
        search: "POSICION MUESCA",
      },
      {
        processId: "ME404",
        description: "MAI-070",
        search: "DISTRIBUCION SAP",
      },
      {
        processId: "ME405",
        description: "MAI-067",
        search: "SELLADO",
      },
      {
        processId: "ME406",
        description: "MAI-068",
        search: "FUERZA",
      },
      {
        processId: "ME407",
        description: "ASTM D 2659-95",
        search: "RESISTENCIA A LA CARGA",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("processes", null, {});
  },
};

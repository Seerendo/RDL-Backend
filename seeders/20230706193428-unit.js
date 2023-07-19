"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("units", [
      {
        unitId: "UN0001",
        description: "m/min",
        search: "Metro/Minuto",
      },
      {
        unitId: "UN0002",
        description: "Pulg.2",
        search: "Pulgada cuadrada",
      },
      {
        unitId: "UN0003",
        description: "Pulg.3",
        search: "Pulgada cúbica",
      },
      {
        unitId: "UN0004",
        description: "%",
        search: "Porcentaje",
      },
      {
        unitId: "UN0005",
        description: "%O",
        search: "Tanto por mil",
      },
      {
        unitId: "UN0006",
        description: "%wt",
        search: "% masa/ masa",
      },
      {
        unitId: "UN0007",
        description: "°C",
        search: "Grado centígrado",
      },
      {
        unitId: "UN0008",
        description: "°F",
        search: "Fahrenheit",
      },
      {
        unitId: "UN0009",
        description: "°S",
        search: "grados sacarosa",
      },
      {
        unitId: "UN0010",
        description: "µA",
        search: "Microamperio",
      },
      {
        unitId: "UN0011",
        description: "µF",
        search: "Microfaradio",
      },
      {
        unitId: "UN0012",
        description: "µg/GJ",
        search: "Micrograma/Gigajulio",
      },
      {
        unitId: "UN0013",
        description: "µg/kg",
        search: "microgramo/ kilogramo",
      },
      {
        unitId: "UN0014",
        description: "µg/l",
        search: "Microgramo/Litro",
      },
      {
        unitId: "UN0015",
        description: "µg/m3",
        search: "Microgramo/Metro cúbico",
      },
      {
        unitId: "UN0016",
        description: "µl",
        search: "Microlitro",
      },
      {
        unitId: "UN0017",
        description: "µm",
        search: "Micrometro",
      },
      {
        unitId: "UN0018",
        description: "1/m2",
        search: "1/ metro cuadrado",
      },
      {
        unitId: "UN0019",
        description: "mm2/s",
        search: "Milímetro cuadrado/Segundo",
      },
      {
        unitId: "UN0020",
        description: "A",
        search: "Amperio",
      },
      {
        unitId: "UN0021",
        description: "Ohmm",
        search: "Resistencia eléctrica espec.",
      },
      {
        unitId: "UN0022",
        description: "acre",
        search: "Acre",
      },
      {
        unitId: "UN0023",
        description: "atm",
        search: "atmosferas",
      },
      {
        unitId: "UN0024",
        description: "BAL",
        search: "Balde",
      },
      {
        unitId: "UN0025",
        description: "Btu/a",
        search: "British Thermal Unit/año",
      },
      {
        unitId: "UN0026",
        description: "bar",
        search: "bar",
      },
      {
        unitId: "UN0027",
        description: "Bt/bbl",
        search: "British Thermal Unit/Barril EU",
      },
      {
        unitId: "UN0028",
        description: "Bt/ft3",
        search: "British Thermal Unit/PieCúbico",
      },
      {
        unitId: "UN0029",
        description: "Bt/gal",
        search: "British Thermal Unit/Galón EU",
      },
      {
        unitId: "UN0030",
        description: "BID",
        search: "Bidón",
      },
      {
        unitId: "UN0031",
        description: "Bq/m2",
        search: "Becquerel/Metro cuadrado",
      },
      {
        unitId: "UN0032",
        description: "Btu/m",
        search: "British Thermal Unit/mes",
      },
      {
        unitId: "UN0033",
        description: "BOE",
        search: "Equivalente barril petróleo",
      },
      {
        unitId: "UN0034",
        description: "Bolsa",
        search: "Bolsa",
      },
      {
        unitId: "UN0035",
        description: "Btu/pc",
        search: "Btu/pie cúbico estándar",
      },
      {
        unitId: "UN0036",
        description: "Bq",
        search: "Becquerel (1/segundo)",
      },
      {
        unitId: "UN0037",
        description: "Bq/cm2",
        search: "Becquerel/Centímetro cuadrado",
      },
      {
        unitId: "UN0038",
        description: "Bq/g",
        search: "Becquerel/Gramo",
      },
      {
        unitId: "UN0039",
        description: "Bq/kg",
        search: "Becquerel/Kilogramo",
      },
      {
        unitId: "UN0040",
        description: "Bq/m3",
        search: "Bequerelio/metro cúbico",
      },
      {
        unitId: "UN0041",
        description: "°Brix",
        search: "grados brix",
      },
      {
        unitId: "UN0042",
        description: "Btu/lb",
        search: "British Thermal Unit/Libra EU",
      },
      {
        unitId: "UN0043",
        description: "BTO",
        search: "Bulto",
      },
      {
        unitId: "UN0044",
        description: "Btu",
        search: "Unidad Térmica Británica",
      },
      {
        unitId: "UN0045",
        description: "C/U",
        search: "cada uno",
      },
      {
        unitId: "UN0046",
        description: "cm3/s",
        search: "Centímetro cúbico/Segundo",
      },
      {
        unitId: "UN0047",
        description: "CA",
        search: "Caja",
      },
      {
        unitId: "UN0048",
        description: "Car",
        search: "Cartón",
      },
      {
        unitId: "UN0049",
        description: "cc/m3d",
        search: "centímetros cubicos/ m3 dia",
      },
      {
        unitId: "UN0050",
        description: "CCK",
        search: "Centímetros cúbicos por kilo",
      },
      {
        unitId: "UN0051",
        description: "Cd",
        search: "Candela",
      },
      {
        unitId: "UN0052",
        description: "CeB",
        search: "Participación en grupo en %",
      },
      {
        unitId: "UN0053",
        description: "CFM",
        search: "cubic feed per minute",
      },
      {
        unitId: "UN0054",
        description: "cg/g",
        search: "centigramos/ gramo",
      },
      {
        unitId: "UN0055",
        description: "cm H2O",
        search: "centimetro de agua",
      },
      {
        unitId: "UN0056",
        description: "CJ",
        search: "Caja",
      },
      {
        unitId: "UN0057",
        description: "cl",
        search: "Centilitro",
      },
      {
        unitId: "UN0058",
        description: "cm",
        search: "Centímetros",
      },
      {
        unitId: "UN0059",
        description: "cm2",
        search: "Centímetro cuadrado",
      },
      {
        unitId: "UN0060",
        description: "cm3",
        search: "Centímetro cúbico",
      },
      {
        unitId: "UN0061",
        description: "cm/h",
        search: "Centímetro/Hora",
      },
      {
        unitId: "UN0062",
        description: "cm/s",
        search: "Centímetro/Segundo",
      },
      {
        unitId: "UN0063",
        description: "CNUR/g",
        search: "unidad celulasa/ gramo",
      },
      {
        unitId: "UN0064",
        description: "mf",
        search: "Milifaradio",
      },
      {
        unitId: "UN0065",
        description: "Col/g",
        search: "colonias/gramos",
      },
      {
        unitId: "UN0066",
        description: "COP",
        search: "Copias",
      },
      {
        unitId: "UN0067",
        description: "cP",
        search: "centipoise",
      },
      {
        unitId: "UN0068",
        description: "CS",
        search: "Caja",
      },
      {
        unitId: "UN0069",
        description: "cto eu",
        search: "Cuarto galón, EE.UU., líquido",
      },
      {
        unitId: "UN0070",
        description: "d",
        search: "Días",
      },
      {
        unitId: "UN0071",
        description: "dB(A)",
        search: "Decibelio (valoración A)",
      },
      {
        unitId: "UN0072",
        description: "dB(C)",
        search: "Decibelio (valoración C)",
      },
      {
        unitId: "UN0073",
        description: "deg",
        search: "Grado",
      },
      {
        unitId: "UN0074",
        description: "Días",
        search: "Días",
      },
      {
        unitId: "UN0075",
        description: "dm",
        search: "Decímetro",
      },
      {
        unitId: "UN0076",
        description: "dm3",
        search: "Decímetro cúbico",
      },
      {
        unitId: "UN0077",
        description: "doc",
        search: "Docena",
      },
      {
        unitId: "UN0078",
        description: "DSP",
        search: "DISPLAY",
      },
      {
        unitId: "UN0079",
        description: "esp/m3",
        search: "Esporas/metro cúbico",
      },
      {
        unitId: "UN0080",
        description: "UE/ml",
        search: "Unidades enzimas/Milímetro",
      },
      {
        unitId: "UN0081",
        description: "EPU/g",
        search: "unidad endopentosanase/ gramo",
      },
      {
        unitId: "UN0082",
        description: "F",
        search: "Faradio",
      },
      {
        unitId: "UN0083",
        description: "FAU",
        search: "unidad atenuacion de formacina",
      },
      {
        unitId: "UN0084",
        description: "fs/cm3",
        search: "Fibras/Centímetros cúbicos",
      },
      {
        unitId: "UN0085",
        description: "FDS",
        search: "FUNDONES",
      },
      {
        unitId: "UN0086",
        description: "fs/m3",
        search: "Fibras/metro cúbico",
      },
      {
        unitId: "UN0087",
        description: "fs/ml",
        search: "Fibras/milímetros",
      },
      {
        unitId: "UN0088",
        description: "g",
        search: "Gramo",
      },
      {
        unitId: "UN0089",
        description: "ga/l",
        search: "Gramo aditivo/Litro",
      },
      {
        unitId: "UN0090",
        description: "g2/10",
        search: "gramos2/ 10gramos",
      },
      {
        unitId: "UN0091",
        description: "g/m3/d",
        search: "gramos/ m3 por dia",
      },
      {
        unitId: "UN0092",
        description: "g9000m",
        search: "gramos/ 9000metros",
      },
      {
        unitId: "UN0093",
        description: "GAU",
        search: "Gramo oro",
      },
      {
        unitId: "UN0094",
        description: "°Be",
        search: "grados Baume",
      },
      {
        unitId: "UN0095",
        description: "GBq",
        search: "Gigabecquerel",
      },
      {
        unitId: "UN0096",
        description: "g/cm3",
        search: "gramos/ centimetro cúbico",
      },
      {
        unitId: "UN0097",
        description: "g/100g",
        search: "gramos/ 100gramos",
      },
      {
        unitId: "UN0098",
        description: "gf",
        search: "gramo fuerza",
      },
      {
        unitId: "UN0099",
        description: "gf/m2",
        search: "gramo fuerza/metro cuadrado",
      },
      {
        unitId: "UN0100",
        description: "gf/5cm",
        search: "gramos fuerza/5centimetros",
      },
      {
        unitId: "UN0101",
        description: "g/g",
        search: "gramos/ gramos",
      },
      {
        unitId: "UN0102",
        description: "g/GJ",
        search: "Gramo/Gigajulio",
      },
      {
        unitId: "UN0103",
        description: "°GL",
        search: "grados Gay-Lussac",
      },
      {
        unitId: "UN0104",
        description: "g/hg",
        search: "Gramo/Hectogramo",
      },
      {
        unitId: "UN0105",
        description: "GJ",
        search: "Gigajulio",
      },
      {
        unitId: "UN0106",
        description: "GJ/tm3",
        search: "Gigajulio/1000 metros cúbicos",
      },
      {
        unitId: "UN0107",
        description: "GJ/kL",
        search: "Gigajulio/kilolitro",
      },
      {
        unitId: "UN0108",
        description: "GJ/m3",
        search: "Gigajulio/Metro cúbico",
      },
      {
        unitId: "UN0109",
        description: "GJ/t",
        search: "Gigajulio/Tonelada",
      },
      {
        unitId: "UN0110",
        description: "GJ/ton",
        search: "Gigajulio/Tonelada EE.UU.",
      },
      {
        unitId: "UN0111",
        description: "g/kg",
        search: "Gramo/Kilogramo",
      },
      {
        unitId: "UN0112",
        description: "g/l",
        search: "Gramo/Litro",
      },
      {
        unitId: "UN0113",
        description: "gln eu",
        search: "Galón (EE.UU.)",
      },
      {
        unitId: "UN0114",
        description: "g/mol",
        search: "Gramo/Mol",
      },
      {
        unitId: "UN0115",
        description: "g/m2",
        search: "Gramo/Metro cuadrado",
      },
      {
        unitId: "UN0116",
        description: "g/m3",
        search: "Gramo/Metro cúbico",
      },
      {
        unitId: "UN0117",
        description: "g/10mi",
        search: "gramos/ 10min",
      },
      {
        unitId: "UN0118",
        description: "g/ml",
        search: "gramos/ mililitro",
      },
      {
        unitId: "UN0119",
        description: "GMP",
        search: "Puntos exención MP ADR",
      },
      {
        unitId: "UN0120",
        description: "GOhm",
        search: "Gigaohmio",
      },
      {
        unitId: "UN0121",
        description: "gpa",
        search: "Gramo principio activo",
      },
      {
        unitId: "UN0122",
        description: "GPH EU",
        search: "Galones por hora (EE.UU)",
      },
      {
        unitId: "UN0123",
        description: "GPM EU",
        search: "Galones por milla (EE.UU)",
      },
      {
        unitId: "UN0124",
        description: "grd",
        search: "Grande",
      },
      {
        unitId: "UN0125",
        description: "g/t",
        search: "Gramo/tonelada",
      },
      {
        unitId: "UN0126",
        description: "h",
        search: "Horas",
      },
      {
        unitId: "UN0127",
        description: "ha",
        search: "hectarea",
      },
      {
        unitId: "UN0128",
        description: "Hectár",
        search: "Hectárea              No usar",
      },
      {
        unitId: "UN0129",
        description: "hl",
        search: "Hectolitro",
      },
      {
        unitId: "UN0130",
        description: "hPa",
        search: "Hectopascal",
      },
      {
        unitId: "UN0131",
        description: "hora",
        search: "Horas",
      },
      {
        unitId: "UN0132",
        description: "hz",
        search: "Hercio (1/segundo)",
      },
      {
        unitId: "UN0133",
        description: "lb/XCF",
        search: "libra EE.UUS/ 100.000 h.cab.f.",
      },
      {
        unitId: "UN0134",
        description: "IUN",
        search: "unidad de interesterificacion",
      },
      {
        unitId: "UN0135",
        description: "J",
        search: "Julio",
      },
      {
        unitId: "UN0136",
        description: "J/g",
        search: "Julio/gramo",
      },
      {
        unitId: "UN0137",
        description: "a",
        search: "Años (annum)",
      },
      {
        unitId: "UN0138",
        description: "j/kg",
        search: "Julio/Kilogramo",
      },
      {
        unitId: "UN0139",
        description: "J/kgK",
        search: "Capac.térmica espec.",
      },
      {
        unitId: "UN0140",
        description: "J/m3",
        search: "Julio/Metro cúbico",
      },
      {
        unitId: "UN0141",
        description: "j/mol",
        search: "Julio/Mol",
      },
      {
        unitId: "UN0142",
        description: "K",
        search: "Kelvin",
      },
      {
        unitId: "UN0143",
        description: "kg50mm",
        search: "kilogramos/ 50milimetros",
      },
      {
        unitId: "UN0144",
        description: "kA",
        search: "Kiloamperio",
      },
      {
        unitId: "UN0145",
        description: "KAN",
        search: "Bidón                  No usar",
      },
      {
        unitId: "UN0146",
        description: "kBq/c2",
        search: "Kilobecquerel/cm cuadrado",
      },
      {
        unitId: "UN0147",
        description: "kBq/g",
        search: "Kilobecquerel/Gramo",
      },
      {
        unitId: "UN0148",
        description: "kBq/kg",
        search: "Kilobecquerel/Kilogramo",
      },
      {
        unitId: "UN0149",
        description: "kBq",
        search: "Kilobecquerel",
      },
      {
        unitId: "UN0150",
        description: "kcalkg",
        search: "kilocalorias/kilogramos",
      },
      {
        unitId: "UN0151",
        description: "kg/dm3",
        search: "Kilogramo/Decímetro cúbico",
      },
      {
        unitId: "UN0152",
        description: "kg/KWh",
        search: "Kilogramo/Kilovatio por hora",
      },
      {
        unitId: "UN0153",
        description: "kg/f",
        search: "kilogramo/ fuerza",
      },
      {
        unitId: "UN0154",
        description: "kg",
        search: "Kilogramo",
      },
      {
        unitId: "UN0155",
        description: "kg/bbl",
        search: "Kilogramo/Barril EE.UU.",
      },
      {
        unitId: "UN0156",
        description: "kgf",
        search: "kilogramo fuerza",
      },
      {
        unitId: "UN0157",
        description: "kg/m2",
        search: "Kilogramo/Metro cuadrado",
      },
      {
        unitId: "UN0158",
        description: "kg/gal",
        search: "Kilogramo/Galones EE UU",
      },
      {
        unitId: "UN0159",
        description: "kg/h",
        search: "Kilogramo/hora",
      },
      {
        unitId: "UN0160",
        description: "KG/GJ",
        search: "Kilogramo/gigajulio",
      },
      {
        unitId: "UN0161",
        description: "kg/J",
        search: "Kilogramo/Julio",
      },
      {
        unitId: "UN0162",
        description: "kg/kg",
        search: "Kilogramo/Kilogramo",
      },
      {
        unitId: "UN0163",
        description: "kg/mol",
        search: "Kilogramo/Mol",
      },
      {
        unitId: "UN0164",
        description: "kg/MB",
        search: "Kilogramo/Millones BTU",
      },
      {
        unitId: "UN0165",
        description: "kgpa",
        search: "Kilogramo principio activo",
      },
      {
        unitId: "UN0166",
        description: "kg/s",
        search: "Kilogramo/Segundo",
      },
      {
        unitId: "UN0167",
        description: "kg/scf",
        search: "Kilogramo/Pie cúbico estándar",
      },
      {
        unitId: "UN0168",
        description: "kg/t",
        search: "Kilogramo/Tonelada",
      },
      {
        unitId: "UN0169",
        description: "kg/ton",
        search: "Kilogramo/Tonelada EE. UU.",
      },
      {
        unitId: "UN0170",
        description: "kg/m3",
        search: "Kilogramo/Metro cúbico",
      },
      {
        unitId: "UN0171",
        description: "kHz",
        search: "Kilohercio",
      },
      {
        unitId: "UN0172",
        description: "Caja",
        search: "Caja",
      },
      {
        unitId: "UN0173",
        description: "KIT",
        search: "KIT",
      },
      {
        unitId: "UN0174",
        description: "kJ",
        search: "Kilojulio",
      },
      {
        unitId: "UN0175",
        description: "kJ/g",
        search: "Kilojulio/gramo",
      },
      {
        unitId: "UN0176",
        description: "kJ/kg",
        search: "Kilojulio/Kilogramo",
      },
      {
        unitId: "UN0177",
        description: "kJ/mol",
        search: "Kilojulio/Mol",
      },
      {
        unitId: "UN0178",
        description: "kg/MWh",
        search: "Kilogramo/Megavatio por hora",
      },
      {
        unitId: "UN0179",
        description: "km",
        search: "Kilómetro",
      },
      {
        unitId: "UN0180",
        description: "km2",
        search: "Kilómetro cuadrado",
      },
      {
        unitId: "UN0181",
        description: "km/h",
        search: "Kilómetro/Hora",
      },
      {
        unitId: "UN0182",
        description: "kg/min",
        search: "Kilogramo/minuto",
      },
      {
        unitId: "UN0183",
        description: "m3/m3",
        search: "Metro cúbico/Metro cúbico",
      },
      {
        unitId: "UN0184",
        description: "kmol",
        search: "Kilomol",
      },
      {
        unitId: "UN0185",
        description: "kg/kgm",
        search: "Kilogramo/Kilogramo mol",
      },
      {
        unitId: "UN0186",
        description: "k/min",
        search: "Kelvin/Minuto",
      },
      {
        unitId: "UN0187",
        description: "K/s",
        search: "Kelvin/Segundo",
      },
      {
        unitId: "UN0188",
        description: "kN",
        search: "Kilonewton",
      },
      {
        unitId: "UN0189",
        description: "kN/m",
        search: "kilonewton/ metro",
      },
      {
        unitId: "UN0190",
        description: "KOhmio",
        search: "Kiloohmio",
      },
      {
        unitId: "UN0191",
        description: "kg/pul",
        search: "kilogramos/ pulgadas",
      },
      {
        unitId: "UN0192",
        description: "kPa",
        search: "Kilopascal",
      },
      {
        unitId: "UN0193",
        description: "kt",
        search: "Kilotoneladas",
      },
      {
        unitId: "UN0194",
        description: "kV",
        search: "Kilovoltio",
      },
      {
        unitId: "UN0195",
        description: "kva",
        search: "Kilovoltioamperio",
      },
      {
        unitId: "UN0196",
        description: "kw",
        search: "Kilovatio             No usar",
      },
      {
        unitId: "UN0197",
        description: "KWh",
        search: "Kilovatio-hora",
      },
      {
        unitId: "UN0198",
        description: "kgp/kg",
        search: "Kg principio activo/kg",
      },
      {
        unitId: "UN0199",
        description: "kWh/kg",
        search: "Kilovatio hora/Kilogramo",
      },
      {
        unitId: "UN0200",
        description: "kWh/m3",
        search: "Kilovatios horas/métro cúbico",
      },
      {
        unitId: "UN0201",
        description: "kW",
        search: "kilovatio",
      },
      {
        unitId: "UN0202",
        description: "l",
        search: "Litro",
      },
      {
        unitId: "UN0203",
        description: "L/h",
        search: "litro/ hora",
      },
      {
        unitId: "UN0204",
        description: "lA",
        search: "Litro alcohol",
      },
      {
        unitId: "UN0205",
        description: "lb",
        search: "Libra (pound)",
      },
      {
        unitId: "UN0206",
        description: "lb/a",
        search: "libra/año",
      },
      {
        unitId: "UN0207",
        description: "lb/Btu",
        search: "Libra USA/Unidad térmica ingl.",
      },
      {
        unitId: "UN0208",
        description: "lb/f",
        search: "libra/ fuerza",
      },
      {
        unitId: "UN0209",
        description: "lb/gal",
        search: "Libra EE.UU./Galón EE.UU.",
      },
      {
        unitId: "UN0210",
        description: "lb/lbm",
        search: "Libra EE.UU./Libra EE.UU. mol",
      },
      {
        unitId: "UN0211",
        description: "lb/mes",
        search: "Libra/mes",
      },
      {
        unitId: "UN0212",
        description: "lb/MB",
        search: "Libra EE.UU./Millones BTU",
      },
      {
        unitId: "UN0213",
        description: "lb/in2",
        search: "libra/ pulgada2",
      },
      {
        unitId: "UN0214",
        description: "lb/scf",
        search: "Libra EU/Pie cúbico estándar",
      },
      {
        unitId: "UN0215",
        description: "lb/ton",
        search: "Libra EE.UU./Tonelada EE.UU.",
      },
      {
        unitId: "UN0216",
        description: "LC",
        search: "Botella",
      },
      {
        unitId: "UN0217",
        description: "l/ckm",
        search: "Litro por 100 km",
      },
      {
        unitId: "UN0218",
        description: "l/cm3",
        search: "Litro/centímetro cúbico",
      },
      {
        unitId: "UN0219",
        description: "lb/hcf",
        search: "Libra EE.UU./hora cab.fuerza",
      },
      {
        unitId: "UN0220",
        description: "lb/HCF",
        search: "Libra EE.UUS/100.000 h.cab.f.",
      },
      {
        unitId: "UN0221",
        description: "lb/Mgl",
        search: "Libra EE.UU./mill.gal.EE.UU.",
      },
      {
        unitId: "UN0222",
        description: "lb/MWh",
        search: "Libra/Megavatio por hora",
      },
      {
        unitId: "UN0223",
        description: "l/min",
        search: "Litro/Minuto",
      },
      {
        unitId: "UN0224",
        description: "lb/Mp3",
        search: "Libra EE.UU./millón pies cúb.",
      },
      {
        unitId: "UN0225",
        description: "l/m_.s",
        search: "Litro/Molécula-segundo",
      },
      {
        unitId: "UN0226",
        description: "lb/in",
        search: "libra/ pulgada",
      },
      {
        unitId: "UN0227",
        description: "lb/pc3",
        search: "Libra EE.UU./1000 pies cúbicos",
      },
      {
        unitId: "UN0228",
        description: "L/H",
        search: "Litro por hora         No usar",
      },
      {
        unitId: "UN0229",
        description: "lb/Tbl",
        search: "Libra EE.UU./1000 barr.EE.UU.",
      },
      {
        unitId: "UN0230",
        description: "lb/Tgl",
        search: "Libra EE.UU./Mil galon.EE.UU.",
      },
      {
        unitId: "UN0231",
        description: "lb/MCV",
        search: "Libra US/1000 cab.pot.estándar",
      },
      {
        unitId: "UN0232",
        description: "m",
        search: "Metro",
      },
      {
        unitId: "UN0233",
        description: "%(m)",
        search: "Porcentaje-masa",
      },
      {
        unitId: "UN0234",
        description: "%(m)1",
        search: "Porcentaje-masa",
      },
      {
        unitId: "UN0235",
        description: "%O(m)",
        search: "Tanto por mil-masa",
      },
      {
        unitId: "UN0236",
        description: "Mol/l",
        search: "Mol por litro",
      },
      {
        unitId: "UN0237",
        description: "mol/m3",
        search: "Mol por metro cúbico",
      },
      {
        unitId: "UN0238",
        description: "m/s",
        search: "Metro/Segundo",
      },
      {
        unitId: "UN0239",
        description: "m2",
        search: "Metro cuadrado",
      },
      {
        unitId: "UN0240",
        description: "1/M2",
        search: "1 / Metro cuadrado     No usar",
      },
      {
        unitId: "UN0241",
        description: "m2/cm3",
        search: "Metro cuadrado/centímetro cúb.",
      },
      {
        unitId: "UN0242",
        description: "m2/g",
        search: "Metro cuadrado/gramo",
      },
      {
        unitId: "UN0243",
        description: "m2/kg",
        search: "Metro cuadrado/kilogramo",
      },
      {
        unitId: "UN0244",
        description: "m2/m3",
        search: "Metro cuadrado/metro cúbico",
      },
      {
        unitId: "UN0245",
        description: "m2/s",
        search: "Metro cuadrado/Segundo",
      },
      {
        unitId: "UN0246",
        description: "m3",
        search: "Metro cúbico",
      },
      {
        unitId: "UN0247",
        description: "m3/d",
        search: "Metros cúbicos/día",
      },
      {
        unitId: "UN0248",
        description: "m3/h",
        search: "Metro cúbico/Hora",
      },
      {
        unitId: "UN0249",
        description: "m3/s",
        search: "Metro cúbico/Segundo",
      },
      {
        unitId: "UN0250",
        description: "mA",
        search: "Miliamperio",
      },
      {
        unitId: "UN0251",
        description: "MBq/c2",
        search: "Megabecquerel/Centím.cuadrado",
      },
      {
        unitId: "UN0252",
        description: "mbar",
        search: "Milibar",
      },
      {
        unitId: "UN0253",
        description: "MB/bbl",
        search: "Millones BTU/Barril EE.UU.",
      },
      {
        unitId: "UN0254",
        description: "MBq/g",
        search: "Megabecquerel/Gramo",
      },
      {
        unitId: "UN0255",
        description: "MB/gal",
        search: "Millones BTU/Galón EE.UU.",
      },
      {
        unitId: "UN0256",
        description: "MB/kg",
        search: "Millones BTU/Kilogramo",
      },
      {
        unitId: "UN0257",
        description: "MB/lb",
        search: "Millones BTU/libra",
      },
      {
        unitId: "UN0258",
        description: "MB/Msc",
        search: "MMBtu/Mill.pie cúbico estd.",
      },
      {
        unitId: "UN0259",
        description: "MBq",
        search: "Megabecquerel",
      },
      {
        unitId: "UN0260",
        description: "MB/scf",
        search: "Millones BTU/Pie cúbico estd.",
      },
      {
        unitId: "UN0261",
        description: "m.b_/s",
        search: "Metrobaro/Segundo",
      },
      {
        unitId: "UN0262",
        description: "MB/ton",
        search: "Millones BTU/Tonelada EE.UU.",
      },
      {
        unitId: "UN0263",
        description: "mg/dm2",
        search: "miligramos/ decimetro2",
      },
      {
        unitId: "UN0264",
        description: "meq/g",
        search: "miliequivalentes/ gramo",
      },
      {
        unitId: "UN0265",
        description: "MJ",
        search: "Megajulio",
      },
      {
        unitId: "UN0266",
        description: "mg",
        search: "Miligramo",
      },
      {
        unitId: "UN0267",
        description: "mgCaOg",
        search: "miligramos Oxido de calcio/g",
      },
      {
        unitId: "UN0268",
        description: "mg/100",
        search: "miligramos/ 100cm3",
      },
      {
        unitId: "UN0269",
        description: "mg/g",
        search: "Miligramo/Gramo",
      },
      {
        unitId: "UN0270",
        description: "g/m3/k",
        search: "Gramo/Metro cúbico/Kilopascal",
      },
      {
        unitId: "UN0271",
        description: "mg/GJ",
        search: "Miligramos/Gigajulio",
      },
      {
        unitId: "UN0272",
        description: "mg/kg",
        search: "Miligramo/Kilogramo",
      },
      {
        unitId: "UN0273",
        description: "mg/l",
        search: "Miligramo/Litro",
      },
      {
        unitId: "UN0274",
        description: "MOhmio",
        search: "Megaohmio",
      },
      {
        unitId: "UN0275",
        description: "mg/tm3",
        search: "Miligramo/10 metros cúbicos",
      },
      {
        unitId: "UN0276",
        description: "mg/cm2",
        search: "Miligramo/Centímetro cuadrado",
      },
      {
        unitId: "UN0277",
        description: "mg/t",
        search: "Miligramo/tonelada",
      },
      {
        unitId: "UN0278",
        description: "mg/m3",
        search: "Miligramo/Metro cúbico",
      },
      {
        unitId: "UN0279",
        description: "MW",
        search: "Megavatio",
      },
      {
        unitId: "UN0280",
        description: "m/h",
        search: "Metro/Hora",
      },
      {
        unitId: "UN0281",
        description: "mmH2O",
        search: "milimetros de agua",
      },
      {
        unitId: "UN0282",
        description: "mmHg",
        search: "Milímetro columna de mercurio",
      },
      {
        unitId: "UN0283",
        description: "MHz",
        search: "Megahercio",
      },
      {
        unitId: "UN0284",
        description: "milla",
        search: "Milla",
      },
      {
        unitId: "UN0285",
        description: "Milla2",
        search: "Milla cuadrada",
      },
      {
        unitId: "UN0286",
        description: "mil.",
        search: "Milésima de pulgada",
      },
      {
        unitId: "UN0287",
        description: "min",
        search: "Minutos",
      },
      {
        unitId: "UN0288",
        description: "µs",
        search: "Microsegundo",
      },
      {
        unitId: "UN0289",
        description: "MIU/g",
        search: "millon unidad internacional/ g",
      },
      {
        unitId: "UN0290",
        description: "mJ",
        search: "Milijulio",
      },
      {
        unitId: "UN0291",
        description: "MJ/kg",
        search: "Megajulio/Kilogramo",
      },
      {
        unitId: "UN0292",
        description: "MJ/m3",
        search: "Megajulio/metro cúbico",
      },
      {
        unitId: "UN0293",
        description: "mMo/kg",
        search: "milimol/ kilogramo",
      },
      {
        unitId: "UN0294",
        description: "ml",
        search: "Mililitro",
      },
      {
        unitId: "UN0295",
        description: "ml100g",
        search: "mililitros/100gramos",
      },
      {
        unitId: "UN0296",
        description: "mMol/l",
        search: "Millimol por litro",
      },
      {
        unitId: "UN0297",
        description: "MPG EU",
        search: "Millas por galón (EEUU)",
      },
      {
        unitId: "UN0298",
        description: "MLL",
        search: "Millar",
      },
      {
        unitId: "UN0299",
        description: "ml/m3",
        search: "Mililitro/Metro cúbico",
      },
      {
        unitId: "UN0300",
        description: "ppcm3",
        search: "Partículas/centímetro cúbico",
      },
      {
        unitId: "UN0301",
        description: "mlpa",
        search: "Milílitro principio activo",
      },
      {
        unitId: "UN0302",
        description: "mm",
        search: "Milímetro",
      },
      {
        unitId: "UN0303",
        description: "mm2",
        search: "Milímetro cuadrado",
      },
      {
        unitId: "UN0304",
        description: "mm3",
        search: "Milímetro cúbico",
      },
      {
        unitId: "UN0305",
        description: "mm/a",
        search: "Milímetro/Año",
      },
      {
        unitId: "UN0306",
        description: "mmBtu",
        search: "Millones unidades térm.ingl.",
      },
      {
        unitId: "UN0307",
        description: "mmol/g",
        search: "Milimol/Gramo",
      },
      {
        unitId: "UN0308",
        description: "mm/h",
        search: "Milímetro/Hora",
      },
      {
        unitId: "UN0309",
        description: "m_/kg",
        search: "Milimol/Kilogramo",
      },
      {
        unitId: "UN0310",
        description: "mmol",
        search: "Milimol",
      },
      {
        unitId: "UN0311",
        description: "mm/s",
        search: "Milímetro/Segundo",
      },
      {
        unitId: "UN0312",
        description: "MN",
        search: "Meganewton",
      },
      {
        unitId: "UN0313",
        description: "mN/m",
        search: "Milinewton/Metro",
      },
      {
        unitId: "UN0314",
        description: "mO2/kg",
        search: "miliequivalentes Oxigeno/ kg",
      },
      {
        unitId: "UN0315",
        description: "mgKOHg",
        search: "miligramos de KOH/ gramo",
      },
      {
        unitId: "UN0316",
        description: "mol/kg",
        search: "Mol/Kilogramo",
      },
      {
        unitId: "UN0317",
        description: "mol",
        search: "Mol",
      },
      {
        unitId: "UN0318",
        description: "Meses",
        search: "Meses",
      },
      {
        unitId: "UN0319",
        description: "mPa/s",
        search: "milipascales/ segundo",
      },
      {
        unitId: "UN0320",
        description: "MPa",
        search: "Megapascal",
      },
      {
        unitId: "UN0321",
        description: "ppb(m)",
        search: "Partes por billón (masa)",
      },
      {
        unitId: "UN0322",
        description: "ppm(m)",
        search: "Partes por millón (masa)",
      },
      {
        unitId: "UN0323",
        description: "mPa.s",
        search: "Milipascal por segundo",
      },
      {
        unitId: "UN0324",
        description: "ppt(m)",
        search: "Partes por trillón (masa)",
      },
      {
        unitId: "UN0325",
        description: "m.Pa/s",
        search: "Metropascal/Segundo",
      },
      {
        unitId: "UN0326",
        description: "ms",
        search: "Milisegundo",
      },
      {
        unitId: "UN0327",
        description: "m/s2",
        search: "Metro/Segundo al cuadrado",
      },
      {
        unitId: "UN0328",
        description: "µS/cm",
        search: "Microsiemens por centímetro",
      },
      {
        unitId: "UN0329",
        description: "mSv/h",
        search: "Millisievert/Hora",
      },
      {
        unitId: "UN0330",
        description: "mT",
        search: "Militesla",
      },
      {
        unitId: "UN0331",
        description: "Mppcf",
        search: "Millón partículas/pie cúbico",
      },
      {
        unitId: "UN0332",
        description: "Mppcm",
        search: "Millón particulas/metro cúbico",
      },
      {
        unitId: "UN0333",
        description: "MV",
        search: "megavoltio",
      },
      {
        unitId: "UN0334",
        description: "mV",
        search: "Milivoltio",
      },
      {
        unitId: "UN0335",
        description: "MVA",
        search: "Megavoltioamperio",
      },
      {
        unitId: "UN0336",
        description: "mW",
        search: "Milivatio",
      },
      {
        unitId: "UN0337",
        description: "MW/h",
        search: "megavatio/Hora",
      },
      {
        unitId: "UN0338",
        description: "MWh",
        search: "Megavatio/Hora         No usar",
      },
      {
        unitId: "UN0339",
        description: "N",
        search: "Newton",
      },
      {
        unitId: "UN0340",
        description: "N/m",
        search: "Newton/Metro",
      },
      {
        unitId: "UN0341",
        description: "N/5mm",
        search: "newton/ 5milimetros",
      },
      {
        unitId: "UN0342",
        description: "N/5cm",
        search: "newtons/ 5cm",
      },
      {
        unitId: "UN0343",
        description: "N/60mm",
        search: "newton/ 60milimetros",
      },
      {
        unitId: "UN0344",
        description: "na",
        search: "Nanoamperio            No usar",
      },
      {
        unitId: "UN0345",
        description: "nA",
        search: "nanoamperio",
      },
      {
        unitId: "UN0346",
        description: "nm",
        search: "Nanometro",
      },
      {
        unitId: "UN0347",
        description: "ng/c2h",
        search: "Nanogramo/centímetro cuadr.st.",
      },
      {
        unitId: "UN0348",
        description: "nf",
        search: "Nanofaradio            No usar",
      },
      {
        unitId: "UN0349",
        description: "nF",
        search: "nanofaradio",
      },
      {
        unitId: "UN0350",
        description: "ng/g2",
        search: "(nanogramos/gramo) al cuadrado",
      },
      {
        unitId: "UN0351",
        description: "ng/g",
        search: "nanogramos/ gramo",
      },
      {
        unitId: "UN0352",
        description: "ng/GJ",
        search: "Nanogramo/Gigajulio",
      },
      {
        unitId: "UN0353",
        description: "ng/m3",
        search: "Nanogramo/metro cúbico",
      },
      {
        unitId: "UN0354",
        description: "ng/t",
        search: "Nanogramo/tonelada",
      },
      {
        unitId: "UN0355",
        description: "N/mm2",
        search: "Newton/Milímetro cuadrado",
      },
      {
        unitId: "UN0356",
        description: "DL",
        search: "Megavoltio             No usar",
      },
      {
        unitId: "UN0357",
        description: "N/pul",
        search: "newton/ pulgadas",
      },
      {
        unitId: "UN0358",
        description: "ns",
        search: "Nanosegundo",
      },
      {
        unitId: "UN0359",
        description: "NTU",
        search: "unidad de turbidez",
      },
      {
        unitId: "UN0360",
        description: "Ohcm",
        search: "Resistencia eléctrica espec.",
      },
      {
        unitId: "UN0361",
        description: "Ohmio",
        search: "Ohmio",
      },
      {
        unitId: "UN0362",
        description: "oz",
        search: "Onza",
      },
      {
        unitId: "UN0363",
        description: "ozl eu",
        search: "Onza líquida EE.UU.",
      },
      {
        unitId: "UN0364",
        description: "P",
        search: "Puntos",
      },
      {
        unitId: "UN0365",
        description: "Pa",
        search: "Pascal",
      },
      {
        unitId: "UN0366",
        description: "Par",
        search: "Par",
      },
      {
        unitId: "UN0367",
        description: "PAC",
        search: "PACA",
      },
      {
        unitId: "UN0368",
        description: "PAK",
        search: "Bulto                  No usar",
      },
      {
        unitId: "UN0369",
        description: "PAL",
        search: "Paleta",
      },
      {
        unitId: "UN0370",
        description: "Pa.s",
        search: "Pascal-segundo",
      },
      {
        unitId: "UN0371",
        description: "Días P",
        search: "Días de consulta",
      },
      {
        unitId: "UN0372",
        description: "pf",
        search: "Picofaradio",
      },
      {
        unitId: "UN0373",
        description: "pg/g",
        search: "picogramos/ gramo",
      },
      {
        unitId: "UN0374",
        description: "pg/m3",
        search: "Picogramo/metro cúbico",
      },
      {
        unitId: "UN0375",
        description: "PI",
        search: "Pieza",
      },
      {
        unitId: "UN0376",
        description: "Pie2",
        search: "Pie cuadrado",
      },
      {
        unitId: "UN0377",
        description: "Pie3",
        search: "Pie cúbico",
      },
      {
        unitId: "UN0378",
        description: "pie3/m",
        search: "pie cubico/minuto",
      },
      {
        unitId: "UN0379",
        description: "1/min",
        search: "1/minuto",
      },
      {
        unitId: "UN0380",
        description: "kg/m2s",
        search: "Grado de permeación SI",
      },
      {
        unitId: "UN0381",
        description: "ppb",
        search: "Partes por billón",
      },
      {
        unitId: "UN0382",
        description: "ppm",
        search: "Parts per million",
      },
      {
        unitId: "UN0383",
        description: "ppt",
        search: "Partes por trillón",
      },
      {
        unitId: "UN0384",
        description: "µg/c2m",
        search: "Grado de permeación",
      },
      {
        unitId: "UN0385",
        description: "PRS",
        search: "Número de personas",
      },
      {
        unitId: "UN0386",
        description: "ps",
        search: "Picosegundo",
      },
      {
        unitId: "UN0387",
        description: "PSI",
        search: "Libra / Pulgada cuadrada",
      },
      {
        unitId: "UN0388",
        description: "pt eu",
        search: "Pinta EE.UU., líquido",
      },
      {
        unitId: "UN0389",
        description: "PUL",
        search: "pulgadas",
      },
      {
        unitId: "UN0390",
        description: '"',
        search: "Pulgada                No usar",
      },
      {
        unitId: "UN0391",
        description: "PRMU-U",
        search: "unidad proteasa",
      },
      {
        unitId: "UN0392",
        description: "lb/yr",
        search: "Libra/año",
      },
      {
        unitId: "UN0393",
        description: "QQ",
        search: "Quintales",
      },
      {
        unitId: "UN0394",
        description: "gcm3",
        search: "Gramos/Centímetro cúbico",
      },
      {
        unitId: "UN0395",
        description: "1/kg",
        search: "Kilogramo recíproco",
      },
      {
        unitId: "UN0396",
        description: "1/mg",
        search: "Miligramo recíproco",
      },
      {
        unitId: "UN0397",
        description: "rol",
        search: "Rollos",
      },
      {
        unitId: "UN0398",
        description: "RS",
        search: "Unidades enzimas",
      },
      {
        unitId: "UN0399",
        description: "s",
        search: "Segundos",
      },
      {
        unitId: "UN0400",
        description: "S/m",
        search: "Siemens por metro",
      },
      {
        unitId: "UN0401",
        description: "SAC",
        search: "SACO",
      },
      {
        unitId: "UN0402",
        description: "Scf",
        search: "Pié cúbico estándar",
      },
      {
        unitId: "UN0403",
        description: "scf/h",
        search: "Pie cúbico estd./hora",
      },
      {
        unitId: "UN0404",
        description: "scf/y",
        search: "Pie cúbico estándar/año",
      },
      {
        unitId: "UN0405",
        description: "scf/Mb",
        search: "Pie cúb.estd./Mill.barr.EE.UU.",
      },
      {
        unitId: "UN0406",
        description: "ST",
        search: "Set",
      },
      {
        unitId: "UN0407",
        description: "Sv/h",
        search: "Sievert/Hora",
      },
      {
        unitId: "UN0408",
        description: "Sv/s",
        search: "Sievert/Segundo",
      },
      {
        unitId: "UN0409",
        description: "t",
        search: "Tonelada",
      },
      {
        unitId: "UN0410",
        description: "t/año",
        search: "Tonelada/año",
      },
      {
        unitId: "UN0411",
        description: "t/a",
        search: "Tonelada EE.UU./año",
      },
      {
        unitId: "UN0412",
        description: "t/bbl",
        search: "Tonelada/Barril EE.UU.",
      },
      {
        unitId: "UN0413",
        description: "TBq",
        search: "Terabecquerel",
      },
      {
        unitId: "UN0414",
        description: "t/Btu",
        search: "Tonelada/British Thermal Unit",
      },
      {
        unitId: "UN0415",
        description: "1/cm3",
        search: "1/centímetro cúbico",
      },
      {
        unitId: "UN0416",
        description: "T",
        search: "Tesla",
      },
      {
        unitId: "UN0417",
        description: "TEU",
        search: "Unidad equivalente a 20 pies",
      },
      {
        unitId: "UN0418",
        description: "Pie",
        search: "Pie",
      },
      {
        unitId: "UN0419",
        description: "ton/gl",
        search: "Tonelada EE.UU./Galón EE.UU.",
      },
      {
        unitId: "UN0420",
        description: "ton./h",
        search: "Tonelada EE.UU./hora",
      },
      {
        unitId: "UN0421",
        description: "t/ha",
        search: "Toneladas por hectaria",
      },
      {
        unitId: "UN0422",
        description: "Therm",
        search: "Therm (EC)",
      },
      {
        unitId: "UN0423",
        description: "t/Jul",
        search: "Tonelada/Julio",
      },
      {
        unitId: "UN0424",
        description: "t/kl",
        search: "Tonelada/1000 litros",
      },
      {
        unitId: "UN0425",
        description: "t/kt",
        search: "Tonelada/kilotón",
      },
      {
        unitId: "UN0426",
        description: "ton./m",
        search: "Tonelada EE.UU./mes",
      },
      {
        unitId: "UN0427",
        description: "1/m3",
        search: "1/metro cúbico",
      },
      {
        unitId: "UN0428",
        description: "t/tm3",
        search: "Tonelada/1000 metros cúbicos",
      },
      {
        unitId: "UN0429",
        description: "TMB",
        search: "Tambor",
      },
      {
        unitId: "UN0430",
        description: "t/MMbb",
        search: "Tonelada/Millones barr.EE.UU.",
      },
      {
        unitId: "UN0431",
        description: "t/mes",
        search: "Tonelada/mes",
      },
      {
        unitId: "UN0432",
        description: "t/Mscf",
        search: "Tonelada/Mill.pie cúbico estd.",
      },
      {
        unitId: "UN0433",
        description: "TO",
        search: "Tonelada Metríca",
      },
      {
        unitId: "UN0434",
        description: "t/h",
        search: "Tonelada/hora",
      },
      {
        unitId: "UN0435",
        description: "t/m3",
        search: "Tonelada/Metro cúbico",
      },
      {
        unitId: "UN0436",
        description: "ton",
        search: "Tonelada EE.UU.",
      },
      {
        unitId: "UN0437",
        description: "t/ton",
        search: "Tonelada/Tonelada EE.UU.",
      },
      {
        unitId: "UN0438",
        description: "to/ton",
        search: "Tonelada EE.UU./ToneladaEE.UU.",
      },
      {
        unitId: "UN0439",
        description: "Trasp.",
        search: "Tambor                 No usar",
      },
      {
        unitId: "UN0440",
        description: "mil",
        search: "Miles",
      },
      {
        unitId: "UN0441",
        description: "t/t",
        search: "Tonelada/Tonelada",
      },
      {
        unitId: "UN0442",
        description: "t/TJ",
        search: "Tonelada/Terajulio",
      },
      {
        unitId: "UN0443",
        description: "ufc100",
        search: "unidades formadoras/100ml",
      },
      {
        unitId: "UN0444",
        description: "ufc/g",
        search: "unidad formadora Colonia/g",
      },
      {
        unitId: "UN0445",
        description: "ufc/ml",
        search: "unidad formadora Colonia/ml",
      },
      {
        unitId: "UN0446",
        description: "ufc/Un",
        search: "unidad formadora Colonia/ unid",
      },
      {
        unitId: "UN0447",
        description: "ufcgml",
        search: "unidades formadoras/g o ml",
      },
      {
        unitId: "UN0448",
        description: "UI/g",
        search: "unidad internacional/ g",
      },
      {
        unitId: "UN0449",
        description: "uk",
        search: "coefic. de rozamiento cinético",
      },
      {
        unitId: "UN0450",
        description: "Un/min",
        search: "unidades/ minuto",
      },
      {
        unitId: "UN0451",
        description: "UN",
        search: "UNIDAD",
      },
      {
        unitId: "UN0452",
        description: "Uno",
        search: "Lim.",
      },
      {
        unitId: "UN0453",
        description: "UP",
        search: "Unidad de potencia",
      },
      {
        unitId: "UN0454",
        description: "UP/g",
        search: "unidades propagadoras/ gramo",
      },
      {
        unitId: "UN0455",
        description: "upml/g",
        search: "unidad propagadora ml/ g",
      },
      {
        unitId: "UN0456",
        description: "us/cm",
        search: "microsiemens/ centimetro",
      },
      {
        unitId: "UN0457",
        description: "µSv/h",
        search: "Mikrosievert/Hora",
      },
      {
        unitId: "UN0458",
        description: "V",
        search: "Voltio",
      },
      {
        unitId: "UN0459",
        description: "%(v)",
        search: "Porcentaje en volumen",
      },
      {
        unitId: "UN0460",
        description: "%O(V)",
        search: "Volumen por mil",
      },
      {
        unitId: "UN0461",
        description: "VA",
        search: "Voltioamperio",
      },
      {
        unitId: "UN0462",
        description: "val",
        search: "Artículo de valor",
      },
      {
        unitId: "UN0463",
        description: "ppb(V)",
        search: "Partes de volumen por billón",
      },
      {
        unitId: "UN0464",
        description: "ppm(V)",
        search: "Partes de volumen por millón",
      },
      {
        unitId: "UN0465",
        description: "ppt(V)",
        search: "Partes de volumen por trillón",
      },
      {
        unitId: "UN0466",
        description: "W",
        search: "Vatios",
      },
      {
        unitId: "UN0467",
        description: "Semana",
        search: "Semanas",
      },
      {
        unitId: "UN0468",
        description: "W/mk",
        search: "Conductibilidad del calor",
      },
      {
        unitId: "UN0469",
        description: "Wm2ppb",
        search: "Vatio/Met.cuad./Partes p.bill.",
      },
      {
        unitId: "UN0470",
        description: "Kg/sm2",
        search: "Velocidad de evaporación",
      },
      {
        unitId: "UN0471",
        description: "yd",
        search: "Yarda",
      },
      {
        unitId: "UN0472",
        description: "yd2",
        search: "Yarda cuadrada",
      },
      {
        unitId: "UN0473",
        description: "yd3",
        search: "Yarda cúbica",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("units", null, {});
  },
};

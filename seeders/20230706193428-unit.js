"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("units", [
      {
        description: "",
      },
      {
        description: '"',
      },
      {
        description: "#",
      },
      {
        description: "%",
      },
      {
        description: "%(m)",
      },
      {
        description: "%(v)",
      },
      {
        description: "%O",
      },
      {
        description: "%O(m)",
      },
      {
        description: "%O(V)",
      },
      {
        description: "%rH",
      },
      {
        description: "%wt",
      },
      {
        description: "° Plato",
      },
      {
        description: "°Be",
      },
      {
        description: "°Brix",
      },
      {
        description: "°Bx",
      },
      {
        description: "°C",
      },
      {
        description: "°Celsius",
      },
      {
        description: "°F",
      },
      {
        description: "°GL",
      },
      {
        description: "µA",
      },
      {
        description: "µF",
      },
      {
        description: "µg",
      },
      {
        description: "µg/c2m",
      },
      {
        description: "µg/GJ",
      },
      {
        description: "µg/kg",
      },
      {
        description: "µg/l",
      },
      {
        description: "µg/m3",
      },
      {
        description: "µGJ",
      },
      {
        description: "µGL",
      },
      {
        description: "µGV",
      },
      {
        description: "µL",
      },
      {
        description: "µm",
      },
      {
        description: "µs",
      },
      {
        description: "µS/cm",
      },
      {
        description: "1/cm3",
      },
      {
        description: "1/m2",
      },
      {
        description: "1/m3",
      },
      {
        description: "1/min",
      },
      {
        description: "2",
      },
      {
        description: "22S",
      },
      {
        description: "A",
      },
      {
        description: "AA",
      },
      {
        description: "ACR",
      },
      {
        description: "acre",
      },
      {
        description: "atm",
      },
      {
        description: "BAL",
      },
      {
        description: "BAN",
      },
      {
        description: "bAÑ",
      },
      {
        description: "bar",
      },
      {
        description: "BE",
      },
      {
        description: "Bid",
      },
      {
        description: "blq",
      },
      {
        description: "Bolsa",
      },
      {
        description: "Bq/kg",
      },
      {
        description: "Bq/m3",
      },
      {
        description: "BRR",
      },
      {
        description: "Bt/bbl",
      },
      {
        description: "Bt/ft3",
      },
      {
        description: "Bt/gal",
      },
      {
        description: "BTO",
      },
      {
        description: "BTU",
      },
      {
        description: "Btu/a",
      },
      {
        description: "Btu/lb",
      },
      {
        description: "Btu/m",
      },
      {
        description: "Btu/pc",
      },
      {
        description: "C/U",
      },
      {
        description: "cal",
      },
      {
        description: "Car",
      },
      {
        description: "cc/m3/dia",
      },
      {
        description: "Cd",
      },
      {
        description: "CeB",
      },
      {
        description: "cfu/25g",
      },
      {
        description: "cfu/g",
      },
      {
        description: "cg/g",
      },
      {
        description: "CJ",
      },
      {
        description: "cl",
      },
      {
        description: "cm",
      },
      {
        description: "cm H2O",
      },
      {
        description: "cm/h",
      },
      {
        description: "cm/s",
      },
      {
        description: "cm2",
      },
      {
        description: "cm3",
      },
      {
        description: "cm³",
      },
      {
        description: "cm3/s",
      },
      {
        description: "CNUR /g",
      },
      {
        description: "Col/g",
      },
      {
        description: "cP",
      },
      {
        description: "cto eu",
      },
      {
        description: "d",
      },
      {
        description: "days",
      },
      {
        description: "dB(A)",
      },
      {
        description: "dB(C)",
      },
      {
        description: "deg",
      },
      {
        description: "Días",
      },
      {
        description: "Días P",
      },
      {
        description: "dm",
      },
      {
        description: "dm3",
      },
      {
        description: "doc",
      },
      {
        description: "DSPLY",
      },
      {
        description: "EBC",
      },
      {
        description: "EPU/g",
      },
      {
        description: "esp/m3",
      },
      {
        description: "est",
      },
      {
        description: "F",
      },
      {
        description: "FAU",
      },
      {
        description: "fds",
      },
      {
        description: "fs/cm3",
      },
      {
        description: "fs/m3",
      },
      {
        description: "fs/ml",
      },
      {
        description: "ft",
      },
      {
        description: "ft/min",
      },
      {
        description: "ft/s",
      },
      {
        description: "ft³",
      },
      {
        description: "g",
      },
      {
        description: "g/100g",
      },
      {
        description: "g/10min",
      },
      {
        description: "g/cm3",
      },
      {
        description: "g/cm³",
      },
      {
        description: "g/g",
      },
      {
        description: "g/GJ",
      },
      {
        description: "g/h",
      },
      {
        description: "g/hg",
      },
      {
        description: "g/kg",
      },
      {
        description: "g/l",
      },
      {
        description: "g/m2",
      },
      {
        description: "g/m²",
      },
      {
        description: "g/m3/dia",
      },
      {
        description: "g/m3/k",
      },
      {
        description: "g/ml",
      },
      {
        description: "g/mol",
      },
      {
        description: "g/t",
      },
      {
        description: "g9000m",
      },
      {
        description: "ga/l",
      },
      {
        description: "gal (UK)",
      },
      {
        description: "gal (US)",
      },
      {
        description: "GAU",
      },
      {
        description: "gcm3",
      },
      {
        description: "gf",
      },
      {
        description: "gf/5cm",
      },
      {
        description: "GJ",
      },
      {
        description: "GJ/m3",
      },
      {
        description: "GJ/t",
      },
      {
        description: "GJ/tm3",
      },
      {
        description: "GJ/ton",
      },
      {
        description: "gl2/10",
      },
      {
        description: "gln eu",
      },
      {
        description: "GOhm",
      },
      {
        description: "gpa",
      },
      {
        description: "GPH EU",
      },
      {
        description: "GPM EU",
      },
      {
        description: "grd",
      },
      {
        description: "h",
      },
      {
        description: "ha",
      },
      {
        description: "hl",
      },
      {
        description: "hora",
      },
      {
        description: "hours",
      },
      {
        description: "hPa",
      },
      {
        description: "hz",
      },
      {
        description: "IBC",
      },
      {
        description: "in³",
      },
      {
        description: "Inches",
      },
      {
        description: "IUN",
      },
      {
        description: "J",
      },
      {
        description: "j/kg",
      },
      {
        description: "J/kgK",
      },
      {
        description: "J/m3",
      },
      {
        description: "j/mol",
      },
      {
        description: "K",
      },
      {
        description: "k/min",
      },
      {
        description: "K/s",
      },
      {
        description: "kA",
      },
      {
        description: "kBq/kg",
      },
      {
        description: "kcal",
      },
      {
        description: "kcal/kg",
      },
      {
        description: "kg",
      },
      {
        description: "kg/50mm",
      },
      {
        description: "kg/bbl",
      },
      {
        description: "kg/dm3",
      },
      {
        description: "kg/f",
      },
      {
        description: "kg/gal",
      },
      {
        description: "kg/h",
      },
      {
        description: "kg/J",
      },
      {
        description: "kg/kg",
      },
      {
        description: "kg/kgm",
      },
      {
        description: "kg/m2",
      },
      {
        description: "kg/m2s",
      },
      {
        description: "kg/m3",
      },
      {
        description: "kg/m³",
      },
      {
        description: "kg/MB",
      },
      {
        description: "kg/mol",
      },
      {
        description: "kg/pul",
      },
      {
        description: "kg/s",
      },
      {
        description: "kg/scf",
      },
      {
        description: "Kg/sm2",
      },
      {
        description: "kg/t",
      },
      {
        description: "kg/ton",
      },
      {
        description: "kgf",
      },
      {
        description: "kgp/kg",
      },
      {
        description: "kgpa",
      },
      {
        description: "kHz",
      },
      {
        description: "kips",
      },
      {
        description: "KIT",
      },
      {
        description: "kJ",
      },
      {
        description: "kJ/kg",
      },
      {
        description: "kJ/mol",
      },
      {
        description: "km",
      },
      {
        description: "km/h",
      },
      {
        description: "km2",
      },
      {
        description: "kmol",
      },
      {
        description: "kN",
      },
      {
        description: "kN/m",
      },
      {
        description: "KOhmio",
      },
      {
        description: "kPa",
      },
      {
        description: "kt",
      },
      {
        description: "kV",
      },
      {
        description: "kva",
      },
      {
        description: "kW",
      },
      {
        description: "kWh",
      },
      {
        description: "kWh/kg",
      },
      {
        description: "kWh/m3",
      },
      {
        description: "KWT",
      },
      {
        description: "L",
      },
      {
        description: "l/ckm",
      },
      {
        description: "l/cm3",
      },
      {
        description: "L/h",
      },
      {
        description: "l/m_.s",
      },
      {
        description: "l/min",
      },
      {
        description: "lam",
      },
      {
        description: "lb",
      },
      {
        description: "lb force",
      },
      {
        description: "lb/a",
      },
      {
        description: "lb/Btu",
      },
      {
        description: "lb/f",
      },
      {
        description: "lb/ft³",
      },
      {
        description: "lb/gal",
      },
      {
        description: "lb/h",
      },
      {
        description: "lb/hcf",
      },
      {
        description: "lb/in",
      },
      {
        description: "lb/in2",
      },
      {
        description: "lb/in³",
      },
      {
        description: "lb/lbm",
      },
      {
        description: "lb/MB",
      },
      {
        description: "lb/MCV",
      },
      {
        description: "lb/mes",
      },
      {
        description: "lb/Mgl",
      },
      {
        description: "lb/Mp3",
      },
      {
        description: "lb/pc3",
      },
      {
        description: "lb/scf",
      },
      {
        description: "lb/Tbl",
      },
      {
        description: "lb/Tgl",
      },
      {
        description: "lb/ton",
      },
      {
        description: "LC",
      },
      {
        description: "Lton",
      },
      {
        description: "m",
      },
      {
        description: "m.b_/s",
      },
      {
        description: "m.Pa/s",
      },
      {
        description: "m/h",
      },
      {
        description: "m/min",
      },
      {
        description: "m/s",
      },
      {
        description: "m/s2",
      },
      {
        description: "m2",
      },
      {
        description: "m2/g",
      },
      {
        description: "m2/s",
      },
      {
        description: "m3",
      },
      {
        description: "m³",
      },
      {
        description: "m3/d",
      },
      {
        description: "m3/h",
      },
      {
        description: "m3/m3",
      },
      {
        description: "m3/s",
      },
      {
        description: "mA",
      },
      {
        description: "MB/bbl",
      },
      {
        description: "MB/gal",
      },
      {
        description: "MB/kg",
      },
      {
        description: "MB/lb",
      },
      {
        description: "MB/Msc",
      },
      {
        description: "MB/scf",
      },
      {
        description: "MB/ton",
      },
      {
        description: "mbar",
      },
      {
        description: "meq O2/kg",
      },
      {
        description: "meq/g",
      },
      {
        description: "Meses",
      },
      {
        description: "mf",
      },
      {
        description: "mg",
      },
      {
        description: "mg KOH/g",
      },
      {
        description: "mg/100",
      },
      {
        description: "mg/100cm3",
      },
      {
        description: "mg/100cm³",
      },
      {
        description: "mg/cm2",
      },
      {
        description: "mg/dm2",
      },
      {
        description: "mg/g",
      },
      {
        description: "mg/GJ",
      },
      {
        description: "mg/kg",
      },
      {
        description: "mg/l",
      },
      {
        description: "mg/m3",
      },
      {
        description: "mg/t",
      },
      {
        description: "mg/tm3",
      },
      {
        description: "mgCaO/g",
      },
      {
        description: "mgKOH/g",
      },
      {
        description: "MHz",
      },
      {
        description: "mi/h",
      },
      {
        description: "mil",
      },
      {
        description: "mile",
      },
      {
        description: "milla",
      },
      {
        description: "Milla2",
      },
      {
        description: "min",
      },
      {
        description: "minutes",
      },
      {
        description: "MIU/g",
      },
      {
        description: "MJ",
      },
      {
        description: "MJ/kg",
      },
      {
        description: "MJ/m3",
      },
      {
        description: "ml",
      },
      {
        description: "ml/m3",
      },
      {
        description: "MLL",
      },
      {
        description: "mlpa",
      },
      {
        description: "mm",
      },
      {
        description: "mm/a",
      },
      {
        description: "mm/h",
      },
      {
        description: "mm/s",
      },
      {
        description: "mm2",
      },
      {
        description: "mm2/s",
      },
      {
        description: "mm3",
      },
      {
        description: "mmBtu",
      },
      {
        description: "mmH2O",
      },
      {
        description: "mmHg",
      },
      {
        description: "mMo/kg",
      },
      {
        description: "mmol",
      },
      {
        description: "mmol/g",
      },
      {
        description: "mMol/l",
      },
      {
        description: "MN",
      },
      {
        description: "mN/m",
      },
      {
        description: "mO2/kg",
      },
      {
        description: "MOhmio",
      },
      {
        description: "mol",
      },
      {
        description: "mol/kg",
      },
      {
        description: "Mol/l",
      },
      {
        description: "mol/m3",
      },
      {
        description: "months",
      },
      {
        description: "MPa",
      },
      {
        description: "mPa/s",
      },
      {
        description: "MPG EU",
      },
      {
        description: "Mppcf",
      },
      {
        description: "Mppcm",
      },
      {
        description: "ms",
      },
      {
        description: "mT",
      },
      {
        description: "MV",
      },
      {
        description: "MVA",
      },
      {
        description: "MW",
      },
      {
        description: "MW/h",
      },
      {
        description: "N",
      },
      {
        description: "N/5cm",
      },
      {
        description: "N/60mm",
      },
      {
        description: "N/cm²",
      },
      {
        description: "N/m",
      },
      {
        description: "N/mm2",
      },
      {
        description: "N/mm²",
      },
      {
        description: "N/pul",
      },
      {
        description: "nA",
      },
      {
        description: "nF",
      },
      {
        description: "ng/g",
      },
      {
        description: "ng/g|2",
      },
      {
        description: "ng/GJ",
      },
      {
        description: "ng/m3",
      },
      {
        description: "ng/t",
      },
      {
        description: "nm",
      },
      {
        description: "no",
      },
      {
        description: "ns",
      },
      {
        description: "NTU",
      },
      {
        description: "Ohcm",
      },
      {
        description: "Ohmio",
      },
      {
        description: "Ohmm",
      },
      {
        description: "oz",
      },
      {
        description: "ozl eu",
      },
      {
        description: "P",
      },
      {
        description: "Pa",
      },
      {
        description: "Pa.s",
      },
      {
        description: "PAC",
      },
      {
        description: "PAL",
      },
      {
        description: "Par",
      },
      {
        description: "pf",
      },
      {
        description: "pg/g",
      },
      {
        description: "pg/m3",
      },
      {
        description: "PI",
      },
      {
        description: "Pie",
      },
      {
        description: "Pie2",
      },
      {
        description: "Pie3",
      },
      {
        description: "Pot",
      },
      {
        description: "ppb",
      },
      {
        description: "ppb(m)",
      },
      {
        description: "ppb(V)",
      },
      {
        description: "ppcm3",
      },
      {
        description: "ppm",
      },
      {
        description: "ppm(m)",
      },
      {
        description: "ppm(V)",
      },
      {
        description: "ppt",
      },
      {
        description: "ppt(m)",
      },
      {
        description: "ppt(V)",
      },
      {
        description: "PQTPQT",
      },
      {
        description: "PRMU-U",
      },
      {
        description: "PRS",
      },
      {
        description: "PRUEBA",
      },
      {
        description: "ps",
      },
      {
        description: "psi",
      },
      {
        description: "pt eu",
      },
      {
        description: "PUL",
      },
      {
        description: "Pulg.2",
      },
      {
        description: "Pulg.3",
      },
      {
        description: "QQ",
      },
      {
        description: "qt (UK)",
      },
      {
        description: "qt (US)",
      },
      {
        description: "rol",
      },
      {
        description: "rpm",
      },
      {
        description: "RS",
      },
      {
        description: "rst",
      },
      {
        description: "s",
      },
      {
        description: "S/m",
      },
      {
        description: "SAC",
      },
      {
        description: "Scf",
      },
      {
        description: "scf/h",
      },
      {
        description: "scf/Mb",
      },
      {
        description: "scf/y",
      },
      {
        description: "scht",
      },
      {
        description: "seconds",
      },
      {
        description: "Semana",
      },
      {
        description: "shton",
      },
      {
        description: "t",
      },
      {
        description: "t/a",
      },
      {
        description: "t/año",
      },
      {
        description: "t/bbl",
      },
      {
        description: "t/Btu",
      },
      {
        description: "t/h",
      },
      {
        description: "t/ha",
      },
      {
        description: "t/Jul",
      },
      {
        description: "t/kt",
      },
      {
        description: "t/m3",
      },
      {
        description: "t/mes",
      },
      {
        description: "t/MMbb",
      },
      {
        description: "t/Mscf",
      },
      {
        description: "t/t",
      },
      {
        description: "t/TJ",
      },
      {
        description: "t/tm3",
      },
      {
        description: "t/ton",
      },
      {
        description: "Therm",
      },
      {
        description: "TMB",
      },
      {
        description: "to/ton",
      },
      {
        description: "ton",
      },
      {
        description: "ton./h",
      },
      {
        description: "ton./m",
      },
      {
        description: "ton/gl",
      },
      {
        description: "tonne",
      },
      {
        description: "UE/ml",
      },
      {
        description: "ufc/g",
      },
      {
        description: "ufc/ml",
      },
      {
        description: "UI/g",
      },
      {
        description: "uk",
      },
      {
        description: "UN",
      },
      {
        description: "UN/min",
      },
      {
        description: "UND",
      },
      {
        description: "Units",
      },
      {
        description: "Uno",
      },
      {
        description: "UP",
      },
      {
        description: "UP/g",
      },
      {
        description: "upml/g",
      },
      {
        description: "V",
      },
      {
        description: "VA",
      },
      {
        description: "val",
      },
      {
        description: "Vol %",
      },
      {
        description: "W",
      },
      {
        description: "W/mk",
      },
      {
        description: "weeks",
      },
      {
        description: "yd",
      },
      {
        description: "yd2",
      },
      {
        description: "yd3",
      },
      {
        description: "years",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("units", null, {});
  },
};

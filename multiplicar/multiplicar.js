// Requires
const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }

    let data = "";

    console.log("=====================".green);
    console.log(`tabla del ${base}`.green);
    console.log("=====================".green);

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`.bgCyan;
    }
    console.log(data);

    resolve(base);
  });
};

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`.red);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(
      `multiplicar/tablas/tabla-${base}-al-${limite}.txt`,
      data,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(`tabla-${base}-al-${limite}.txt`.green);
        }
      }
    );
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};

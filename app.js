const argv = require("./config/yargs").argv;
const colors = require("colors");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite)
      .then((base, limite) =>
        console.log(
          `Se lista la tabla con base: ${base}, hasta el ${argv.limite}`
        )
      )
      .catch((err) => console.log(err));
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo}`))
      .catch((err) => console.log(err));

    break;
  default:
    console.log("Undefined command");
}

// console.log(argv.base);

// let parametro = argv[2];
// base = parametro.split("=")[1];

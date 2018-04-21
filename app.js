// Paquetes
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

// Destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// Impotacion normal
// const multiplicar = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break
    case 'crear':
        console.log('Creado base');
        crearArchivo(argv.base)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e))
        break
    default:
        console.log('Comando no reconocido');
}


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(argv.base);
console.log(argv.limite);
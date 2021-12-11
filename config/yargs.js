const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Número base de la tabla de multiplicar'
    }).option('l',{
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    }).option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: true,
        describe: 'N° hasta donde se hace la multiplicación'
    }).check( (argv, options) => {
        if( isNaN(argv.b) ){
            throw 'La base tiene que ser un número';
        }
        return true;
    }).argv;

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log(base);

module.exports = argv;
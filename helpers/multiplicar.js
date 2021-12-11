const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, list = false, hasta = 10 ) => {

    try{

        let salida = '', consola = '';
        
        for(let i =0; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        
        if(list){
            console.log('===================='.green);
            console.log('Tabla del N°: '.green, colors.blue(base) );
            console.log('===================='.green);
        
            console.log(consola);
        }
    
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // });
    
        await fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    }catch(err){
        
        throw err;
    
    }
}

module.exports = {
    crearArchivo
};
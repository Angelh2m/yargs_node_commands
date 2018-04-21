const fs = require('fs');


let listarTabla = (base, limite) => {
    for (let i = 0; i < limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }
}


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un numero')
            return
        }

        let data = '';

        for (let i = 0; i < 10; i++) {
            data += `Base ${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                return reject(err);
            }

            resolve(`Tabla- ${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
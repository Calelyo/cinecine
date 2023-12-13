/** @type {import('next').NextConfig} */
const nextConfig = {
    // COMENTAR LA LINEA DE ABAJO (output:'export') PARA USAR EN MODO DEV, VA A SER MÁS CÓMODO
    output:'export',
    images: { 
        unoptimized: true, 
    },

    // exportPathMap: async function () {
    //     return {
    //       '/compra/1': { page: '/compra/[id_pelicula]', query: { id_pelicula: '1' } },
    //     };
    // },
}

module.exports = nextConfig

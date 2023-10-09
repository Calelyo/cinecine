'use client'
import styles from '../../estilos/compra/page.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { Funciones } from '../../datos/Funciones.js'
import imgCaja from '../../img/portadas/el_polo_sur_de_la_luna.png'
import { useEffect } from 'react'

const funciones = Funciones;

export default function Compra({ params }){
    const { id_pelicula } = params

    const [funcionesPelicula, setFuncionesPelicula] = useState([])

    function getPelicula(){
        const elegida = [];
        funciones.forEach((f)=>{
            if(f.id_pelicula == id_pelicula){
                elegida.push(f)
            }
        })
        setFuncionesPelicula(elegida)
    }

    useEffect(()=>{
        getPelicula()
    })

    // IMPORTAR LAS FUNCIONES Y COMPARAR CON ID DE PELICULA (o algo así)
    // IF EN EL RETURN PARA QUE SOLO PUEDA RESIVIR UN NUMERO DEL 0 AL 13 (ids de películas)
    
    return(
        // <div>{ id_pelicula }</div>
        <section className={styles.seccionCompra}>
            <div className={styles.cajaCompra}>
                <div className={styles.contenidoCaja}>
                    <div className={styles.infoFuncionCaja}>

                        <div className={styles.headerCompra}>
                            <div className={styles.titulo}>
                                El Polo Sur De La Luna
                            </div>

                            <div className={styles.preCompra}>
                                <div className={styles.informacionContenedor}>
                                    <div className={styles.diasContenedor}>
                                        <div className={styles.dias}>
                                            <span className={`${styles.diasIndividuales} ${styles.seleccionado}`}>Hoy</span>
                                            <div className={styles.horariosContenedor}>
                                                <div className={`${styles.horarios} ${styles.seleccionado}`}>
                                                    14:00
                                                </div>
                                                <div className={styles.horarios}>
                                                    19:00
                                                </div>
                                                <div className={styles.horarios}>
                                                    22:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.dias}>
                                            <span className={styles.diasIndividuales}>Mañana</span>
                                        </div>
                                        <div className={styles.dias}>
                                            <span className={styles.diasIndividuales}>Pasado</span>
                                        </div>
                                    </div>

                                    <div className={`${styles.detallesContenedor}`}>
                                        <div className={`${styles.detalles} ${styles.detalles3d}`}>
                                            3D
                                        </div>
                                        <div className={`${styles.detalles} ${styles.detallesSubtitulada} ${styles.seleccionado}`}>
                                            Subtitulada
                                        </div>
                                        <div className={`${styles.detalles} ${styles.detallesPEGI}`}>
                                            +13
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className={styles.footerCompra}>
                            <div className={styles.sinopsis}>
                                En un futuro no muy lejano, una misión espacial de última generación se embarca en un viaje audaz para establecer la primera base lunar en el polo sur de la Luna. Mientras la tripulación enfrenta peligros desconocidos, conflictos internos y el aislamiento en la superficie lunar, descubren secretos que podrían cambiar la comprensión de la humanidad sobre el cosmos.
                            </div>
                            <div className={styles.cantidadContenedor}>
                                Cantidad: 
                                <div className={styles.elegirCantidadContenedor}>
                                    <button className={`${styles.botonIzquierda} ${styles.botonCambiarCantidad}`}>
                                        
                                    </button>
                                    <div className={styles.cantidadNumero}>
                                        1
                                    </div>
                                    <button className={`${styles.botonDerecha} ${styles.botonCambiarCantidad}`}>
                                        
                                    </button>
                                </div>
                                <div className={styles.botonComprarContenedor}>
                                    <button className={styles.botonComprar}>¡Comprar!</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                            {/* <div className={styles.postCompra}></div> */}



                    <div className={styles.imagenCaja}>
                        <Image
                            src={imgCaja}
                            alt={'POLO SUR'}
                            className={styles.imagen}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
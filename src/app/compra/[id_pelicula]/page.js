'use client'
import styles from '../../estilos/compra/page.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { Funciones } from '../../datos/Funciones.js'
import imgCaja from '../../img/portadas/el_polo_sur_de_la_luna_portada.png'
import { useEffect } from 'react'
import Link from 'next/link'

const funciones = Funciones;

export default function Compra({ params }){
    const { id_pelicula } = params

    const [funcionesPelicula, setFuncionesPelicula] = useState(getPelicula())
    const [cantidadEntradas, setCantidadEntradas] = useState(1)
    const [diaElegido, setDiaElegido] = useState('')
    const [horaElegida, setHoraElegida] = useState('')
    const [subtitulada, setSubtitulada] = useState(false)
    const [tresD, setTresD] = useState(false)
    const [tieneSubtitulos, setTieneSubtitulos] = useState(false)
    const [tieneTresD, setTieneTresD] = useState(false)
    
    function puedeComprar(){
        return (diaElegido == '' || horaElegida == '')
    }

    function getPelicula(){
        const elegida = [];
        funciones.forEach((f)=>{
            if(f.id_pelicula == id_pelicula){
                elegida.push(f)
            }
        })
        // setFuncionesPelicula(elegida)
        return elegida
    }

    useEffect(()=>{
        const elegida = [];
        funciones.forEach((f)=>{
            if(f.id_pelicula == id_pelicula){
                elegida.push(f)
                setFuncionesPelicula(elegida)
                f.tresD && setTieneTresD(true)
                f.subtitulada && setTieneSubtitulos(true)
            }
        })
    },[])

    function cambiarCantidadEntradas(masMenos){
        if(cantidadEntradas < 10){
            if(masMenos == '+'){
                setCantidadEntradas(cantidadEntradas+1)
            }
        }
        if(cantidadEntradas > 1)
            if(masMenos == '-'){
                setCantidadEntradas(cantidadEntradas-1)
            }
        }

    function horarios(){
        return (<div className={styles.horariosContenedor}>
                    <div className={`${styles.horarios} ${horaElegida === '14' && styles.seleccionado}`} onClick={()=>setHoraElegida('14')}>
                        14:00
                    </div>
                    <div className={`${styles.horarios} ${horaElegida === '19' && styles.seleccionado}`} onClick={()=>setHoraElegida('19')}>
                        19:00
                    </div>
                    <div className={`${styles.horarios} ${horaElegida === '22' && styles.seleccionado}`} onClick={()=>setHoraElegida('22')}>
                        22:00
                    </div>
                </div>)
    }
    // IF EN EL RETURN PARA QUE SOLO PUEDA RESIVIR UN NUMERO DEL 0 AL 13 (ids de películas)
    
    return(
        // <div>{ id_pelicula }</div>
        <section className={styles.seccionCompra}>
            <div className={styles.cajaCompra}>
                <div className={styles.contenidoCaja}>
                    <div className={styles.infoFuncionCaja}>

                        <div className={styles.headerCompra}>
                            <div className={styles.titulo}>
                                {funcionesPelicula[0].nombre}
                            </div>

                            <div className={styles.preCompra}>
                                <div className={styles.informacionContenedor}>
                                    <div className={styles.diasContenedor}>
                                        <div className={styles.dias}>
                                            <span className={`${styles.diasIndividuales} ${diaElegido === 'hoy' && styles.seleccionado}`} onClick={()=>setDiaElegido('hoy')}>Hoy</span>
                                            { diaElegido === 'hoy' && horarios() }
                                        </div>
                                        <div className={styles.dias}>
                                            <span className={`${styles.diasIndividuales} ${diaElegido === 'mañana' && styles.seleccionado}`} onClick={()=>setDiaElegido('mañana')}>Mañana</span>
                                            { diaElegido === 'mañana' && horarios() }
                                        </div>
                                        <div className={styles.dias}>
                                            <span className={`${styles.diasIndividuales} ${diaElegido === 'pasado' && styles.seleccionado}`} onClick={()=>setDiaElegido('pasado')}>Pasado</span>
                                            { diaElegido === 'pasado' && horarios() }
                                        </div>
                                    </div>

                                    <div className={`${styles.detallesContenedor}`}>
                                        <div className={`${styles.detalles} ${styles.detalles3d} ${tresD && styles.seleccionado} ${!tieneTresD && styles.detallesInhabilitado}`} onClick={()=>setTresD(!tresD)}>
                                            3D
                                        </div>
                                        <div className={`${styles.detalles} ${styles.detallesSubtitulada} ${subtitulada && styles.seleccionado} ${!tieneSubtitulos && styles.detallesInhabilitado}`} onClick={()=>setSubtitulada(!subtitulada)}>
                                            Subtitulada
                                        </div>
                                        <div className={`${styles.detalles} ${styles.detallesPEGI}`}>
                                            {funcionesPelicula[0].PEGI != 'ATP' ? '+' : '' }{funcionesPelicula[0].PEGI}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className={styles.footerCompra}>
                            <div className={styles.sinopsis}>
                                {funcionesPelicula[0].sinopsis}
                            </div>
                            <div className={styles.cantidadContenedor}>
                                <div className={styles.contenedorBotonVolver}>
                                    <Link href={'/'} className={styles.botonVolver}>
                                        Volver
                                    </Link>
                                </div>
                                <div className={styles.elegirCantidadContenedor}>
                                    Cantidad: 
                                    <button className={`${styles.botonIzquierda} ${styles.botonCambiarCantidad}`} onClick={()=>cambiarCantidadEntradas('-')}>
                                        
                                    </button>
                                    <input className={styles.cantidadNumero} defaultValue={cantidadEntradas} readOnly>
                            
                                    </input>
                                    <button className={`${styles.botonDerecha} ${styles.botonCambiarCantidad}`} onClick={()=>cambiarCantidadEntradas('+')}>
                                        
                                    </button>
                                </div>
                                <div className={styles.botonComprarContenedor}>
                                    <button className={`${styles.botonComprar} ${puedeComprar() && styles.botonInhabilitado}`} disabled={puedeComprar()} onClick={()=>{console.log('Comprado')}}>¡Comprar!</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                            {/* <div className={styles.postCompra}></div> */}



                    <div className={styles.imagenCaja}>
                        <Image
                            src={funcionesPelicula[0].imagen}
                            // src={imgCaja}
                            alt={funcionesPelicula[0].nombre}
                            className={styles.imagen}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
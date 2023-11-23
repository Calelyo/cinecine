'use client'
import styles from '../../estilos/compra/page.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Funciones } from '../../datos/Funciones.js'
import { Peliculas } from '../../datos/Peliculas.js'
import Link from 'next/link'

const funciones = Funciones;
const peliculas = Peliculas;

export default function Compra({ params }){
    // const { id_pelicula } = params
    // const id_pelicula = params.id_pelicula.split('_')[0]
    const [id_pelicula, nombre, con3d, conSubtitulos] = params.id_pelicula.split('_')


    const [funcionesPelicula, setFuncionesPelicula] = useState(getPelicula())
    const [cantidadEntradas, setCantidadEntradas] = useState(1)
    const [diaElegido, setDiaElegido] = useState('hoy')
    const [horaElegida, setHoraElegida] = useState('')
    const [subtitulada, setSubtitulada] = useState(false)
    const [tresD, setTresD] = useState(false)
    const [tieneSubtitulos, setTieneSubtitulos] = useState(false)
    const [tieneTresD, setTieneTresD] = useState(false)
    
    const [confirmacion, setConfirmacion] = useState(false)
    const [compraConfirmada, setCompraConfirmada] = useState(false)

    const [fecha, setFecha] = useState({hoy: '', mañana: '', pasado: '', hora: ''})
    
    function puedeComprar(){
        return (diaElegido == '' || horaElegida == '')
    }

    function fechaHoraComprado(){
        // REVISAR
        const momento = new Date()

        const diaNumero = momento.getDay()
        // const diaTexto = momento.getDay()
        const mesTexto = momento.getMonth()
        const horaNumero = momento.getHours()

        return ` Para el ${diaNumero} del ${mesTexto} a las ${horaNumero}:00`
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

    function getHayFuncion(){
        const peli = [{hay_funcion: false}]
        peliculas.forEach((p)=>{
            if(p.id == id_pelicula){
                peli.unshift(p)
            }
        })
        return peli[0];
    }

    // INICIO
    useEffect(()=>{
        const elegida = [];
        funciones.forEach((f)=>{
            if(f.id_pelicula == id_pelicula){
                elegida.push(f)
                setFuncionesPelicula(elegida)
                f.tresD && setTieneTresD(true)
                f.subtitulada && setTieneSubtitulos(true)
            }
            
        // console.log(id_pelicula.split('_'))
        })

        con3d == 'con3d' && setTresD(true)
        conSubtitulos == 'consubtitulos' && setSubtitulada(true)

        const fecha = new Date()
        setFecha(fecha)
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

    function getFecha(fecha){
        const DIAS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
        const hoy = fecha.getDay() == 0 ? DIAS[0] : DIAS[fecha.getDay()-1]
        const mañana = DIAS[fecha.getDay()]
        const pasado = fecha.getDay() == 6 ? DIAS[0] : DIAS[fecha.getDay()+1]
        // const pasado = DIAS[fecha.getDay()+1]
        const hora = parseInt(fecha.getHours()+''+fecha.getMinutes())
        
        
        return {hoy: hoy, mañana: mañana, pasado: pasado, hora: hora}
    }

    function horarios(){
        const hoyEsHoy = diaElegido == 'hoy'
        const horaCatorce = {hora: 1400, inhabilitada: hoyEsHoy && getFecha(new Date()).hora >= 1400}
        const horaDiecinueve = {hora: 1900, inhabilitada: hoyEsHoy && getFecha(new Date()).hora >= 1900}
        const horaVeintidos = {hora: 2200, inhabilitada: hoyEsHoy && getFecha(new Date()).hora >= 2200}

        return (<div className={styles.horariosContenedor}>
                    <button className={`${styles.horarios} ${horaElegida === '14' && styles.seleccionado} ${horaCatorce.inhabilitada && styles.botonInhabilitado}`} onClick={()=>(!horaCatorce.inhabilitada && setHoraElegida('14'))}>
                        14:00
                    </button>
                    <button className={`${styles.horarios} ${horaElegida === '19' && styles.seleccionado} ${horaDiecinueve.inhabilitada && styles.botonInhabilitado}`} onClick={()=>(!horaDiecinueve.inhabilitada && setHoraElegida('19'))}>
                        19:00
                    </button>
                    <button className={`${styles.horarios} ${horaElegida === '22' && styles.seleccionado} ${horaVeintidos.inhabilitada && styles.botonInhabilitado}`} onClick={()=>(!horaVeintidos.inhabilitada && setHoraElegida('22'))}>
                        22:00
                    </button>
                </div>)
    }

    // IF EN EL RETURN PARA QUE SOLO PUEDA RESIVIR UN NUMERO DEL 0 AL 13 (ids de películas)
    
    return(
        // <div>{ id_pelicula }</div>
        <section className={styles.seccionCompra}>
            <div className={styles.cajaCompra}>
                {
                getHayFuncion().hay_funcion ?

                <div className={styles.contenidoCaja}>
                    <div className={styles.infoFuncionCaja}>

                        <div className={styles.headerCompra}>
                            <h2 className={styles.titulo}>
                                {funcionesPelicula[0].nombre}
                            </h2>

                            <div className={`${styles.preCompra} ${compraConfirmada && styles.preCompraDesactivada}`}>
                                <div className={styles.informacionContenedor}>
                                    <div className={styles.diasContenedor}>
                                        <div className={styles.dias}>
                                            <span className={`${styles.diasIndividuales} ${diaElegido === 'hoy' && styles.seleccionado}`} onClick={()=>setDiaElegido('hoy')}>
                                                Hoy
                                            </span>
                                            { diaElegido === 'hoy' && horarios() }
                                        </div>
                                        <div className={styles.dias}>
                                            <span className={`${styles.diasIndividuales} ${diaElegido === 'mañana' && styles.seleccionado}`} onClick={()=>setDiaElegido('mañana')}>
                                                {getFecha(new Date()).mañana}
                                            </span>
                                            { diaElegido === 'mañana' && horarios() }
                                        </div>
                                        <div className={styles.dias}>
                                            <span className={`${styles.diasIndividuales} ${diaElegido === 'pasado' && styles.seleccionado}`} onClick={()=>setDiaElegido('pasado')}>
                                                {getFecha(new Date()).pasado}
                                            </span>
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

                        <div className={`${styles.footerCompra} ${compraConfirmada && styles.footerCompraDesactivada}`}>
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
                                    <input className={styles.cantidadNumero} value={cantidadEntradas} readOnly>
                            
                                    </input>
                                    <button className={`${styles.botonDerecha} ${styles.botonCambiarCantidad}`} onClick={()=>cambiarCantidadEntradas('+')}>
                                        
                                    </button>
                                </div>
                                <div className={styles.botonComprarContenedor}>
                                    <button className={`${styles.botonComprar} ${puedeComprar() && styles.botonInhabilitado}`} disabled={puedeComprar()} onClick={()=>{setConfirmacion(true)}}>¡Comprar!</button>
                                </div>
                            </div>
                        
                        </div>

                            {compraConfirmada && 
                                <div className={styles.compraConfirmadaContenedor}>
                                    <div className={styles.compraConfirmadaContenido}>
                                        <div className={styles.compraConfirmadaTexto}>
                                            <h4>¡Felicidades!</h4>
                                            <p>
                                                Compraste <span>{cantidadEntradas}</span> entrada{cantidadEntradas > 1 && 's'} para <span>{funcionesPelicula[0].nombre}</span> en <span>{tresD?'3D':'2D'}</span> y <span>{subtitulada?'subtitulada':'en idioma original'}</span>.
                                                {/* {fechaHoraComprado()}    */}
                                            </p>
                                        </div>
                                        <div className={styles.compraConfirmadaboton}>
                                            <Link href={'/'} className={styles.compraConfirmadainicio}>
                                                Inicio
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                            {/* <div className={styles.postCompra}></div> */}


                    <div className={styles.imagenCaja}>
                        <Image
                            src={funcionesPelicula[0].imagen}
                            // src={imgCaja}
                            alt={funcionesPelicula[0].nombre}
                            className={styles.imagen}
                            priority={true}
                        />
                    </div>
                </div> 
                :
                <div className={styles.sinFuncion}>No hay función disponible</div>
                }

                {
                confirmacion && 
                <div className={styles.confirmaciónContenedor}>
                    <div className={styles.confirmaciónCaja}>
                        <p className={styles.mensajeConfirmacion}>
                            Estas a pundo de comprar {cantidadEntradas} entradas para {funcionesPelicula[0].nombre} en {tresD?'3D':'2D'} y {subtitulada?'subtitulada':'en idioma original'}.
                        </p>
                        <div className={styles.botonesConfirmacion}>
                            <button className={`${styles.botonesConfirmacionVolver} ${styles.botonConfirmacion}`} onClick={()=>{setConfirmacion(false)}}>Volver</button>
                            <button className={`${styles.botonesConfirmacionConfirmar} ${styles.botonConfirmacion}`} onClick={()=>{setCompraConfirmada(true);setConfirmacion(false)}}>¡Confirmar!</button>
                        </div>
                    </div>
                </div>
                }

            </div>
        </section>
    )
}
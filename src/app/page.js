'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { Funciones } from './datos/Funciones'
import Compra from './compra/[id_pelicula]/page'

import imgPortadaTemp from './img/portadas/el_polo_sur_de_la_luna_portada.png'
import imgPortadaTemp2 from './img/portadas/azul_portada.png'
import imgPortadaTemp3 from './img/portadas/lluvia_en_el_desierto_portada.png'
import Link from 'next/link'

const funciones = Funciones

export default function Home() {
  const [funcionesActuales, setFuncionesActuales] = useState(funciones)
  const [funcionesTodas, setFuncionesTodas] = useState(funciones)
  const [funcionesActualesSinBuscador, setFuncionesActualesSinBuscador] = useState(funciones)

  const [todoPublico, setTodoPublico] = useState(false)
  const [soloTresD, setSoloTresD] = useState(false)
  const [soloDosD, setSoloDosD] = useState(false)
  const [subtitulada, setSubtitulada] = useState(false)
  const [español, setEspañol] = useState(false)
  const [soloEstrenos, setSoloEstrenos] = useState(false)
  const [verTodas, setVerTodas] = useState(true)
  const [buscador, setBuscador] = useState('')

  const [configActual, setConfigActual] = useState('')

  function configIndividuales(){
    const nuevo = []

    funcionesTodas.forEach((f) => {
      if(todoPublico && !soloEstrenos){
        f.PEGI === 'ATP' ? nuevo.push(f) : ''
      }

      if(soloEstrenos && !todoPublico){
        f.estreno ? nuevo.push(f) : ''
      }

      if(todoPublico && soloEstrenos){
        f.PEGI === 'ATP' && f.estreno ? nuevo.push(f) : ''
      }

      if(!todoPublico && !soloEstrenos){
        nuevo.push(f)
      }

    })

    return nuevo
  }

  function getFunFiltradas(){
    const individuale = configIndividuales()
    const nuevo = []

    individuale.forEach((f) => {
      if(soloTresD && !soloDosD){
        if(subtitulada && !español){
          f.tresD && f.subtitulada ? nuevo.push(f) : ''
        } else if (!subtitulada && español){
          f.tresD && !f.subtitulada ? nuevo.push(f) : ''
        
        } else {          
          f.tresD ? nuevo.push(f) : ''
        }
      }

      if(soloDosD && !soloTresD){
        if(subtitulada && !español){
          !f.tresD && f.subtitulada ? nuevo.push(f) : ''
        } else if (!subtitulada && español) {
          !f.tresD && !f.subtitulada ? nuevo.push(f) : ''
        } else {
          !f.tresD ? nuevo.push(f) : ''
        }
      }

      if(!soloDosD && !soloTresD){
        if(subtitulada && !español){
          f.subtitulada ? nuevo.push(f) : ''
        }
        else if (!subtitulada && español){
          !f.subtitulada ? nuevo.push(f) : ''
        } else {
          nuevo.push(f)
        }
      }

      if(verTodas){
        nuevo.push(f)
      }

    })

    return nuevo
  }

  function filtrarConfig(config){
    config === 'todoPublico' && !todoPublico ? setTodoPublico(!todoPublico) : ''
    config === '3d' && !soloTresD ? (setSoloTresD(!soloTresD), setSoloDosD(false)) : ''
    config === '2d' && !soloDosD ? (setSoloDosD(!soloDosD), setSoloTresD(false)) : ''
    config === 'español' && !español ? (setEspañol(!español), setSubtitulada(false)) : ''
    config === 'subtitulada' && !subtitulada ? (setSubtitulada(!subtitulada), setEspañol(false)) : ''
    config === 'soloEstrenos' && !soloEstrenos ? setSoloEstrenos(!soloEstrenos) : ''
    if(config === 'verTodas'){
      setTodoPublico(false)
      setSoloTresD(false)
      setSoloDosD(false)
      setEspañol(false)
      setSubtitulada(false)
      setSoloEstrenos(false)
      setVerTodas(true)
    } else {
      setVerTodas(false)
    }
    limpiarBuscador()

    // setConfigActual(config)

    // return config
  }
  
  // FILTRAR
  useEffect(()=>{
    // const config = filtrarConfig(configActual)
    const funcionesFiltradas = []
    const tmp = getFunFiltradas()
    
    tmp.forEach((fun) => {
      if(!funcionesFiltradas.find((f)=>(f.id_pelicula === fun.id_pelicula))){
        funcionesFiltradas.push(fun)
      }
    })
    setFuncionesActuales(funcionesFiltradas)
    setFuncionesActualesSinBuscador(funcionesFiltradas)


  }, [todoPublico, soloTresD, soloDosD, español, subtitulada, soloEstrenos, verTodas])

  // INICIO
  useEffect(() => {
    const funcionesActualesInicio = [];

    funcionesActuales.forEach((funcion) => {
      // POCO OPTIMO
      if(!funcionesActualesInicio.find((f) => (f.id_pelicula === funcion.id_pelicula)) ) {
        funcionesActualesInicio.push(funcion)
      }
    })
    setFuncionesActuales(funcionesActualesInicio)

  }, []);

  //BUSCAR
  useEffect(()=>{
    const funcionesNuevas = []
    const buscadorLimpio = buscador.toLowerCase()

    funcionesActualesSinBuscador.forEach((fun) => {
      const nombreLimpio = fun.nombre.toLowerCase()
      if(nombreLimpio.includes(buscadorLimpio) && !funcionesNuevas.find((f)=>(f.id_pelicula === fun.id_pelicula))){
        funcionesNuevas.push(fun)
      }
    })
    
    setFuncionesActuales(funcionesNuevas)
    // console.log(buscador)
  }, [buscador])

  function limpiarBuscador(){
    document.getElementById('buscador').value = ''
  }


  return (
    <main className={styles.main}>
      <div className={styles.portada}>
        <div className={styles.cartelEstrenos}>
          Estrenos
        </div>
        <div className={styles.carrusel}>
          <div className={styles.contenedorImgIndividual}>
              <div className={styles.carruselCompra}>
                <div className={styles.comprarCarruselNombre}>
                  El Polo Sur De La Luna
                </div>
                <Link className={styles.comprarCarruselBoton} href={'/'}>
                  ¡Ver!
                </Link>
              </div>
              <Image
                  src={imgPortadaTemp}
                  alt='PORTADA'
                  className={styles.portadaImg}
                  priority={true}
                />
            </div>
            <div className={styles.contenedorImgIndividual}>
              <div className={styles.carruselCompra}>
                  <div className={styles.comprarCarruselNombre}>
                    Azul
                  </div>
                  <Link className={styles.comprarCarruselBoton} href={'/'}>
                    ¡Ver!
                  </Link>
                </div>
                <Image
                  src={imgPortadaTemp2}
                  alt='PORTADA'
                  className={styles.portadaImg}
                  priority={true}
                />
            </div>
            <div className={styles.contenedorImgIndividual}>
                <div className={styles.carruselCompra}>
                  <div className={styles.comprarCarruselNombre}>
                    Lluvia en el desierto
                  </div>
                  <Link className={styles.comprarCarruselBoton} href={'/'}>
                    ¡Ver!
                  </Link>
                </div>
              <Image
                    src={imgPortadaTemp3}
                    alt='PORTADA'
                    className={styles.portadaImg}
                    priority={true}
                  />
              </div>
        </div>
      </div>

      <div className={styles.configContenedor}>
        <div className={styles.config}>
          <div className={styles.botonesPEGI}>
            <button className={todoPublico ? `${styles.activado}`: ''} onClick={()=>filtrarConfig('todoPublico')}>Todo público</button>
            {/* <button>Todas</button> */}
          </div>
          <div className={styles.botonesDimensiones}>
            <button className={soloDosD ? `${styles.activado}`: ''} onClick={()=>filtrarConfig('2d')}>2D</button>
            <button className={soloTresD ? `${styles.activado}`: ''} onClick={()=>filtrarConfig('3d')}>3D</button>
          </div>
          <div className={styles.botonesIdioma}>
            <button className={español ? `${styles.activado}`: ''} onClick={()=>filtrarConfig('español')}>Español</button>
            <button className={subtitulada ? `${styles.activado}`: ''} onClick={()=>filtrarConfig('subtitulada')}>Subtítuladas</button>
          </div>
          <div className={styles.botonSoloEstrenos}>
            <button className={soloEstrenos ? `${styles.activado}`: ''} onClick={()=>filtrarConfig('soloEstrenos')}>Solo Estrenos</button>
          </div>
          <div className={styles.verTodas}>
            <button className={verTodas ? `${styles.activado}`: ''} onClick={()=>filtrarConfig('verTodas')}>Ver Todas</button>
          </div>
        </div>
      </div>

      <div className={styles.buscador}>
        <input className={styles.inputBuscador} id='buscador' placeholder='Buscar' role='search' onChange={ (e) => setBuscador(e.target.value) }/>
      </div>

      <div className={styles.funciones}>

      {funcionesActuales.map(({id, id_pelicula, poster, nombre}, i) => (
        poster != '' &&
        <div className={styles.posterContenido} key={id}>
          <div className={styles.posterIndividual}>

            {/* ¿CAMIAR ID POR nombre_url? */}
            
            <Link href={`/compra/${id_pelicula}`}>
                <Image src={poster}
                  alt={nombre}
                  className={styles.postImgTemp}
                />
              </Link>
          </div>
          <div className={styles.nombrePelicula}>
            {nombre}
          </div>
        </div>
      ))}

        {/* <div className={styles.posterContenido}>
            <div className={styles.posterIndividual}>
                <Image src={peliculasTemp[0].poster}
                  alt={peliculasTemp[0].nombre}
                  className={styles.postImgTemp}
                />
              <div className={styles.nombrePelicula}>
                {peliculasTemp[0].nombre}
              </div>
            </div>
        </div> */}

      </div>

      <footer className={styles.pie}>
        <div className={styles.pieWeb}>
          calelsprumont.web.app
        </div>
        <div className={styles.pieContacto}>
          LinedIn
        </div>
      </footer>
    </main>
  )
}

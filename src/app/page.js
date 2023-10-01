'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { Funciones } from './datos/Funciones'

import imgPortadaTemp from './img/portadas/el_polo_sur_de_la_luna.png'

const funciones = Funciones

export default function Home() {
  const [funcionesActuales, setFuncionesActuales] = useState(funciones)
  const [funcionesTodas, setFuncionesTodas] = useState(funciones)

  const [todoPublico, setTodoPublico] = useState(false)
  const [soloTresD, setSoloTresD] = useState(false)
  const [soloDosD, setSoloDosD] = useState(false)
  const [subtitulada, setSubtitulada] = useState(false)
  const [español, setEspañol] = useState(false)
  const [soloEstrenos, setSoloEstrenos] = useState(false)
  const [verTodas, setVerTodas] = useState(true)

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



  return (
    <main className={styles.main}>
      <div className={styles.portada}>
        <div className={styles.carrusel}>
        <Image
              src={imgPortadaTemp}
              alt='PORTADA'
              className={styles.portadaImg}
            />
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
        <input className={styles.inputBuscador} placeholder='Buscar' />
      </div>

      <div className={styles.funciones}>

      {funcionesActuales.map(({id, poster, nombre}, i) => (
        poster != '' &&
        <div className={styles.posterContenido} key={id}>
          <div className={styles.posterIndividual}>
              <Image src={poster}
                alt={nombre}
                className={styles.postImgTemp}
              />
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

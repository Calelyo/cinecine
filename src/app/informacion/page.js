'use client'
import styles from '../estilos/informacion/page.module.css'
import Footer from '../utilidad/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import htmlImg from '../img/herramientas/html.png'
import jsImg from '../img/herramientas/javascript.png'
import cssImg from '../img/herramientas/css.png'

import sdImg from '../img/herramientas/stableDiffusion.png'
import chatgptImg from '../img/herramientas/chatgpt.png'
import hojasCalculoImg from '../img/herramientas/hojasDeCalculo.png'

import colabImg from '../img/herramientas/googleColab.png'
import pythonImg from '../img/herramientas/python.png'
import figmaImg from '../img/herramientas/figma.png'
import reactImg from '../img/herramientas/react.png'

import historiaDeUsuario from '../img/capturas/historiaDeUsuario.png'
import mapaDeSitio1 from '../img/capturas/mapaDeSitio1.png'
import mapaDeSitio2 from '../img/capturas/mapaDeSitio2.png'

import chatgptChat from '../img/capturas/chatGPTchat.png'
import stableCodigo from '../img/capturas/stableDiffusionCodigo.png'
import hojasFunciones from '../img/capturas/HojasCalculoFunciones.png'
import hojasPeliculas from '../img/capturas/HojasCalculoPeliculas.png'
import colabPython from '../img/capturas/colabPython.png'

import figmaCaptura from '../img/capturas/figmaCaptura.png'
import reactCrearProyecto from '../img/capturas/reactCrearProyecto.png'
import reactCaptura from '../img/capturas/reactCaptura.png'
import firebaseCodigo from '../img/capturas/firebaseCodigo.png'
import firebaseLogo from '../img/herramientas/firebaseLogo.png'
import PantallaCarga from '../utilidad/PantallaCarga'


export default function Informacion(){
    const [zoomLogos, setZoomLogos] = useState(9);

    useEffect(()=>{
        if(zoomLogos >= 9){
            setTimeout(()=>
                setZoomLogos(0),
                5000)
        } else {
            setTimeout(()=>
            setZoomLogos(zoomLogos + 1), 
            150)
        }
    })
  
  return(
        <section className={styles.seccionInfo}>
            <div className={styles.contenedorInformacionToda}>
                <section className={styles.paginaUno}>
                    <div className={styles.contenedorPaginaUno}>
                        <h2 className={styles.historiaTitulo}>Historia del proyecto</h2>
                        <div className={styles.infoPaginaUno}>
                            <div className={`${styles.paginaUnoLineaUno} ${styles.paginaUnoLineas}`}>
                                <p className={`${styles.lineaUnoParrafo} ${styles.paginaUnoParrafo}`}>
                                    Cuándo fui al cine a ver Oppenheimer (Muy buena película, por cierto), quedé pensando en la idea del funcionamiento de la página para sacar la entrada. 
                                </p>
                                <div className={`${styles.lineaUnoImgs} ${styles.paginaUnoLineasImgs}`}>
                                    <Image src={htmlImg} alt='Logo HTML' title='HTML' className={`${styles.logoPagUnoimg} ${styles.logoHTML} ${zoomLogos === 0 && styles.zoomLogo}`} priority={true}/>
                                    <Image src={jsImg} alt='Logo JavaScript' title='JavaScript' className={`${styles.logoPagUnoimg} ${styles.logoJS} ${zoomLogos === 1 && styles.zoomLogo}`} priority={true}/>
                                    <Image src={cssImg} alt='Logo CSS' title='CSS' className={`${styles.logoPagUnoimg} ${styles.logoCSS} ${zoomLogos === 2 && styles.zoomLogo}`} priority={true}/>
                                </div>
                            </div>
                            <div className={`${styles.paginaUnoLineaDos} ${styles.paginaUnoLineas}`}>
                                <p className={`${styles.lineaDosParrafo} ${styles.paginaUnoParrafo}`}>
                                    Quise aprovechar para desarrollar la web, aplicando UX, desde los recorridos de hipotéticos usuarios hasta el lanzamiento a producción.
                                </p>
                                <div className={`${styles.lineaDosImgs} ${styles.paginaUnoLineasImgs}`}>
                                    <Image src={sdImg} alt='Logo Stable Diffusion' title='Stable Diffusion' className={`${styles.logoPagUnoimg} ${styles.logoSD} ${zoomLogos === 3 && styles.zoomLogo}`} priority={true}/>
                                    <Image src={chatgptImg} alt='Logo ChatGPT' title='ChatGPT' className={`${styles.logoPagUnoimg} ${styles.logoChatGPT} ${zoomLogos === 4 && styles.zoomLogo}`} priority={true}/>
                                    <Image src={hojasCalculoImg} alt='Logo Hojas de Calculo de Google' title='Hojas de Cálculo de Google' className={`${styles.logoPagUnoimg} ${styles.logoHojasCalculo} ${zoomLogos === 5 && styles.zoomLogo}`} priority={true}/>
                                </div>
                            </div>
                            <div className={`${styles.paginaUnoLineaTres} ${styles.paginaUnoLineas}`}>
                                <p className={`${styles.lineaTresParrafo} ${styles.paginaUnoParrafo}`}>
                                    Así que acá está un humilde sistema de compra de entradas, básico, aún le faltan algunas funcionalidades, sirve como MPV.
                                </p>
                                <div className={`${styles.lineaTresImgs} ${styles.paginaUnoLineasImgs}`}>
                                    {/* <Image src={colabImg} alt='Logo Google Colab' className={`${styles.logoPagUnoimg} ${styles.logoColab}`} priority={true}/> */}
                                    <Image src={pythonImg} alt='Logo Python' title='Python' className={`${styles.logoPagUnoimg} ${styles.logoPython} ${zoomLogos === 6 && styles.zoomLogo}`} priority={true}/>
                                    <Image src={figmaImg} alt='Logo Figma' title='Figma' className={`${styles.logoPagUnoimg} ${styles.logoFigma} ${zoomLogos === 7 && styles.zoomLogo}`} priority={true}/>
                                    <Image src={reactImg} alt='Logo React' title='ReactJS' className={`${styles.logoPagUnoimg} ${styles.logoReact} ${zoomLogos === 8 && styles.zoomLogo}`} priority={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.paginaDos}>
                    <div className={styles.contenedorPaginaDos}>
                        <div className={`${styles.paginaDosLineaUno} ${styles.paginaDosLineas}`}>
                            
                            <div className={`${styles.contenedorHistoriaDeUsuario} ${styles.paginaDosContenedoresImgs}`}>
                                <Image src={historiaDeUsuario} alt='Historia de usuario' title='Historia de usuario' className={`${styles.historiaDeUsuarioImg} ${styles.paginasDosImgs}`} priority={true}/>
                            </div>

                            <div className={styles.contenedorConector}>
                                <div className={`${styles.conector} ${styles.conectorUno}`}>
                                    <div className={styles.conectorPunto} />
                                    <div className={styles.conectorLinea} />
                                </div>
                            </div>

                            <div className={`${styles.historiaDeUsuarioInfo} ${styles.paginaDosInfos}`}>
                                <h4>Historia de usuario</h4>
                                <p>Para empezar, una pequeña historia de usuario para poder reconocer el MPV</p>
                            </div> 

                            {/* <div className={styles.pagDosLineaUnoColUno}></div>
                            <div className={styles.pagDosLineaUnoColDos}></div>
                            <div className={styles.pagDosLineaUnoColTres}></div> */}
                        </div>

                        <div className={`${styles.paginaDosLineaDos} ${styles.paginaDosLineas}`}>
                            <div className={`${styles.contenedorMapaDeSitio} ${styles.paginaDosContenedoresImgs}`}>
                                <Image src={mapaDeSitio1} alt='Mapa de Sitio' title='Mapa de Sitio' className={`${styles.mapaDeSitioImg} ${styles.paginasDosImgs}`} priority={true}/>
                            </div>

                            <div className={`${styles.contenedorConector}`}>
                                <div className={`${styles.conector} ${styles.conectorDos}`}>
                                    <div className={styles.conectorPunto} />
                                    <div className={styles.conectorLinea} />
                                </div>
                            </div>
                            
                            <div className={`${styles.mapaDeSitioUnoInfo} ${styles.paginaDosInfos}`}>
                                <h4>Mapa de sitio</h4>
                                <p>Un mapa básico, para poder reconocer las pantallas a diseñar</p>
                            </div> 
                        </div>

                        {/* ¿ACOMODAR LINEAS ACÁ? */}

                        <div className={`${styles.paginaDosLineaTres} ${styles.paginaDosLineas}`}>
                            <div className={`${styles.contenedorMapaDeSitioDos} ${styles.paginaDosContenedoresImgs}`}>
                                <Image src={mapaDeSitio2} alt='Mapa de Sitio Completo' title='Mapa de Sitio Completo' className={`${styles.mapaDeSitioImg} ${styles.paginasDosImgs}`} priority={true}/>
                            </div>

                            {/* ¿ACOMODAR LINEAS? */}
                            <div className={`${styles.contenedorConector}`}>
                                <div className={`${styles.conector} ${styles.conectorTres}`}>
                                    <div className={styles.conectorPunto} />
                                    <div className={styles.conectorLinea} />
                                </div>
                            </div>

                            <div className={`${styles.mapaDeSitioDosInfo} ${styles.paginaDosInfos}`}>
                                <p>Se complejiza un poco más para tener una mejor idea de qué encontrar en cada pantalla</p>
                            </div>                            
                        </div>
                    </div>
                </div>



                <div className={styles.paginaTres}>
                    <div className={styles.contenedorPaginaTres}>
                        <div className={`${styles.paginaTresLineaUno} ${styles.paginaTresLineas}`}>

                            <div className={`${styles.paginaTresBloqueUno} ${styles.paginaTresBloques}`}>
                                <div className={`${styles.conChatgptTitulos} ${styles.conHerramientaTitulos}`}>
                                    <h4 className={`${styles.conChatgptTitulo} ${styles.conHerramientaTitulo}`}>
                                        Sinopsis y carteles
                                    </h4>
                                    <h5 className={`${styles.conChatgptSubTitulo} ${styles.conHerramientaSubtitulo}`}>
                                        ChatGPT
                                    </h5>
                                </div>
                                <div className={`${styles.conChatgptImgs} ${styles.conHerramientaImgs}`}>
                                    <div className={`${styles.conChatgptContenedorImg} ${styles.conHerramientaContenedorImg}`}>
                                        <Image src={chatgptChat} className={`${styles.chatgptImg} ${styles.herramientaImg}`} alt='Conversación con ChatGPT' title='Conversación con ChatGPT' priority={true} />
                                    </div>
                                    <div className={`${styles.conChatgptContenedorLogo} ${styles.conHerramientaContenedorLogo}`}>
                                        <Image src={chatgptImg} className={`${styles.chatgptImgLogo} ${styles.herramientaImgLogo}`} alt='Logo ChatGPT' title='ChatGPT' priority={true} />
                                    </div>
                                </div>
                                <div className={`${styles.bloqueUnoChatParrafo} ${styles.bloqueParrafo}`}>
                                    <p>Las primeras ideas de las sinopsis salieron de ChatGPT para ahorrar tiempo</p>
                                </div>
                            </div>
                            
                        </div>

                        <div className={`${styles.paginaTresLineaDos} ${styles.paginaTresLineas} ${styles.paginaTresLineasIzquierda}`}>
                            <div className={`${styles.paginaTresBloqueDos} ${styles.paginaTresBloques}`}>
                                <div className={`${styles.conStableTitulos} ${styles.conHerramientaTitulos}`}>
                                    <h4 className={`${styles.conStableTitulos} ${styles.conHerramientaTitulo}`}>
                                        Carteles e imágenes
                                    </h4>
                                    <h5 className={`${styles.conStableTitulosTitulo} ${styles.conHerramientaSubtitulo}`}>
                                        Stable Diffusion
                                    </h5>
                                </div>
                                <div className={`${styles.conStableImgs} ${styles.conHerramientaImgs}`}>
                                    <div className={`${styles.conStableContenedorImg} ${styles.conHerramientaContenedorImg}`}>
                                        <Image src={stableCodigo} className={`${styles.stableImg} ${styles.herramientaImg}`} alt='Promp de Stable Diffusion' title='Promp de Stable Diffusion' priority={true} />
                                    </div>
                                    <div className={`${styles.conStableContenedorLogo} ${styles.conHerramientaContenedorLogo}`}>
                                        <Image src={sdImg} className={`${styles.stableImgLogo} ${styles.herramientaImgLogo}`} alt='Logo Stable Diffusion' title='Stable Diffusion' priority={true} />
                                    </div>
                                </div>
                                <div className={`${styles.bloqueDosStableParrafo} ${styles.bloqueParrafo}`}>
                                    <p>Stable Diffusion XL con su refiner fue especialmente útil a la hora de hacer las portadas e imágenes</p>
                                </div>
                            </div>

                            {/* <div className={styles.paginaTresBloqueDos}>
                                Carteles e imágenes
                            </div> */}
                        </div>

                        <div className={`${styles.paginaTresLineaTres} ${styles.paginaTresLineas}`}>

                            <div className={`${styles.paginaTresBloqueTres} ${styles.paginaTresBloques}`}>
                                <div className={`${styles.conCalculoUno} ${styles.conHerramientaTitulos}`}>
                                    <h4 className={`${styles.conCalculoUnoTitulos} ${styles.conHerramientaTitulo}`}>
                                        Datos de películas
                                    </h4>
                                    <h5 className={`${styles.conCalculoUnoTitulosTitulo} ${styles.conHerramientaSubtitulo}`}>
                                        Hojas de Cálculo de Google
                                    </h5>
                                </div>
                                <div className={`${styles.conCalculoUnoImgs} ${styles.conHerramientaImgs}`}>
                                    <div className={`${styles.conCalculoUnoContenedorImg} ${styles.conHerramientaContenedorImg}`}>
                                        <Image src={hojasPeliculas} className={`${styles.calculoUnoImg} ${styles.herramientaImg}`} alt='Hojas de Calculo películas' title='Hojas de Calculo películas' priority={true} />
                                    </div>
                                    <div className={`${styles.conCalculoUnoContenedorLogo} ${styles.conHerramientaContenedorLogo}`}>
                                        <Image src={hojasCalculoImg} className={`${styles.calculoUnoImgLogo} ${styles.herramientaImgLogo}`} alt='Hojas de Calculo películas' title='Hojas de Calculo películas' priority={true} />
                                    </div>
                                </div>
                                <div className={`${styles.bloqueTresCalculoUnoParrafo} ${styles.bloqueParrafo}`}>
                                    <p>Para tener todo bien organizado fue útil usar hojas de cálculo de Google</p>
                                </div>
                            </div>

                            {/* <div className={styles.paginaTresBloqueTres}>
                                Datos de películas
                            </div> */}
                        </div>

                        <div className={`${styles.paginaTresLineaCuatro} ${styles.paginaTresLineas} ${styles.paginaTresLineasIzquierda}`}>
                            <div className={`${styles.paginaTresBloqueCuatro} ${styles.paginaTresBloques}`}>
                                
                                <div className={`${styles.conCalculoDosImgs} ${styles.conHerramientaImgs}`}>
                                    <div className={`${styles.conCalculoDosContenedorImg} ${styles.conHerramientaContenedorImg}`}>
                                        <Image src={hojasFunciones} className={`${styles.calculoDosImg} ${styles.herramientaImg}`} alt='Hojas de Calculo funciones' title='Hojas de Calculo funciones' priority={true} />
                                    </div>
                                </div>
                                <div className={`${styles.bloqueCuatroCalculoDosParrafo} ${styles.bloqueParrafo}`}>
                                    <p>Además de la ventaja de exportar en CSV</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className={`${styles.paginaTresLineaCinco} ${styles.paginaTresLineas}`}>
                            <div className={`${styles.paginaTresBloqueCinco} ${styles.paginaTresBloques}`}>
                                <div className={`${styles.conColab} ${styles.conHerramientaTitulos}`}>
                                    <h4 className={`${styles.conColabTitulos} ${styles.conHerramientaTitulo}`}>
                                        De CSV a objetos JS
                                    </h4>
                                    <h5 className={`${styles.conColabTitulosTitulo} ${styles.conHerramientaSubtitulo}`}>
                                        Python y Google Colab
                                    </h5>
                                </div>
                                <div className={`${styles.conColabImgs} ${styles.conHerramientaImgs}`}>
                                    <div className={`${styles.conColabContenedorImg} ${styles.conHerramientaContenedorImg}`}>
                                        <Image src={colabPython} className={`${styles.colabImg} ${styles.herramientaImg}`} alt='Código Python en Google Colab' title='Código Python en Google Colab' priority={true} />
                                    </div>
                                    <div className={`${styles.conColabContenedorLogo} ${styles.conHerramientaContenedorLogo}`}>
                                        <Image src={colabImg} className={`${styles.colabImgLogo} ${styles.herramientaImgLogo}`} alt='Logo Google Colab' title='Logo Google Colab' priority={true} />
                                    </div>
                                    <div className={`${styles.conColabContenedorLogoPython} ${styles.conHerramientaContenedorLogo}`}>
                                        <Image src={pythonImg} className={`${styles.pythonImgLogo} ${styles.herramientaImgLogo}`} alt='Logo Python' title='Logo Python' priority={true} />
                                    </div>
                                </div>
                                <div className={`${styles.bloqueCincoColabParrafo} ${styles.bloqueParrafo}`}>
                                    <p>Un pequeño script de Python para transformar el CSV en objetos</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.paginaCuatro}>
                    <div className={styles.contenedorPaginaCuatro}>

                        <div className={`${styles.paginaCuatroLineaUno} ${styles.paginaCuatroLineas}`}>
                            <div className={`${styles.paginaCuatroBloqueUno} ${styles.paginaCuatroBloques}`}>
                                <div className={`${styles.paginaCuatroBloqueUnoTitulos} ${styles.paginaCuatroBloquesTitulos}`}>
                                    <h4>Diseño</h4>
                                    <h5>Figma</h5>
                                </div>
                                <div className={`${styles.paginaCuatroBloqueUnoInfo} ${styles.paginaCuatroBloquesInfo}`}>
                                    <div className={`${styles.bloqueUnoInfoContenedorImgs} ${styles.bloquesInfoContenedoresImgs}`}>
                                        <div className={`${styles.contenedorFigmaImg} ${styles.contenedoresImg}`}>
                                            <Image src={figmaCaptura} className={`${styles.capturaFigma} ${styles.capturas}`} alt='Figma' title='Figma' priority={true}/>
                                        </div>
                                        <div className={`${styles.contenedorFigmaLogoImg} ${styles.contenedoresLogosImg}`}>
                                            <Image src={figmaImg} className={`${styles.imgLogos}`} alt='Logo Figma' title='Logo Figma' priority={true}/>
                                        </div>
                                    </div>
                                    <div className={`${styles.paginaCuatroBloqueUnoParrafo} ${styles.paginaCuatroBloquesParrafos}`}>
                                        <p>Fase de diseño hecha en Figma, antes de empezar a programar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.paginaCuatroLineaDos} ${styles.paginaCuatroLineas}`}>
                            <div className={`${styles.paginaCuatroBloqueDos} ${styles.paginaCuatroBloques}`}>
                                <div className={`${styles.paginaCuatroBloqueDosTitulos} ${styles.paginaCuatroBloquesTitulos}`}>
                                    <h4>Desarrollo</h4>
                                    <h5>ReactJS</h5>
                                </div>
                                <div className={`${styles.paginaCuatroBloqueDosInfo} ${styles.paginaCuatroBloquesInfo}`}>
                                    <div className={`${styles.bloqueDosInfoContenedorImgs} ${styles.bloquesInfoContenedoresImgs}`}>
                                        <div className={`${styles.contenedorReactImg} ${styles.contenedoresImg}`}>
                                            {/* <Image src={reactCrearProyecto} className={`${styles.capturaReactProyecto} ${styles.capturas}`} alt='Crear proyecto en ReactJS' title='Crear proyecto en ReactJS' priority={true}/> */}
                                            <Image src={reactCaptura} className={`${styles.capturaReactProyecto} ${styles.capturas}`} alt='Captura código ReactJS' title='Captura código ReactJS' priority={true}/>
                                        </div>
                                        <div className={`${styles.contenedorReactLogoImg} ${styles.contenedoresLogosImg}`}>
                                            <Image src={reactImg} className={`${styles.imgLogos}`} alt='Logo React' title='Logo React' priority={true}/>
                                        </div>
                                    </div>
                                    <div className={`${styles.paginaCuatroBloqueDosParrafo} ${styles.paginaCuatroBloquesParrafos}`}>
                                        <p>ReactJS y Next, para el maquetado, estilo y programación</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.paginaCuatroLineaTres} ${styles.paginaCuatroLineas}`}>
                            <div className={`${styles.paginaCuatroBloqueTres} ${styles.paginaCuatroBloques}`}>
                                <div className={`${styles.paginaCuatroBloqueTresTitulos} ${styles.paginaCuatroBloquesTitulos}`}>
                                    <h4>Deploy</h4>
                                    <h5>Firebase</h5>
                                </div>
                                <div className={`${styles.paginaCuatroBloqueTresInfo} ${styles.paginaCuatroBloquesInfo}`}>
                                    <div className={`${styles.bloqueTresInfoContenedorImgs} ${styles.bloquesInfoContenedoresImgs}`}>
                                        <div className={`${styles.contenedorFirebaseImg} ${styles.contenedoresImg}`}>
                                            <Image src={firebaseCodigo} className={`${styles.capturaFirebaseProyecto} ${styles.capturas}`} alt='Firebase Logo' title='Firebase Logo' priority={true}/>
                                        </div>
                                        <div className={`${styles.paginaCuatroBloqueTresParrafo} ${styles.paginaCuatroBloquesParrafos}`}>
                                            <p>Y acá estamos</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className={`${styles.contenedorFirebaseLogoImg} ${styles.contenedoresLogosImg}`}>
                                        <Image src={firebaseLogo} className={`${styles.imgLogos}`} alt='Logo Firebase' title='Logo Firebase' priority={true}/>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.contenedorGracias}>
                    <p>¡Gracias!</p>
                </div>
            </div>

            <Footer />
        </section>
    )
    
}